import { motion } from "framer-motion";
import { Shield, Zap, Globe, Radar, Fingerprint, Lock, ArrowRight, Brain, Target, Users, Sparkles, BarChart3, Award } from "lucide-react";
import { FEATURES } from "@/lib/data";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Badge } from "@/components/ui/badge";

const ICONS: Record<string, React.ElementType> = { 
  Shield: Shield, 
  Zap: Zap, 
  Globe: Globe,
  Radar: Radar,
  Fingerprint: Fingerprint,
  Lock: Lock,
  Brain: Brain,
  Target: Target,
  Users: Users,
  Sparkles: Sparkles,
  BarChart3: BarChart3,
  Award: Award
};

const ENHANCED_FEATURES = [
  {
    icon: "Brain",
    title: "AI-Powered Matching",
    description: "Our advanced algorithms analyze your skills, experience, and preferences to find the perfect cybersecurity roles that match your expertise.",
    stats: "98% Match Accuracy",
    color: "primary",
    badge: "Premium"
  },
  {
    icon: "Shield",
    title: "Verified Companies",
    description: "All employers are thoroughly vetted to ensure legitimate opportunities. No fake jobs, no scams - only real cybersecurity careers.",
    stats: "500+ Verified",
    color: "emerald",
    badge: "Trusted"
  },
  {
    icon: "Target",
    title: "Precision Targeting",
    description: "Get matched with roles that align with your specific security specialization - from penetration testing to cloud security.",
    stats: "50+ Specializations",
    color: "blue",
    badge: "Advanced"
  },
  {
    icon: "Users",
    title: "Community Network",
    description: "Connect with 50,000+ cybersecurity professionals. Share insights, get advice, and grow your network in the security community.",
    stats: "50K+ Members",
    color: "purple",
    badge: "Growing"
  },
  {
    icon: "BarChart3",
    title: "Career Analytics",
    description: "Track your application progress, salary trends, and market demand with comprehensive analytics designed for security professionals.",
    stats: "Real-time Data",
    color: "amber",
    badge: "Insightful"
  },
  {
    icon: "Award",
    title: "Skill Certification",
    description: "Showcase your certifications and skills with verified profiles. Get recognized for your expertise in specific security domains.",
    stats: "100+ Certifications",
    color: "rose",
    badge: "Professional"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 lg:py-40 relative overflow-hidden bg-gradient-to-b from-background to-muted/10">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-8 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Powerful Features</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">Succeed in Cybersecurity</span>
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground text-xl max-w-3xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            From AI-powered job matching to verified employers, our platform is designed specifically for cybersecurity professionals. 
            <span className="text-primary font-semibold">No more generic job boards</span> - only specialized security opportunities.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ENHANCED_FEATURES.map((feature, i) => {
            const Icon = ICONS[feature.icon] || Shield;
            return (
              <motion.div
                key={feature.title}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-transparent to-blue-500/0 rounded-3xl blur opacity-0 group-hover:opacity-100 group-hover:from-primary/10 group-hover:to-blue-500/10 transition-all duration-500" />
                
                <div className="relative h-full bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 group-hover:border-primary/20 transition-all duration-500 flex flex-col gap-6 overflow-hidden shadow-soft">
                  {/* Badge */}
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className={`bg-${feature.color}/10 text-${feature.color} border-${feature.color}/20 text-xs font-semibold`}>
                      {feature.badge}
                    </Badge>
                    <div className="text-xs text-muted-foreground font-medium">
                      {feature.stats}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-all duration-500 shadow-soft">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/80 transition-colors">
                      {feature.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <div className="flex items-center gap-2 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500">
                      Learn More
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100 duration-500">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-muted-foreground mb-6">
            Ready to experience these powerful features?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>No setup required</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Start free trial</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
