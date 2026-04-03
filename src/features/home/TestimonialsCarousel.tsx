import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isVisible]);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What People <span className="text-gradient-cyber">Say</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="glass rounded-2xl p-8 sm:p-12 min-h-[280px] flex flex-col items-center justify-center text-center">
            <Quote className="h-8 w-8 text-primary/30 mb-6" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-8">
                  "{TESTIMONIALS[current].quote}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                    {TESTIMONIALS[current].avatar}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-sm text-foreground">{TESTIMONIALS[current].name}</p>
                    <p className="text-xs text-muted-foreground">
                      {TESTIMONIALS[current].role} at {TESTIMONIALS[current].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
