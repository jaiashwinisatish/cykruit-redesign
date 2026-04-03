import { motion } from "framer-motion";
import { STATS } from "@/lib/data";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

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
              className="text-center relative group p-6 rounded-2xl transition-all duration-300 hover:bg-white/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-75 group-hover:scale-110 pointer-events-none" />
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gradient-cyber mb-4 relative z-10">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-[0.2em] relative z-10 group-hover:text-primary transition-colors duration-300">{stat.label}</p>
              
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary/30 rounded-full group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
