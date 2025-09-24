"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-pink-900 opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      id="logoHeading"
      className={cn(
        // Responsive font sizes: text-2xl on mobile, text-4xl on md, text-5xl on lg
        "font-bold text-2xl md:text-4xl lg:text-5xl",
        className
      )}
    >
      <div className="mt-4">
        <div className="dark:text-white text-black text-lg md:text-2xl lg:text-3xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
