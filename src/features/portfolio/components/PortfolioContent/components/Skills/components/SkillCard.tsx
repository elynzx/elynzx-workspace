import { CheckFatIcon, StarIcon } from "@phosphor-icons/react";

interface SkillCardProps {
  name: string;
  details: string;
}

export const SkillCard = ({ name, details }: SkillCardProps) => {
  const toolsArray = details.split(", ");

  return (
    <div className="shadow-sm tracking-wider flex flex-col w-full p-4 rounded-xl bg-ui-inner/30 border border-ui-border hover:scale-[1.01] transition-all duration-200 group relative overflow-hidden text-left pointer-events-auto">
      <div className="flex justify-between items-center w-full mb-3 pl-1">
        <span className="text-sm font-black text-ui-text/90 group-hover:text-ui-accent transition-colors tracking-wider md:mb-2">
          {name}
        </span>
        <CheckFatIcon  
          size={12}
          weight="fill"
          className="text-ui-text/10 group-hover:text-ui-accent"
        />
      </div>

      <div className="w-full flex flex-wrap gap-1.5 pl-1">
        {toolsArray.map((tool) => (
          <span
            key={tool}
            className="text-[13px] text-ui-text/90 leading-relaxed text-justify bg-ui-glass/40 px-2.5 py-1 rounded-md flex items-center gap-1.5 hover:bg-ui-glass/80 transition-all duration-150"
          >
            <StarIcon
              size={8}
              weight="fill"
              className="text-ui-accent shrink-0"
            />
            {tool.trim()}
          </span>
        ))}
      </div>
    </div>
  );
};
