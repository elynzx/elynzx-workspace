import {
  IdentificationCardIcon,
  UsersIcon,
  BookmarkSimpleIcon,
  SparkleIcon,
} from "@phosphor-icons/react";
import { ABOUT_DATA } from "../../../data/aboutData";

export const Biography = () => {
  const { bio, academicHighlight, volunteerWork, status, credentials } =
    ABOUT_DATA.about;

  return (
    <div className="flex flex-col gap-4 w-full px-2 md:px-3">
      <div className="flex justify-between items-center border-b border-ui-inner pb-3">
        <div className="text-left">
          <h3 className="text-2xl font-black text-ui-text tracking-tight">
            Biography Overview
          </h3>
          <p className="text-xs font-bold text-ui-accent tracking-wide mt-0.5 font-code uppercase">
            Engineering Mindset
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-pink-500/20 border border-pink-500/20 text-ui-accent text-[10px] font-bold px-2.5 py-1 rounded-md uppercase font-code">
          <span className="w-1.5 h-1.5 rounded-full bg-ui-accent animate-pulse shadow-[0_0_6px_#22c55e]" />{" "}
          Available
        </div>
      </div>

      <p className="text-sm md:text-base text-justify font-medium leading-relaxed text-ui-text/90">
        {bio}
      </p>

      <div className="flex flex-col gap-3 bg-ui-inner border border-ui-inner p-4 rounded-lg md:rounded-2xl shadow-inner mt-2 text-left transition-colors duration-300">
        <div className="flex items-start gap-3 text-xs md:text-sm">
          <IdentificationCardIcon
            size={20}
            className="text-[#F69BC3] shrink-0 mt-0.5"
            weight="fill"
          />
          <p className="font-medium text-ui-text/90">
            <span className="text-ui-accent font-extrabold">
              Academic Rank:
            </span>{" "}
            {academicHighlight}
          </p>
        </div>
        <div className="flex items-start gap-3 text-xs md:text-sm border-t border-dashed border-ui-inner pt-2.5">
          <UsersIcon
            size={20}
            className="text-[#F69BC3] shrink-0 mt-0.5"
            weight="fill"
          />
          <p className="font-medium text-ui-text/90">
            <span className="text-ui-accent font-extrabold">Community:</span>{" "}
            {volunteerWork}
          </p>
        </div>
        <div className="flex items-start gap-3 text-xs md:text-sm border-t border-dashed border-ui-inner pt-2.5">
          <BookmarkSimpleIcon
            size={20}
            className="text-[#F69BC3] shrink-0 mt-0.5"
            weight="fill"
          />
          <p className="font-extrabold text-ui-accent tracking-wide animate-pulse">
            {status}
          </p>
        </div>
      </div>

      {credentials && credentials.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3 w-full justify-start select-none">
          {credentials.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-ui-inner text-ui-text/90 border border-ui-inner px-3 md:px-4 py-2 md:py-1.5 rounded-lg shadow-xs font-bold flex items-center gap-1.5 hover:bg-ui-inner/50 hover:border-pink-300/30 transition-all duration-150"
            >
              <SparkleIcon
                size={10}
                weight="fill"
                className="text-ui-accent animate-pulse"
              />
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
