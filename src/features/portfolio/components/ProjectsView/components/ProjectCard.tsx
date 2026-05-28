import { useState } from "react";
import {
  ArrowSquareOutIcon,
  GithubLogoIcon,
  CaretLeftIcon,
  CaretRightIcon,
  BlueprintIcon,
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
    <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 w-full border-b border-white/10 pb-20 last:border-b-0 last:pb-0 items-start">
      <div className="flex flex-col items-start gap-6 w-full xl:w-80 text-white text-left shrink-0">
        <div className="flex flex-col w-full">
          <div className="flex flex-wrap items-center gap-3.5">
            <h4 className="text-3xl font-black text-[#F69BC3] tracking-wide m-0 drop-shadow-[0_0_8px_rgba(246,155,195,0.3)]">
              {name}
            </h4>
            <span className="text-[10px] text-pink-200 font-extrabold bg-white/10 px-2.5 py-1 rounded-md border border-white/20 tracking-wider uppercase font-code backdrop-blur-md">
              {scope}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-4 select-none">
            {techTags.map((tech) => (
              <span
                key={tech}
                className="text-[10px] text-white font-extrabold bg-white/10 px-2.5 py-1 rounded-md border border-white/10 tracking-wider uppercase font-code backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-sm md:text-base text-white/80 leading-relaxed font-medium mt-4 w-full">
            {desc}
          </p>
        </div>

        <div className="flex gap-3 md:gap-5 w-full xl:flex-col">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-pink-400 text-white font-bold text-xs border border-white/20 shadow-md hover:bg-pink-500 hover:scale-[1.03] active:scale-98 transition-all cursor-pointer group"
          >
            <ArrowSquareOutIcon size={16} weight="bold" />
            <span>Live Demo</span>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white font-bold text-xs border border-white/10 hover:bg-[#F69BC3] hover:border-transparent hover:scale-[1.03] active:scale-98 transition-all cursor-pointer"
          >
            <GithubLogoIcon size={16} weight="fill" />
            <span>Repository</span>
          </a>
        </div>
      </div>

      <div className="flex-1 w-full flex flex-col gap-4 relative group">
        <div className="w-full h-72 sm:h-[400px] bg-purple-950/20 rounded-xl border border-white/15 overflow-hidden relative shadow-inner flex items-center justify-center group/canvas">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute inset-0 bg-[#F69BC3]/5 blur-[60px] opacity-0 group-hover/canvas:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <button
            onClick={() => setIsZoomed(true)}
            className="w-full h-full p-4 flex items-center justify-center relative group/img focus:outline-none cursor-zoom-in overflow-hidden"
            title="Click to expand blueprint in full-screen"
          >
            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover/canvas:opacity-100 bg-black/50 border border-white/10 text-white text-[10px] font-code font-bold tracking-widest uppercase px-2.5 py-1.5 rounded-xl backdrop-blur-md flex items-center gap-1.5 transition-all duration-200 transform translate-y-[-4px] group-hover/img:translate-y-0">
              <MagnifyingGlassPlusIcon size={12} weight="bold" /> Zoom Blueprint
            </div>

            <img
              src={activeSlide.imgUrl}
              alt={activeSlide.label}
              className="w-full h-full object-contain select-none pointer-events-none filter brightness-[1.02] contrast-[1.01] animate-in fade-in zoom-in-95 duration-300 group-hover/img:scale-[1.008] transition-transform duration-300"
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

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/5 select-none z-20">
            {slides.map((_, index) => (
              <span key={index} className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "w-4 bg-pink-400" : "w-1.5 bg-white/40"}`} />
            ))}
          </div>
        </div>

        <div className="w-full bg-white/[0.02] p-4 rounded-xl flex flex-col sm:flex-row gap-3 items-start text-left shadow-inner">
          <div className="flex items-center gap-2 text-pink-300 font-code font-black text-xs uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl shrink-0">
            <BlueprintIcon size={14} weight="bold" />{activeSlide.label}
          </div>
          <p className="text-sm text-white/90 font-medium leading-relaxed flex-1 pt-0.5 animate-in fade-in slide-in-from-left-2 duration-300">{activeSlide.caption}</p>
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
