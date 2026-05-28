import { CalendarBlankIcon } from "@phosphor-icons/react";
import { ABOUT_DATA } from "../../../../data/aboutData";

export const Education = () => (
  <div className="flex flex-col gap-6 animate-in fade-in duration-300 text-white pl-2 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-[2px] before:bg-linear-to-b before:from-pink-300 before:via-purple-300 before:to-transparent">
    {ABOUT_DATA.education.map((edu, i) => (
      <div key={i} className="relative pl-7 group text-left">
        <div className="absolute left-[3px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-pink-400 z-10 shadow-[0_0_8px_rgba(244,63,94,0.4)] group-hover:scale-125 transition-transform" />
        <div className="bg-white/[0.04] p-4.5 rounded-2xl border border-white/10 shadow-md hover:border-pink-300 transition-colors duration-200">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-2">
            <h4 className="font-black text-sm text-white tracking-wide">
              {edu.degree}
            </h4>
            <span className="self-start sm:self-auto flex items-center gap-1.5 text-[10px] bg-pink-400 text-white font-bold px-2.5 py-1 rounded-lg border border-white/20 shadow-sm tracking-wider select-none">
              <CalendarBlankIcon size={12} weight="bold" />
              {edu.period}
            </span>
          </div>
          <p className="text-xs text-pink-300 font-extrabold mb-2 uppercase tracking-wide">
            {edu.school}
          </p>
          <p className="text-xs text-white/80 leading-relaxed font-medium">
            {edu.description}
          </p>
        </div>
      </div>
    ))}
  </div>
);
