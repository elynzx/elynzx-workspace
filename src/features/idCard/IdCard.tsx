import { StarIcon, SparkleIcon } from "@phosphor-icons/react";
import ProfilePhoto from "../../assets/ProfilePhoto/Id_photo.jpeg";
import PaperClip from "../../assets/stickers/paperClip.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useWorkspaceStore } from "../../store/useWorkspaceStore";
import { useEffect, useState } from "react";
import Bunny01 from "../../assets/stickers/bunny01.svg";
import Bunny02 from "../../assets/stickers/bunny02.svg";
import Stars from "../../assets/stickers/loading.png";
import MiniStar from "../../assets/stickers/mini_star.png";
import Happy from "../../assets/stickers/happy_icon.png";
import { motion } from "motion/react";

const idData = {
  season: "CYCLE 08",
  greeting: "STATUS : AVAILABLE",
  role: "Systems Eng. Student",
  photo: ProfilePhoto,
  socials: {
    github: "https://github.com/elynzx",
    linkedin: "https://www.linkedin.com/in/evelynpascualc/",
  },
  details: [
    { label: "Identity", value: "Evelyn Pascual" },
    { label: "Focus", value: "Full-Stack Development", hideOnMobile: false },
    { label: "Location", value: "Lima, Perú" },
    { label: "Next Step", value: "Seeking Internship", isOnline: true },
  ],
};

export const IdCard = () => {
  const isAppOpen = useWorkspaceStore((state) => state.isAppOpen);
  const activeApp = useWorkspaceStore((state) => state.activeApp);
  const focusApp = useWorkspaceStore((state) => state.focusApp);
  const zIndex = activeApp === "IdCard" ? "z-50" : "z-10";
  const [isFirstFrame, setIsFirstFrame] = useState(true);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const initialX = isMobile ? 15 : window.innerWidth * 0.64;
  const initialY = isMobile ? 185 : window.innerHeight * 0.15;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstFrame((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  if (!isAppOpen.IdCard) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ x: initialX, y: initialY }}
      whileDrag={{
        scale: 1.02,
        boxShadow: "0px 30px 70px rgba(244,63,94,0.3)",
      }}
      onPointerDown={() => focusApp("IdCard")}
      className={`${zIndex} cursor-crosshair absolute text-gray-600 bg-white w-[92%] sm:w-[70%] max-w-95 md:max-w-lg p-5 md:p-6 rounded-2xl md:rounded-3xl border-2 border-ui-border shadow-md flex flex-col pointer-events-auto select-none active:cursor-grabbing rotate-3`}
    >
      <div className="flex flex-col items-center w-full gap-1.5 mb-2.5 md:mb-4">
        <div className="w-10 h-2 md:h-4 md:w-14 bg-ui-card rounded-full border border-ui-border shadow-inner" />
        <div className="text-pink-400 font-code flex justify-between items-center w-full uppercase font-black text-[11px] tracking-widest py-2">
          <div className="flex items-center gap-2 md:text-sm ">
            <StarIcon
              size={10}
              weight="fill"
              className="text-pink-400 animate-spin"
            />
            <p>{idData.season}</p>
          </div>
          <div className="flex items-center gap-1 text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded-md border border-sky-100">
            <span>{idData.greeting}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full gap-4 md:gap-6 items-stretch">
        <div className="relative flex flex-col items-center shrink-0">
          <div className="w-30 md:w-42 h-full rounded-xl overflow-hidden bg-pink-200 border border-pink-100">
            <img
              src={idData.photo}
              alt="Profile Avatar"
              className="w-full h-full object-cover contrast-105 brightness-102 scale-x-[-1]"
            />
          </div>

          <img
            src={PaperClip}
            alt=""
            className="absolute -top-6 -right-4 md:-top-8 md:-right-8 w-14 md:w-20 pointer-events-none drop-shadow-md select-none jello-horizontal"
          />
          <img
            src={Stars}
            alt="Animated star"
            className="absolute -top-6 -right-4 md:top-55 md:-right-6 rotate-30 w-14 md:w-20 pointer-events-none drop-shadow-md select-none jello-horizontal"
          />
          <img
            src={Happy}
            alt="Animated star"
            className="absolute -top-6 -right-4 md:top-50 md:left-1 -rotate-30 w-14 md:w-18 pointer-events-none drop-shadow-lg select-none jello-horizontal"
          />
          <img
            src={MiniStar}
            alt="Animated star"
            className="absolute -top-6 -right-4 md:top-18 md:-left-0.5 -rotate-30 w-14 md:w-10 pointer-events-none drop-shadow-lg select-none jello-horizontal"
          />
        </div>

        <div className="flex flex-col flex-1 text-left justify-between min-w-0 md:py-1">
          <div>
            <div className="flex items-center gap-1">
              <SparkleIcon
                size={12}
                weight="fill"
                className="text-pink-400 animate-pulse"
              />
              <p className="text-pink-400 font-black tracking-tight text-[11px] md:text-[13px] uppercase font-code truncate">
                {idData.role}
              </p>
            </div>
            <div className="w-full h-0.5 bg-linear-to-r from-pink-200 via-sky-200 to-transparent mt-1 mb-1.5 md:mb-2" />
          </div>

          <div className="flex flex-col gap-1.5 md:gap-3 py-0.5 mt-2 md:mt-0">
            {idData.details.map((info, idx) => (
              <div
                key={idx}
                className={`flex flex-col border-b border-dashed border-pink-200 pb-0.5 items-start w-full ${
                  info.hideOnMobile ? "hidden md:flex" : "flex"
                }`}
              >
                <p className="text-pink-400 text-[10px] font-black tracking-wider uppercase leading-none">
                  {info.label}
                </p>
                <div className="flex font-semibold items-center font-secondary gap-1.5 mt-0.5 min-w-0">
                  <span className="text-sky-600 text-[12px] md:text-[14px] tracking-tight truncate">
                    {info.value}
                  </span>
                  {info.isOnline && (
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 inline-block shrink-0 shadow-[0_0_4px_#f43f5e] animate-pulse" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full items-center justify-end gap-4 mt-2.5 md:mt-5">
            <a
              href={idData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-50 border border-pink-100 rounded-xl text-gray-400 hover:text-pink-400 transition-all shadow-2xs"
            >
              <FaGithub className="text-lg md:text-xl" />
            </a>
            <a
              href={idData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-50 border border-sky-100 rounded-xl text-gray-400 hover:text-sky-400 transition-all shadow-2xs"
            >
              <FaLinkedin className="text-lg md:text-xl" />
            </a>
          </div>
        </div>
      </div>
      <img
        src={isFirstFrame ? Bunny01 : Bunny02}
        alt="Animated bunny"
        className="absolute w-30 h-auto -top-22 right-14 md:-top-20 md:w-30 md:right-25 md:h-auto z-50 pointer-events-none drop-shadow-sm"
      />
    </motion.div>
  );
};
