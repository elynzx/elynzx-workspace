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
    icon: <CompassIcon size={14} weight="bold" />,
    category: "methodology",
    title: "100% From-Scratch Owner",
    desc: "Blueprint planning & modular builds.",
  },
  {
    id: "02",
    theme: "sky",
    icon: <MedalIcon size={14} weight="bold" />,
    category: "academic",
    title: "Top 10% Class Rank",
    desc: "Systems Engineering student at UTP.",
  },
  {
    id: "03",
    theme: "pink",
    icon: <CodeIcon size={14} weight="bold" />,
    category: "community",
    title: "IEEE WIE Core Volunteer",
    desc: "Leading with empathy & teamwork.",
  },
  {
    id: "04",
    theme: "sky",
    icon: <GlobeHemisphereWestIcon size={14} weight="bold" />,
    category: "language",
    title: "English B2 Certified",
    desc: "Global workspace ready.",
  },
];

export const MetricGrid = () => {
  return (
    <div className="flex flex-col gap-3.5 w-full select-none">
      {METRICS_DATA.map((tile) => {
        const isPink = tile.theme === "pink";

        return (
          <div
            key={tile.id}
            className="w-full flex items-center justify-between pb-3 bg-transparent border-b border-dashed border-white/15 text-left group/tile transition-all duration-200 last:border-b-0 last:pb-0"
          >
            <div className="flex items-center gap-4 min-w-0 flex-1">
              <div
                className={`shrink-0 transition-all duration-300 group-hover/tile:scale-110 filter ${
                  isPink
                    ? "text-pink-300 group-hover/tile:drop-shadow-[0_0_6px_rgba(244,63,94,0.6)]"
                    : "text-sky-300 group-hover/tile:drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]"
                }`}
              >
                {tile.icon}
              </div>

              <div className="flex flex-col min-w-0 flex-1 gap-0.5">
                <span
                  className={`text-xs md:text-sm font-bold text-white transition-colors duration-200 tracking-wide truncate ${
                    isPink
                      ? "group-hover/tile:text-pink-200"
                      : "group-hover/tile:text-sky-200"
                  }`}
                >
                  {tile.title}
                </span>
                <p className="text-[11px] md:text-[12px] text-white/60 font-medium truncate">
                  {tile.desc}
                </p>
              </div>
            </div>

            <div
              className={`
                font-code text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-lg shrink-0 select-none
                bg-black/5 backdrop-blur-xs border border-white/20 shadow-xs transition-colors duration-200
                ${
                  isPink
                    ? "text-pink-300 group-hover/tile:bg-pink-500/20 group-hover/tile:border-pink-400/30"
                    : "text-sky-300 group-hover/tile:bg-sky-500/20 group-hover/tile:border-sky-400/30"
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
