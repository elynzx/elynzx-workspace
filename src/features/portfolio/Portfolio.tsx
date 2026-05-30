import { useState } from "react";
import {
  PortfolioHeader,
  PortfolioSidebar,
  PortfolioContent,
} from "./components";
import type { portfolioSection } from "./utils/portfolioSection";
import { useWorkspaceStore } from "../../store/useWorkspaceStore";
import { useDraggable } from "../../shared/hooks/useDraggable";

export const Portfolio = () => {
  const { isPortfolioOpen, togglePortfolio } = useWorkspaceStore();
  const { positionStyle, handleMouseDown, handleTouchStart, isDragging } =
    useDraggable();
  const [activeTab, setActiveTab] = useState<portfolioSection>("home");
  const activeApp = useWorkspaceStore((state) => state.activeApp);
  const focusApp = useWorkspaceStore((state) => state.focusApp);

  const zIndex = activeApp === "Portfolio" ? "z-50" : "z-10";

  if (!isPortfolioOpen) return null;
  const isProjectsTab = activeTab === "projects";

  return (
    <div
      onClick={() => focusApp("Portfolio")}
      style={window.innerWidth > 768 ? positionStyle : undefined}
      className={`${zIndex}
        fixed flex flex-col overflow-hidden pointer-events-auto select-none
        bg-linear-to-b from-transparent to-black/40 backdrop-blur-xl border-white/20
        w-[92%] max-w-full rounded-2xl border-2 md:absolute md:w-[92%] md:max-w-7xl md:h-175 md:bottom-auto md:right-auto transition-shadow duration-150
        ${isDragging ? "md:shadow-[0_55px_110px_rgba(20,10,40,0.4)] md:scale-[1.001]" : ""}
      `}
    >
      <PortfolioHeader
        onClose={togglePortfolio}
        onDragStart={handleMouseDown}
        onTouchStart={handleTouchStart}
        isDragging={isDragging}
      />

      <div className="flex flex-1 min-h-0 w-full flex-col md:flex-row bg-black/20">
        <PortfolioSidebar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isProjectsTab={isProjectsTab}
        />
        <PortfolioContent activeTab={activeTab} />
      </div>
    </div>
  );
};
