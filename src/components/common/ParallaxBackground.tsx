import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useParallaxCursor } from "@/hooks/useParallaxCursor";

interface ParallaxLayer {
  id: string;
  type: "circle" | "gradient" | "particles" | "grid";
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  opacity: number;
  blur?: number;
  animation?: "float" | "pulse" | "rotate" | "scale";
}

export function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { cursorPosition, isHovered, isMoving, velocity, direction } = useParallaxCursor();
  const animationFrameRef = useRef<number>();

  // Parallax layers configuration
  const layers: ParallaxLayer[] = [
    {
      id: "bg-gradient-1",
      type: "gradient",
      x: 20,
      y: 20,
      size: 600,
      speed: 0.02,
      color: "from-primary/20 to-blue-500/10",
      opacity: 0.8,
      blur: 120,
      animation: "pulse"
    },
    {
      id: "bg-gradient-2",
      type: "gradient",
      x: 80,
      y: 80,
      size: 500,
      speed: 0.03,
      color: "from-purple-500/15 to-pink-500/8",
      opacity: 0.6,
      blur: 100,
      animation: "float"
    },
    {
      id: "bg-circle-1",
      type: "circle",
      x: 15,
      y: 25,
      size: 300,
      speed: 0.05,
      color: "bg-primary/10",
      opacity: 0.4,
      blur: 80,
      animation: "scale"
    },
    {
      id: "bg-circle-2",
      type: "circle",
      x: 85,
      y: 15,
      size: 250,
      speed: 0.04,
      color: "bg-blue-500/8",
      opacity: 0.3,
      blur: 60,
      animation: "rotate"
    },
    {
      id: "bg-circle-3",
      type: "circle",
      x: 50,
      y: 70,
      size: 200,
      speed: 0.06,
      color: "bg-purple-500/6",
      opacity: 0.2,
      blur: 40,
      animation: "float"
    }
  ];

  // Calculate normalized mouse position relative to viewport
  const getNormalizedPosition = () => {
    if (typeof window === 'undefined') return { x: 0.5, y: 0.5 };
    return {
      x: cursorPosition.x / window.innerWidth,
      y: cursorPosition.y / window.innerHeight
    };
  };

  // Calculate parallax offset for each layer
  const calculateOffset = (layer: ParallaxLayer) => {
    const normalizedPos = getNormalizedPosition();
    const centerX = 0.5;
    const centerY = 0.5;
    const offsetX = (normalizedPos.x - centerX) * layer.speed * 100;
    const offsetY = (normalizedPos.y - centerY) * layer.speed * 100;
    
    // Add velocity-based movement for more dynamic effect
    const velocityOffset = isMoving ? velocity * 10 : 0;
    
    return {
      x: layer.x + offsetX + (direction.x * velocityOffset),
      y: layer.y + offsetY + (direction.y * velocityOffset)
    };
  };

  // Render layer based on type
  const renderLayer = (layer: ParallaxLayer) => {
    const offset = calculateOffset(layer);
    const baseClasses = "absolute pointer-events-none transition-transform duration-300 ease-out";

    switch (layer.type) {
      case "gradient":
        return (
          <motion.div
            key={layer.id}
            className={`${baseClasses} bg-gradient-to-br ${layer.color} rounded-full blur-${layer.blur}`}
            style={{
              width: `${layer.size}px`,
              height: `${layer.size}px`,
              left: `${offset.x}%`,
              top: `${offset.y}%`,
              transform: `translate(-50%, -50%)`,
              opacity: layer.opacity * (isHovered ? 1 : 0.7)
            }}
            animate={{
              scale: layer.animation === "pulse" ? [1, 1.1, 1] : 1,
              y: layer.animation === "float" ? [0, -20, 0] : 0
            }}
            transition={{
              duration: layer.animation === "pulse" ? 4 : 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );

      case "circle":
        return (
          <motion.div
            key={layer.id}
            className={`${baseClasses} ${layer.color} rounded-full blur-${layer.blur}`}
            style={{
              width: `${layer.size}px`,
              height: `${layer.size}px`,
              left: `${offset.x}%`,
              top: `${offset.y}%`,
              transform: `translate(-50%, -50%)`,
              opacity: layer.opacity * (isHovered ? 1 : 0.5)
            }}
            animate={{
              scale: layer.animation === "scale" ? [1, 1.2, 1] : 1,
              rotate: layer.animation === "rotate" ? [0, 180, 360] : 0,
              y: layer.animation === "float" ? [0, -15, 0] : 0
            }}
            transition={{
              duration: layer.animation === "rotate" ? 20 : layer.animation === "scale" ? 3 : 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );

      case "particles":
        return (
          <motion.div
            key={layer.id}
            className={`${baseClasses}`}
            style={{
              left: `${offset.x}%`,
              top: `${offset.y}%`,
              transform: `translate(-50%, -50%)`
            }}
          >
            {/* Render particles here if needed */}
          </motion.div>
        );

      case "grid":
        return (
          <motion.div
            key={layer.id}
            className={`${baseClasses} opacity-20`}
            style={{
              left: `${offset.x}%`,
              top: `${offset.y}%`,
              transform: `translate(-50%, -50%)`,
              backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
              width: "100%",
              height: "100%"
            }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ willChange: "transform" }}
    >
      {/* Base grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }}
      />
      
      {/* Parallax layers */}
      {layers.map(layer => renderLayer(layer))}
      
      {/* Interactive glow effect following cursor */}
      {isHovered && (
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, rgba(59, 130, 246, ${0.1 + velocity * 0.1}) 0%, transparent 70%)`,
            filter: `blur(${40 + velocity * 20}px)`
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 + velocity * 0.2 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
}
