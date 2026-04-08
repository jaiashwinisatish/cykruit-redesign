import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  MoreVertical,
  ChevronRight,
  Filter,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Send,
  Briefcase
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const APPLIED_JOBS = [
  { 
    id: 1,
    company: "CloudSec Inc.", 
    role: "Senior Security Analyst", 
    date: "April 05, 2026", 
    location: "Remote",
    status: "In Review",
    members: 12,
    type: "Full-time",
    salary: "$120k - $150k",
    nextStep: "Technical assessment",
    daysAgo: 2
  },
  { 
    id: 2,
    company: "DefenseForce", 
    role: "SOC Analyst Level II", 
    date: "March 28, 2026", 
    location: "Washington, DC",
    status: "Interview",
    members: 45,
    type: "Full-time",
    salary: "$90k - $120k",
    nextStep: "Interview scheduled for April 12",
    daysAgo: 10
  },
  { 
    id: 3,
    company: "IronWall Systems", 
    role: "Cybersec Engineer", 
    date: "March 20, 2026", 
    location: "Remote",
    status: "Declined",
    members: 8,
    type: "Contract",
    salary: "$130k - $160k",
    nextStep: "Position filled",
    daysAgo: 18
  },
  { 
    id: 4,
    company: "Guardian Data", 
    role: "Encryption Specialist", 
    date: "March 15, 2026", 
    location: "Austin, TX",
    status: "Applied",
    members: 22,
    type: "Full-time",
    salary: "$100k - $130k",
    nextStep: "Awaiting review",
    daysAgo: 23
  },
  { 
    id: 5,
    company: "CyberShield LLC", 
    role: "Penetration Tester", 
    date: "March 10, 2026", 
    location: "San Francisco, CA",
    status: "Interview",
    members: 34,
    type: "Full-time",
    salary: "$110k - $140k",
    nextStep: "Final round interview",
    daysAgo: 28
  },
  { 
    id: 6,
    company: "SecureNet Solutions", 
    role: "Security Consultant", 
    date: "March 05, 2026", 
    location: "New York, NY",
    status: "Offer",
    members: 67,
    type: "Full-time",
    salary: "$125k - $155k",
    nextStep: "Offer received - $135k",
    daysAgo: 33
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "In Review":
      return <Badge className="status-info px-3 py-1 rounded-full text-xs font-semibold">In Review</Badge>;
    case "Interview":
      return <Badge className="status-success px-3 py-1 rounded-full text-xs font-semibold">Interviewing</Badge>;
    case "Declined":
      return <Badge className="status-error px-3 py-1 rounded-full text-xs font-semibold">Declined</Badge>;
    case "Offer":
      return <Badge className="bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 text-emerald-600 border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold">Offer</Badge>;
    default:
      return <Badge className="bg-muted/50 text-muted-foreground px-3 py-1 rounded-full text-xs font-semibold border-border/50">Applied</Badge>;
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "In Review":
      return <Eye className="h-4 w-4 text-blue-500" />;
    case "Interview":
      return <CheckCircle className="h-4 w-4 text-emerald-500" />;
    case "Declined":
      return <XCircle className="h-4 w-4 text-red-500" />;
    case "Offer":
      return <TrendingUp className="h-4 w-4 text-emerald-500" />;
    default:
      return <Clock className="h-4 w-4 text-muted-foreground" />;
  }
};

