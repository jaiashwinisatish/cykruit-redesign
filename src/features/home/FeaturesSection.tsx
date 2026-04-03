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
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="text-gradient-cyber">Cykruit</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built specifically for the cybersecurity industry with features that make hiring and job seeking effortless.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature, i) => {
            const Icon = ICONS[feature.icon] || Shield;
            return (
              <motion.div
                key={feature.title}
                className="group relative glass rounded-2xl p-8 transition-all duration-300 hover:glow-border cursor-default"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
