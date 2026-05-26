import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  StarIcon,
  SparkleIcon,
} from "@phosphor-icons/react";
import ProfilePhoto from "../../assets/ProfilePhoto/Profile_02.png";
import PaperClip from "../../assets/stickers/paperClip.png";

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
    { label: "Tech Stack", value: "React • Java • Python" },
    { label: "Execution", value: "Full SDLC Ownership", hideOnMobile: true },
    { label: "Objective", value: "Seeking Internship", isOnline: true },
  ],
};

export const IdCard = () => {
  return (
    <div className="absolute top-[20%] left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0 z-40 rotate-1 md:rotate-2 text-gray-600 bg-white w-[94%] max-w-85 md:max-w-lg py-4 md:py-6 px-4 md:px-6 rounded-2xl md:rounded-3xl shadow-[0_15px_40px_rgba(244,63,94,0.18)] border-2 border-pink-200 flex flex-col overflow-hidden pointer-events-auto cursor-grab active:cursor-grabbing select-none">
      <div className="flex flex-col items-center w-full gap-1.5 mb-2.5 md:mb-4">
        <div className="w-10 h-2 md:h-4 md:w-14 bg-pink-200/60 rounded-full border border-pink-300 shadow-inner" />

        <div className="text-pink-400 font-code flex justify-between items-center w-full uppercase font-bold text-[11px] tracking-widest py-2">
          <div className="flex items-center gap-1">
            <StarIcon
              size={10}
              weight="fill"
              className="text-pink-400 animate-spin"
            />
            <p>{idData.season}</p>
          </div>
          <div className="flex items-center gap-1 text-sky-400 bg-sky-50 px-1.5 py-0.5 rounded-md border border-sky-100">
            <span>{idData.greeting}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full gap-4 md:gap-6 items-stretch ">
        <div className="relative flex flex-col items-center shrink-0">
          <div className="w-30 md:w-45 h-full rounded-xl overflow-hidden bg-pink-200 border border-pink-100">
            <img
              src={idData.photo}
              alt="Profile Avatar"
              className="w-full h-full object-cover contrast-105 brightness-102"
            />
          </div>

          <div className="absolute -rotate-12 bottom-1.5 -right-1 bg-sky-400 text-white text-[11px] px-3 py-0.5 rounded-md font-black tracking-wider border border-white shadow-xs uppercase">
            English B2
          </div>

          <img
            src={PaperClip}
            alt=""
            className="absolute -top-3 -right-4 w-10 md:w-14 pointer-events-none drop-shadow-xs select-none"
          />
        </div>

        <div className="flex flex-col flex-1 text-left justify-between min-w-0 md:py-1">
          <div>
            <div className="flex items-center gap-1">
              <SparkleIcon
                size={12}
                weight="fill"
                className="text-pink-400 animate-bounce"
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
                <div className="flex items-center gap-1.5 mt-0.5 min-w-0">
                  <span className="font-title font-semibold text-[12px] md:text-[13px] tracking-tight truncate">
                    {info.value}
                  </span>
                  {info.isOnline && (
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 inline-block shrink-0 shadow-[0_0_4px_#f43f5e] animate-pulse" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full items-center justify-center gap-5 md:gap-8 mt-4">
            <a
              href={idData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-1 bg-gray-50 border border-pink-100 rounded-lg text-bgDeepBlack/40 hover:text-pink-300 transition-all"
            >
              <img src="" alt="" className="hidden" />
              <GithubLogoIcon size={22} weight="fill" />
            </a>
            <a
              href={idData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1 bg-gray-50 border border-sky-100 rounded-lg text-bgDeepBlack/40 hover:text-sky-400 transition-all"
            >
              <LinkedinLogoIcon size={22} weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
