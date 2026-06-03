import { type CSSProperties } from "react";
import { useBackground } from "./hooks/useBackground";

export const LightBackground = () => {
  const { stars, isMobile } = useBackground({
    mobileCount: 35,
    desktopCount: 110,
    minSize: 2.5,
    maxSizeModifier: 2,
  });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#786ac7]">
      <div className="absolute top-[-5%] left-[-5%] w-[30vw] h-[30vw] rounded-full bg-[#5cbcf6] opacity-80 blur-[75px] mix-blend-screen animate-pulse duration-[8s]" />
      <div className="absolute top-[2%] left-[20%] w-[32vw] h-[32vw] rounded-full bg-[#ff9ebb] opacity-100 blur-[65px] mix-blend-screen animate-pulse duration-[6s]" />
      <div className="absolute top-[-5%] left-[45%] w-[28vw] h-[28vw] rounded-full bg-[#ff70a6] opacity-100 blur-[55px] mix-blend-screen" />
      <div className="absolute top-[5%] right-[15%] w-[30vw] h-[30vw] rounded-full bg-[#f4a1ff] opacity-95 blur-[70px] mix-blend-screen" />
      <div className="absolute top-[-5%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-[#ff85a1] opacity-100 blur-[75px] mix-blend-screen" />
      <div className="absolute top-[30%] left-[-5%] w-[22vw] h-[22vw] rounded-full bg-[#4ea8de] opacity-40 blur-[60px] mix-blend-screen" />
      <div className="absolute top-[20%] left-[15%] w-[32vw] h-[32vw] rounded-full bg-[#ff70b7] opacity-100 blur-[65px] mix-blend-screen animate-pulse duration-[7s]" />
      <div className="absolute top-[28%] left-[35%] w-[30vw] h-[30vw] rounded-full bg-[#ff8beb] opacity-35 blur-[75px] mix-blend-screen" />
      <div className="absolute top-[25%] right-[15%] w-[30vw] h-[30vw] rounded-full bg-[#ff69af] opacity-100 blur-[65px] mix-blend-screen" />
      <div className="absolute top-[35%] right-[-5%] w-[20vw] h-[20vw] rounded-full bg-[#c21658] opacity-85 blur-[60px] mix-blend-screen" />
      <div className="absolute bottom-[20%] left-[5%] w-[25vw] h-[25vw] rounded-full bg-[#ff54b2] opacity-100 blur-[55px] mix-blend-screen" />
      <div className="absolute bottom-[-8%] left-[-8%] w-[30vw] h-[30vw] rounded-full bg-[#b563ff] opacity-60 blur-[85px] mix-blend-screen" />
      <div className="absolute bottom-[5%] left-[25%] w-[25vw] h-[25vw] rounded-full bg-[#d8005a] opacity-[0.80] blur-[70px] mix-blend-screen" />
      <div className="absolute bottom-[5%] right-[20%] w-[32vw] h-[32vw] rounded-full bg-[#ff4ba5] opacity-100 blur-[70px] mix-blend-screen animate-pulse duration-[5s]" />
      <div className="absolute bottom-[-8%] right-[-8%] w-[30vw] h-[30vw] rounded-full bg-[#0077b6] opacity-75 blur-[75px] mix-blend-screen" />
      <div className="absolute bottom-[10%] right-[2%] w-[28vw] h-[28vw] rounded-full bg-[#ff85a1] opacity-100 blur-[60px] mix-blend-screen" />

      <div
        className="absolute top-[10%] left-[15%] w-[22vw] h-[22vw] rounded-full 
        bg-linear-to-br from-[#e5d4fc] via-[#f2bfef] to-[#ffccf4]
        shadow-[inset_-15px_-15px_40px_rgba(255,255,255,0.7),10px_20px_40px_rgba(0,0,0,0.04)]opacity-65 blur-[6px] animate-pulse duration-[6s]"
      />

      <div className="absolute top-[35%] right-[-10%] w-[35vw] h-[35vw] rounded-full 
        bg-linear-to-bl from-[#ffd0e6] via-[#ff9ecf] to-[#ac9dff]
        shadow-[inset_-25px_-25px_60px_rgba(190,120,150,0.2),inset_20px_20px_50px_rgba(255,255,255,0.8),-15px_25px_50px_rgba(0,0,0,0.05)]
        opacity-50 blur-[5px]" />

      <div className="absolute bottom-[20%] left-[5%] w-[12vw] h-[12vw] rounded-full 
        bg-linear-to-tr from-[#a2d2ff] to-[#fff0f3]
        shadow-[inset_-10px_-10px_25px_rgba(0,0,0,0.05),inset_10px_10px_25px_rgba(255,255,255,0.8)] opacity-50 blur-[6px]" />

      {!isMobile && (
        <>
          <div className="absolute top-[10%] right-[15%] w-24 h-24 opacity-40 bg-[radial-gradient(#ffffff_2.5px,transparent_2.5px)] bg-size-[14px_14px]" />
          <div className="absolute bottom-[15%] left-[10%] w-20 h-20 opacity-35 bg-[radial-gradient(#ff70a6_2px,transparent_2px)] bg-size-[12px_12px]" />
        </>
      )}

      {stars.map((star) => {
        const starStyle: CSSProperties = {
          top: star.top,
          left: star.left,
          width: star.size,
          height: star.size,
          animationDelay: star.delay,
          WebkitAnimationDelay: star.delay,
          ["--star-duration" as any]: star.duration,
          boxShadow: "0 0 5px 1.5px rgba(255, 255, 255, 0.6)",
        };
        return (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle filter drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]"
            style={starStyle}
          />
        );
      })}
    </div>
  );
};
