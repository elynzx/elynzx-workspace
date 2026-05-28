import type { portfolioSection } from "../../utils/portfolioSection";
import { ContactView } from "../ContactView/contact-view";
import { SkillsView, ProjectsView, HomeView } from "../index";

interface PortfolioContentProps {
  activeTab: portfolioSection;
}

export const PortfolioContent = ({ activeTab }: PortfolioContentProps) => {
  return (
    <div className="flex-1 p-4 md:p-6 overflow-y-auto text-left min-w-0 scrollbar-thin [scrollbar-color:rgba(255,255,255,0.1)_transparent] bg-black/5 backdrop-blur-xl   ">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_50%,transparent_50%)] bg-[size:100%_4px] z-10 pointer-events-none" />

      <div className="mx-auto h-full max-w-none w-full px-1 md:px-12">
        {activeTab === "home" && <HomeView />}
        {activeTab === "skills" && <SkillsView />}
        {activeTab === "projects" && <ProjectsView />}
        {activeTab === "contact" && <ContactView />}
      </div>
    </div>
  );
};
