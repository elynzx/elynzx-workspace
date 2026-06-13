import { DownloadSimpleIcon } from "@phosphor-icons/react";
import { Navigation } from "./components/Navigation";
import { Avatar } from "./components/Avatar";
import { useHomeScroll } from "./hooks/useHomeScroll";
import { Overview } from "./components/Overview/Overview";
import { Biography } from "./components/Biography";
import { Education } from "./components/Education";

export type HomeSection = "overview" | "biography" | "education";

export const Home = () => {
  const { containerRef } = useHomeScroll();

  return (
    <div className="flex flex-col md:gap-7 w-full h-full text-ui-text animate-in fade-in transition-colors duration-300">
      <section className="w-full relative overflow-hidden p-5 md:py-6 md:px-12 rounded-2xl bg-ui-inner/40 transition-all duration-300">
        <div className="w-full h-full flex flex-col md:grid md:grid-cols-3 md:gap-12">
          <div className="flex flex-col md:col-span-2 items-center gap-2 md:gap-3 w-full text-ui-text z-20">
            <Navigation />
            <div
              ref={containerRef}
              className="flex-1 w-full max-h-125 overflow-y-auto scroll-smooth pr-4 md:pr-6 pb-10 md:pb-22 space-y-16 scrollbar-thin"
            >
              <div id="overview" data-section>
                <Overview />
              </div>
              <div id="biography" data-section>
                <Biography />
              </div>
              <div id="education" data-section>
                <Education />
              </div>
            </div>
          </div>

          <div className="hidden md:flex md:col-span-1 items-center justify-center w-full h-full pb-8">
            <Avatar />
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center ">
        <a
          href="/Evelyn_Pascual_Resume.pdf"
          download="Evelyn_Pascual_Resume.pdf"
          className="w-full  font-bold mt-4 md:mt-0 flex items-center justify-center gap-1.5  active:scale-98 hover:scale-[1.04] cursor-pointer md:hidden text-[10px] text-ui-text/70 tracking-widest uppercase select-none animate-pulse transition-colors duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <DownloadSimpleIcon size={16} weight="bold" />
          Download_Resume
        </a>
      </div>
    </div>
  );
};
