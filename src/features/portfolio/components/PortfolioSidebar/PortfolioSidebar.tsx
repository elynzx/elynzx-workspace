import {
  HeartIcon,
  CodeIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from "@phosphor-icons/react";
import type { portfolioSection } from "../../utils/portfolioSection";

interface SidebarItem {
  id: portfolioSection;
  label: string;
  Icon: React.ElementType;
}

export const NAVIGATION: SidebarItem[] = [
  { id: "home", label: "Home", Icon: HeartIcon },
  { id: "skills", label: "Skills", Icon: CodeIcon },
  { id: "projects", label: "Projects", Icon: BriefcaseIcon },
  { id: "contact", label: "Contact", Icon: EnvelopeIcon },
];

interface PortfolioSidebarProps {
  activeTab: portfolioSection;
  onTabChange: (tabId: portfolioSection) => void;
  isProjectsTab: boolean;
}

export const PortfolioSidebar = ({
  activeTab,
  onTabChange,
  isProjectsTab,
}: PortfolioSidebarProps) => {
  const containerSizing = isProjectsTab ? "md:w-20" : "md:w-52";
  const headerVisibility = isProjectsTab
    ? "opacity-0 h-0 mb-0 pointer-events-none"
    : "opacity-100";

  return (
    <div
      className={`w-full border-b md:border-b-0 md:border-r border-white/20 p-3 md:p-4 grid grid-cols-4 md:flex md:flex-col gap-2 shrink-0 transition-all duration-300 ${containerSizing}`}
    >
      <div
        className={`hidden md:block text-[11px] text-ui-text  uppercase tracking-widest font-black px-2.5 mb-2 truncate transition-opacity duration-300 ${headerVisibility}`}
      >
        Navigation
      </div>

      {NAVIGATION.map(({ id, label, Icon }) => {
        const isTabActive = activeTab === id;
        const tabButtonStyles = isTabActive
          ? "bg-pink-400 text-ui-text border-white/20 shadow-md scale-[1.02]"
          : "bg-white/15 border-transparent text-ui-text/80 hover:bg-white/[0.15] hover:text-white hover:scale-[1.01]";

        return (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            title={label}
            className={`flex items-center justify-center p-3 rounded-xl text-xs font-bold capitalize transition-all duration-200 cursor-pointer shrink-0 border md:justify-start md:px-4 md:py-3 md:rounded-lg ${
              isProjectsTab
                ? "md:w-12 md:h-12 md:justify-center md:px-0 md:py-0"
                : "md:w-auto"
            } ${tabButtonStyles}`}
          >
            <div className="shrink-0 flex items-center justify-center">
              <Icon size={20} weight={isTabActive ? "fill" : "bold"} />
            </div>

            <span className="hidden md:block ml-2 animate-in fade-in duration-150 truncate text-left">
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
