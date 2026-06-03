import { SparkleIcon } from "@phosphor-icons/react";

interface SkillCardProps {
  name: string;
  details: string;
}

export const SkillCard = ({ name, details }: SkillCardProps) => {
  const toolsArray = details.split(", ");

  return (
    <div className="tracking-wider flex flex-col w-full p-4 rounded-xl bg-ui-inner/80 border border-ui-border hover:border-pink-300/50  hover:scale-[1.01] hover:shadow-md transition-all duration-200 group relative overflow-hidden text-left pointer-events-auto">

      <div className="flex justify-between items-center w-full mb-3 pl-1">
        <span className="text-sm font-black text-ui-text/90 group-hover:text-ui-accent transition-colors tracking-wider">
          {name}
        </span>
        <SparkleIcon
          size={12}
          weight="fill"
          className="text-ui-text/10 group-hover:text-ui-accent group-hover:rotate-45 transition-all duration-300 transform"
        />
      </div>

      <div className="w-full flex flex-wrap gap-1.5 pl-1">
        {toolsArray.map((tool) => (
          <span
            key={tool}
            className="text-[13px] text-ui-text/90 leading-relaxed text-justify bg-ui-inner/30 border border-ui-border px-2.5 py-1 rounded-md shadow-2xs flex items-center gap-1 hover:bg-ui-glass/40 transition-all duration-150"
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
