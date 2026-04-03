import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, DollarSign } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SkeletonCard } from "@/components/common/SkeletonCard";
import { useDebounce } from "@/hooks/useDebounce";
import { JOBS } from "@/lib/data";
import type { Job } from "@/types";

function JobCard({ job }: { job: Job }) {
  return (
    <motion.div
      className="glass rounded-xl p-6 hover:glow-border transition-all duration-300 cursor-pointer group"
      whileHover={{ y: -2, scale: 1.01 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {job.title}
          </h3>
          <p className="text-sm text-primary font-medium mt-1">{job.company}</p>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{job.location}</span>
            <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" />{job.type}</span>
            <span className="flex items-center gap-1"><DollarSign className="h-3 w-3" />{job.salary}</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {job.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-mono">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <span className="text-xs text-muted-foreground">{job.posted}</span>
          <Button size="sm" className="glow-primary">Apply</Button>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{job.description}</p>
    </motion.div>
  );
}

function JobsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const filtered = JOBS.filter(
    (job) =>
      job.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      job.company.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      job.tags.some((t) => t.toLowerCase().includes(debouncedSearch.toLowerCase()))
  );

  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Cybersecurity <span className="text-gradient-cyber">Jobs</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Browse top cybersecurity positions from leading companies worldwide.
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search roles, companies, or skills..."
                className="pl-11 h-12 glass text-base"
              />
            </div>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
            ) : filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No jobs found matching "{debouncedSearch}"</p>
              </div>
            ) : (
              filtered.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <JobCard job={job} />
                </motion.div>
              ))
            )}
          </div>

          {!loading && filtered.length > 0 && (
            <p className="text-center text-sm text-muted-foreground mt-8">
              Showing {filtered.length} of {JOBS.length} positions
            </p>
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
