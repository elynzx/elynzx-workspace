import {
  CompassIcon,
  MedalIcon,
  CodeIcon,
  GlobeHemisphereWestIcon,
} from "@phosphor-icons/react";

interface MetricItem {
  id: string;
  theme: string;
  icon: React.ReactNode;
  category: string;
  title: string;
  desc: string;
}

const METRICS_DATA: MetricItem[] = [
  {
    id: "01",
    theme: "pink",
    icon: <CodeIcon size={17} weight="bold" />,
    category: "interests",
    title: "Full-Stack Development",
    desc: "Building with React, Spring Boot & Python.",
  },
  {
    id: "02",
    theme: "sky",
    icon: <MedalIcon size={17} weight="bold" />,
    category: "academic",
    title: "Top 10% Class Rank",
    desc: "Systems Eng. student at Technological University of Peru.",
  },
  {
    id: "03",
    theme: "pink",
    icon: <CompassIcon size={17} weight="bold" />,
    category: "community",
    title: "IEEE WIE Volunteer",
    desc: "Facilitating STEM school workshops for girls.",
  },
  {
    id: "04",
    theme: "sky",
    icon: <GlobeHemisphereWestIcon size={17} weight="bold" />,
    category: "language",
    title: "English B2 Certified",
    desc: "TOEIC Certified • Professional working proficiency.",
  },
];

export const MetricGrid = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-3.5 w-full select-none">
      {METRICS_DATA.map((tile) => {
        const isPink = tile.theme === "pink";

        return (
          <div
            key={tile.id}
            className="w-full flex flex-col-reverse md:flex-row md:items-center justify-between pb-5 md:pb-3 bg-transparent border-b border-dashed border-ui-border text-left group/tile transition-all duration-200 last:border-b-0 last:pb-0"
          >
            <div className="flex items-center gap-4 min-w-0 flex-1">
              <div
                className={`shrink-0 transition-all duration-300 group-hover/tile:scale-110 filter ${
                  isPink
                    ? "text-ui-accent group-hover/tile:drop-shadow-[0_0_6px_rgba(244,63,94,0.6)]"
                    : "text-ui-sky group-hover/tile:drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]"
                }`}
              >
                {tile.icon}
              </div>

              <div className="flex flex-col min-w-0 flex-1 gap-0.5">
                <span
                  className={`text-xs md:text-sm font-bold text-ui-text transition-colors duration-200 tracking-wide truncate ${
                    isPink
                      ? "group-hover/tile:text-ui-accent"
                      : "group-hover/tile:text-ui-sky"
                  }`}
                >
                  {tile.title}
                </span>
                <p className="text-[11px] md:text-[13px] text-ui-text/80 font-medium truncate">
                  {tile.desc}
                </p>
              </div>
            </div>

            <div
              className={`
                font-code text-[10px] font-black tracking-widest uppercase md:px-3.5 md:py-1.5 py-1 rounded-lg shrink-0 select-none ml-8 md:ml-0 md:bg-ui-glass/50 md:border border-ui-border shadow-xs transition-colors duration-200
                ${
                  isPink
                    ? "text-ui-accent group-hover/tile:bg-pink-500/20 group-hover/tile:border-pink-400/30"
                    : "text-ui-sky group-hover/tile:bg-sky-500/20 group-hover/tile:border-sky-400/30"
                }
              `}
            >
              {tile.category}
            </div>
          </div>
        );
      })}
    </div>
  );
};
