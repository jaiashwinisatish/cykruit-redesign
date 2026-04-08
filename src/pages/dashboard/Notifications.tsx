import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bell, 
  CheckCircle2, 
  Info, 
  AlertCircle, 
  ChevronRight,
  Trash2,
  Clock,
  Settings,
  Check,
  X,
  Filter,
  Briefcase,
  User,
  Calendar,
  TrendingUp,
  Star
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const NOTIFICATIONS = [
  { 
    id: 1,
    title: "Application Received", 
    message: "CloudSec Inc. has received your application for Senior Security Analyst. They were impressed with your qualifications!", 
    time: "2 hours ago", 
    type: "success",
    read: false,
    category: "applications",
    action: "View Application"
  },
  { 
    id: 2,
    title: "New Job Match", 
    message: "A new position 'Cybersecurity Consultant' at TechCorp matches your profile preferences perfectly.", 
    time: "5 hours ago", 
    type: "info",
    read: false,
    category: "job_matches",
    action: "View Job"
  },
  { 
    id: 3,
    title: "Interview Scheduled", 
    message: "Your interview with DefenseForce is scheduled for tomorrow at 10:00 AM via Zoom.", 
    time: "1 day ago", 
    type: "alert",
    read: true,
    category: "interviews",
    action: "View Details"
  },
  { 
    id: 4,
    title: "Profile Viewed", 
    message: "Your profile was viewed by HR from IronWall Systems. They might be interested!", 
    time: "3 days ago", 
    type: "info",
    read: true,
    category: "profile",
    action: "View Analytics"
  },
  { 
    id: 5,
    title: "Application Status Update", 
    message: "Your application for SOC Analyst at CyberShield has moved to the interview stage.", 
    time: "4 days ago", 
    type: "success",
    read: true,
    category: "applications",
    action: "View Application"
  },
  { 
    id: 6,
    title: "New Message", 
    message: "You have a new message from the recruiter at CloudSec Inc.", 
    time: "5 days ago", 
    type: "info",
    read: true,
    category: "messages",
    action: "Read Message"
  },
  { 
    id: 7,
    title: "Salary Range Alert", 
    message: "New jobs in your preferred salary range ($120k-$150k) are now available.", 
    time: "1 week ago", 
    type: "alert",
    read: true,
    category: "alerts",
    action: "Browse Jobs"
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case "success": return <CheckCircle2 className="h-5 w-5 text-emerald-500" />;
    case "alert": return <AlertCircle className="h-5 w-5 text-amber-500" />;
    default: return <Info className="h-5 w-5 text-blue-500" />;
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "applications": return <Briefcase className="h-4 w-4" />;
    case "job_matches": return <Star className="h-4 w-4" />;
    case "interviews": return <Calendar className="h-4 w-4" />;
    case "profile": return <User className="h-4 w-4" />;
    case "messages": return <Bell className="h-4 w-4" />;
    case "alerts": return <TrendingUp className="h-4 w-4" />;
    default: return <Info className="h-4 w-4" />;
  }
};

export default function Notifications() {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const [filter, setFilter] = useState("all");
  const [showSettings, setShowSettings] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  
  const filteredNotifications = notifications.filter(note => {
    if (filter === "all") return true;
    if (filter === "unread") return !note.read;
    return note.category === filter;
  });
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const markAsRead = (id: number) => {
    setNotifications(prev => prev.map(note => 
      note.id === id ? { ...note, read: true } : note
    ));
  };
  
  const markAllAsRead = () => {
    setNotifications(prev => prev.map(note => ({ ...note, read: true })));
  };
  
  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(note => note.id !== id));
  };

  return (
    <div className="space-y-8 pb-12 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Notifications</h1>
          <p className="text-muted-foreground text-lg">Stay updated with your job search activity. You have {unreadCount} unread notifications.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            onClick={() => setShowSettings(!showSettings)}
            className="rounded-xl"
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              onClick={markAllAsRead}
              className="text-primary font-semibold hover:bg-primary/5 rounded-xl"
            >
              Mark all as read
            </Button>
          )}
        </div>
      </div>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-soft"
          >
            <h3 className="font-semibold text-foreground mb-4">Notification Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive updates via email</p>
                </div>
                <Switch 
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">Get instant browser notifications</p>
                </div>
                <Switch 
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Filter:</span>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-40 rounded-xl">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Notifications</SelectItem>
              <SelectItem value="unread">Unread Only</SelectItem>
              <SelectItem value="applications">Applications</SelectItem>
              <SelectItem value="job_matches">Job Matches</SelectItem>
              <SelectItem value="interviews">Interviews</SelectItem>
              <SelectItem value="profile">Profile</SelectItem>
              <SelectItem value="messages">Messages</SelectItem>
              <SelectItem value="alerts">Alerts</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filteredNotifications.length}</span> of <span className="font-semibold text-foreground">{notifications.length}</span> notifications
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredNotifications.map((note, i) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className={`border-border/50 shadow-sm transition-all hover:shadow-premium group overflow-hidden card-hover-soft ${
                note.read 
                  ? "bg-card border-border/50" 
                  : "bg-gradient-to-br from-primary/5 to-primary/0 border-primary/20 shadow-primary/10"
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-2xl ${
                      note.read 
                        ? "bg-muted/50" 
                        : "bg-gradient-to-br from-primary/10 to-primary/5 shadow-soft"
                    }`}>
                      {getIcon(note.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className={`font-bold truncate ${
                              note.read ? "text-foreground" : "text-primary"
                            }`}>{note.title}</h4>
                            {!note.read && (
                              <div className="h-2 w-2 rounded-full bg-primary" />
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                            {getCategoryIcon(note.category)}
                            <span className="capitalize">{note.category.replace('_', ' ')}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" /> {note.time}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          {!note.read && (
                            <Button 
                              size="icon" 
                              variant="ghost" 
                              onClick={() => markAsRead(note.id)}
                              className="h-8 w-8 rounded-full hover:bg-primary/10"
                              title="Mark as read"
                            >
                              <Check className="h-4 w-4" />
                            </Button>
                          )}
                          <Button 
                            size="icon" 
                            variant="ghost" 
                            onClick={() => deleteNotification(note.id)}
                            className="h-8 w-8 rounded-full hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{note.message}</p>
                      <div className="flex items-center gap-4">
                        <Button 
                          variant="link" 
                          size="sm" 
                          className="h-auto p-0 text-primary hover:text-primary/80 font-semibold text-xs gap-1"
                        >
                          {note.action} <ChevronRight className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {filteredNotifications.length === 0 && (
        <div className="text-center py-12">
          <div className="h-20 w-20 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
            <Bell className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No notifications found</h3>
          <p className="text-muted-foreground">Try adjusting your filters or check back later for new updates.</p>
        </div>
      )}

      {filteredNotifications.length > 0 && (
        <Button variant="outline" className="w-full h-12 rounded-2xl border-dashed border-border text-muted-foreground hover:text-foreground hover:bg-muted/50">
          Load older notifications
        </Button>
      )}
    </div>
  );
}
