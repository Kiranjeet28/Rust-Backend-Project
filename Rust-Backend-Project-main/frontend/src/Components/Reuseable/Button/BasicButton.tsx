import { button } from "../../../types/Components";
export default function BasicButton({ text,disable,onClick,className }: button){
    return(
        <button className={`rounded-lg  p-2 bg-pink-800 hover:bg-pink-600 hover:animate-pulse  text-white ${className} m-2 disabled:bg-gray-600`}
        disabled={disable}
        onClick={onClick}>
            {text}
        </button>
    )
}