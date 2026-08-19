import { CaretLeftIcon, CaretRightIcon, DownloadSimpleIcon } from "@phosphor-icons/react";
import { ABOUT_DATA } from "../../../data/aboutData";
import { useAvatarCarousel } from "../hooks/useAvatarCarousel";

export const Avatar = () => {
  const slides = ABOUT_DATA.about.profileSlides;
  const {
    activeSlide,
    currentSlide,
    isGlitching,
    scanProgress,
    handleNext,
    handlePrev,
    hasMultipleSlides,
  } = useAvatarCarousel(slides);

  return (
    <div className="relative group/avatar select-none overflow-visible w-76 h-85 bg-ui-glass/10 border border-ui-accent/20 backdrop-blur-2xl rounded-2xl shadow-[0_0_40px_rgba(192,38,211,0.12)] animate-in zoom-in-95 duration-300 transition-all">
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(var(--ui-accent)_1px,transparent_1px),linear-gradient(90deg,var(--ui-accent)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none rounded-2xl" />

      <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-ui-accent z-20" />
      <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-ui-accent z-20" />
      <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-ui-accent z-20" />
      <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-ui-accent z-20" />

      <div className="w-full h-full overflow-hidden relative z-10 group/canvas flex items-center justify-center rounded-2xl bg-black/30">
        {hasMultipleSlides && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-black/80 hover:bg-ui-accent border border-ui-accent/40 text-white flex items-center justify-center transition-all opacity-0 group-hover/canvas:opacity-100 cursor-pointer focus:outline-none z-30 active:scale-90 shadow-lg"
              aria-label="Previous slide"
            >
              <CaretLeftIcon size={16} weight="bold" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-black/80 hover:bg-ui-accent border border-ui-accent/40 text-white flex items-center justify-center transition-all opacity-0 group-hover/canvas:opacity-100 cursor-pointer focus:outline-none z-30 active:scale-90 shadow-lg"
              aria-label="Next slide"
            >
              <CaretRightIcon size={16} weight="bold" />
            </button>
          </>
        )}

        {isGlitching ? (
          <div className="absolute inset-0 bg-[#0a0813] z-30 flex flex-col items-center justify-center font-code text-ui-accent text-[11px] font-black tracking-widest uppercase gap-1 animate-pulse">
            <span className="opacity-70">SYNCING_DATA...</span>
          </div>
        ) : (
          <img
            key={currentSlide}
            src={activeSlide.url}
            alt={activeSlide.caption || "Profile Avatar"}
            className="w-full h-full object-cover contrast-[1.05] brightness-[0.95] transition-transform duration-700 group-hover/avatar:scale-105 animate-in fade-in duration-300"
          />
        )}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-35 h-35 border-2 border-dashed border-white/10 rounded-full pointer-events-none z-20 flex items-center justify-center animate-pulse">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/40" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/40" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/40" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/40" />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

        <div className="absolute bottom-3 inset-x-4 z-20 flex justify-between items-center font-code text-[11px] text-white/90 tracking-wider font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,1)] p-4">
          <span className="truncate max-w-30 uppercase text-ui-accent text-left">
            {activeSlide.badge}
          </span>
          <span className="font-mono text-ui-accent/90 min-w-12">
            SCAN {scanProgress}%
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 text-[12px] text-ui-text/70 tracking-widest uppercase select-none animate-pulse transition-colors duration-300 mt-5">
        <a
          href="/Evelyn_Pascual_Resume.pdf"
          download="Evelyn_Pascual_Resume.pdf"
          className="w-full text-white font-bold mt-4 md:mt-0 flex items-center justify-center gap-1.5  active:scale-98 hover:scale-[1.04] transition-all cursor-pointer"
          onClick={(e) => e.stopPropagation()}
        >
          <DownloadSimpleIcon size={16} weight="bold" />
          Download_Resume
        </a>
      </div>
    </div>
  );
};
