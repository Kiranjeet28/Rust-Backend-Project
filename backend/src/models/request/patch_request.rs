use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct EditUserRequest {
    pub login: String,

    pub mail: String,

    pub first_name: String,
    pub last_name: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub card_items: Option<Vec<String>>,
}
