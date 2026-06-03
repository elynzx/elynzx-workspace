import { motion, useDragControls } from "motion/react";
import {
  PortfolioHeader,
  PortfolioSidebar,
  PortfolioContent,
} from "./components";
import { usePortfolio } from "./hooks/usePortfolio";

export const Portfolio = () => {
  const {
    isOpen,
    zIndex,
    isProjectsTab,
    activeTab,
    isMobile,
    onClose,
    onFocus,
    onTabChange,
  } = usePortfolio();

  const dragControls = useDragControls();

  if (!isOpen) return null;

  return (
    <motion.div
      onClick={onFocus}
      onPointerDown={onFocus}
      drag={!isMobile}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      whileDrag={{
        boxShadow: "0px 5px 50px rgba(20, 10, 40, 0.4)",
      }}
      className={`${zIndex}
        fixed flex flex-col overflow-hidden pointer-events-auto select-none bg-ui-glass/40 border border-ui-border ring-1 ring-ui-border backdrop-blur-3xl 
        h-[82%] w-[92%] max-w-full rounded-2xl md:w-[92%] md:max-w-7xl md:h-175
        md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-[52%] 
        transition-shadow duration-300
      `}
    >
      <PortfolioHeader
        onClose={onClose}
        dragControls={dragControls}
        isMobile={isMobile}
      />

      <div className="flex flex-1 min-h-0 w-full flex-col md:flex-row transition-colors duration-300">
        <PortfolioSidebar
          activeTab={activeTab}
          onTabChange={onTabChange}
          isProjectsTab={isProjectsTab}
        />
        <PortfolioContent activeTab={activeTab} />
      </div>
    </motion.div>
  );
};
