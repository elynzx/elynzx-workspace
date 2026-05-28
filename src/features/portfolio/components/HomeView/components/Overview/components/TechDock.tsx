import { FaReact, FaDocker } from "react-icons/fa";
import { SiTypescript, SiSpringboot, SiPython } from "react-icons/si";

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

const techStack: TechItem[] = [
  { name: "React 18", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Spring Boot 3", icon: <SiSpringboot /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Docker", icon: <FaDocker /> },
];

export const TechDock = () => {
  return (
    <div className="flex flex-row gap-4 md:gap-4 py-2.5 md:py-3 rounded-2xl relative transition-all duration-300 hover:border-white/60">
      {techStack.map((tech, idx) => (
        <div 
          key={idx} 
          className="relative group flex flex-col items-center overflow-visible"
        >

          <div 
            className="
              absolute top-full mt-4 z-30 whitespace-nowrap px-4 py-1 rounded-lg
              bg-black backdrop-blur-md border border-white/30 
              text-[10px] text-pink-300 font-code font-black tracking-widest uppercase 
              ring-1 ring-white/10
              opacity-0 pointer-events-none translate-y-1 transition-all duration-200
              group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
            "
          >
            {tech.name}
          </div>

          <div className="
            text-white/70 hover:text-pink-300 transition-all duration-300 
            hover:scale-125 filter hover:drop-shadow-[0_0_8px_rgba(244,63,94,0.5)] 
            text-xl relative z-10 cursor-pointer
          ">
            {tech.icon}
          </div>
        </div>
      ))}
    </div>
  );
};
