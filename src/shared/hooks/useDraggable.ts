import { useState, useEffect, useRef } from "react";

interface Position {
  x: number;
  y: number;
}

export function useDraggable(initialPosition?: Position) {
  const [position, setPosition] = useState<Position>(() => {
    if (initialPosition) return initialPosition;

    if (window.innerWidth > 768) {
      const modalWidth = Math.min(window.innerWidth * 0.92, 1280);
      const modalHeight = 775;

      return {
        x: (window.innerWidth - modalWidth) / 2,
        y: (window.innerHeight - modalHeight) / 2 - 30,
      };
    }

    return { x: 0, y: 0 };
  });

  const [isDragging, setIsDragging] = useState(false);
  const cursorStartPosition = useRef({ x: 0, y: 0 });
  const elementStartPosition = useRef({ x: 0, y: 0 });

  const captureStartCoordinates = (clientX: number, clientY: number) => {
    cursorStartPosition.current = { x: clientX, y: clientY };
    elementStartPosition.current = { x: position.x, y: position.y };
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (window.innerWidth <= 768) return;
    if (e.button !== 0) return;
    setIsDragging(true);
    captureStartCoordinates(e.clientX, e.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (window.innerWidth <= 768) return;
    setIsDragging(true);
    const touch = e.touches[0];
    captureStartCoordinates(touch.clientX, touch.clientY);
  };

  useEffect(() => {
    const calculateNextPosition = (clientX: number, clientY: number) => {
      setPosition({
        x:
          elementStartPosition.current.x +
          (clientX - cursorStartPosition.current.x),
        y:
          elementStartPosition.current.y +
          (clientY - cursorStartPosition.current.y),
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      calculateNextPosition(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      calculateNextPosition(touch.clientX, touch.clientY);
    };

    const handleDragEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleDragEnd);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleDragEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging]);

  return {
    positionStyle: {
      left: `${position.x}px`,
      top: `${position.y}px`,
    },
    handleMouseDown,
    handleTouchStart,
    isDragging,
  };
}
