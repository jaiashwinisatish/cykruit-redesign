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
          <div className="absolute inset-0 bg-primary" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-indigo-600 to-blue-700 opacity-90" />

          <div className="relative p-12 sm:p-20 lg:p-24 text-center overflow-hidden">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-[0.9] text-white">
              Ready to <br />
              <span className="opacity-80">Elevate</span> Your Career?
            </h2>
            
            <p className="text-xl sm:text-2xl text-blue-50 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
              Join thousands of elite cybersecurity professionals securing the world's most critical infrastructure. Start your journey today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Button asChild size="lg" className="h-16 px-12 text-lg font-bold bg-white text-primary hover:bg-blue-50 shadow-xl transition-all hover:scale-105 active:scale-95 rounded-2xl">
                <Link to="/jobs" className="flex items-center gap-2">
                  Browse Opportunities
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-12 text-lg font-bold bg-transparent border-white/30 text-white hover:bg-white/10 transition-all rounded-2xl">
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
