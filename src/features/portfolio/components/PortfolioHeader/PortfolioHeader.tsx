import { FolderSimpleStarIcon, XIcon } from "@phosphor-icons/react";
import type { DragControls } from "motion/react";

interface PortfolioHeaderProps {
  onClose: () => void;
  dragControls: DragControls;
  isMobile: boolean;
}

export const PortfolioHeader = ({
  onClose,
  dragControls,
  isMobile,
}: PortfolioHeaderProps) => {
  return (
    <div
      onPointerDown={(e) => !isMobile && dragControls.start(e)}
      className={`w-full h-14 flex items-center justify-between px-6 bg-ui-glass/30 shrink-0 select-none transition-colors duration-300 border-b border-ui-border ${
        isMobile
          ? "cursor-default"
          : "cursor-crosshair active:cursor-grabbing"
      }`}
    >
      <div className="flex items-center gap-3 text-ui-text pointer-events-none">
        <span className="font-bold text-xs uppercase tracking-widest font-secondary opacity-90 flex items-center gap-3.5 text-ui-text">
          <FolderSimpleStarIcon
            size={22}
            weight="fill"
            className="animate-pulse text-ui-accent"
          />
          My Portfolio
        </span>
      </div>

      <button
        onClick={onClose}
        onPointerDown={(e) => e.stopPropagation()}
        className="w-7 h-7 rounded-md bg-ui-inner hover:bg-pink-400 border border-ui-inner flex items-center justify-center text-ui-text hover:text-white transition-all cursor-pointer shadow-xs focus:outline-none hover:scale-105 active:scale-95 z-10"
      >
        <XIcon size={14} weight="bold" />
      </button>
    </div>
  );
};
