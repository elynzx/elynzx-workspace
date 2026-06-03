import { XIcon, SparkleIcon } from "@phosphor-icons/react";
import { useEffect } from "react";

interface ImageSliderProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
  label: string;
  caption: string;
}

export const ImageSlider = ({
  isOpen,
  onClose,
  imgUrl,
  label,
  caption,
}: ImageSliderProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-55 flex items-center justify-center w-full h-full bg-white backdrop-blur-2xl animate-in fade-in duration-200 pointer-events-auto select-none"
      onClick={onClose}
    >
      <div
        className="w-full h-full flex items-center justify-center relative p-4 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-white blur-[120px] rounded-full pointer-events-none" />

        <img
          src={imgUrl}
          alt={label}
          className="w-full h-full object-contain pt-24 pb-14 md:py-0 filter brightness-[1.02] contrast-[1.02] animate-in zoom-in-95 duration-300"
        />

        <div className="absolute top-4 left-4 right-16 md:right-auto  z-50 flex flex-col gap-1 bg-ui-glass/70 px-3  md:px-8 md:py-3 rounded-xl backdrop-blur-md max-w-full md:max-w-2xl animate-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-2 text-[10px] md:text-xs font-code font-black text-ui-accent uppercase tracking-widest">
            <SparkleIcon
              size={12}
              weight="fill"
              className="animate-spin text-ui-accent"
            />
            {label}
          </div>
          <p className="text-[12px] md:text-sm leading-relaxed text-white">
            {caption}
          </p>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-55 w-9 h-9 md:w-10 md:h-10 rounded-xl bg-black/50 hover:bg-pink-400 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer hover:scale-105 active:scale-95 focus:outline-none shadow-xl backdrop-blur-md"
          title="Close presentation window"
        >
          <XIcon size={14} weight="bold" />
        </button>
      </div>
    </div>
  );
};
