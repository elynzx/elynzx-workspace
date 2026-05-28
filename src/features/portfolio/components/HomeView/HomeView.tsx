import { SparkleIcon } from "@phosphor-icons/react";
import { TechDock } from "./components/Overview/components/TechDock";
import { HomeNavigation } from "./components/HomeNavigation";
import { HomeContent } from "./components/HomeContent";
import { Avatar } from "./components/Avatar/Avatar";

export type HomeSection = "overview" | "biography" | "education";

export const HomeView = () => {
  return (
    <div className="flex flex-col gap-8 w-full text-white animate-in fade-in duration-300 pb-6">
      <section className="w-full relative overflow-hidden flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-125 md:h-135 p-5 md:p-8 rounded-2xl bg-white/5 border border-white/10">
        <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center gap-2 w-full text-white z-20">
          <HomeNavigation />
          <HomeContent />
        </div>

        <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center justify-start gap-6 relative w-full shrink-0 z-20 mt-4 lg:mt-0 min-h-[420px] md:min-h-[500px]">
          <div className="relative w-full flex justify-center items-center h-80 md:h-96">
            <Avatar />
          </div>
          <TechDock />
        </div>
      </section>

      <div className="flex items-center justify-center gap-1.5 text-[12px] text-white/40 font-code tracking-widest uppercase select-none animate-pulse">
        <SparkleIcon size={10} />
        <p>&copy; {new Date().getFullYear()} Developed by @Elynzx.</p>
        <SparkleIcon size={10} />
      </div>
    </div>
  );
};
