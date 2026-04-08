import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  Award, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight,
  Video,
  BookOpen,
  Target,
  TrendingUp,
  Calendar,
  Star,
  Shield,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function TrainerPage() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn Premium Rates",
      description: "Set your own rates and earn up to $200/hour teaching cybersecurity skills to eager learners worldwide.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Build Your Brand",
      description: "Establish yourself as a cybersecurity expert and grow your professional network through teaching.",
      color: "emerald"
    },
    {
      icon: Award,
      title: "Flexible Schedule",
      description: "Teach when you want, where you want. Complete control over your time and course content.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Platform Support",
      description: "Get marketing support, payment processing, and technical assistance from our dedicated team.",
      color: "purple"
    }
  ];

  const requirements = [
    {
      title: "Industry Experience",
      description: "5+ years in cybersecurity with proven expertise in your chosen specialty",
      icon: Target
    },
    {
      title: "Certifications",
      description: "Relevant industry certifications (CISSP, OSCP, CEH, etc.)",
      icon: Award
    },
    {
      title: "Teaching Skills",
      description: "Ability to explain complex concepts clearly and engage students effectively",
      icon: Users
    },
    {
      title: "Professional Portfolio",
      description: "Demonstrated track record of success in your field",
      icon: Shield
    }
  ];

  const stats = [
    { value: "500+", label: "Active Trainers" },
    { value: "$150/hr", label: "Average Rate" },
    { value: "4.9", label: "Trainer Rating" },
    { value: "10K+", label: "Students Trained" }
  ];

  const successStories = [
    {
      name: "Sarah Mitchell",
      role: "Penetration Testing Expert",
      students: "1,200+",
      earnings: "$120K/year",
      quote: "Cykruit's trainer platform transformed my career. I went from consultant to full-time educator with double the income.",
      avatar: "SM"
    },
    {
      name: "David Chen",
      role: "Cloud Security Specialist",
      students: "800+",
      earnings: "$95K/year",
      quote: "The platform handles all the business side so I can focus on what I love - teaching cloud security.",
      avatar: "DC"
    },
    {
      name: "Maria Rodriguez",
      role: "SOC Analyst Trainer",
      students: "2,000+",
      earnings: "$180K/year",
      quote: "I've built a global student base and created multiple best-selling courses through Cykruit.",
      avatar: "MR"
    }
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
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Become a Trainer</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
              Share Your 
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">Cybersecurity Expertise</span>
              <br />
              & Earn Premium Rates
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Turn your cybersecurity expertise into a thriving teaching career. 
              <span className="text-primary font-semibold">Set your own schedule, your own rates, and reach thousands of eager learners.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center mb-16">
              <Button asChild size="lg" className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 group">
                <Link to="/trainer/signup" className="flex items-center gap-3">
                  <Zap className="h-5 w-5" />
                  Start Teaching Today
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Free to join</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Keep 70% of revenue</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
              Why Teach on
              <br />
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Cykruit?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The most rewarding platform for cybersecurity professionals to share their knowledge and grow their income.
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
                        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
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

      {/* Requirements Section */}
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
              Trainer
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Requirements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We maintain high standards to ensure quality education for our students.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {requirements.map((req, i) => (
              <motion.div
                key={req.title}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
              >
                <Card className="relative h-full bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-border/50 group-hover:border-primary/20 transition-all duration-500 shadow-soft">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-500">
                        <req.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                          {req.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                          {req.description}
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

      {/* Success Stories */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Trainer
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet cybersecurity professionals who built thriving teaching careers on Cykruit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, i) => (
              <motion.div
                key={story.name}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
              >
                <Card className="relative h-full bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-border/50 group-hover:border-primary/20 transition-all duration-500 shadow-soft">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                        {story.avatar}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {story.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{story.role}</p>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-muted-foreground italic leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors">
                      "{story.quote}"
                    </blockquote>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-6 border-t border-border/30">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{story.students}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4" />
                          <span>{story.earnings}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="h-4 w-4 text-amber-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
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
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Start Teaching?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 500+ cybersecurity experts already earning premium rates by sharing their knowledge on Cykruit.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
              <Button asChild size="lg" className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 group">
                <Link to="/trainer/signup" className="flex items-center gap-3">
                  <Zap className="h-5 w-5" />
                  Apply to Become Trainer
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Free application</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Quick approval</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
