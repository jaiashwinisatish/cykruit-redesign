import { motion } from "framer-motion";
import { Users, Building, Briefcase } from "lucide-react";
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
      glow: "hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]",
    },
    {
      icon: Building,
      title: "Employers",
      description: "Access a curated pool of verified cybersecurity professionals. Hire faster with AI-powered candidate matching.",
      cta: "Post a Job",
      href: "/contact",
      glow: "hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)]",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className={`relative overflow-hidden group bg-card/40 backdrop-blur-md rounded-2xl p-10 text-center border border-white/5 transition-all duration-500 hover:border-primary/30 hover:bg-card/60`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: "circOut" }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-[100%] group-hover:animate-border-beam [background:linear-gradient(90deg,transparent_0,rgba(0,163,255,0.2)_50%,transparent_100%)] [offset-path:rect(0_auto_auto_0_round_2rem)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ "--duration": 4 } as any} />

              <motion.div 
                className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                whileHover={{ rotate: [6, -6, 6], transition: { repeat: Infinity, duration: 2 } }}
              >
                <card.icon className="h-10 w-10 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-foreground relative z-10">{card.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed relative z-10">{card.description}</p>
              <Button asChild variant="outline" className="relative z-10 bg-transparent border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                <Link to={card.href} className="flex items-center gap-2">
                  {card.cta}
                  <Briefcase className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
