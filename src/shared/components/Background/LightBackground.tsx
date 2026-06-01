import { useMobile } from "../../hooks/useMobile";

export const LightBackground = () => {
  const isMobile = useMobile();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#f1dfeb]">
      <div
        className="absolute top-[10%] left-[15%] w-[22vw] h-[22vw] rounded-full 
        bg-linear-to-br from-[#d4f0fc] via-[#bfe3f2] to-[#ffccd5]
        shadow-[inset_-15px_-15px_40px_rgba(255,255,255,0.7),10px_20px_40px_rgba(0,0,0,0.04)]
        opacity-85 blur-[2px] animate-pulse duration-[6s]"
      />

      <div
        className="absolute bottom-[-5%] left-[25%] w-[45vw] h-[35vw] rounded-[40%_60%_70%_30%/40%_50%_60%_50%]
        bg-linear-to-tr from-[#ffafcc] via-[#faedcd] to-[#bfe3f2]
        shadow-[inset_20px_20px_50px_rgba(255,255,255,0.6),0_30px_60px_rgba(235,190,215,0.3)]
        opacity-80 blur-xs animate-bounce duration-[12s] style={{ animationTimingFunction: 'ease-in-out' }}"
      />

      <div
        className="absolute top-[35%] right-[-10%] w-[35vw] h-[35vw] rounded-full 
        bg-linear-to-bl from-[#fff0f3] via-[#ffccd5] to-[#ffafcc]
        shadow-[inset_-25px_-25px_60px_rgba(190,120,150,0.2),inset_20px_20px_50px_rgba(255,255,255,0.8),-15px_25px_50px_rgba(0,0,0,0.05)]
        opacity-90 blur-[1px]"
      />

      <div
        className="absolute top-[-5%] left-[-8%] w-[30vw] h-[30vw] rounded-full border-[6vw] border-[#faedcd]/40
        shadow-[0_15px_40px_rgba(0,0,0,0.03),inset_0_0_20px_rgba(255,255,255,0.4)]
        blur-[6px]"
      />

      <div
        className="absolute bottom-[20%] left-[5%] w-[12vw] h-[12vw] rounded-full 
        bg-linear-to-tr from-[#a2d2ff] to-[#fff0f3]
        shadow-[inset_-10px_-10px_25px_rgba(0,0,0,0.05),inset_10px_10px_25px_rgba(255,255,255,0.8)]
        opacity-70 blur-[3px]"
      />

      {!isMobile && (
        <>
          <div className="absolute top-[12%] right-[15%] w-24 h-24 opacity-30 bg-[radial-linear(#ffffff_2px,transparent_2px)] bg-size-[12px_12px]" />
          <div className="absolute bottom-[15%] left-[10%] w-20 h-20 opacity-25 bg-[radial-linear(#ffccd5_2px,transparent_2px)] bg-size-[10px_10px]" />
        </>
      )}

      <div className="absolute inset-0 bg-linear-to-b from-white/15 via-transparent to-pink-300/10" />
    </div>
  );
};
