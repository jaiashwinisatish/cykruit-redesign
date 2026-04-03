import { motion } from "framer-motion";
import { Shield, Zap, Globe, Radar, Fingerprint, Lock } from "lucide-react";
import { FEATURES } from "@/lib/data";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ICONS: Record<string, React.ElementType> = { 
  Shield: Shield, 
  Zap: Zap, 
  Globe: Globe,
  Radar: Radar,
  Fingerprint: Fingerprint,
  Lock: Lock
};

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => {
            const Icon = ICONS[feature.icon] || Shield;
            return (
              <motion.div
                key={feature.title}
                className="group relative bg-card/20 backdrop-blur-xl rounded-2xl p-10 border border-white/5 transition-all duration-500 hover:border-primary/40 hover:bg-card/40 cursor-default overflow-hidden h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 0.8, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
              >
                {/* Visual Content */}
                <div className="relative z-10">
                  <motion.div 
                    className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary/20 transition-all duration-500 shadow-lg group-hover:shadow-primary/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="h-8 w-8 text-primary" />
                    
                    {/* Icon Tech Animation */}
                    <motion.div 
                      className="absolute inset-0 rounded-2xl border-t border-primary opacity-0 group-hover:opacity-100"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors tracking-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg font-medium group-hover:text-foreground/90 transition-colors">
                    {feature.description}
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <div className="h-px w-8 bg-primary" />
                    Technical Specs
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="h-32 w-32 -rotate-12" />
                </div>
                
                <div className="absolute -bottom-1 -right-1 h-12 w-12 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
