import logo  from "../../../assets/Logo.png"
export default function Logo(){
    return(
        <div className=" flex ">
          <img src={logo} alt=""
          className="h-[5vh]  m-2" /> 
          <h1 id="logoHeading" className="font-bold font-sansa text-pink-700 mt-[18px]">AK Store </h1> 
        </div>
    )
}