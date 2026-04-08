import { motion, useScroll, useTransform } from "framer-motion";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";
import { TEAM, STATS } from "@/lib/data";
import { Target, Eye, Heart, ChevronDown, Award, Users, ShieldCheck, Zap } from "lucide-react";

function AboutContent() {
  const { ref } = useIntersectionObserver();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 80]);

  const values = [
    { icon: Target, title: "Mission", text: "To eliminate the cybersecurity talent gap by connecting skilled professionals with organizations that need them most." },
    { icon: Eye, title: "Vision", text: "A world where every cybersecurity role is filled by the right person, and every professional finds their ideal career path." },
    { icon: Heart, title: "Values", text: "Transparency, community-first thinking, and a deep commitment to the cybersecurity ecosystem." },
  ];

  const StatCard = ({ icon: Icon, stat, label, index }: { icon: any; stat: string; label: string; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
      className="bg-card rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-premium card-hover transition-all group"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
        <div>
          <p className="text-4xl font-extrabold text-foreground tracking-tight">{stat}</p>
          <p className="text-sm text-muted-foreground uppercase font-bold tracking-widest mt-1">{label}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div ref={ref} className="bg-muted/30">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center relative overflow-hidden pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/10 bg-primary/5 mb-8"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary">Our Legacy & Mission</span>
            </motion.div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-extrabold mb-8 tracking-tight leading-[0.85]">
              Redefining <br />
              <span className="text-gradient-primary">Security</span> Hiring
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
              We're on a mission to solve the cybersecurity talent crisis. Born from the industry, built for the global security community.
            </p>
            
            <div className="flex items-center justify-center gap-6">
               <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-card border border-border shadow-sm">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-bold text-foreground">
                    <span className="text-primary">10K+</span> Professionals
                  </p>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20 relative z-10 bg-background border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <StatCard icon={Award} stat="12.5K+" label="Jobs Posted" index={0} />
            <StatCard icon={Target} stat="96%" label="Match Rate" index={1} />
            <StatCard icon={Users} stat="3.2K+" label="Active Teams" index={2} />
            <StatCard icon={Zap} stat="24h" label="Avg Response" index={3} />
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="our-story" className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 tracking-tight">Our <span className="text-gradient-primary">Story</span></h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-medium">
                <p>Cykruit was founded by cybersecurity veterans who experienced the talent gap firsthand. After years of struggling to find qualified security professionals, we decided to build something better.</p>
                <p>We combined deep industry expertise with cutting-edge AI to create a platform that truly understands cybersecurity roles, skills, and career paths.</p>
                <p>Today, Cykruit serves thousands of professionals and hundreds of companies across the globe, and we're just getting started on this journey together.</p>
              </div>
            </motion.div>
            <motion.div
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-premium"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20" />
               <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" alt="Cybersecurity Lab" className="w-full h-full object-cover grayscale opacity-60 mix-blend-overlay" />
               <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="bg-card/90 backdrop-blur-xl p-8 rounded-3xl border border-border/50 text-center shadow-2xl">
                    <p className="text-5xl font-extrabold text-primary mb-2">12+</p>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Years of Expertise</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card/50 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Core <span className="text-gradient-primary">Values</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="group bg-card rounded-3xl p-10 text-center border border-border/50 transition-all duration-300 shadow-sm hover:shadow-premium card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <v.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl font-extrabold mb-4 text-foreground">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-medium">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight">
              Our <span className="text-gradient-primary">Leadership</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">
              Combining decades of cybersecurity experience with cutting-edge AI expertise.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                className="group bg-card rounded-[2rem] p-8 text-center border border-border/50 transition-all duration-300 shadow-sm hover:shadow-premium card-hover overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              >
                <div className="relative mb-8 inline-block">
                  <div className="h-28 w-28 rounded-full bg-muted flex items-center justify-center mx-auto text-3xl font-black text-primary border-4 border-background shadow-xl transition-all duration-300 relative z-10 group-hover:scale-105">
                     {member.avatar || member.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-xs text-primary font-bold mb-6 uppercase tracking-widest">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">{member.bio}</p>
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
