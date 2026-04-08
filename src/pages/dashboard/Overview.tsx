import { motion } from "framer-motion";
import { 
  Briefcase, 
  Send, 
  Bookmark, 
  TrendingUp, 
  Clock, 
  ChevronRight,
  ExternalLink,
  User,
  FileText,
  Calendar,
  Award,
  Bell
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const STATS = [
  { label: "Jobs Applied", value: "12", icon: Send, color: "text-blue-600", bg: "bg-blue-500/10", trend: "+3 this week" },
  { label: "Saved Jobs", value: "8", icon: Bookmark, color: "text-indigo-600", bg: "bg-indigo-500/10", trend: "+2 this week" },
  { label: "Profile Views", value: "45", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-500/10", trend: "+12 this week" },
  { label: "Active Interviews", value: "2", icon: Briefcase, color: "text-amber-600", bg: "bg-amber-500/10", trend: "+1 this week" },
];

const RECENT_APPLICATIONS = [
  { company: "CloudSec Inc.", position: "Senior Security Analyst", status: "In Review", date: "2 days ago", type: "Full-time", location: "San Francisco, CA" },
  { company: "DefenseForce", position: "SOC Analyst Level II", status: "Interviewed", date: "1 week ago", type: "Full-time", location: "Remote" },
  { company: "IronWall Systems", position: "Cybersec Engineer", status: "Closed", date: "2 weeks ago", type: "Contract", location: "New York, NY" },
];

const QUICK_ACTIONS = [
  { title: "Browse Jobs", description: "Find your next opportunity", icon: Briefcase, href: "/dashboard/browse", color: "bg-blue-500/10 text-blue-600" },
  { title: "Update Profile", description: "Keep your profile fresh", icon: User, href: "/dashboard/profile", color: "bg-emerald-500/10 text-emerald-600" },
  { title: "Upload Resume", description: "Add your latest resume", icon: FileText, href: "/dashboard/profile", color: "bg-purple-500/10 text-purple-600" },
  { title: "Check Alerts", description: "View new notifications", icon: Bell, href: "/dashboard/notifications", color: "bg-amber-500/10 text-amber-600" },
];

export default function Overview() {
  return (
    <div className="space-y-8 pb-12 animate-fade-in">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Alex! 👋</h1>
          <p className="text-muted-foreground text-lg">Here's what's happening with your job search today.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90">
            <Briefcase className="h-4 w-4 mr-2" />
            Browse Jobs
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border-border/50 hover:border-primary/20 transition-all card-hover-soft bg-gradient-to-br from-card to-card/50">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl ${stat.bg} shadow-soft`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                      <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
                      <p className="text-xs text-emerald-600 font-medium mt-1">{stat.trend}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_ACTIONS.map((action, i) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.4 }}
            >
              <Button
                variant="outline"
                className="h-auto p-4 flex flex-col items-center gap-3 border-border/50 hover:border-primary/20 transition-all card-hover-soft bg-gradient-to-br from-card to-card/50"
              >
                <div className={`p-3 rounded-2xl ${action.color} shadow-soft`}>
                  <action.icon className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground">{action.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{action.description}</p>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Applications */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border/50 shadow-premium bg-gradient-to-br from-card to-card/50">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div>
                <CardTitle className="text-xl">Recent Applications</CardTitle>
                <CardDescription className="text-sm">Track the status of your recent job applications.</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="gap-1 text-primary hover:bg-primary/10">
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {RECENT_APPLICATIONS.map((app, i) => (
                  <motion.div
                    key={app.company}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.6 }}
                    className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border/50 group hover:border-primary/20 transition-all card-hover-soft"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center font-bold text-primary truncate shadow-soft">
                        {app.company.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-balance">{app.position}</h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <span>{app.company}</span>
                          <span>•</span>
                          <span>{app.location}</span>
                          <span>•</span>
                          <span>{app.type}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{app.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant="secondary" 
                        className={`px-3 py-1 text-xs font-medium ${
                          app.status === "In Review" ? "status-info" :
                          app.status === "Interviewed" ? "status-success" :
                          app.status === "Closed" ? "status-error" :
                          "bg-muted text-muted-foreground"
                        }`}
                      >
                        {app.status}
                      </Badge>
                      <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full hover:bg-primary/10">
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Completeness & Activity */}
        <div className="space-y-6">
          <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-primary/0 shadow-premium overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <User className="h-24 w-24 text-primary" />
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Profile Strength</CardTitle>
              <CardDescription className="text-sm">Your profile is almost complete!</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-3 w-full bg-primary/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-full bg-gradient-to-r from-primary to-primary/80" 
                  />
                </div>
                <p className="text-sm font-semibold text-foreground">85% Complete</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-muted-foreground">Upload your resume</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-muted-foreground">Verify your email</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <div className="h-2 w-2 rounded-full bg-primary/40" />
                    <span className="text-muted-foreground">Add a professional summary</span>
                  </div>
                </div>
                <Button className="w-full btn-premium mt-4">Complete Profile</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-premium bg-gradient-to-br from-card to-card/50">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5 text-amber-500" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                  <div className="p-2 rounded-xl bg-amber-500/10">
                    <Award className="h-4 w-4 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">New Job Match!</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-1">Senior Pen-tester role matches your skills in "Python" and "Kali Linux".</p>
                    <Button variant="link" size="sm" className="h-auto p-0 text-amber-600 font-semibold mt-2 text-xs">View Details</Button>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                  <div className="p-2 rounded-xl bg-blue-500/10">
                    <Calendar className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">Interview Scheduled</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-1">CloudSec Inc. - Tomorrow at 2:00 PM</p>
                    <Button variant="link" size="sm" className="h-auto p-0 text-blue-600 font-semibold mt-2 text-xs">View Details</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
