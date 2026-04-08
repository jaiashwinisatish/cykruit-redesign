import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  Briefcase, 
  Send, 
  Bookmark, 
  User, 
  Bell, 
  ChevronLeft, 
  Menu,
  Shield,
  LogOut,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/useAppStore";

const SIDEBAR_ITEMS = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: Briefcase, label: "Browse Jobs", href: "/dashboard/browse" },
  { icon: Send, label: "Applied Jobs", href: "/dashboard/applied" },
  { icon: Bookmark, label: "Saved Jobs", href: "/dashboard/saved" },
  { icon: User, label: "Profile", href: "/dashboard/profile" },
  { icon: Bell, label: "Notifications", href: "/dashboard/notifications" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-background font-sans">
      {/* Sidebar Desktop */}
      <aside 
        className={`hidden lg:flex flex-col border-r border-border bg-card transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        <div className="p-6 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-primary/10">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          {!collapsed && (
            <span className="font-bold text-xl tracking-tight">Cykruit</span>
          )}
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {SIDEBAR_ITEMS.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                  isActive 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <item.icon className={`h-5 w-5 ${isActive ? "" : "group-hover:scale-110 transition-transform"}`} />
                {!collapsed && <span className="font-medium">{item.label}</span>}
                {isActive && !collapsed && (
                  <motion.div 
                    layoutId="active-pill"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-foreground/50"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border mt-auto">
          {!collapsed && (
            <div className="bg-muted/40 rounded-2xl p-4 mb-4 border border-border/50">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Upgrade to Pro</p>
              <p className="text-sm text-foreground/80 mb-3">Get advanced job insights and priority applications.</p>
              <Button size="sm" className="w-full text-xs h-8">Learn More</Button>
            </div>
          )}
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl"
          >
            <LogOut className="h-5 w-5" />
            {!collapsed && <span>Logout</span>}
          </Button>
          
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="mt-4 w-full h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className={`h-5 w-5 transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`} />
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 border-b border-border bg-card/80 backdrop-blur-md z-40 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Cykruit</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setMobileOpen(true)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[50] lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-72 bg-card border-r border-border z-[60] p-6 lg:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Shield className="h-8 w-8 text-primary" />
                  <span className="font-bold text-xl">Cykruit</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              </div>

              <nav className="space-y-1">
                {SIDEBAR_ITEMS.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 ${
                        isActive 
                        ? "bg-primary text-primary-foreground shadow-lg" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      <item.icon className="h-6 w-6" />
                      <span className="font-semibold">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <Button variant="outline" className="w-full justify-start gap-3 rounded-2xl h-12">
                  <Settings className="h-5 w-5" />
                  Settings
                </Button>
                <Button variant="destructive" className="w-full justify-start gap-3 rounded-2xl h-12 opacity-80">
                  <LogOut className="h-5 w-5" />
                  Logout
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar (Desktop) */}
        <header className="hidden lg:flex items-center justify-between h-20 px-8 border-b border-border bg-card/30">
          <div>
            <h1 className="text-xl font-bold text-foreground">
              {SIDEBAR_ITEMS.find(i => i.href === location.pathname)?.label || "Dashboard"}
            </h1>
            <p className="text-sm text-muted-foreground">Welcome back, Job Seeker!</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border-2 border-background" />
              <Button variant="ghost" size="icon" className="rounded-full bg-muted/50">
                <Bell className="h-5 w-5 text-muted-foreground" />
              </Button>
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-border ml-2">
              <div className="text-right">
                <p className="text-sm font-semibold">Alex Seeker</p>
                <p className="text-xs text-muted-foreground">Software Engineer</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                AS
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8 pt-20 lg:pt-8 bg-muted/10">
          <div className="max-w-6xl mx-auto h-full">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
