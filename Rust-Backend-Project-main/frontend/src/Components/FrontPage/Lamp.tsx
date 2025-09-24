"use client";
import { LampContainer } from "../../UI/Components/lamp";

export function Lamp({ text }: { text: any }) {
  return (
    <div className="w-full h-auto px-2 py-2 md:px-4 md:py-4 flex items-center justify-center">
      <LampContainer>
        <span
          className="bg-gradient-to-br from-rose-400 to-rose-950 py-1 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent sm:text-2xl md:text-4xl"
        >
          {text}
        </span>
      </LampContainer>
    </div>
  );
}
