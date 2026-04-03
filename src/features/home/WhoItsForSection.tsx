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
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Built for <span className="text-gradient-cyber">Everyone</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Whether you're looking for your next role or your next hire, Cykruit is designed for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className={`glass rounded-2xl p-10 text-center transition-all duration-300 ${card.glow} hover:glow-border group`}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -4 }}
            >
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <card.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{card.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{card.description}</p>
              <Button asChild variant="outline">
                <Link to={card.href}>{card.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
