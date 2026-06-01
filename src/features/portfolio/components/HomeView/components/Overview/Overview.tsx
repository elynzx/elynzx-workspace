import { ABOUT_DATA } from "../../../../data/aboutData";
import { TechDock } from "./components/TechDock";
import { MetricGrid } from "./components/MetricGrid";

export const Overview = () => {
  const { name, role, images } = ABOUT_DATA.about;

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col md:flex-row gap-4 w-full mt-4 mb-7 items-center justify-center">
        <img
          src={images.hi}
          alt="Profile illustration"
          className="w-14 md:w-35 filter drop-shadow-[0_8px_16px_rgba(244,63,94,0.15)] hover:scale-105 transition-all duration-300 cursor-pointer shrink-0"
        />
        <div className="flex flex-col items-center justify-center gap-1">
          <h1 className="text-3xl font-extrabold font-secondary tracking-tight leading-none m-0 text-ui-accent">
            I'm {name}
          </h1>
          <div className="flex items-center mt-1 text-ui-text text-[10px] md:text-xs font-black tracking-widest uppercase">
            {role}
          </div>
          <TechDock />
        </div>
      </div>
      <MetricGrid />
    </div>
  );
};
