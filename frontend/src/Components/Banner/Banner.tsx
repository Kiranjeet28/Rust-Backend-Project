import { SparklesCore } from "../../UI/Components/sparkles";
import { TextGenerateEffect } from "../../UI/Components/text-generate-effect";
import BannerImage from "../../../public/Banner.png"

export default function Banner(){
    const words = `Dive into a World of Stories at Our Bookstore!
`;
    return(
     
         <div className=" relative h-[57vh] w-full   flex flex-col items-center justify-center overflow-hidden rounded-md">
         <div className="w-full absolute inset-0 h-screen">
           <SparklesCore
             id="tsparticlesfullpage" 
             background={BannerImage}
             minSize={1.9}
             maxSize={2.9}
             particleDensity={100}
             className="w-full "
             particleColor="#D90166"
           />
         </div>
         <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
         <TextGenerateEffect words={words} />
         </h1>
       </div>
    )
} 