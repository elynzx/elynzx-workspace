import { CaretDownIcon, FolderSimpleStarIcon } from "@phosphor-icons/react";
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
    <div className="flex flex-col w-full border border-ui-border rounded-2xl shadow-sm overflow-hidden transition-all duration-300 pointer-events-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full p-5 text-left focus:outline-none cursor-pointer transition-colors duration-200 ${
          isOpen
            ? "bg-ui-inner"
            : "hover:bg-ui-inner"
        }`}
      >
        <div className="flex items-center justify-center gap-2.5 ">
          <FolderSimpleStarIcon 
            size={22}
            weight="fill"
            className={`text-ui-accent ${isOpen ? "animate-pulse" : ""}`}
          />
          <h4 className="text-[11px]  uppercase font-black tracking-widest text-ui-text/90 font-code">
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
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 items-start animate-in slide-in-from-top-3 fade-in duration-200 ">
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
