import { motion } from "framer-motion";
import { CheckCircle2, Shield, Building2, Users, TrendingUp } from "lucide-react";

export function TrustedBySection() {
  const companies = [
    { name: "CrowdStrike", logo: "CS", description: "Cloud-delivered endpoint protection" },
    { name: "SentinelOne", logo: "S1", description: "AI-powered security platform" },
    { name: "Mandiant", logo: "M", description: "Cybersecurity consulting" },
    { name: "Splunk", logo: "SP", description: "Data-to-everything platform" },
    { name: "Zscaler", logo: "Z", description: "Cloud security platform" },
    { name: "Palo Alto", logo: "PA", description: "Network security solutions" },
    { name: "Fortinet", logo: "FT", description: "Broad integrated security" },
    { name: "Cisco", logo: "CI", description: "Enterprise networking" }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Security Teams" },
    { icon: Building2, value: "50K+", label: "Professionals" },
    { icon: TrendingUp, value: "98%", label: "Match Success Rate" },
    { icon: Shield, value: "24/7", label: "Platform Uptime" }
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Trusted Industry Leaders</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by the <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Best in Cybersecurity</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leading security companies and professionals rely on Cykruit to find their next opportunity or hire top talent.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-black text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Logos */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5 rounded-3xl" />
          
          <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-xl font-semibold text-center mb-8 text-muted-foreground">
              Join thousands of security professionals already using Cykruit
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {companies.map((company, i) => (
                <motion.div
                  key={company.name}
                  className="group flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                >
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border/50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform group-hover:border-primary/30">
                    <span className="text-xl font-black text-primary">{company.logo}</span>
                  </div>
                  <div className="font-semibold text-foreground text-sm mb-1">{company.name}</div>
                  <div className="text-xs text-muted-foreground max-w-[120px]">{company.description}</div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-muted-foreground mb-6">
                Ready to join them?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
