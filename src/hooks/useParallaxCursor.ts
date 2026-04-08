import { useState, useEffect, useRef, useCallback } from "react";

interface CursorPosition {
  x: number;
  y: number;
  velocity: number;
  direction: { x: number; y: number };
}

export function useParallaxCursor() {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
    velocity: 0,
    direction: { x: 0, y: 0 }
  });
  
  const [isHovered, setIsHovered] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const previousPosition = useRef({ x: 0, y: 0 });
  const lastUpdateTime = useRef(Date.now());
  const animationFrameRef = useRef<number>();
  const moveTimeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const currentTime = Date.now();
    const deltaTime = currentTime - lastUpdateTime.current;
    
    if (deltaTime > 0) {
      const deltaX = e.clientX - previousPosition.current.x;
      const deltaY = e.clientY - previousPosition.current.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const velocity = distance / deltaTime;
      
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
        velocity: Math.min(velocity, 1),
        direction: {
          x: deltaX / (distance || 1),
          y: deltaY / (distance || 1)
        }
      });
      
      previousPosition.current = { x: e.clientX, y: e.clientY };
      lastUpdateTime.current = currentTime;
      
      setIsMoving(true);
      
      // Clear existing timeout and set new one
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      moveTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsMoving(false);
  }, []);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      handleMouseMove(e);
    };

    const handleGlobalMouseEnter = () => {
      handleMouseEnter();
    };

    const handleGlobalMouseLeave = () => {
      handleMouseLeave();
    };

    document.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("mouseenter", handleGlobalMouseEnter);
    document.addEventListener("mouseleave", handleGlobalMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseenter", handleGlobalMouseEnter);
      document.removeEventListener("mouseleave", handleGlobalMouseLeave);
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  return {
    cursorPosition,
    isHovered,
    isMoving,
    velocity: cursorPosition.velocity,
    direction: cursorPosition.direction
  };
}
