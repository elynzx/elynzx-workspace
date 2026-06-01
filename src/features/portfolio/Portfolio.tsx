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
    isDragging,
    isProjectsTab,
    activeTab,
    positionStyle,
    handleMouseDown,
    handleTouchStart,
    onClose,
    onFocus,
    onTabChange,
  } = usePortfolio();

  if (!isOpen) return null;

  return (
    <div
      onClick={onFocus}
      style={window.innerWidth > 768 ? positionStyle : undefined}
      className={`${zIndex}
        fixed flex flex-col overflow-hidden pointer-events-auto select-none
        bg-ui-glass/40 border border-ui-border ring-1 ring-ui-border backdrop-blur-3xl
        w-[92%] max-w-full rounded-2xl  md:absolute md:w-[92%] md:max-w-7xl md:h-175 md:bottom-auto md:right-auto transition-all duration-300
        ${isDragging ? "md:shadow-[0_5px_50px_rgba(20,10,40,0.4)]" : ""}
      `}
    >
      <PortfolioHeader
        onClose={onClose}
        onDragStart={handleMouseDown}
        onTouchStart={handleTouchStart}
        isDragging={isDragging}
      />

      <div className="flex flex-1 min-h-0 w-full flex-col md:flex-row transition-colors duration-300">
        <PortfolioSidebar
          activeTab={activeTab}
          onTabChange={onTabChange}
          isProjectsTab={isProjectsTab}
        />
        <PortfolioContent activeTab={activeTab} />
      </div>
    </div>
  );
};
