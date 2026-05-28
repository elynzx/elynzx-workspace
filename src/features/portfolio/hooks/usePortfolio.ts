import { useState } from "react";
import type { portfolioSection } from "../utils/portfolioSection";
import { useWorkspaceStore } from "../../../store/useWorkspaceStore";
import { useDraggable } from "../../../shared/hooks/useDraggable";

export function usePortfolio() {
  const { isPortfolioOpen, togglePortfolio } = useWorkspaceStore();
  const { positionStyle, handleMouseDown, isDragging } = useDraggable();
  const [activeTab, setActiveTab] = useState<portfolioSection>("home");

  const isProjectsTab = activeTab === "projects";

  return {
    isOpen: isPortfolioOpen,
    isDragging,
    isProjectsTab,
    activeTab,
    positionStyle,
    handleMouseDown,
    onClose: togglePortfolio,
    onTabChange: setActiveTab,
  };
}
