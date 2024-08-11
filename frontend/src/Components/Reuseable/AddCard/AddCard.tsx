import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../../Context/UserDataProvider";
import { useNavigate } from "react-router-dom";
import red from "../../../assets/img32.png";
import axios from "axios";

export default function AddCard({ item }: { item: string }) {
  const { userData } = useContext(UserDataContext);
  const [addedCard, setAddCard] = useState(false);
  const [allowToAdd, setAllowToAdd] = useState(false); // Use a more descriptive name
  const navigate = useNavigate();

  console.log("items id is ")

  useEffect(() => {
    if (userData && userData.id) { 
      setAllowToAdd(true);
    }
  }, [userData]); 
  const DbAddCard = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/v1/add_card/${userData.mail}`,
        { add_card: [item] }, 
       
      );
      console.log("response", response);
      return response; // Return the response if successful
    } catch (error) {
      console.log(error);
      return null; 
    }
  };

  async function onClickCard() {
    if (allowToAdd) {
      const response = await DbAddCard();
      if (response && response.status === 200) { // Check for successful response
        setAddCard(true);
      }
    } else {
      navigate("/login");
    }
  }

  return (
    <>
      <div className=" " onClick={onClickCard}>
        {addedCard && allowToAdd ? (
          <div>
            <img
              src={red}
              alt=""
              className="w-[5vw] md:w-[3vw] h-[5vh] md:h-[8vh]"
            />
          </div>
        ) : (
          <div>
            <img
              src="https://png.pngtree.com/png-vector/20231230/ourmid/pngtree-3d-white-hearts-png-image_11390453.png"
              alt=""
              className="w-[25vw] md:w-[6vw] h-[8vh] bg-pink-800 shadow-2xl rounded-full"
            />
          </div>
        )}
      </div>
    </>
  );
}

