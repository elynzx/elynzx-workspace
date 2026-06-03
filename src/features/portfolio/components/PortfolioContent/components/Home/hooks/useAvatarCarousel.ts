import { useState, useEffect, useCallback, useRef } from "react";

interface Slide {
  url: string;
  badge?: string;
  caption?: string;
}

export const useAvatarCarousel = (slides: Slide[]) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlideClean = useCallback(() => {
    setScanProgress(0);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    setIsGlitching(true);
    setScanProgress(0);
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsGlitching(false);
    }, 250);
  }, [slides.length]);

  const handlePrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (intervalRef.current) clearInterval(intervalRef.current);

    setIsGlitching(true);
    setScanProgress(0);

    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsGlitching(false);
    }, 250);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) {
      setScanProgress(100);
      return;
    }

    intervalRef.current = setInterval(() => {
      setScanProgress((prev) => {
        const nextProgress = prev + Math.floor(Math.random() * 12) + 6;
        
        if (nextProgress >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          nextSlideClean();
          return 0;
        }
        return nextProgress;
      });
    }, 250);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentSlide, nextSlideClean, slides.length]);

  return {
    activeSlide: slides[currentSlide],
    currentSlide,
    isGlitching,
    scanProgress,
    handleNext,
    handlePrev,
    hasMultipleSlides: slides.length > 1
  };
};
