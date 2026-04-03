import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function CTABanner() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative rounded-[2rem] overflow-hidden group border border-white/10 shadow-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          {/* Background FX */}
          <div className="absolute inset-0 bg-[#020617]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,163,255,0.15),transparent_70%)]" />
          <div className="absolute inset-0 cyber-grid opacity-[0.1]" />
          <div className="absolute inset-0 noise-bg opacity-20 pointer-events-none" />

          {/* Animated Accents */}
          <motion.div 
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            animate={{ left: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative glass p-12 sm:p-20 lg:p-24 text-center overflow-hidden">
            {/* Live Indicator */}
            <div className="flex items-center justify-center gap-2 mb-10">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">System Ready for Onboarding</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">
              Deploy Your <br />
              <span className="text-gradient-glow italic">Next Mission</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
              Join thousands of elite cybersecurity professionals securing the world's most critical infrastructure. Your verification begins now.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <Button asChild size="lg" className="h-16 px-12 text-lg font-black glow-primary group relative overflow-hidden">
                <Link to="/jobs" className="flex items-center gap-2">
                  Initialize Search
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-background-shine bg-[length:200%_100%] opacity-0 group-hover:opacity-50 transition-opacity" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-12 text-lg font-black bg-white/5 border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all">
                <Link to="/contact">Secure Partnership</Link>
              </Button>
            </div>

            {/* Scanning Wave */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
