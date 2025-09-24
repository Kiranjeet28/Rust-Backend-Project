import { useContext } from "react";
import { UserDataContext } from "../../../Context/UserDataProvider";


export default function Userdata(){
    const{ userData :data, isLoading}  = useContext(UserDataContext);
    return(
        <div className="text-rose-100 flex flex-col justify-center items-center cursor-pointer ml-1 md:ml-2 mt-1 md:mt-1">
            {isLoading && (
                <img
                    src="https://media.tenor.com/VoWtWqqhkvAAAAAj/beating-heart-gif-sticker.gif"
                    alt="loading"
                    className="w-6 h-6 md:w-8 md:h-8 mb-1"
                />
            )}
            <button className="px-2 py-1 md:px-3 md:py-2 rounded-full bg-pink-900 font-bold tracking-widest uppercase transform hover:scale-95 hover:bg-pink-800 transition-colors duration-200 w-full max-w-xs">
                <p className="text-[10px] md:text-[16px] font-bold font-sans truncate">{data.login}</p>
                <p className="font-mono text-[8px] md:text-[10px] font-thin truncate">{data.mail}</p>
            </button>
        </div>
    )
}