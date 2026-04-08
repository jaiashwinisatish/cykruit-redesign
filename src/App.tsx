import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import DashboardLayout from "./components/dashboard/DashboardLayout";

const About = lazy(() => import("./pages/About"));
const Jobs = lazy(() => import("./pages/Jobs"));
const Employers = lazy(() => import("./pages/EmployersPage"));
const Resources = lazy(() => import("./pages/ResourcesPage"));
const Trainer = lazy(() => import("./pages/TrainerPage"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Dashboard Pages
const Overview = lazy(() => import("./pages/dashboard/Overview"));
const BrowseJobsDashboard = lazy(() => import("./pages/dashboard/BrowseJobs"));
const AppliedJobs = lazy(() => import("./pages/dashboard/AppliedJobs"));
const SavedJobs = lazy(() => import("./pages/dashboard/SavedJobs"));
const Profile = lazy(() => import("./pages/dashboard/Profile"));
const Notifications = lazy(() => import("./pages/dashboard/Notifications"));

const queryClient = new QueryClient();

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/employers" element={<Employers />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/trainer" element={<Trainer />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Dashboard Routes */}
            <Route path="/dashboard" element={<DashboardLayout><Overview /></DashboardLayout>} />
            <Route path="/dashboard/browse" element={<DashboardLayout><BrowseJobsDashboard /></DashboardLayout>} />
            <Route path="/dashboard/applied" element={<DashboardLayout><AppliedJobs /></DashboardLayout>} />
            <Route path="/dashboard/saved" element={<DashboardLayout><SavedJobs /></DashboardLayout>} />
            <Route path="/dashboard/profile" element={<DashboardLayout><Profile /></DashboardLayout>} />
            <Route path="/dashboard/notifications" element={<DashboardLayout><Notifications /></DashboardLayout>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
