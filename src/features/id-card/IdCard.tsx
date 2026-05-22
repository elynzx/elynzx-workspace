import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  StarIcon,
  SparkleIcon,
} from "@phosphor-icons/react";
import ProfilePhoto from "../../assets/ProfilePhoto/Profile_02.png";
import PaperClip from "../../assets/stickers/paperClip.png";

const idData = {
  season: "TERM 08 | SYSTEMS ENG.",
  greeting: "STATUS : UNSTOPPABLE",
  role: "Software Engineer Intern",
  photo: ProfilePhoto,
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  details: [
    { label: "Student", value: "Evelyn Pascual" },
    { label: "Core Tech", value: "React • Java • Python" },
    { label: "capabilities", value: "End-to-End Dev" },
    { label: "Status", value: "Seeking Internship", isOnline: true },
  ],
};

export const IdCard = () => {
  return (
    <div className="absolute top-16 left-6 md:left-16 z-40 rotate-2 text-gray-600 bg-white to-gray-200 w-[90%] max-w-100 md:max-w-130 py-10 px-6 md:px-10 rounded-3xl shadow-[0_20px_50px_rgba(244,63,94,0.25)] border-2 border-pink-200 flex flex-col overflow-hidden pointer-events-auto cursor-grab active:cursor-grabbing select-none">

      <div className="flex flex-col items-center w-full gap-2 mb-3">
        <div className="w-12 h-3.5 bg-pink-200/60 rounded-full border border-pink-300 shadow-inner" />

        <div className="text-pink-300 font-code flex justify-between items-center w-full uppercase font-black text-[10px] tracking-widest">
          <div className="flex items-center gap-1">
            <StarIcon
              size={12}
              weight="fill"
              className="text-pink-300 animate-spin"
            />
            <p>{idData.season}</p>
          </div>
          <div className="flex items-center gap-1 text-sky-400 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200">
            <span>{idData.greeting}</span>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row w-full gap-6 md:gap-8 mt-2 md:mb-1">
        <div className="relative flex flex-col items-center shrink-0">
          <div className="w-32 h-48 md:w-48 md:h-full rounded-2xl overflow-hidden bg-pink-300 p-1 shadow-md">
            <img
              src={idData.photo}
              alt="Profile Avatar"
              className="w-full h-full object-cover rounded-xl contrast-110 brightness-105"
            />
          </div>

          <div className="absolute -rotate-12 bottom-1 -right-2 bg-sky-400 text-white text-[12px] px-4 py-1 rounded-lg font-black tracking-widest border-2 border-white shadow-lg uppercase">
            English B2
          </div>

          <img
            src={PaperClip}
            alt=""
            className="absolute -top-4 -right-5 w-16 pointer-events-none drop-shadow-md select-none"
          />
        </div>

        <div className="flex flex-col flex-1 text-left justify-between">
          <div>
            <div className="flex items-center gap-1">
              <SparkleIcon
                size={14}
                weight="fill"
                className="text-pink-300 animate-bounce"
              />
              <p className="text-pink-300 font-black tracking-tight text-[10px] md:text-[15px] uppercase font-code drop-shadow-xs">
                {idData.role}
              </p>
            </div>
            <div className="w-full h-0.5 bg-linear-to-r from-pink-200 via-sky-200 to-transparent mt-1 mb-3" />
          </div>

          <div className="py-2">
            {idData.details.map((info, idx) => (
              <div
                key={idx}
                className="flex flex-col border-b border-dashed border-pink-200 items-start mb-4"
              >
                <p className="text-pink-300 text-[10px] font-black tracking-wider uppercase">
                  {info.label}
                </p>
                <div className="flex items-center gap-3">
                  <span className="font-title  font-semibold text-[14px] tracking-tighter">
                    {info.value}
                  </span>
                  {info.isOnline && (
                    <span className="w-2 h-2 rounded-full bg-pink-400 inline-block shadow-[0_0_6px_#f43f5e] animate-pulse" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="flex gap-2">
              <a
                href={idData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 bg-gray-50 border border-pink-100 rounded-xl text-bgDeepBlack/50 hover:text-pink-300 hover:border-pink-300 transition-all shadow-xs"
              >
                <GithubLogoIcon size={22} weight="fill" />
              </a>
              <a
                href={idData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 bg-gray-50 border border-sky-100 rounded-xl text-bgDeepBlack/50 hover:text-sky-400 hover:border-sky-400 transition-all shadow-xs"
              >
                <LinkedinLogoIcon size={22} weight="fill" />
              </a>
            </div>

            <div className="flex flex-col items-end text-[12px] text-pink-300 text-right leading-none select-none font-black">
              <span>||||| | || |||| | |</span>
              <span className="text-[12px] mt-0.5 font-title text-sky-300">
                elynzx-2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
