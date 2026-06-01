import { type CSSProperties } from "react";
import { useBackground } from "./hooks/useBackground";

export const DarkBackground = () => {
  const { stars, isMobile } = useBackground({
    mobileCount: 40,
    desktopCount: 180,
    minSize: 3,
    maxSizeModifier: 3,
  });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#030014]">
      <div className="absolute top-[-5%] left-[-5%] w-[25vw] h-[35vw] rounded-full bg-pink-100/25 blur-[100px] mix-blend-screen" />
      <div className="absolute top-[20%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-pink-400/12 blur-[100px] mix-blend-screen" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-rose-500/12 blur-[120px] mix-blend-screen" />
      <div className="absolute top-[45%] left-[5%] w-[28vw] h-[28vw] rounded-full bg-pink-300/10 blur-[90px] mix-blend-screen" />
      <div className="absolute bottom-[10%] left-[25%] w-[30vw] h-[30vw] rounded-full bg-rose-400/10 blur-[100px] mix-blend-screen" />
      <div className="absolute top-[-10%] right-[10%] w-[20vw] h-[20vw] rounded-full bg-pink-100/15 blur-[80px] mix-blend-screen" />

      {!isMobile && (
        <div className="absolute inset-[-10%] md:inset-[-20%] animate-galaxy opacity-15 md:opacity-25 blur-3xl md:blur-[100px] mix-blend-color-dodge" />
      )}

      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] before:absolute before:inset-0 before:bg-linear-to-tr before:from-transparent before:via-white/10 before:to-pink-400/30" />

      {stars.map((star) => {
        const starStyle: CSSProperties & { [key: string]: string | number } = {
          top: star.top,
          left: star.left,
          width: star.size,
          height: star.size,
          animationDelay: star.delay,
          "--star-duration": star.duration,
        };

        return (
          <div
            key={star.id}
            className="absolute rounded-full bg-white opacity-80 shadow-[0_0_8px_1px_rgba(255,255,255,0.6)] animate-twinkle"
            style={starStyle}
          />
        );
      })}
    </div>
  );
};
