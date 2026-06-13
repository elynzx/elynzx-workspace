import { CalendarBlankIcon } from "@phosphor-icons/react";
import { ABOUT_DATA } from "../../../data/aboutData";

export const Education = () => (
  <div className="flex flex-col md:py-6 gap-6 animate-in fade-in text-ui-text md:pl-2 relative before:absolute before:left-2 md:before:left-4 before:top-20 md:before:top-26 before:bottom-3 before:w-0.5 before:bg-linear-to-b before:from-pink-300/50 before:via-pink-100 before:to-transparent transition-colors duration-300">
    <div className="flex justify-between items-center pb-1">
      <div className="text-left">
        <h3 className="text-2xl font-black text-ui-text tracking-tight">
          Education
        </h3>
      </div>
    </div>
    {ABOUT_DATA.education.map((edu, i) => (
      <div key={i} className="relative pl-7 group text-left">
        <div className="absolute left-0.75 top-1.5 w-3 h-3 rounded-full bg-white border-2 border-ui-accent z-10 shadow-[0_0_8px_rgba(244,63,94,0.4)] group-hover:scale-125 transition-transform" />
        <div className="pb-4 md:pb-8 border-dashed hover:border-ui-text/40 transition-colors duration-200 border-b border-ui-border">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-2">
            <h4 className="font-black text-sm text-ui-text tracking-wide">
              {edu.degree}
            </h4>
            <span className="self-start sm:self-auto flex items-center gap-2 text-[11px] bg-ui-glass/30 font-bold px-3 py-1.5 rounded-lg shadow-sm tracking-wider select-none">
              <CalendarBlankIcon size={12} weight="bold" />
              {edu.period}
            </span>
          </div>
          <p className="text-[13px] text-ui-accent font-extrabold mb-2 uppercase tracking-wide">
            {edu.school}
          </p>
          <p className="text-[14px] text-ui-text/90 leading-relaxed font-medium">
            {edu.description}
          </p>
        </div>
      </div>
    ))}
  </div>
);
