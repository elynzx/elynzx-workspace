import { CaretDownIcon, CircleIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { SkillCard } from "./SkillCard";

interface SkillCategoryProps {
  category: string;
  items: Array<{ name: string; details: string }>;
  defaultOpen?: boolean;
}

export const SkillCategory = ({
  category,
  items,
  defaultOpen = false,
}: SkillCategoryProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col w-full bg-ui-glass/30 border border-ui-inner rounded-2xl shadow-xs overflow-hidden transition-all duration-300 pointer-events-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full p-5 text-left focus:outline-none cursor-pointer transition-colors duration-200 ${
          isOpen
            ? "bg-ui-glass/40 border-b border-ui-border"
            : "hover:bg-ui-glass/40"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <CircleIcon
            size={8}
            weight="fill"
            className={`text-ui-accent ${isOpen ? "animate-pulse" : ""}`}
          />
          <h4 className="text-[11px] uppercase font-black tracking-widest text-ui-text/90 font-code">
            {category}
          </h4>
        </div>

        <CaretDownIcon
          size={16}
          weight="bold"
          className={`text-ui-text/40 transition-transform duration-300 ${
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
