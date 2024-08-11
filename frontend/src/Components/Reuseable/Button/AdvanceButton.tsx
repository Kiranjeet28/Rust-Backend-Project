import { BottomGradient } from "../../../UI/Components/BottomGradient";

export default function AdvanceButton({text,disabled}:{text:string,disabled: boolean}){
    return(
        <button
        className="bg-gradient-to-br relative group/btn from-pink-950 dark:to-pink-900 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--pink-800)_inset,0px_-1px_0px_0px_var(--pink-800)_inset] disabled:bg-gray-600"
        type="submit"
        disabled = {disabled}
      >
        {text} &rarr;
        <BottomGradient />
      </button>
    )
}