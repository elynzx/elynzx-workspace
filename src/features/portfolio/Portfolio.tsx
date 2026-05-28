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

  if (!isPortfolioOpen) return null;
  const isProjectsTab = activeTab === "projects";

  const desktopDragStyles = isDragging
    ? "md:shadow-[0_55px_110px_rgba(20,10,40,0.4)] md:scale-[1.001]"
    : "md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2";

  return (
    <div
      style={window.innerWidth > 768 && isDragging ? positionStyle : undefined}
      className={`
        fixed z-30 flex flex-col overflow-hidden pointer-events-auto select-none
        bg-linear-to-b from-transparent to-black/30 backdrop-blur-3xl border-white/20
        w-[92%] left-1/2 -translate-x-1/2 max-w-full
        top-16 bottom-24 rounded-2xl border-2 md:absolute md:w-[92%] md:max-w-7xl md:h-175 md:bottom-auto md:right-auto 
    ${isDragging ? "" : desktopDragStyles}
      `}
    >
      <PortfolioHeader
        onClose={togglePortfolio}
        onDragStart={handleMouseDown}
        onTouchStart={handleTouchStart}
        isDragging={isDragging}
      />

      <div className="flex flex-1 min-h-0 w-full flex-col md:flex-row bg-black/10">
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
