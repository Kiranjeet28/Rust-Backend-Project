use rocket::{http::Status,  serde::json::Json, State};
use serde::{Deserialize, Serialize};

use crate::{database::connect_to_db::MongoDB, models::request::add_card_request::AddCardRequest};
#[post("/add_card/<email>", format = "json", data = "<edit_model>")]
pub async fn add_card_request(
    email: &str,
    edit_model: Json<AddCardRequest>,
    state: &State<MongoDB>,
) -> Result<Json<SuccessResponse>, (Status, Json<ErrorResponse>)> {
    match state.add_card(email, edit_model).await {
        Ok(_) => Ok(Json(SuccessResponse { message: "Card added successfully".into() })),
        Err(_) => Err((Status::InternalServerError, Json(ErrorResponse::from("Failed to add card")))),
    }
}

#[derive(Debug, Deserialize, Serialize)]
pub struct SuccessResponse {
    message: String,
}


#[derive(Debug, Deserialize, Serialize)]
pub struct ErrorResponse {
    error: String,
}

impl From<&str> for ErrorResponse {
    fn from(error: &str) -> Self {
        ErrorResponse {
            error: error.to_string(),
        }
    }
}

impl From<mongodb::error::Error> for ErrorResponse {
    fn from(error: mongodb::error::Error) -> Self {
        ErrorResponse {
            error: error.to_string(),
        }
    }
}
