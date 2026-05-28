import { useContentScroll } from "../hooks/useContentScroll";
import { Overview } from "./Overview/Overview";
import { Biography } from "./Biography/Biography";
import { Education } from "./Education/Education";

export const HomeContent = () => {
  const { containerRef } = useContentScroll();

  return (
    <div
      ref={containerRef}
      className="flex-1 w-full max-h-113 overflow-y-auto scroll-smooth pr-6 pb-12 space-y-16 scrollbar-thin"
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
  );
};
