import { SKILLS_DATA } from "../../data/skillsData";
import { SkillCategory } from "./components/SkillCategory";


export const Skills = () => {
  return (
    <div className="flex flex-col gap-5 animate-in fade-in duration-300 w-full pb-8">
      {Object.entries(SKILLS_DATA).map(([category, items], index) => (
        <SkillCategory
          key={category}
          category={category}
          items={items}
          defaultOpen={index === 0}
        />
      ))}
    </div>
  );
};
