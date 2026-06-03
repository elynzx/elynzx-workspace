import type { portfolioSection } from "../../utils/portfolioSection";
import { Home, Projects, Skills, Contact } from "./components";

interface PortfolioContentProps {
  activeTab: portfolioSection;
}

export const PortfolioContent = ({ activeTab }: PortfolioContentProps) => {
  return (
    <div className="flex-1 p-4 h-full md:p-6 overflow-y-auto text-left min-w-0 scrollbar-thin [scrollbar-color:var(--ui-inner)_transparent] transition-colors duration-300">
      <div className="absolute inset-0 bg-[linear-gradient(var(--ui-text)_50%,transparent_50%)] bg-size-[100%_4px] opacity-2 md:opacity- z-10 pointer-events-none light:hidden" />

      <div className="mx-auto h-full max-w-none w-full px-1 md:px-12 z-20 relative">
        {activeTab === "home" && <Home />}
        {activeTab === "skills" && <Skills />}
        {activeTab === "projects" && <Projects />}
        {activeTab === "contact" && <Contact />}
      </div>
    </div>
  );
};
