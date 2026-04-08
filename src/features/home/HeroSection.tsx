import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ShieldCheck, Terminal, Activity, Lock, UserCheck, ChevronDown, Star, Zap, Globe, TrendingUp, CheckCircle2, Play, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeWriter } from "@/components/common/TypeWriter";
import { HERO_ROLES } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

function PlatformDemo() {
  return (
    <motion.div 
      className="relative w-full max-w-[600px] aspect-[16/10] glass shadow-2xl p-8 overflow-hidden rounded-[2rem] border-white/5 group"
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 pointer-events-none" />
      
      {/* Browser UI header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/50" />
          <div className="h-3 w-3 rounded-full bg-amber-500/50" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/50" />
        </div>
        <div className="flex items-center gap-3 px-4 py-1 rounded-full bg-white/5 border border-white/10">
          <Lock className="h-3 w-3 text-emerald-500" />
          <span className="text-xs font-medium text-muted-foreground">cykruit.com</span>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-6">
        {/* Search bar */}
        <motion.div 
          className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Search className="h-5 w-5 text-muted-foreground" />
          <div className="flex-1">
            <div className="h-3 w-48 bg-white/15 rounded-full mb-2" />
            <div className="h-2 w-32 bg-white/5 rounded-full" />
          </div>
          <Button size="sm" className="h-8 w-8 rounded-lg bg-primary/20 text-primary border-primary/30">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>

        {/* Job cards */}
        <div className="space-y-4">
          {[
            { company: "CloudSec Inc.", role: "Senior Security Analyst", match: 95, color: "bg-emerald-500/10 border-emerald-500/20" },
            { company: "TechCorp", role: "Penetration Tester", match: 88, color: "bg-blue-500/10 border-blue-500/20" },
            { company: "CyberShield", role: "DevSecOps Engineer", match: 92, color: "bg-purple-500/10 border-purple-500/20" }
          ].map((job, i) => (
            <motion.div 
              key={i}
              className={`p-4 rounded-2xl ${job.color} backdrop-blur-sm border hover:scale-[1.02] transition-all cursor-pointer`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center text-xs font-bold">
                    {job.company.charAt(0)}
                  </div>
                  <div>
                    <div className="h-3 w-24 bg-white/30 rounded-full mb-1" />
                    <div className="h-2 w-16 bg-white/10 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className={`h-3 w-3 ${j < Math.floor(job.match / 20) ? "text-amber-400 fill-current" : "text-white/20"}`} />
                    ))}
                  </div>
                  <span className="text-xs font-bold">{job.match}%</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs bg-white/10 border-white/20">
                  Full-time
                </Badge>
                <Badge variant="secondary" className="text-xs bg-white/10 border-white/20">
                  Remote
                </Badge>
                <span className="text-xs text-muted-foreground ml-auto">$120k - $150k</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 100]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 20]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-20 pb-20">
      {/* Modern Background System */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
        
        {/* Animated gradient blobs */}
        <motion.div 
          className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-full blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] bg-gradient-to-br from-purple-500/15 to-pink-500/10 rounded-full blur-[80px]"
          animate={{
            x: [0, -20, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Trust badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-8 backdrop-blur-sm shadow-soft"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex -space-x-2 overflow-hidden">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="inline-block h-5 w-5 rounded-full ring-2 ring-background bg-gradient-to-br from-primary/50 to-primary border border-primary/30" />
                ))}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Trusted by 500+ Security Teams</span>
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            </motion.div>

            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
              Find Your Dream
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">Cybersecurity</span>
              <br />
              Career Today
            </h1>

            {/* Subheading */}
            <motion.p 
              className="text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Connect with top companies, showcase your skills, and land the perfect role in cybersecurity. 
              <span className="text-primary font-semibold">AI-powered matching</span> ensures you find opportunities that truly fit your expertise.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="flex items-center gap-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Active Jobs</div>
              </div>
              <div className="text-2xl text-muted-foreground">•</div>
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              <div className="text-2xl text-muted-foreground">•</div>
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Match Rate</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button asChild size="lg" className="h-14 px-8 text-lg font-bold shadow-2xl shadow-primary/25 bg-primary hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 group btn-premium">
                <Link to="/dashboard" className="flex items-center gap-3">
                  <Zap className="h-5 w-5" />
                  Get Started Free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg font-bold border-white/10 glass hover:bg-white/5 transition-all">
                <Link to="/demo" className="flex items-center gap-3">
                  <Play className="h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div 
              className="flex items-center gap-6 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                ))}
              </div>
              <span className="font-medium">4.9/5</span>
              <span>•</span>
              <span>2,000+ reviews</span>
              <span>•</span>
              <span>Free to start</span>
            </motion.div>
          </motion.div>

          {/* Right Visuals */}
          <motion.div 
            className="hidden lg:flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: y2 }}
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 blur-[120px] rounded-full transform scale-150" />
            
            <motion.div 
              style={{ rotate }}
              className="relative z-10"
            >
              <PlatformDemo />
              
              {/* Floating stats cards */}
              <motion.div 
                className="absolute -top-8 -right-8 glass p-4 rounded-2xl shadow-2xl border-white/10 hidden xl:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Avg. Salary</div>
                    <div className="text-lg font-bold">$125K</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-8 -left-8 glass p-4 rounded-2xl shadow-2xl border-white/10 hidden xl:block"
                animate={{ y: [10, 0, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Global Reach</div>
                    <div className="text-lg font-bold">50+ Countries</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-5 w-5 text-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
