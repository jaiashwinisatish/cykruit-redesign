import { motion, useScroll, useTransform } from "framer-motion";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";
import { TEAM, STATS } from "@/lib/data";
import { Target, Eye, Heart, ChevronDown, Award, Users, ShieldCheck, Zap } from "lucide-react";

function AboutContent() {
  const { ref, isVisible } = useIntersectionObserver();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  const values = [
    { icon: Target, title: "Mission", text: "To eliminate the cybersecurity talent gap by connecting skilled professionals with organizations that need them most." },
    { icon: Eye, title: "Vision", text: "A world where every cybersecurity role is filled by the right person, and every professional finds their ideal career path." },
    { icon: Heart, title: "Values", text: "Transparency, community-first thinking, and a deep commitment to the cybersecurity ecosystem." },
  ];

  const StatCard = ({ icon: Icon, stat, label, index }: { icon: any; stat: string; label: string; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
      className={`glass rounded-2xl p-6 border border-white/10 shadow-2xl relative group overflow-hidden ${index % 2 === 0 ? "mt-8" : ""}`}
      style={{ y: index % 2 === 0 ? y1 : y2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex items-center gap-4 relative z-10">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-2xl font-bold text-foreground">{stat}</p>
          <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">{label}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden pt-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-8"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">About Cykruit</span>
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
                Our <span className="text-gradient-cyber">Story</span> & <br />
                Authority
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-medium">
                We're on a mission to solve the cybersecurity talent crisis. Born from the industry, built for the global security community.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="glow-primary px-8 h-12 text-base font-bold" onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}>
                  Learn Our Story
                </Button>
                <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold overflow-hidden shadow-xl">
                        <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-bold text-foreground">
                    <span className="text-primary font-black">10K+</span> Professionals Joined
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Floating Stats */}
            <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,255,0.1),transparent_70%)] animate-pulse" />
              <div className="grid grid-cols-2 gap-4 lg:gap-6 w-full max-w-md">
                <StatCard icon={Award} stat="12.5K+" label="Jobs Posted" index={0} />
                <StatCard icon={Target} stat="96%" label="Match Rate" index={1} />
                <StatCard icon={Users} stat="3.2K+" label="Active Teams" index={2} />
                <StatCard icon={Zap} stat="24h" label="Avg Response" index={3} />
              </div>
            </div>
          </div>
        </div>

        {/* Discovery Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-primary transition-colors cursor-pointer group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-primary transition-colors">Discover Our Mission</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </section>

      {/* Story */}
      <section id="our-story" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            className="relative bg-card/30 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-16 border border-white/5 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-4">
                <span className="h-1 w-12 bg-primary rounded-full" />
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-medium">
                <p>Cykruit was founded by cybersecurity veterans who experienced the talent gap firsthand. After years of struggling to find qualified security professionals — and watching talented individuals get lost in generic job platforms — we decided to build something better.</p>
                <p>We combined deep industry expertise with cutting-edge AI to create a platform that truly understands cybersecurity roles, skills, and career paths. The result is a matching system that's orders of magnitude more effective than traditional job boards.</p>
                <p>Today, Cykruit serves thousands of professionals and hundreds of companies across the globe, and we're just getting started.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="group relative bg-card/20 backdrop-blur-lg rounded-2xl p-10 text-center border border-white/5 transition-all duration-500 hover:border-primary/40 hover:bg-card/40"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 group-hover:rotate-6">
                  <v.icon className="h-8 w-8 text-primary shadow-[0_0_15px_rgba(0,163,255,0.4)]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground relative z-10">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10 group-hover:text-foreground transition-colors">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.05),transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Meet the <span className="text-gradient-cyber shadow-lg">Leaders</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our team combines decades of cybersecurity experience with cutting-edge AI expertise.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                className="group relative bg-card/30 backdrop-blur-md rounded-2xl p-8 text-center border border-white/5 transition-all duration-500 hover:border-primary/40 hover:bg-card/50 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="relative mb-8 inline-block">
                    <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full scale-0 group-hover:scale-125 transition-transform duration-500" />
                    <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center mx-auto text-3xl font-black text-primary border-4 border-white/5 group-hover:border-primary/30 shadow-2xl transition-all duration-300 relative z-10">
                      {member.avatar}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-sm text-primary/80 font-bold mb-4 uppercase tracking-widest">{member.role}</p>
                  <div className="h-px w-8 bg-primary/20 mx-auto mb-4 group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium group-hover:text-foreground transition-colors">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const About = () => (
  <PageWrapper>
    <AboutContent />
  </PageWrapper>
);

export default About;
