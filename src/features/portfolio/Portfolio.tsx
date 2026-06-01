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
        bg-linear-to-b from-transparent to-black/40 backdrop-blur-xl border-white/20
        w-[92%] max-w-full rounded-2xl border-2 md:absolute md:w-[92%] md:max-w-7xl md:h-175 md:bottom-auto md:right-auto transition-shadow duration-150
        ${isDragging ? "md:shadow-[0_55px_110px_rgba(20,10,40,0.4)] md:scale-[1.001]" : ""}
      `}
    >
      <PortfolioHeader
        onClose={onClose}
        onDragStart={handleMouseDown}
        onTouchStart={handleTouchStart}
        isDragging={isDragging}
      />

      <div className="flex flex-1 min-h-0 w-full flex-col md:flex-row bg-black/20">
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
