import { useEffect, useState, useCallback } from "react";

// Konami code: ↑↑↓↓←→←→BA
const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

export function MatrixRain() {
  const [active, setActive] = useState(false);
  const [keys, setKeys] = useState<string[]>([]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    setKeys((prev) => {
      const next = [...prev, e.key].slice(-KONAMI.length);
      if (next.join(",") === KONAMI.join(",")) {
        setActive(true);
        setTimeout(() => setActive(false), 5000);
        return [];
      }
      return next;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[200] pointer-events-none overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 text-primary font-mono text-sm opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            animation: `matrix-rain ${2 + Math.random() * 3}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          {Array.from({ length: 20 }).map((_, j) => (
            <div key={j}>{String.fromCharCode(0x30A0 + Math.random() * 96)}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
