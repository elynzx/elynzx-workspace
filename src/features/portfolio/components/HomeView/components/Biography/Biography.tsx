import {
  IdentificationCardIcon,
  UsersIcon,
  BookmarkSimpleIcon,
  SparkleIcon,
} from "@phosphor-icons/react";
import { ABOUT_DATA } from "../../../../data/aboutData";

export const Biography = () => {
  const { bio, academicHighlight, volunteerWork, status, credentials } =
    ABOUT_DATA.about;

  return (
    <div className="flex flex-col gap-4 w-full px-3">
      <div className="flex justify-between items-center border-b border-white/10 pb-3">
        <div className="text-left">
          <h3 className="text-2xl font-black text-white tracking-tight">
            Biography Overview
          </h3>
          <p className="text-xs font-bold text-pink-300 tracking-wide mt-0.5 font-code uppercase">
            Engineering Mindset
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase font-code">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_#22c55e]" />{" "}
          Available
        </div>
      </div>

      <p className="text-sm md:text-base text-justify font-medium leading-relaxed text-white/90">
        {bio}
      </p>

      <div className="flex flex-col gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl shadow-inner mt-2 text-left">
        <div className="flex items-start gap-3 text-xs md:text-sm">
          <IdentificationCardIcon
            size={20}
            className="text-[#F69BC3] shrink-0 mt-0.5"
            weight="fill"
          />
          <p className="font-medium text-white/90">
            <span className="text-pink-300 font-extrabold">Academic Rank:</span>{" "}
            {academicHighlight}
          </p>
        </div>
        <div className="flex items-start gap-3 text-xs md:text-sm border-t border-dashed border-white/10 pt-2.5">
          <UsersIcon
            size={20}
            className="text-[#F69BC3] shrink-0 mt-0.5"
            weight="fill"
          />
          <p className="font-medium text-white/90">
            <span className="text-pink-300 font-extrabold">Community:</span>{" "}
            {volunteerWork}
          </p>
        </div>
        <div className="flex items-start gap-3 text-xs md:text-sm border-t border-dashed border-white/10 pt-2.5">
          <BookmarkSimpleIcon
            size={20}
            className="text-[#F69BC3] shrink-0 mt-0.5"
            weight="fill"
          />
          <p className="font-extrabold text-pink-300 tracking-wide animate-pulse">
            {status}
          </p>
        </div>
      </div>

      {credentials && credentials.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3 w-full justify-start select-none">
          {credentials.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-white/5 text-white/90 border border-white/10 px-3 py-1.5 rounded-full shadow-xs font-bold flex items-center gap-1.5 hover:bg-white/10 hover:border-pink-300/30 transition-all duration-150"
            >
              <SparkleIcon
                size={10}
                weight="fill"
                className="text-pink-300 animate-pulse"
              />
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
