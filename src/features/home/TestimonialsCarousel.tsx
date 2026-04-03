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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            What People <span className="text-gradient-cyber">Say</span>
          </motion.h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-cyber-purple/10 to-accent/10 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative bg-card/40 backdrop-blur-xl rounded-2xl p-8 sm:p-16 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-cyber-purple to-accent" />
            
            <Quote className="absolute top-8 right-8 h-20 w-20 text-primary/5 -rotate-12" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.05, x: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                <div className="mb-10 text-primary/40">
                  <Quote className="h-10 w-10" />
                </div>
                
                <p className="text-xl sm:text-2xl text-foreground font-medium leading-relaxed mb-12 italic">
                  "{TESTIMONIALS[current].quote}"
                </p>
                
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 blur-md rounded-full" />
                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border border-primary/30 flex items-center justify-center text-lg font-bold text-primary relative z-10">
                      {TESTIMONIALS[current].avatar}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-foreground tracking-tight">{TESTIMONIALS[current].name}</p>
                    <p className="text-sm text-primary/80 font-medium">
                      {TESTIMONIALS[current].role} <span className="text-muted-foreground mx-1">•</span> {TESTIMONIALS[current].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Auto-play progress bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-primary/20 w-full overflow-hidden">
              <motion.div 
                key={current}
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </div>
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
