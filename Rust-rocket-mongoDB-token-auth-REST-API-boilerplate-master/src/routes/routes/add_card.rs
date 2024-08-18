use crate::constants::{
    LEN_FIRST_NAME, LEN_LAST_NAME, LEN_LOGIN, UNKNOWN, WEAK_LOGIN, WRONG_FIRST_NAME,
    WRONG_LAST_NAME, WRONG_MAIL, WRONG_REQUEST,
};
use rocket::serde::json::Json;
use rocket::State;
use mongodb::bson::oid::ObjectId;

use crate::database::connect_to_db::MongoDB;
use crate::helper::{parse_id_and_find_user_by_id, FindUserById};
use crate::models::request::patch_request::EditUserRequest;
use crate::routes::authorization::token::request_access_token::AuthorizedUser;
use crate::routes::routes::EditUserRequestError;
use crate::routes::validator_authorization::{valid_edit_model, ValidEditModelError};
use crate::{ErrorResponse, Status, UNAUTHORIZED};

//edit user data without id and password
#[patch("/user", data = "<option_edit_model>", format = "json")]
pub async fn edit_user(
    auth: AuthorizedUser,
    option_edit_model: Option<Json<EditUserRequest>>,
    database: &State<MongoDB>,
) -> Result<Status, (Status, Json<ErrorResponse>)> {
    match parse_id_and_find_user_by_id(database, auth.user_id).await {
        FindUserById::Ok(mut user) => match check_edit_data_user_request(option_edit_model) {
            EditUserRequestError::Ok(edit_model) => {
                // Check if email already exists in the database
                if let Some(existing_user) = database.find_user_by_mail(&edit_model.mail).await {
                    if existing_user._id != user._id {
                        return Err(WRONG_MAIL);
                    }
                }

                // Add item to card_items if it's not already present
                if let Some(item) = &edit_model.card_items{
                    if let Some(ref mut card_items) = user.card_items {
                        if !card_items.contains(item) {
                            card_items.push(item.clone());
                        }
                    } else {
                        user.card_items = Some(vec![item.clone()]);
                    }
                }

                match database.edit_user(edit_model, user).await {
                    Ok(_) => Ok(Status::Ok),
                    Err(_) => Err(UNKNOWN),
                }
            }
            EditUserRequestError::NoneEditModel => Err(WRONG_REQUEST),
            EditUserRequestError::BadMail => Err(WRONG_MAIL),
            EditUserRequestError::BadLogin => Err(WEAK_LOGIN),
            EditUserRequestError::BadFirstName => Err(WRONG_FIRST_NAME),
            EditUserRequestError::BadLastName => Err(WRONG_LAST_NAME),
        },
        FindUserById::NoneUser => Err(UNAUTHORIZED),
        FindUserById::BadId => Err(UNAUTHORIZED),
    }
}

fn check_edit_data_user_request(
    option_edit_model: Option<Json<EditUserRequest>>,
) -> EditUserRequestError {
    match option_edit_model {
        None => EditUserRequestError::NoneEditModel,
        Some(edit_model) => {
            match valid_edit_model(&edit_model, LEN_FIRST_NAME, LEN_LAST_NAME, LEN_LOGIN) {
                ValidEditModelError::Ok => EditUserRequestError::Ok(edit_model),
                ValidEditModelError::BadMail => EditUserRequestError::BadMail,
                ValidEditModelError::BadLogin => EditUserRequestError::BadLogin,
                ValidEditModelError::BadFirstName => EditUserRequestError::BadFirstName,
                ValidEditModelError::BadLastName => EditUserRequestError::BadLastName,
            }
        }
    }
}
