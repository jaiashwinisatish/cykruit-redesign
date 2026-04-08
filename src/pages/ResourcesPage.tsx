import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Download, 
  Video, 
  FileText, 
  TrendingUp, 
  Award,
  Users,
  Clock,
  Star,
  ArrowRight,
  Search,
  Filter,
  Calendar,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function ResourcesPage() {
  const categories = [
    {
      title: "Career Guides",
      description: "Comprehensive guides for cybersecurity career advancement",
      icon: BookOpen,
      color: "primary",
      count: "25+ guides",
      items: [
        "How to Become a Penetration Tester",
        "SOC Analyst Career Path",
        "Cloud Security Certification Guide",
        "CISO Career Roadmap",
        "Incident Response Best Practices"
      ]
    },
    {
      title: "Interview Prep",
      description: "Ace your cybersecurity interviews with expert tips",
      icon: Award,
      color: "emerald",
      count: "50+ questions",
      items: [
        "Technical Interview Questions",
        "Behavioral Interview Guide",
        "Salary Negotiation Tactics",
        "Portfolio Building Tips",
        "Common Security Scenarios"
      ]
    },
    {
      title: "Video Tutorials",
      description: "Learn from industry experts and practitioners",
      icon: Video,
      color: "blue",
      count: "100+ videos",
      items: [
        "Network Security Fundamentals",
        "Penetration Testing Demo",
        "Cloud Security Setup",
        "SIEM Configuration",
        "Threat Hunting Techniques"
      ]
    },
    {
      title: "Templates & Tools",
      description: "Downloadable resources for your job search",
      icon: Download,
      color: "purple",
      count: "30+ downloads",
      items: [
        "Resume Templates",
        "Cover Letter Examples",
        "Skills Assessment Matrix",
        "Portfolio Templates",
        "Certification Tracker"
      ]
    }
  ];

  const featuredResources = [
    {
      title: "Ultimate Cybersecurity Resume Guide",
      description: "Step-by-step guide to crafting a resume that gets you hired",
      type: "Guide",
      duration: "15 min read",
      category: "Career",
      rating: 4.9,
      downloads: "12.5K",
      icon: FileText
    },
    {
      title: "OSCP Exam Preparation Course",
      description: "Complete preparation guide for OSCP certification",
      type: "Course",
      duration: "8 hours",
      category: "Certification",
      rating: 4.8,
      downloads: "8.2K",
      icon: Award
    },
    {
      title: "Penetration Testing Workshop",
      description: "Hands-on workshop with real-world scenarios",
      type: "Workshop",
      duration: "3 hours",
      category: "Skills",
      rating: 4.9,
      downloads: "6.7K",
      icon: Video
    }
  ];

  const stats = [
    { value: "200+", label: "Resources Available" },
    { value: "50K+", label: "Downloads" },
    { value: "4.8", label: "Average Rating" },
    { value: "15", label: "Expert Contributors" }
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
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Resources</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
              Cybersecurity
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">Learning Hub</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Access expert-curated resources to advance your cybersecurity career. 
              <span className="text-primary font-semibold">From interview prep to technical tutorials</span> - everything you need to succeed.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search resources, guides, tutorials..."
                  className="w-full h-14 pl-12 pr-4 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-card transition-all"
                />
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
                  <div className="text-3xl font-black text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
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
              Explore by
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Category</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find exactly what you need with our organized resource library.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, i) => (
              <motion.div
                key={category.title}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
              >
                <Card className="relative h-full bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-border/50 group-hover:border-primary/20 transition-all duration-500 shadow-soft">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`h-16 w-16 rounded-2xl bg-${category.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-500`}>
                        <category.icon className={`h-8 w-8 text-${category.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Count Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                      <span className="text-xs font-bold text-primary">{category.count}</span>
                    </div>

                    {/* Items List */}
                    <div className="space-y-3">
                      {category.items.slice(0, 3).map((item, j) => (
                        <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-border/30">
                      <div className="flex items-center gap-2 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500">
                        View All
                        <ArrowRight className="h-3 w-3" />
                      </div>
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100 duration-500">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
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
              Featured
              <br />
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Resources</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hand-picked resources that cybersecurity professionals love most.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, i) => (
              <motion.div
                key={resource.title}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                <Card className="relative h-full bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-border/50 group-hover:border-primary/20 transition-all duration-500 shadow-soft hover:scale-[1.02]">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <resource.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                            {resource.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs border-border/50">
                            {resource.category}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {resource.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 group-hover:text-foreground/80 transition-colors">
                      {resource.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{resource.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-amber-400 fill-current" />
                        <span>{resource.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        <span>{resource.downloads}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/30">
                      <Button variant="ghost" size="sm" className="h-9 text-xs font-semibold text-primary hover:bg-primary/10 transition-all">
                        Preview
                      </Button>
                      <Button size="sm" className="h-9 text-xs font-semibold bg-primary hover:bg-primary/90 transition-all hover:scale-105 active:scale-95">
                        Download
                      </Button>
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
                <Target className="h-8 w-8 text-primary" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Can't Find What You Need?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're constantly adding new resources. Join our newsletter to get the latest cybersecurity learning materials delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 group">
                <span className="flex items-center gap-3">
                  Subscribe to Newsletter
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>Weekly updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>Exclusive content</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
