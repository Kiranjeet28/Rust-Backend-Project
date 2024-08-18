use serde::Serialize;

#[derive(Serialize)]
pub struct PublicDataForUser {
    pub id: String,
    pub login: String,
    pub mail: String,
    pub first_name: String,
    pub last_name: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub card_items: Option<Vec<String>>,
}
