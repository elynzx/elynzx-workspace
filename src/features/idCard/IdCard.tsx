import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  StarIcon,
  SparkleIcon,
  DownloadSimpleIcon,
} from "@phosphor-icons/react";
import ProfilePhoto from "../../assets/ProfilePhoto/Profile_02.png";
import PaperClip from "../../assets/stickers/paperClip.png";
import { useDraggable } from "../../shared/hooks/useDraggable";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useWorkspaceStore } from "../../store/useWorkspaceStore";

const idData = {
  season: "TERM 08",
  greeting: "STATUS : AVAILABLE",
  role: "Software Eng. Student",
  photo: ProfilePhoto,
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  details: [
    { label: "Engineer", value: "Evelyn Pascual" },
    { label: "Tech Stack", value: "React • SpringBoot • Python" },
    { label: "Execution", value: "Full SDLC Ownership", hideOnMobile: true },
    { label: "Objective", value: "Seeking Internship", isOnline: true },
  ],
};

export const IdCard = () => {
  const isAppOpen = useWorkspaceStore((state) => state.isAppOpen);
  const activeApp = useWorkspaceStore((state) => state.activeApp);
  const focusApp = useWorkspaceStore((state) => state.focusApp);
  const zIndex = activeApp === "IdCard" ? "z-50" : "z-10";
  const initialX = window.innerWidth > 768 ? window.innerWidth * 0.64 : 40;
  const initialY = window.innerWidth > 768 ? window.innerHeight * 0.22 : 80;

  const { positionStyle, handleMouseDown, handleTouchStart, isDragging } =
    useDraggable({ x: initialX, y: initialY });

  if (!isAppOpen.IdCard) return null;
  
  return (
    <div
      onClick={() => focusApp("IdCard")}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style={window.innerWidth > 768 ? positionStyle : undefined}
      className={`${zIndex} cursor-crosshair absolute text-gray-600 bg-white w-[92%] sm:w-[70%] max-w-85 md:max-w-lg py-4 md:py-6 px-4 md:px-6 rounded-2xl md:rounded-3xl border-2 border-pink-200 flex flex-col overflow-hidden pointer-events-auto select-none transition-shadow duration-150 active:cursor-grabbing rotate-3 ${
        isDragging ? "shadow-[0_30px_70px_rgba(244,63,94,0.3)]" : ""
      }`}
    >
      <div className="flex flex-col items-center w-full gap-1.5 mb-2.5 md:mb-4">
        <div className="w-10 h-2 md:h-4 md:w-14 bg-[#9b6d8a] rounded-full border border-pink-300 shadow-inner" />
        <div className="text-pink-400 font-code flex justify-between items-center w-full uppercase font-bold text-[11px] tracking-widest py-2">
          <div className="flex items-center gap-1">
            <StarIcon
              size={10}
              weight="fill"
              className="text-pink-400 animate-spin"
            />
            <p>{idData.season}</p>
          </div>
          <div className="flex items-center gap-1 text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded-md border border-sky-100 font-bold animate-pulse">
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
              className="w-full h-full object-cover contrast-105 brightness-102"
            />
          </div>

          <img
            src={PaperClip}
            alt=""
            className="absolute -top-3 -right-4 w-10 md:w-17 pointer-events-none drop-shadow-md select-none animate-bounce"
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

          <div className="flex flex-col gap-1.5 md:gap-3 py-0.5">
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

          <div className="flex w-full items-center gap-3 mt-4">
            <a
              href="/Evelyn_Pascual_Resume.pdf"
              download="Evelyn_Pascual_Resume.pdf"
              className="flex-1 bg-pink-400/90 hover:bg-pink-400 text-white 
              font-black text-sm rounded-2xl py-3 flex items-center justify-center gap-1.5 cursor-pointer animate-pulse"
              onClick={(e) => e.stopPropagation()}
              title="Download Evelyn Pascual Resume PDF"
            >
              <DownloadSimpleIcon size={16} weight="bold" />
              <span>Resume</span>
            </a>
            <div className="flex justify-center items-center gap-2">
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
      </div>
    </div>
  );
};
