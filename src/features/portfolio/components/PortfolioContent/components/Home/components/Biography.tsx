import {
  SparkleIcon,
} from "@phosphor-icons/react";
import { ABOUT_DATA } from "../../../data/aboutData";

export const Biography = () => {
  const { bio, credentials } =
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
