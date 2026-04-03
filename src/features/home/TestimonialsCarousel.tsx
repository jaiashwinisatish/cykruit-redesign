import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Activity, ShieldCheck } from "lucide-react";
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
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Activity className="h-3 w-3 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Verified feedback</span>
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-6xl font-black mb-4 tracking-tighter"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Industry <span className="text-gradient-cyber italic">Endorsements</span>
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
                <div className="mb-10 text-primary flex items-center gap-4">
                  <Quote className="h-12 w-12 opacity-20" />
                  <div className="flex gap-0.5 h-6 items-center">
                    {[0.4, 0.8, 0.5, 0.9, 0.3, 0.7, 0.4].map((h, i) => (
                      <motion.div 
                        key={i}
                        className="w-1 bg-primary/40 rounded-full"
                        animate={{ height: ["40%", "100%", "40%"] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                      />
                    ))}
                  </div>
                </div>
                
                <p className="text-2xl sm:text-3xl text-foreground font-black leading-tight mb-12 tracking-tight">
                  "{TESTIMONIALS[current].quote}"
                </p>
                
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/40 blur-xl rounded-full opacity-50" />
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/30 border border-primary/20 flex items-center justify-center text-xl font-black text-primary relative z-10 shadow-2xl">
                      {TESTIMONIALS[current].avatar}
                    </div>
                  </div>
                  <div>
                    <p className="font-black text-xl text-foreground tracking-tighter">{TESTIMONIALS[current].name}</p>
                    <p className="text-sm text-primary/80 font-bold uppercase tracking-widest flex items-center gap-2">
                       <ShieldCheck className="h-4 w-4" />
                       {TESTIMONIALS[current].role} 
                       <span className="text-muted-foreground/30">•</span> 
                       {TESTIMONIALS[current].company}
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
