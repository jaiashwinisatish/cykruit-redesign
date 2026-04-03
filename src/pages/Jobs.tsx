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
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative bg-card/40 backdrop-blur-md rounded-xl p-6 border border-white/5 hover:border-primary/40 transition-all duration-500 cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
        <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 relative z-10">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
              {job.title}
            </h3>
            {index < 2 && (
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-[10px] py-0 h-5 px-2 font-mono uppercase tracking-wider">New</Badge>
            )}
          </div>
          <p className="text-sm text-primary/80 font-semibold mb-4 flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-primary" />
            {job.company}
          </p>

          <div className="flex flex-wrap items-center gap-5 text-xs text-muted-foreground font-medium">
            <span className="flex items-center gap-1.5 hover:text-foreground transition-colors group/item"><MapPin className="h-3.5 w-3.5 text-primary/60 group-hover/item:text-primary transition-colors" />{job.location}</span>
            <span className="flex items-center gap-1.5 hover:text-foreground transition-colors group/item"><Briefcase className="h-3.5 w-3.5 text-primary/60 group-hover/item:text-primary transition-colors" />{job.type}</span>
            <span className="flex items-center gap-1.5 hover:text-foreground transition-colors group/item"><DollarSign className="h-3.5 w-3.5 text-primary/60 group-hover/item:text-primary transition-colors" />{job.salary}</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {job.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-muted/30 text-muted-foreground border-transparent hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all text-[11px] font-mono py-0.5">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end justify-between self-stretch gap-4">
          <div className="flex flex-col items-end gap-1.5">
            <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest bg-muted/20 px-2 py-0.5 rounded flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              {job.posted}
            </span>
            <div className="flex gap-2">
              <Badge variant="outline" className="bg-cyber-purple/5 text-cyber-purple border-cyber-purple/10 text-[9px] py-0 h-4 px-1.5 font-bold uppercase tracking-tighter">
                {job.experience}
              </Badge>
              <Badge variant="outline" className="bg-accent/5 text-accent border-accent/10 text-[9px] py-0 h-4 px-1.5 font-bold uppercase tracking-tighter">
                {job.industry}
              </Badge>
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="sm" className="glow-primary px-6 h-9 group/btn relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Apply Now
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-background-shine bg-[length:200%_100%] opacity-0 group-hover/btn:opacity-50 transition-opacity" />
            </Button>
          </motion.div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mt-6 leading-relaxed relative z-10 font-medium group-hover:text-foreground/80 transition-colors">
        {job.description}
      </p>
    </motion.div>
  );
}

interface FilterProps {
  filters: any;
  setFilters: React.Dispatch<React.SetStateAction<any>>;
  industries: string[];
  isMobile?: boolean;
  filteredCount?: number;
}

