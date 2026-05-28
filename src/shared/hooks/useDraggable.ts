import { useState, useEffect, useRef } from "react";

export function useDraggable() {
  const [position, setPosition] = useState({ x: 40, y: 80 });
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
      const horizontalDistance = clientX - cursorStartPosition.current.x;
      const verticalDistance = clientY - cursorStartPosition.current.y;

      setPosition({
        x: elementStartPosition.current.x + horizontalDistance,
        y: elementStartPosition.current.y + verticalDistance,
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
