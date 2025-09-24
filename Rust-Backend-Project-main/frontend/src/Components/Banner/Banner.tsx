import { SparklesCore } from "../../UI/Components/sparkles";
import { TextGenerateEffect } from "../../UI/Components/text-generate-effect";
import BannerImage from "../../../public/Banner.png";

export default function Banner() {
  const words = `Drive into a World of Stories at Our Bookstore!`;
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden rounded-xl min-h-[40vh] h-[50vh] md:h-[57vh] shadow-2xl">
      {/* Background Sparkles & Overlay */}
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background={BannerImage}
          minSize={1.5}
          maxSize={3.5}
          particleDensity={120}
          className="w-full h-full"
          particleColor="#D90166"
        />
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink/70 via-pink/40 to-transparent" />
      </div>
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-4">
        <h1 className="text-white font-extrabold text-center drop-shadow-lg
          text-2xl sm:text-4xl md:text-6xl lg:text-7xl
          tracking-tight leading-tight mb-4 animate-fade-in">
          <TextGenerateEffect words={words} />
        </h1>
     
  
      </div>
      {/* Responsive decorative shapes */}
      <div className="absolute left-0 bottom-0 w-32 h-32 bg-pink-500/30 rounded-full blur-2xl pointer-events-none hidden md:block" />
      <div className="absolute right-0 top-0 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl pointer-events-none hidden md:block" />
    </section>
  );
}
