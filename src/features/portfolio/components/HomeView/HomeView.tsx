import { HeartIcon, SparkleIcon } from "@phosphor-icons/react";
import { TechDock } from "./components/Overview/components/TechDock";
import { HomeNavigation } from "./components/HomeNavigation";
import { HomeContent } from "./components/HomeContent";
import { Avatar } from "./components/Avatar/Avatar";

export type HomeSection = "overview" | "biography" | "education";

export const HomeView = () => {
  return (
    <div className="flex flex-col gap-8 w-full text-ui-text animate-in fade-in pb-6 transition-colors duration-300">
      <section className="w-full relative overflow-hidden flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-125 md:h-135 p-5 md:p-8 rounded-2xl bg-ui-glass/40 border border-ui-inner transition-all duration-300">
        <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center gap-2 w-full text-ui-text z-20">
          <HomeNavigation />
          <HomeContent />
        </div>

        <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center justify-center gap-6 relative w-full shrink-0 z-20 mt-4 lg:mt-0 min-h-105 md:max-h-110">
          <div className="relative w-full flex justify-center items-center">
            <Avatar />
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center gap-1.5 text-[12px] text-ui-text/70 tracking-widest select-none animate-pulse transition-colors duration-300">
        <HeartIcon size={13} />
        <p>&copy; {new Date().getFullYear()} Developed by @Elynzx.</p>
        <HeartIcon size={13} />
      </div>
    </div>
  );
};
