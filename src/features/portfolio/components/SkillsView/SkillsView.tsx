import { useState } from "react";
import { CircleIcon, SparkleIcon, CaretDownIcon } from "@phosphor-icons/react";
import { SKILLS_DATA } from "../../data/skillsData";
import { SkillCard } from "./components/SkillCard";

interface SkillCategoryBlockProps {
  category: string;
  items: Array<{ name: string; details: string }>;
  defaultOpen?: boolean;
}

const SkillCategoryBlock = ({
  category,
  items,
  defaultOpen = false,
}: SkillCategoryBlockProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col w-full bg-white/10 border border-white/10 rounded-2xl shadow-xs overflow-hidden transition-all duration-300 pointer-events-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full p-5 text-left focus:outline-none cursor-pointer transition-colors duration-200 ${
          isOpen
            ? "bg-white/[0.05] border-b border-white/10"
            : "hover:bg-white/[0.05]"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <CircleIcon
            size={8}
            weight="fill"
            className={`text-accent ${isOpen ? "animate-pulse" : ""}`}
          />
          <h4 className="text-[11px] uppercase font-black tracking-widest text-accent font-code">
            {category}
          </h4>
        </div>

        <CaretDownIcon
          size={16}
          weight="bold"
          className={`text-white/40 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-accent" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 items-start animate-in slide-in-from-top-3 fade-in duration-200">
          {items.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              details={skill.details}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const SkillsView = () => {
  return (
    <div className="flex flex-col gap-5 animate-in fade-in duration-300 w-full">

      {Object.entries(SKILLS_DATA).map(([category, items], index) => (
        <SkillCategoryBlock
          key={category}
          category={category}
          items={items}
          defaultOpen={index === 0}
        />
      ))}
    </div>
  );
};
