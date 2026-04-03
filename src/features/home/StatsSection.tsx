import { motion } from "framer-motion";
import { STATS } from "@/lib/data";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Activity, ShieldCheck } from "lucide-react";

export function StatsSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-24 lg:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Trusted by the <span className="text-gradient-cyber animate-pulse-glow">Industry</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative group p-10 rounded-2xl transition-all duration-500 overflow-hidden bg-white/[0.02] border border-white/5 hover:border-primary/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              {/* Traffic Pulse Animation */}
              <motion.div 
                className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] pointer-events-none"
                animate={{ 
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
              />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-4">
                  <Activity className="h-3 w-3 text-primary animate-pulse" />
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Live Node Stats</span>
                </div>

                <div className="text-5xl sm:text-6xl font-black text-foreground mb-4 tracking-tighter">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-[0.3em] group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </p>

                <div className="mt-6 h-1 w-12 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                  />
                </div>
              </div>

              {/* Technical Indicator */}
              <ShieldCheck className="absolute -bottom-2 -right-2 h-16 w-16 text-primary/5 -rotate-12 group-hover:text-primary/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
