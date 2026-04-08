import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  SlidersHorizontal, 
  ChevronRight,
  Bookmark,
  Send,
  Clock,
  Building,
  Users,
  Filter,
  X,
  TrendingUp,
  Star
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { JOBS } from "@/lib/data";

const JOB_TYPES = ["Full-time", "Part-time", "Contract", "Internship", "Remote"];
const EXPERIENCE_LEVELS = ["Entry Level", "Mid Level", "Senior Level", "Lead", "Director"];
const SALARY_RANGES = ["$0-50k", "$50-100k", "$100-150k", "$150k+"];

export default function BrowseJobs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedSalary, setSelectedSalary] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  
  const filteredJobs = useMemo(() => {
    return JOBS.filter(job => {
      const matchesSearch = searchQuery === "" || 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesType = selectedType === "" || job.type === selectedType;
      const matchesExperience = selectedExperience === "" || job.experience === selectedExperience;
      const matchesSalary = selectedSalary === "" || job.salaryRange === selectedSalary;
      
      return matchesSearch && matchesType && matchesExperience && matchesSalary;
    });
  }, [searchQuery, selectedType, selectedExperience, selectedSalary]);

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Browse Jobs</h1>
          <p className="text-muted-foreground text-lg">Find your next opportunity in cybersecurity. {filteredJobs.length} jobs available.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search jobs, companies, or skills..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 rounded-xl border-border bg-card shadow-sm focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-xl shrink-0 h-11 w-11"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Filters */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-soft"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Filters</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Job Type</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="All types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All types</SelectItem>
                    {JOB_TYPES.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Experience Level</label>
                <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="All levels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All levels</SelectItem>
                    {EXPERIENCE_LEVELS.map(level => (
                      <SelectItem key={level} value={level}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Salary Range</label>
                <Select value={selectedSalary} onValueChange={setSelectedSalary}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="All ranges" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All ranges</SelectItem>
                    {SALARY_RANGES.map(range => (
                      <SelectItem key={range} value={range}>{range}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => {
                  setSelectedType("");
                  setSelectedExperience("");
                  setSelectedSalary("");
                }}
              >
                Clear All
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Filters */}
      {(selectedType || selectedExperience || selectedSalary) && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {selectedType && (
            <Badge variant="secondary" className="gap-1">
              {selectedType}
              <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedType("")} />
            </Badge>
          )}
          {selectedExperience && (
            <Badge variant="secondary" className="gap-1">
              {selectedExperience}
              <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedExperience("")} />
            </Badge>
          )}
          {selectedSalary && (
            <Badge variant="secondary" className="gap-1">
              {selectedSalary}
              <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedSalary("")} />
            </Badge>
          )}
        </div>
      )}

      {/* Job Listings */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredJobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="border-border/50 hover:border-primary/20 transition-all group overflow-hidden shadow-sm hover:shadow-premium card-hover-soft bg-gradient-to-br from-card to-card/50">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row items-stretch">
                    <div className="p-6 flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors cursor-pointer text-balance">
                              {job.title}
                            </h3>
                            {i < 2 && (
                              <Badge className="bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 text-emerald-600 border-emerald-500/20 text-[10px] uppercase font-bold py-1 px-2">
                                New
                              </Badge>
                            )}
                            {job.featured && (
                              <Badge className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 text-amber-600 border-amber-500/20 text-[10px] uppercase font-bold py-1 px-2">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <p className="text-base font-semibold text-primary">{job.company}</p>
                            <div className="flex items-center gap-1 text-amber-500">
                              {[...Array(4)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-current" />
                              ))}
                              <span className="text-xs text-muted-foreground ml-1">(4.8)</span>
                            </div>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className={`h-10 w-10 rounded-full hover:bg-primary/10 transition-colors ${
                            savedJobs.includes(job.id) ? "text-primary bg-primary/10" : "text-muted-foreground"
                          }`}
                          onClick={() => toggleSaveJob(job.id)}
                        >
                          <Bookmark className={`h-4 w-4 ${savedJobs.includes(job.id) ? "fill-current" : ""}`} />
                        </Button>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{job.description}</p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-lg">
                          <MapPin className="h-4 w-4" /> {job.location}
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-lg">
                          <Briefcase className="h-4 w-4" /> {job.type}
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-lg">
                          <DollarSign className="h-4 w-4" /> {job.salary}
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-lg">
                          <Users className="h-4 w-4" /> {job.experience}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {job.tags.slice(0, 5).map(tag => (
                          <Badge 
                            key={tag} 
                            variant="secondary" 
                            className="bg-muted/50 text-muted-foreground text-xs px-3 py-1 border-transparent hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {job.tags.length > 5 && (
                          <Badge variant="secondary" className="bg-muted/50 text-muted-foreground text-xs px-3 py-1">
                            +{job.tags.length - 5} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-muted/30 to-muted/10 lg:w-64 p-6 flex flex-col justify-center gap-3 border-t lg:border-t-0 lg:border-l border-border/50">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Clock className="h-4 w-4" />
                        <span>Posted {job.postedDate}</span>
                      </div>
                      <Button className="w-full rounded-xl font-semibold gap-2 btn-premium h-11">
                        Apply Now <Send className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full rounded-xl text-sm font-semibold gap-2 h-10 hover:bg-primary/10">
                        View Details <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="h-20 w-20 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
              <Search className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No jobs found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters to find more opportunities.</p>
          </div>
        )}
      </div>
    </div>
  );
}
