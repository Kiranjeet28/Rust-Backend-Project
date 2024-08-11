import Logo from "../Reuseable/Logo/Logo";

export default function Footer(){
   
    return(
        <div className=" w-[100vw] bg-pink-50 flex flex-col justify-center items-center">
            <Logo/>
            <p className="text-pink-700 font-sans text-1xl p-2 ">My Dream Company is KA on the name of my Love </p>
        </div>
    )
}