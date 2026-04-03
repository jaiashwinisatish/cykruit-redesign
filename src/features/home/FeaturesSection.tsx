import { motion } from "framer-motion";
import { Shield, Zap, Globe } from "lucide-react";
import { FEATURES } from "@/lib/data";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ICONS: Record<string, React.ElementType> = { Shield, Zap, Globe };

export function FeaturesSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Why <span className="text-gradient-cyber">Cykruit</span>?
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Built specifically for the cybersecurity industry with features that make hiring and job seeking effortless.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature, i) => {
            const Icon = ICONS[feature.icon] || Shield;
            return (
              <motion.div
                key={feature.title}
                className="group relative bg-card/30 backdrop-blur-md rounded-2xl p-8 border border-white/5 transition-all duration-500 hover:border-primary/40 hover:bg-card/50 cursor-default overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-[100%] group-hover:animate-border-beam [background:linear-gradient(90deg,transparent_0,rgba(0,163,255,0.1)_50%,transparent_100%)] [offset-path:rect(0_auto_auto_0_round_2rem)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ "--duration": 3 } as any} />

                <motion.div 
                  className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 relative z-10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="h-7 w-7 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-foreground relative z-10 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10 group-hover:text-foreground transition-colors">{feature.description}</p>
                
                <div className="mt-6 flex items-center gap-2 text-primary font-medium text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  Read More <Icon className="h-4 w-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
