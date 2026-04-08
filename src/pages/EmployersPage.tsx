import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Search,
  Filter,
  Clock,
  DollarSign,
  Award,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function EmployersPage() {
  const benefits = [
    {
      icon: Users,
      title: "Access 50,000+ Pre-Vetted Professionals",
      description: "Every candidate is verified for skills, certifications, and experience. No more sifting through unqualified applicants.",
      color: "primary"
    },
    {
      icon: Target,
      title: "AI-Powered Candidate Matching",
      description: "Our algorithm analyzes your requirements and matches you with the perfect cybersecurity talent in minutes, not weeks.",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Reduce Time-to-Hire by 60%",
      description: "Streamlined workflow from posting to interview. Average hire time reduced from 45 days to just 18 days.",
      color: "emerald"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption, compliance with GDPR/CCPA, and regular security audits to protect your data.",
      color: "purple"
    }
  ];

  const features = [
    {
      title: "Smart Job Posting",
      description: "AI-powered job descriptions that attract the right talent",
      icon: Zap
    },
    {
      title: "Advanced Filtering",
      description: "Filter by skills, certifications, experience level, and more",
      icon: Filter
    },
    {
      title: "Real-time Analytics",
      description: "Track views, applications, and candidate quality metrics",
      icon: TrendingUp
    },
    {
      title: "ATS Integration",
      description: "Seamless integration with your existing applicant tracking system",
      icon: Building2
    }
  ];

  const stats = [
    { value: "500+", label: "Companies Trust Us" },
    { value: "60%", label: "Faster Hiring" },
    { value: "98%", label: "Match Accuracy" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080808_1px,transparent_1px),linear-gradient(to_bottom,#8080808_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-8 backdrop-blur-sm">
              <Building2 className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">For Employers</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
              Hire Top 
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent"> Cybersecurity Talent</span>
              <br />
              Faster Than Ever
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Stop wasting time on generic job boards. Access a curated pool of verified cybersecurity professionals 
              with <span className="text-primary font-semibold">AI-powered matching</span> that understands your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center mb-16">
              <Button asChild size="lg" className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 group">
                <Link to="/employers/signup" className="flex items-center gap-3">
                  <Users className="h-5 w-5" />
                  Start Hiring
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg font-bold border-white/10 glass hover:bg-white/5 transition-all">
                <Link to="/demo" className="flex items-center gap-3">
                  <Search className="h-5 w-5" />
                  Schedule Demo
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="text-3xl lg:text-4xl font-black text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Why Leading Security Companies
              <br />
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Choose Cykruit</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built specifically for cybersecurity hiring. No more compromises, no more generic solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
              >
                <Card className="relative h-full bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-border/50 group-hover:border-primary/20 transition-all duration-500 shadow-soft">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`h-16 w-16 rounded-2xl bg-${benefit.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-500`}>
                        <benefit.icon className={`h-8 w-8 text-${benefit.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Everything You Need to
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Hire Smarter</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful tools designed specifically for cybersecurity recruitment workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                <Card className="p-6 hover:scale-105 transition-all duration-300 shadow-soft">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-12 text-center max-w-4xl mx-auto shadow-soft"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Transform Your Hiring?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 500+ companies already using Cykruit to hire top cybersecurity talent faster and more effectively.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
              <Button asChild size="lg" className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 group">
                <Link to="/employers/signup" className="flex items-center gap-3">
                  <Zap className="h-5 w-5" />
                  Get Started Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>No setup fee</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
