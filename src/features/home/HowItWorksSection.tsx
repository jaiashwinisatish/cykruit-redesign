import { motion } from "framer-motion";
import { ArrowRight, User, Search, FileText, Handshake, CheckCircle, Sparkles, Zap, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Create Your Profile",
      description: "Sign up and build your cybersecurity profile. Add your skills, certifications, and experience in minutes.",
      icon: User,
      color: "primary",
      duration: "5 minutes",
      features: ["Free to start", "No credit card", "Verified profile"]
    },
    {
      number: 2,
      title: "Get AI-Matched",
      description: "Our AI analyzes your profile and matches you with perfect cybersecurity opportunities tailored to your expertise.",
      icon: Search,
      color: "blue",
      duration: "Instant matching",
      features: ["98% accuracy", "50+ specializations", "Real-time updates"]
    },
    {
      number: 3,
      title: "Apply with One Click",
      description: "Apply to multiple positions instantly with your unified profile. Track all applications in one dashboard.",
      icon: FileText,
      color: "emerald",
      duration: "1-click apply",
      features: ["Bulk applications", "Status tracking", "Application insights"]
    },
    {
      number: 4,
      title: "Land Your Dream Job",
      description: "Connect with employers, schedule interviews, and get hired. 50,000+ professionals have already succeeded.",
      icon: Handshake,
      color: "purple",
      duration: "Average 21 days",
      features: ["Interview prep", "Salary negotiation", "Career guidance"]
    }
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
            <span className="text-xs font-bold uppercase tracking-wider text-primary">How It Works</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            Your Cybersecurity Career,
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">Simplified in 4 Steps</span>
          </h2>
          
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            From profile creation to landing your dream job, our streamlined process makes cybersecurity career advancement effortless. 
            <span className="text-primary font-semibold"> No more complexity, just results.</span>
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="group relative"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              {/* Connection line */}
              {i < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.5, duration: 0.8 }}
                />
              )}

              <div className="relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 group-hover:border-primary/20 transition-all duration-500 shadow-soft">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Duration badge */}
                <div className="absolute -top-4 -right-4 px-3 py-1 rounded-full bg-muted/80 backdrop-blur-sm border border-border/50 text-xs font-semibold text-muted-foreground">
                  {step.duration}
                </div>

                {/* Content */}
                <div className="flex gap-6">
                  <div className={`h-16 w-16 rounded-2xl bg-${step.color}/10 flex items-center justify-center border border-${step.color}/20 group-hover:scale-110 transition-all duration-500`}>
                    <step.icon className={`h-8 w-8 text-${step.color}`} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {step.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { value: "50K+", label: "Active Professionals", icon: User },
            { value: "98%", label: "Match Accuracy", icon: Target },
            { value: "21 days", label: "Avg. Time to Hire", icon: Zap },
            { value: "500+", label: "Partner Companies", icon: Shield }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-black text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 border border-primary/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Start Your Journey?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of cybersecurity professionals who have already transformed their careers with Cykruit. 
              Your dream job is just 4 steps away.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 group btn-premium">
                <Link to="/dashboard" className="flex items-center gap-3">
                  <Zap className="h-5 w-5" />
                  Get Started Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>No setup required</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
