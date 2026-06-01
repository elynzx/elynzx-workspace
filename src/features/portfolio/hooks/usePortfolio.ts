import { useState } from "react";
import type { portfolioSection } from "../utils/portfolioSection";
import { useWorkspaceStore } from "../../../store/useWorkspaceStore";
import { useDraggable } from "../../../shared/hooks/useDraggable";

export function usePortfolio() {
  const isAppOpen = useWorkspaceStore((state) => state.isAppOpen);
  const toggleApp = useWorkspaceStore((state) => state.toggleApp);
  const activeApp = useWorkspaceStore((state) => state.activeApp);
  const focusApp = useWorkspaceStore((state) => state.focusApp);

  const { positionStyle, handleMouseDown, handleTouchStart, isDragging } = useDraggable();

  const [activeTab, setActiveTab] = useState<portfolioSection>("home");

  const isProjectsTab = activeTab === "projects";
  const zIndex = activeApp === "Portfolio" ? "z-50" : "z-10";

  return {
    isOpen: isAppOpen.Portfolio,
    zIndex,
    isDragging,
    isProjectsTab,
    activeTab,
    positionStyle,
    handleMouseDown,
    handleTouchStart,
    onClose: () => toggleApp("Portfolio"),
    onFocus: () => focusApp("Portfolio"),
    onTabChange: setActiveTab,
  };
}
