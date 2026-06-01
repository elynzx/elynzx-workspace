import { useState, useEffect, useMemo } from "react";

export interface StarProps {
  id: number;
  top: string;
  left: string;
  size: string;
  duration: string;
  delay: string;
}

interface UseStarsProps {
  mobileCount: number;
  desktopCount: number;
  minSize: number;
  maxSizeModifier: number;
}

export const useBackground = ({ mobileCount, desktopCount, minSize, maxSizeModifier }: UseStarsProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const count = isMobile ? mobileCount : desktopCount;

  const stars = useMemo<StarProps[]>(() => {
    return Array.from({ length: count }).map((_, i) => {
      const isBright = Math.random() > 0.85;
      return {
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: isBright 
          ? `${Math.random() * maxSizeModifier + minSize}px`
          : `${Math.random() * 1 + 0.5}px`,
        duration: `${Math.random() * 4 + 2}s`,
        delay: `${Math.random() * 5}s`,
      };
    });
  }, [count, minSize, maxSizeModifier]);

  return { stars, isMobile };
};
