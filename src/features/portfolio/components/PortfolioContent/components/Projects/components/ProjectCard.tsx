import { useState } from "react";
import {
  ArrowSquareOutIcon,
  GithubLogoIcon,
  CaretLeftIcon,
  CaretRightIcon,
  MagnifyingGlassPlusIcon,
} from "@phosphor-icons/react";
import type { ProjectItem } from "../../../data/projectsData";
import { ImageSlider } from "./ImageSlider";

export const ProjectCard = ({
  name,
  scope,
  techTags,
  desc,
  liveUrl,
  githubUrl,
  slides,
}: ProjectItem) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const activeSlide = slides[currentSlide];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col xl:flex-row gap-8 xl:gap-10 w-full border-b border-ui-glass pt-8 md:pt-4 pb-12 md:pb-16 last:border-b-0 last:pb-0 items-start transition-colors duration-300">
      <div className="flex flex-col gap-3 md:gap-6 w-full xl:w-80 text-ui-text text-left shrink-0">
        <div className="flex flex-col w-full">
          <div className="flex flex-col md:flex-wrap items-center justify-center md:justify-start md:items-start gap-2 mb-3">
            <h4 className="text-3xl font-black text-ui-text drop-shadow-[0_0_8px_rgba(246,155,195,0.3)]">
              {name}
            </h4>
            <span className="text-[11px] w-full text-center md:text-left text-ui-accent font-extrabold py-1.5 md:py-2 border-b border-ui-accent/40 tracking-wider uppercase">
              {scope}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 mt-3 md:mt-2 select-none">
            {techTags.map((tech) => (
              <span
                key={tech}
                className="text-[10px] text-ui-accent font-extrabold bg-ui-glass/30 px-2.5 py-1 rounded-md border border-ui-inner tracking-wider uppercase font-code backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-sm md:text-base text-ui-text/90 leading-relaxed text-justify font-medium mt-6 md:mt-4 w-full">
            {desc}
          </p>
        </div>

        <div className="flex gap-3 md:gap-4 w-full xl:flex-col">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 md:py-4 rounded-2xl bg-ui-button text-white font-bold text-sm border border-white/20 shadow-md hover:scale-[1.03] active:scale-98 transition-all cursor-pointer group"
          >
            <ArrowSquareOutIcon size={16} weight="bold" />
            <span>Live Demo</span>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 md:py-4.5 rounded-2xl bg-ui-inner/50 text-ui-text font-bold text-sm md:text-xs border border-ui-inner shadow-md hover:bg-ui-inner hover:border-transparent hover:scale-[1.03] active:scale-98 transition-all cursor-pointer"
          >
            <GithubLogoIcon size={16} weight="fill" />
            <span>Repository</span>
          </a>
        </div>
      </div>

      <div className="flex-1 w-full flex flex-col gap-4 relative group">
        <div className="w-full h-65 md:h-100 overflow-hidden relative flex items-center justify-center group/canvas transition-colors duration-300">
          <button
            onClick={() => setIsZoomed(true)}
            className="w-full h-full p-4 flex items-center justify-center relative group/img focus:outline-none cursor-zoom-in overflow-hidden"
            title="Click to expand blueprint in full-screen"
          >
            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover/canvas:opacity-100 bg-black/50 border border-white/10 text-white text-[10px] font-code font-bold tracking-widest uppercase px-2.5 py-1.5 rounded-xl backdrop-blur-md flex items-center gap-1.5 transition-all duration-200 transform translate-y-1 group-hover/img:translate-y-0">
              <MagnifyingGlassPlusIcon size={12} weight="bold" /> Zoom Blueprint
            </div>

            <img
              src={activeSlide.imgUrl}
              alt={activeSlide.label}
              className="w-full h-full object-contain select-none pointer-events-none filter brightness-[1.02] contrast-[1.01] animate-in fade-in zoom-in-95 group-hover/img:scale-[1.008] transition-transform duration-300"
            />
          </button>

          {slides.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 w-10 h-10 rounded-xl bg-black/40 hover:bg-pink-400 border border-white/20 text-white flex items-center justify-center transition-all opacity-100 md:opacity-0 md:group-hover/canvas:opacity-100 cursor-pointer focus:outline-none shadow-md backdrop-blur-sm active:scale-90 z-20"
              >
                <CaretLeftIcon size={18} weight="bold" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 w-10 h-10 rounded-xl bg-black/40 hover:bg-pink-400 border border-white/20 text-white flex items-center justify-center transition-all opacity-100 md:opacity-0 md:group-hover/canvas:opacity-100 cursor-pointer focus:outline-none shadow-md backdrop-blur-sm active:scale-90 z-20"
              >
                <CaretRightIcon size={18} weight="bold" />
              </button>
            </>
          )}

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-ui-glass px-3 py-1.5 rounded-full backdrop-blur-md border border-ui-inner select-none z-20 transition-colors duration-300">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "w-4 bg-pink-400" : "w-1.5 bg-ui-text/40"}`}
              />
            ))}
          </div>
        </div>

        <div className="w-full h-40 md:h-auto p-4 rounded-xl flex flex-col gap-2 items-center text-center transition-colors duration-300 bg-ui-inner">
          <div className="flex items-center gap-2 text-ui-accent font-code font-black text-xs uppercase tracking-widest rounded-xl shrink-0">
            {activeSlide.label}
          </div>
          <p className="text-sm text-ui-text/90 font-medium leading-relaxed flex-1 pt-0.5 animate-in fade-in slide-in-from-left-2 duration-300">
            {activeSlide.caption}
          </p>
        </div>
      </div>

      <ImageSlider
        isOpen={isZoomed}
        onClose={() => setIsZoomed(false)}
        imgUrl={activeSlide.imgUrl}
        label={activeSlide.label}
        caption={activeSlide.caption}
      />
    </div>
  );
};
