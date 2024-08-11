"use client";
import { LampContainer } from "../../UI/Components/lamp";

export function Lamp({text}:{text:any}) {
  return (
    <div className="w-[100%] h-[10%]">
    <LampContainer
    >
     <span        className="bg-gradient-to-br from-rose-400 to-rose-950 py-1 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-4xl"
      >
       {text}
        </span>
    </LampContainer>
    </div>

  );
}
