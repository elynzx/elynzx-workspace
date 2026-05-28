import { SparkleIcon } from "@phosphor-icons/react";

interface SkillCardProps {
  name: string;
  details: string;
}

export const SkillCard = ({ name, details }: SkillCardProps) => {
  const toolsArray = details.split(", ");

  return (
    <div className="flex flex-col w-full p-4 rounded-xl bg-white/20 border border-white/10 hover:border-pink-300/50 hover:bg-white/30 hover:scale-[1.01] hover:shadow-md transition-all duration-200 group relative overflow-hidden text-left pointer-events-auto">
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-transparent group-hover:bg-pink-400 transition-colors" />

      <div className="flex justify-between items-center w-full mb-3 pl-1">
        <span className="text-xs font-black text-white group-hover:text-pink-300 transition-colors tracking-wide">
          {name}
        </span>
        <SparkleIcon
          size={12}
          weight="fill"
          className="text-white/10 group-hover:text-pink-300 group-hover:rotate-45 transition-all duration-300 transform"
        />
      </div>

      <div className="w-full flex flex-wrap gap-1.5 pl-1">
        {toolsArray.map((tool) => (
          <span
            key={tool}
            className="text-[12px] font-bold bg-white/80 border border-white/10 px-2.5 py-1 rounded-md shadow-2xs flex items-center gap-1 hover:border-pink-300/40 hover:bg-white/20 transition-all duration-150"
          >
            <SparkleIcon
              size={8}
              weight="fill"
              className="text-pink-400 shrink-0"
            />
            {tool.trim()}
          </span>
        ))}
      </div>
    </div>
  );
};
