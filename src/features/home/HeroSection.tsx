import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ShieldCheck, Terminal, Activity, Lock, UserCheck, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeWriter } from "@/components/common/TypeWriter";
import { HERO_ROLES } from "@/lib/data";

function DashboardMockup() {
  return (
    <motion.div 
      className="relative w-full max-w-[500px] aspect-[4/3] glass-strong rounded-2xl border border-white/10 shadow-3xl p-6 overflow-hidden group"
      initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyber-purple/5" />
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-destructive/50" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
          <div className="h-3 w-3 rounded-full bg-accent/50" />
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
          <Terminal className="h-3 w-3 text-primary" />
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">security_node_01</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 relative z-10 mb-8">
        <div className="p-4 rounded-xl bg-white/5 border border-white/5 group-hover:border-primary/20 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="h-4 w-4 text-primary" />
            <span className="text-[10px] font-bold uppercase text-muted-foreground">Threat Pulse</span>
          </div>
          <div className="h-8 flex items-end gap-1">
            {[40, 70, 45, 90, 65, 30, 80].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-primary/40 rounded-t-sm"
                animate={{ height: [`${h}%`, `${Math.min(100, h + 20)}%`, `${h}%`] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </div>
        <div className="p-4 rounded-xl bg-white/5 border border-white/5 group-hover:border-cyber-purple/20 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <UserCheck className="h-4 w-4 text-cyber-purple" />
            <span className="text-[10px] font-bold uppercase text-muted-foreground">Match Accuracy</span>
          </div>
          <div className="text-2xl font-black text-foreground">98.4%</div>
          <div className="w-full h-1 bg-white/5 rounded-full mt-2 overflow-hidden">
            <motion.div 
              className="h-full bg-cyber-purple"
              initial={{ width: 0 }}
              animate={{ width: "98.4%" }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>
        </div>
      </div>

      {/* Floating Role Cards */}
      <motion.div 
        className="glass p-3 border border-white/10 rounded-xl mb-4 flex items-center gap-3 relative z-10"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
          <Lock className="h-5 w-5 text-primary" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-foreground">Cloud Security Architect</div>
          <div className="text-[9px] text-muted-foreground">Matched with 12 Companies</div>
        </div>
        <div className="ml-auto h-2 w-2 rounded-full bg-primary" />
      </motion.div>

      <motion.div 
        className="glass p-3 border border-white/10 rounded-xl flex items-center gap-3 relative z-10 ml-8"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="h-10 w-10 rounded-lg bg-cyber-purple/20 flex items-center justify-center">
          <ShieldCheck className="h-5 w-5 text-cyber-purple" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-foreground">SOC Analyst L3</div>
          <div className="text-[9px] text-muted-foreground">Verification Complete</div>
        </div>
        <div className="ml-auto h-2 w-2 rounded-full bg-accent" />
      </motion.div>

      {/* Scanning Line */}
      <motion.div 
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-20"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Immersive Background Layering */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,163,255,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(214,31,255,0.08),transparent_50%)]" />
        <div className="absolute inset-0 cyber-grid opacity-[0.08]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">AI-Integrated Resilience</span>
            </motion.div>

            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.85] mb-8">
              Securing <br />
              <span className="text-gradient-glow italic">The Next</span> <br />
              Defenders
            </h1>

            <div className="h-12 sm:h-16 mb-8 overflow-hidden">
               <TypeWriter words={HERO_ROLES} className="text-2xl sm:text-4xl lg:text-5xl font-mono text-primary font-bold" />
            </div>

            <p className="text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed font-medium">
              Find your next role in one of the world's most innovative security teams. Powered by AI, built for the global cyber community.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Button asChild size="lg" className="h-14 px-10 text-lg font-bold glow-primary group relative overflow-hidden">
                <Link to="/jobs" className="flex items-center gap-2">
                  Explore Jobs
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-background-shine bg-[length:200%_100%] opacity-0 group-hover:opacity-50 transition-opacity" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg font-bold bg-white/5 border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all">
                <Link to="/about">Our Authority</Link>
              </Button>
            </div>

            {/* Trust Marquee */}
            <div className="mt-20 pt-10 border-t border-white/5">
              <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-[0.3em] mb-6">Trusted by Elite Teams</p>
              <div className="flex flex-wrap gap-x-10 gap-y-6 opacity-30 invert dark:invert-0 grayscale hover:grayscale-0 transition-all">
                {["CrowdStrike", "Palo Alto", "Mandiant", "Google", "Datadog"].map((name) => (
                  <span key={name} className="text-sm font-black tracking-tighter hover:text-primary cursor-default">{name}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Visuals */}
          <motion.div 
            className="hidden lg:flex items-center justify-center relative py-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ y }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,255,0.15),transparent_70%)] blur-3xl animate-pulse" />
            <DashboardMockup />
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-primary transition-colors cursor-pointer group z-10"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" })}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] group-hover:text-primary transition-colors">Tactical Overview</span>
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
