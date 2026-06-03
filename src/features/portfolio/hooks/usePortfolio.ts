import { useState, useEffect } from "react";
import type { portfolioSection } from "../utils/portfolioSection";
import { useWorkspaceStore } from "../../../store/useWorkspaceStore";

export function usePortfolio() {
  const isAppOpen = useWorkspaceStore((state) => state.isAppOpen);
  const toggleApp = useWorkspaceStore((state) => state.toggleApp);
  const activeApp = useWorkspaceStore((state) => state.activeApp);
  const focusApp = useWorkspaceStore((state) => state.focusApp);

  const [activeTab, setActiveTab] = useState<portfolioSection>("home");
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isProjectsTab = activeTab === "projects";
  const zIndex = activeApp === "Portfolio" ? "z-50" : "z-10";

  return {
    isOpen: isAppOpen.Portfolio,
    zIndex,
    isProjectsTab,
    activeTab,
    isMobile,
    onClose: () => toggleApp("Portfolio"),
    onFocus: () => focusApp("Portfolio"),
    onTabChange: setActiveTab,
  };
}
