import { useEffect, useState, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix = "", duration = 2000 }: AnimatedCounterProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className="animate-count-up">
      <span className="font-mono">{count.toLocaleString()}{suffix}</span>
    </div>
  );
}
