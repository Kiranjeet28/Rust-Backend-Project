use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct AddCardRequest {
    pub card_items : Option<Vec<String>>
 }
