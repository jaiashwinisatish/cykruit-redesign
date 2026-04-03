import { motion } from "framer-motion";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { TEAM } from "@/lib/data";
import { Target, Eye, Heart } from "lucide-react";

function AboutContent() {
  const { ref, isVisible } = useIntersectionObserver();

  const values = [
    { icon: Target, title: "Mission", text: "To eliminate the cybersecurity talent gap by connecting skilled professionals with organizations that need them most." },
    { icon: Eye, title: "Vision", text: "A world where every cybersecurity role is filled by the right person, and every professional finds their ideal career path." },
    { icon: Heart, title: "Values", text: "Transparency, community-first thinking, and a deep commitment to the cybersecurity ecosystem." },
  ];

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="py-24 lg:py-32 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              About <span className="text-gradient-cyber">Cykruit</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're on a mission to solve the cybersecurity talent crisis. Born from the industry, built for the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            className="glass rounded-2xl p-8 sm:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-2xl font-bold mb-6 text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Cykruit was founded by cybersecurity veterans who experienced the talent gap firsthand. After years of struggling to find qualified security professionals — and watching talented individuals get lost in generic job platforms — we decided to build something better.</p>
              <p>We combined deep industry expertise with cutting-edge AI to create a platform that truly understands cybersecurity roles, skills, and career paths. The result is a matching system that's orders of magnitude more effective than traditional job boards.</p>
              <p>Today, Cykruit serves thousands of professionals and hundreds of companies across the globe, and we're just getting started.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="glass rounded-2xl p-8 text-center hover:glow-border transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Meet the <span className="text-gradient-cyber">Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                className="glass rounded-2xl p-6 text-center hover:glow-border transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-primary">
                  {member.avatar}
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
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
