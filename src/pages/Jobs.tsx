import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Briefcase, DollarSign, SlidersHorizontal, X, Clock, Calendar, ShieldCheck, ArrowUpRight } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SkeletonCard } from "@/components/common/SkeletonCard";
import { useDebounce } from "@/hooks/useDebounce";
import { JOBS } from "@/lib/data";
import type { Job } from "@/types";

function JobCard({ job, index }: { job: Job; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-premium card-hover"
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {job.title}
            </h3>
            {index < 2 && (
              <Badge variant="secondary" className="bg-primary/10 text-primary border-transparent text-[10px] font-bold uppercase">New</Badge>
            )}
          </div>
          <p className="text-sm font-semibold text-muted-foreground mb-4">
            {job.company}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-medium">
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary/70" />{job.location}</span>
            <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5 text-primary/70" />{job.type}</span>
            <span className="flex items-center gap-1.5"><DollarSign className="h-3.5 w-3.5 text-primary/70" />{job.salary}</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {job.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-muted/50 text-muted-foreground border-border/50 text-[10px] font-medium py-0.5">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end justify-between self-stretch gap-4">
          <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider bg-muted/50 px-2 py-1 rounded-lg flex items-center gap-1.5">
            <Clock className="h-3 w-3" />
            {job.posted}
          </span>
          <Button size="sm" className="px-6 rounded-xl font-bold shadow-sm transition-transform active:scale-95">
            Apply Now
          </Button>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
        {job.description}
      </p>
    </motion.div>
  );
}

const JobFilterBar = ({ filters, setFilters, industries, isMobile = false }: FilterProps) => (
  <div className={`flex ${isMobile ? "flex-col" : "flex-wrap"} gap-3 items-center`}>
    <Select value={filters.type} onValueChange={(val) => setFilters(f => ({ ...f, type: val }))}>
      <SelectTrigger className={`bg-background rounded-xl h-10 border-border ${isMobile ? "w-full" : "w-[140px]"}`}>
        <SelectValue placeholder="Job Type" />
      </SelectTrigger>
      <SelectContent className="rounded-xl border-border">
        <SelectItem value="all">All Types</SelectItem>
        <SelectItem value="Full-time">Full-time</SelectItem>
        <SelectItem value="Part-time">Part-time</SelectItem>
        <SelectItem value="Contract">Contract</SelectItem>
        <SelectItem value="Internship">Internship</SelectItem>
      </SelectContent>
    </Select>

    <Select value={filters.workMode} onValueChange={(val) => setFilters(f => ({ ...f, workMode: val }))}>
      <SelectTrigger className={`bg-background rounded-xl h-10 border-border ${isMobile ? "w-full" : "w-[140px]"}`}>
        <SelectValue placeholder="Work Mode" />
      </SelectTrigger>
      <SelectContent className="rounded-xl border-border">
        <SelectItem value="all">All Modes</SelectItem>
        <SelectItem value="Remote">Remote</SelectItem>
        <SelectItem value="Hybrid">Hybrid</SelectItem>
        <SelectItem value="On-site">On-site</SelectItem>
      </SelectContent>
    </Select>

    <Select value={filters.experience} onValueChange={(val) => setFilters(f => ({ ...f, experience: val }))}>
      <SelectTrigger className={`bg-background rounded-xl h-10 border-border ${isMobile ? "w-full" : "w-[140px]"}`}>
        <SelectValue placeholder="Experience" />
      </SelectTrigger>
      <SelectContent className="rounded-xl border-border">
        <SelectItem value="all">Any Level</SelectItem>
        <SelectItem value="Junior">Junior</SelectItem>
        <SelectItem value="Mid">Mid Level</SelectItem>
        <SelectItem value="Senior">Senior</SelectItem>
        <SelectItem value="Lead">Lead Level</SelectItem>
      </SelectContent>
    </Select>

    <div className={`${isMobile ? "w-full pt-4 border-t mt-2" : "ml-auto"} flex items-center gap-4`}>
       { (filters.type !== "all" || filters.workMode !== "all" || filters.experience !== "all") && (
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setFilters({ type: "all", date: "all", sort: "newest", workMode: "all", experience: "all", industry: "all" })}
          className="text-xs text-primary hover:text-primary/80 h-8 gap-1.5"
        >
          <X className="h-3 w-3" />
          Reset Filters
        </Button>
      )}
    </div>
  </div>
);

function JobsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    type: "all",
    date: "all",
    sort: "newest",
    workMode: "all",
    experience: "all",
    industry: "all",
  });
  
  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredJobs = useMemo(() => {
    let result = JOBS.filter((job) => {
      const matchesSearch = 
        job.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        job.company.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        job.tags.some((t) => t.toLowerCase().includes(debouncedSearch.toLowerCase()));
      
      if (!matchesSearch) return false;
      if (filters.type !== "all" && job.type !== filters.type) return false;
      if (filters.workMode !== "all" && job.workMode !== filters.workMode) return false;
      if (filters.experience !== "all" && job.experience !== filters.experience) return false;
      return true;
    });

    return result;
  }, [debouncedSearch, filters]);

  const industries = useMemo(() => Array.from(new Set(JOBS.map(j => j.industry))), []);

  return (
    <div className="bg-muted/30">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight">
              Opportunities in <span className="text-gradient-primary">Security</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your next role in one of the world's most innovative security teams.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto mb-12 space-y-6">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search roles, companies, or skills..."
                  className="pl-12 h-16 bg-card text-lg border-border focus:ring-primary/10 transition-all rounded-2xl shadow-premium"
                />
              </div>
            </motion.div>

            <motion.div 
              className="hidden lg:block bg-card rounded-2xl p-4 border border-border/50 shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <JobFilterBar filters={filters} setFilters={setFilters} industries={industries} />
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <AnimatePresence mode="popLayout">
              {loading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}><SkeletonCard /></motion.div>
                ))
              ) : filteredJobs.length === 0 ? (
                <div className="text-center py-20 bg-card rounded-3xl border border-dashed border-border">
                  <h3 className="text-xl font-bold mb-2">No jobs found</h3>
                  <p className="text-muted-foreground">Adjust your filters to see more results.</p>
                </div>
              ) : (
                filteredJobs.map((job, i) => (
                  <JobCard key={job.id} job={job} index={i} />
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}

const Jobs = () => (
  <PageWrapper>
    <JobsContent />
  </PageWrapper>
);

export default Jobs;
