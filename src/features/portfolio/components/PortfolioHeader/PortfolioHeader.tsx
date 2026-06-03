import { SparkleIcon, XIcon } from "@phosphor-icons/react";

interface PortfolioHeaderProps {
  onClose: () => void;
  onDragStart: (e: React.MouseEvent) => void;
  onTouchStart: (e: React.TouchEvent) => void;
  isDragging: boolean;
}

export const PortfolioHeader = ({
  onClose,
  onDragStart,
  onTouchStart,
  isDragging,
}: PortfolioHeaderProps) => {
  return (
    <div
      onMouseDown={onDragStart}
      onTouchStart={onTouchStart}
      className={`w-full h-14 flex items-center justify-between px-6 bg-ui-glass/40 shrink-0 select-none transition-colors duration-300 ${
        isDragging
          ? "cursor-crosshair"
          : "md:cursor-crosshair md:active:cursor-grabbing"
      }`}
    >
      <div className="flex items-center gap-3 text-ui-text pointer-events-none">
        <span className="font-bold text-xs uppercase tracking-widest font-secondary opacity-90 flex items-center gap-1.5 text-ui-text">
          <SparkleIcon
            size={12}
            weight="fill"
            className="animate-pulse text-ui-accent"
          />{" "}
          Explorer ♡ My Portfolio ♡
        </span>
      </div>

      <button
        onClick={onClose}
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        className="w-7 h-7 rounded-md bg-ui-inner hover:bg-pink-400 border border-ui-inner flex items-center justify-center text-ui-text hover:text-white transition-all cursor-pointer shadow-xs focus:outline-none hover:scale-105 active:scale-95 z-10"
      >
        <XIcon size={14} weight="bold" />
      </button>
    </div>
  );
};