const JobFilterBar = ({ filters, setFilters, industries, isMobile = false }: FilterProps) => (
  <div className={`flex ${isMobile ? "flex-col" : "flex-wrap"} gap-4 items-center`}>
    <Select value={filters.type} onValueChange={(val) => setFilters(f => ({ ...f, type: val }))}>
      <SelectTrigger className={`glass h-10 ${isMobile ? "w-full" : "w-[140px]"}`}>
        <SelectValue placeholder="Job Type" />
      </SelectTrigger>
      <SelectContent className="glass-strong border-white/10">
        <SelectItem value="all">All Types</SelectItem>
        <SelectItem value="Full-time">Full-time</SelectItem>
        <SelectItem value="Part-time">Part-time</SelectItem>
        <SelectItem value="Contract">Contract</SelectItem>
        <SelectItem value="Internship">Internship</SelectItem>
      </SelectContent>
    </Select>

    <Select value={filters.date} onValueChange={(val) => setFilters(f => ({ ...f, date: val }))}>
      <SelectTrigger className={`glass h-10 ${isMobile ? "w-full" : "w-[150px]"}`}>
        <SelectValue placeholder="Date Posted" />
      </SelectTrigger>
      <SelectContent className="glass-strong border-white/10">
        <SelectItem value="all">Any Time</SelectItem>
        <SelectItem value="past-24h">Past 24 Hours</SelectItem>
        <SelectItem value="past-week">Past Week</SelectItem>
        <SelectItem value="past-month">Past Month</SelectItem>
      </SelectContent>
    </Select>

    <Select value={filters.workMode} onValueChange={(val) => setFilters(f => ({ ...f, workMode: val }))}>
      <SelectTrigger className={`glass h-10 ${isMobile ? "w-full" : "w-[140px]"}`}>
        <SelectValue placeholder="Work Mode" />
      </SelectTrigger>
      <SelectContent className="glass-strong border-white/10">
        <SelectItem value="all">All Modes</SelectItem>
        <SelectItem value="Remote">Remote</SelectItem>
        <SelectItem value="Hybrid">Hybrid</SelectItem>
        <SelectItem value="On-site">On-site</SelectItem>
      </SelectContent>
    </Select>

    <Select value={filters.experience} onValueChange={(val) => setFilters(f => ({ ...f, experience: val }))}>
      <SelectTrigger className={`glass h-10 ${isMobile ? "w-full" : "w-[140px]"}`}>
        <SelectValue placeholder="Experience" />
      </SelectTrigger>
      <SelectContent className="glass-strong border-white/10">
        <SelectItem value="all">Any Level</SelectItem>
        <SelectItem value="Junior">Junior</SelectItem>
        <SelectItem value="Mid">Mid Level</SelectItem>
        <SelectItem value="Senior">Senior</SelectItem>
        <SelectItem value="Lead">Lead Level</SelectItem>
      </SelectContent>
    </Select>

    <Select value={filters.industry} onValueChange={(val) => setFilters(f => ({ ...f, industry: val }))}>
      <SelectTrigger className={`glass h-10 ${isMobile ? "w-full" : "w-[150px]"}`}>
        <SelectValue placeholder="Industry" />
      </SelectTrigger>
      <SelectContent className="glass-strong border-white/10">
        <SelectItem value="all">All Industries</SelectItem>
        {industries.map(ind => (
          <SelectItem key={ind} value={ind}>{ind}</SelectItem>
        ))}
      </SelectContent>
    </Select>

    <div className={`${isMobile ? "w-full pt-4 border-t border-white/10 mt-2" : "ml-auto"} flex items-center gap-4`}>
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground whitespace-nowrap">Sort by:</span>
        <Select value={filters.sort} onValueChange={(val) => setFilters(f => ({ ...f, sort: val }))}>
          <SelectTrigger className="h-8 w-[120px] bg-transparent border-none text-xs font-bold ring-0 focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="glass-strong border-white/10">
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="salary-high">Salary: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {(filters.type !== "all" || filters.date !== "all" || filters.workMode !== "all" || filters.experience !== "all" || filters.industry !== "all") && (
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setFilters({ type: "all", date: "all", sort: "newest", workMode: "all", experience: "all", industry: "all" })}
          className="text-xs text-primary hover:text-primary/80 h-8 gap-1.5"
        >
          <X className="h-3 w-3" />
          Clear
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
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredJobs = useMemo(() => {
    let result = JOBS.filter((job) => {
      // Search matching
      const matchesSearch = 
        job.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        job.company.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        job.tags.some((t) => t.toLowerCase().includes(debouncedSearch.toLowerCase()));
      
      if (!matchesSearch) return false;

      // Type matching
      if (filters.type !== "all" && job.type !== filters.type) return false;

      // Work mode matching
      if (filters.workMode !== "all" && job.workMode !== filters.workMode) return false;

      // Experience matching
      if (filters.experience !== "all" && job.experience !== filters.experience) return false;

      // Industry matching
      if (filters.industry !== "all" && job.industry !== filters.industry) return false;

      // Date matching
      if (filters.date !== "all") {
        const now = new Date();
        const postedDate = new Date(job.postedDate);
        const diffInDays = (now.getTime() - postedDate.getTime()) / (1000 * 3600 * 24);
        
        if (filters.date === "past-24h" && diffInDays > 1) return false;
        if (filters.date === "past-week" && diffInDays > 7) return false;
        if (filters.date === "past-month" && diffInDays > 30) return false;
      }

      return true;
    });

    // Sorting
    if (filters.sort === "newest") {
      result.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
    } else if (filters.sort === "salary-high") {
      result.sort((a, b) => b.salaryMax - a.salaryMax);
    }

    return result;
  }, [debouncedSearch, filters]);

  const industries = useMemo(() => Array.from(new Set(JOBS.map(j => j.industry))), []);

  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Cyber-Verified Roles</span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
              Cybersecurity <span className="text-gradient-cyber">Jobs</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find your next role in one of the world's most innovative security teams.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto mb-10 space-y-6">
            {/* Search Bar */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full opacity-50" />
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search roles (e.g. SOC Analyst), companies, or specific technologies..."
                  className="pl-12 h-14 glass text-lg border-white/10 focus:border-primary/40 focus:ring-primary/10 transition-all rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Desktop Filter Bar */}
            <motion.div 
              className="hidden lg:block bg-muted/20 backdrop-blur-md rounded-xl p-3 border border-white/5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <JobFilterBar filters={filters} setFilters={setFilters} industries={industries} />
            </motion.div>

            {/* Mobile Filter Button */}
            <div className="lg:hidden flex justify-between items-center bg-muted/20 backdrop-blur-md rounded-xl p-3 border border-white/5">
              <p className="text-xs font-bold text-muted-foreground ml-2">
                {filteredJobs.length} Results
              </p>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="glass gap-2 border-white/10 hover:border-primary/40">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="glass-strong border-t border-white/10 h-[70vh] rounded-t-3xl">
                  <SheetHeader>
                    <SheetTitle className="text-2xl font-bold text-gradient-cyber">Job Filters</SheetTitle>
                    <SheetDescription>Refine your search to find the perfect role.</SheetDescription>
                  </SheetHeader>
                  <div className="mt-8 overflow-y-auto max-h-[50vh] pr-2">
                    <JobFilterBar filters={filters} setFilters={setFilters} industries={industries} isMobile={true} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-5">
            <AnimatePresence mode="popLayout">
              {loading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <motion.div 
                    key={`skeleton-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <SkeletonCard />
                  </motion.div>
                ))
              ) : filteredJobs.length === 0 ? (
                <motion.div 
                  className="text-center py-24 glass rounded-2xl border border-dashed border-white/10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="h-16 w-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/5">
                    <Search className="h-8 w-8 text-muted-foreground opacity-30" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">No matching jobs found</h3>
                  <p className="text-muted-foreground mb-8">Try adjusting your filters or search terms.</p>
                  <Button 
                    variant="link" 
                    onClick={() => {
                      setSearchQuery("");
                      setFilters({ type: "all", date: "all", sort: "newest", workMode: "all", experience: "all", industry: "all" });
                    }}
                    className="text-primary"
                  >
                    Clear everything and start over
                  </Button>
                </motion.div>
              ) : (
                filteredJobs.map((job, i) => (
                  <JobCard key={job.id} job={job} index={i} />
                ))
              )}
            </AnimatePresence>
          </div>

          {!loading && filteredJobs.length > 0 && (
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-muted-foreground font-medium">
                Showing <span className="text-foreground">{filteredJobs.length}</span> of {JOBS.length} cybersecurity positions
              </p>
            </motion.div>
          )}
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
