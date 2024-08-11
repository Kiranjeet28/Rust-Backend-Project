import { useContext } from "react";
import { UserDataContext } from "../../../Context/UserDataProvider";


export default function Userdata(){
    const{ userData :data, isLoading}  = useContext(UserDataContext);
    return(
        <div className="text-rose-100 flex flex-col justify-center items-center cursor-pointer ml-2 md:mt-1">
            {isLoading && <img
            src="https://media.tenor.com/VoWtWqqhkvAAAAAj/beating-heart-gif-sticker.gif"
            alt="loading"
            />}
           
            <button className="px-2 py-2 rounded-full bg-pink-900 font-bold  tracking-widest uppercase transform hover:scale-90 hover:bg-pink-800 transition-colors duration-200">
            <p className="md:text-[16px] text-[10px] font-bold font-sans">{data.login}</p>
            <p className="font-mono md:text-[10px] text-[8px]  font-thin">{data.mail}</p>
</button>
        </div>
    )
}