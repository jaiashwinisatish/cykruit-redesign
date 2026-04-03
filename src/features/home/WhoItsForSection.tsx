import { motion } from "framer-motion";
import { Users, Building, Briefcase, Activity } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function WhoItsForSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const cards = [
    {
      icon: Users,
      title: "Job Seekers",
      description: "Discover roles tailored to your cybersecurity expertise. From entry-level to CISO, we've got you covered.",
      cta: "Find Jobs",
      href: "/jobs",
      color: "primary",
      accent: "cyan",
    },
    {
      icon: Building,
      title: "Employers",
      description: "Access a curated pool of verified cybersecurity professionals. Hire faster with AI-powered candidate matching.",
      cta: "Post a Job",
      href: "/contact",
      color: "cyber-purple",
      accent: "purple",
    },
  ];

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
            Built for <span className="text-gradient-cyber">Everyone</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Whether you're looking for your next role or your next hire, Cykruit is designed for you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className={`relative group bg-card/40 backdrop-blur-xl rounded-2xl p-10 border border-white/5 transition-all duration-500 hover:border-${card.color}/30`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: "circOut" }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-${card.color}/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              {/* Scanning Header Accent */}
              <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <motion.div 
                className={`h-24 w-24 rounded-2xl bg-${card.color}/10 flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:bg-${card.color}/20 transition-all duration-500 border border-${card.color}/20`}
              >
                <card.icon className={`h-12 w-12 text-${card.color}`} />
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-2 border-primary/20"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <h3 className="text-3xl font-black mb-4 text-foreground relative z-10 tracking-tight">{card.title}</h3>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed relative z-10 font-medium">
                {card.description}
              </p>

              <div className="relative z-10 flex flex-col items-center gap-4">
                <Button asChild size="lg" className={`h-12 px-8 font-bold bg-${card.color} text-white hover:bg-${card.color}/80 glow-${card.accent} transition-all`}>
                  <Link to={card.href}>{card.cta}</Link>
                </Button>
                <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest opacity-0 group-hover:opacity-70 transition-opacity">
                  <Activity className="h-3 w-3" />
                  Requesting Access...
                </div>
              </div>

              {/* Scanning Line */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent h-[10%] w-full z-20 pointer-events-none opacity-0 group-hover:opacity-100"
                animate={{ top: ["-10%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