export default function AppliedJobs() {
  const [statusFilter, setStatusFilter] = useState("");
  const [sortBy, setSortBy] = useState("date");
  
  const filteredJobs = APPLIED_JOBS.filter(job => {
    if (statusFilter === "") return true;
    return job.status === statusFilter;
  }).sort((a, b) => {
    if (sortBy === "date") return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (sortBy === "company") return a.company.localeCompare(b.company);
    return 0;
  });

  const stats = {
    total: APPLIED_JOBS.length,
    inReview: APPLIED_JOBS.filter(j => j.status === "In Review").length,
    interviewing: APPLIED_JOBS.filter(j => j.status === "Interview").length,
    offers: APPLIED_JOBS.filter(j => j.status === "Offer").length,
    declined: APPLIED_JOBS.filter(j => j.status === "Declined").length,
  };

  return (
    <div className="space-y-8 pb-12 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Applied Jobs</h1>
          <p className="text-muted-foreground text-lg">Track your job applications and their status. You have {stats.total} active applications.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90">
            <Briefcase className="h-4 w-4 mr-2" />
            Browse Jobs
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 card-hover-soft">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/10">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.total}</p>
                  <p className="text-xs text-muted-foreground">Total Applied</p>
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
                <div className="p-2 rounded-xl bg-blue-500/10">
                  <Eye className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.inReview}</p>
                  <p className="text-xs text-muted-foreground">In Review</p>
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
                <div className="p-2 rounded-xl bg-emerald-500/10">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.interviewing}</p>
                  <p className="text-xs text-muted-foreground">Interviewing</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 card-hover-soft">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/10">
                  <TrendingUp className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.offers}</p>
                  <p className="text-xs text-muted-foreground">Offers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 card-hover-soft">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-red-500/10">
                  <XCircle className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.declined}</p>
                  <p className="text-xs text-muted-foreground">Declined</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Filter by status:</span>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40 rounded-xl">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Status</SelectItem>
                <SelectItem value="Applied">Applied</SelectItem>
                <SelectItem value="In Review">In Review</SelectItem>
                <SelectItem value="Interview">Interview</SelectItem>
                <SelectItem value="Offer">Offer</SelectItem>
                <SelectItem value="Declined">Declined</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-32 rounded-xl">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="company">Company</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filteredJobs.length}</span> of <span className="font-semibold text-foreground">{stats.total}</span> applications
        </div>
      </div>

      {/* Applications Table */}
      <Card className="border-border/50 shadow-premium overflow-hidden bg-gradient-to-br from-card to-card/50">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Company & Role</th>
                <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Applied</th>
                <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Next Step</th>
                <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Location</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-muted-foreground uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              <AnimatePresence mode="popLayout">
                {filteredJobs.map((job, i) => (
                  <motion.tr 
                    key={job.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.05 }}
                    className="group hover:bg-primary/5 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center font-bold text-primary group-hover:scale-105 transition-transform shadow-soft">
                          {job.company.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-balance">{job.role}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <Building2 className="h-3 w-3" /> {job.company}
                            </p>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">{job.type}</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-primary font-medium">{job.salary}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 opacity-50" />
                          {job.date}
                        </div>
                        <p className="text-xs text-muted-foreground">{job.daysAgo} days ago</p>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(job.status)}
                        {getStatusBadge(job.status)}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm text-muted-foreground max-w-xs truncate">{job.nextStep}</p>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 opacity-50" />
                        {job.location}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                         <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/10">
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full hover:bg-primary/10">
                              <MoreVertical className="h-4 w-4 text-muted-foreground" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="rounded-xl border-border shadow-soft">
                            <DropdownMenuItem className="rounded-lg hover:bg-primary/10">View Details</DropdownMenuItem>
                            <DropdownMenuItem className="rounded-lg hover:bg-primary/10">Update Status</DropdownMenuItem>
                            <DropdownMenuItem className="rounded-lg hover:bg-primary/10">Add Note</DropdownMenuItem>
                            <DropdownMenuItem className="rounded-lg text-destructive hover:bg-destructive/10">Withdraw Application</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </Card>
      
      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="h-20 w-20 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
            <Briefcase className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No applications found</h3>
          <p className="text-muted-foreground">Try adjusting your filters or browse for new opportunities.</p>
        </div>
      )}
      
      {filteredJobs.length > 0 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredJobs.length}</span> of <span className="font-semibold text-foreground">{stats.total}</span> applications
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="px-4 rounded-xl disabled:opacity-50" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="px-4 rounded-xl bg-primary/5 text-primary border-primary/20">
              1
            </Button>
            <Button variant="outline" size="sm" className="px-4 rounded-xl">
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
