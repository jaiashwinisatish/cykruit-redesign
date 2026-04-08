import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  MapPin, 
  Bookmark, 
  Trash2,
  ExternalLink,
  ChevronRight,
  Briefcase,
  Heart,
  Search,
  Filter,
  Calendar,
  Clock,
  Send,
  Star,
  TrendingUp
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SAVED_JOBS = [
  { 
    id: 1,
    company: "IronWall Systems", 
    role: "Cybersec Engineer", 
    salary: "$130k - $160k",
    type: "Full-time",
    location: "Remote",
    tags: ["AWS", "Zero Trust", "Go", "Kubernetes"],
    postedDate: "3 days ago",
    experience: "Senior Level",
    matchScore: 95,
    description: "Lead cybersecurity engineering role focusing on cloud security and zero trust architecture."
  },
  { 
    id: 2,
    company: "Guardian Data", 
    role: "Encryption Specialist", 
    salary: "$110k - $140k",
    type: "Contract",
    location: "Austin, TX",
    tags: ["Cryptography", "C++", "OIDC", "Blockchain"],
    postedDate: "1 week ago",
    experience: "Mid Level",
    matchScore: 88,
    description: "Specialized role in encryption and cryptographic systems development."
  },
  { 
    id: 3,
    company: "NeoSecurity", 
    role: "SOC Analyst Level II", 
    salary: "$90k - $120k",
    type: "Full-time",
    location: "New York, NY",
    tags: ["SIEM", "Splunk", "Incident Response", "Threat Detection"],
    postedDate: "2 weeks ago",
    experience: "Mid Level",
    matchScore: 82,
    description: "Security operations center analyst role with focus on threat detection and incident response."
  },
  { 
    id: 4,
    company: "CyberShield Pro", 
    role: "Penetration Tester", 
    salary: "$120k - $150k",
    type: "Full-time",
    location: "San Francisco, CA",
    tags: ["Penetration Testing", "Metasploit", "Burp Suite", "Nmap"],
    postedDate: "4 days ago",
    experience: "Senior Level",
    matchScore: 91,
    description: "Senior penetration testing role for enterprise security assessments."
  },
  { 
    id: 5,
    company: "SecureFlow", 
    role: "DevSecOps Engineer", 
    salary: "$125k - $155k",
    type: "Full-time",
    location: "Remote",
    tags: ["DevOps", "CI/CD", "Docker", "Kubernetes", "Terraform"],
    postedDate: "5 days ago",
    experience: "Senior Level",
    matchScore: 89,
    description: "DevSecOps role focusing on integrating security into CI/CD pipelines."
  },
  { 
    id: 6,
    company: "ThreatIntel Inc", 
    role: "Threat Intelligence Analyst", 
    salary: "$100k - $130k",
    type: "Full-time",
    location: "Washington, DC",
    tags: ["Threat Intelligence", "Malware Analysis", "OSINT", "SIEM"],
    postedDate: "1 week ago",
    experience: "Mid Level",
    matchScore: 85,
    description: "Analyze and respond to emerging cyber threats and develop intelligence reports."
  }
];

export default function SavedJobs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("match");
  const [savedJobs, setSavedJobs] = useState(SAVED_JOBS);
  
  const filteredJobs = savedJobs.filter(job => 
    job.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  ).sort((a, b) => {
    if (sortBy === "match") return b.matchScore - a.matchScore;
    if (sortBy === "date") return 0; // Would need actual dates
    if (sortBy === "salary") return 0; // Would need salary parsing
    return 0;
  });

  const removeJob = (jobId: number) => {
    setSavedJobs(prev => prev.filter(job => job.id !== jobId));
  };

  const stats = {
    total: savedJobs.length,
    highMatch: savedJobs.filter(j => j.matchScore >= 90).length,
    recent: savedJobs.filter(j => j.postedDate.includes("day")).length,
  };

  return (
    <div className="space-y-8 pb-12 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Saved Jobs</h1>
          <p className="text-muted-foreground text-lg">Your curated list of opportunities. You have {stats.total} saved positions.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90">
            <Briefcase className="h-4 w-4 mr-2" />
            Browse More Jobs
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 card-hover-soft">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.total}</p>
                  <p className="text-xs text-muted-foreground">Total Saved</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 card-hover-soft">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10">
                  <TrendingUp className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.highMatch}</p>
                  <p className="text-xs text-muted-foreground">High Match (90%+)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 card-hover-soft">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/10">
                  <Clock className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.recent}</p>
                  <p className="text-xs text-muted-foreground">Posted This Week</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search saved jobs..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 rounded-xl border-border bg-card shadow-sm focus:ring-primary/20 focus:border-primary"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-32 rounded-xl">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="match">Match Score</SelectItem>
                <SelectItem value="date">Date Posted</SelectItem>
                <SelectItem value="salary">Salary</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filteredJobs.length}</span> of <span className="font-semibold text-foreground">{stats.total}</span> saved jobs
        </div>
      </div>

      {/* Saved Jobs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredJobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="border-border/50 hover:border-primary/20 transition-all group shadow-sm hover:shadow-premium card-hover-soft overflow-hidden h-full bg-gradient-to-br from-card to-card/50">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center font-bold text-primary group-hover:scale-105 transition-transform shadow-soft">
                        {job.company.charAt(0)}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${
                                i < Math.floor(job.matchScore / 20) 
                                  ? "text-amber-500 fill-current" 
                                  : "text-muted-foreground"
                              }`} 
                            />
                          ))}
                        </div>
                        <span className="text-xs font-semibold text-foreground">{job.matchScore}%</span>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full transition-colors"
                      onClick={() => removeJob(job.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors cursor-pointer text-balance">
                        {job.role}
                      </h3>
                      <p className="text-sm font-semibold text-primary mb-2">{job.company}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">{job.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-lg">
                        <MapPin className="h-3 w-3" /> {job.location}
                      </span>
                      <span className="flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-lg">
                        <Briefcase className="h-3 w-3" /> {job.type}
                      </span>
                      <span className="flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-lg">
                        <span className="font-semibold text-primary">{job.salary}</span>
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.tags.slice(0, 4).map(tag => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className="bg-muted/50 text-muted-foreground text-xs px-2 py-1 border-transparent hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {job.tags.length > 4 && (
                        <Badge variant="secondary" className="bg-muted/50 text-muted-foreground text-xs px-2 py-1">
                          +{job.tags.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 space-y-3 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>Posted {job.postedDate}</span>
                      </div>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {job.experience}
                      </span>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button className="flex-1 rounded-xl font-semibold btn-premium h-10">
                        Apply Now <Send className="h-3 w-3 ml-2" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl hover:bg-primary/10">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="h-20 w-20 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
            <Heart className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No saved jobs found</h3>
          <p className="text-muted-foreground">Try adjusting your search or browse for new opportunities to save.</p>
        </div>
      )}
    </div>
  );
}
