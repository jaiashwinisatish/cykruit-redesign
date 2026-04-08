import { useState } from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Mail, 
  MapPin, 
  Briefcase, 
  Link as LinkIcon, 
  Camera,
  Download,
  Upload,
  Save,
  Plus,
  X,
  GraduationCap,
  Award,
  Star,
  Calendar,
  Building,
  CheckCircle,
  Edit2,
  Trash2,
  ExternalLink
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Alex",
    lastName: "Seeker",
    email: "alex.seeker@example.com",
    phone: "+1 (555) 000-0000",
    location: "San Francisco, CA",
    title: "Senior Security Engineer",
    bio: "Security engineer with 5+ years of experience in penetration testing, cloud security (AWS/GCP), and developing secure software. Passionate about zero-trust architecture and threat modeling.",
    linkedin: "https://linkedin.com/in/alexseeker",
    portfolio: "https://alexseeker.dev",
    github: "https://github.com/alexseeker"
  });

  const [skills, setSkills] = useState([
    "Penetration Testing",
    "Cloud Security (AWS/GCP)",
    "Zero Trust Architecture",
    "Threat Modeling",
    "Python",
    "Kubernetes",
    "Docker",
    "CI/CD Security"
  ]);

  const [experience, setExperience] = useState([
    {
      id: 1,
      title: "Senior Security Engineer",
      company: "TechSecure Inc.",
      location: "San Francisco, CA",
      startDate: "Jan 2022",
      endDate: "Present",
      description: "Lead security initiatives for enterprise clients, focusing on cloud security and penetration testing."
    },
    {
      id: 2,
      title: "Security Analyst",
      company: "CyberDefense Solutions",
      location: "Remote",
      startDate: "Jun 2020",
      endDate: "Dec 2021",
      description: "Conducted security assessments and vulnerability management for various clients."
    }
  ]);

  const [education, setEducation] = useState([
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      startDate: "2016",
      endDate: "2020",
      gpa: "3.8"
    }
  ]);

  const addSkill = (skill: string) => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  return (
    <div className="space-y-8 pb-12 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Profile Management</h1>
          <p className="text-muted-foreground text-lg">Manage your personal information, skills, and professional details.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            onClick={() => setIsEditing(!isEditing)}
            className="rounded-xl"
          >
            <Edit2 className="h-4 w-4 mr-2" />
            {isEditing ? "Cancel" : "Edit Profile"}
          </Button>
          {isEditing && (
            <Button className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-border/50 shadow-premium overflow-hidden bg-gradient-to-br from-card to-card/50">
              <div className="h-32 bg-gradient-to-r from-primary/20 via-blue-500/10 to-indigo-500/10" />
              <CardContent className="pt-0 -mt-16 text-center">
                <div className="relative inline-block mb-4">
                  <div className="h-32 w-32 rounded-2xl bg-gradient-to-br from-primary to-primary/80 border-4 border-background shadow-xl flex items-center justify-center text-3xl font-bold text-primary-foreground overflow-hidden">
                    AS
                  </div>
                  <Button size="icon" variant="secondary" className="absolute -bottom-2 -right-2 h-10 w-10 rounded-full shadow-lg border border-border bg-card hover:bg-card/80">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="text-2xl font-bold text-foreground">{profileData.firstName} {profileData.lastName}</h3>
                <p className="text-sm text-muted-foreground mb-2">{profileData.title}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-6">
                  <MapPin className="h-3 w-3" />
                  {profileData.location}
                </div>
                
                <div className="flex flex-col gap-3 text-left">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground bg-muted/30 p-3 rounded-xl">
                    <Mail className="h-4 w-4" />
                    {profileData.email}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground bg-muted/30 p-3 rounded-xl">
                    <LinkIcon className="h-4 w-4" />
                    github.com/alexseeker
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground bg-muted/30 p-3 rounded-xl">
                    <Star className="h-4 w-4" />
                    Profile Strength: 85%
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
            <Card className="border-border/50 shadow-premium bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Resume
                </CardTitle>
                <CardDescription>Manage your uploaded CV and documents.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-xl border border-dashed border-border bg-muted/10 flex flex-col items-center justify-center text-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">PDF or DOCX (Max 5MB)</p>
                  <Button variant="outline" size="sm" className="mt-2 rounded-xl">Upload New</Button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border">
                  <div className="flex items-center gap-3">
                     <div className="p-3 bg-red-500/10 rounded-lg">
                      <p className="text-xs font-bold text-red-500">PDF</p>
                     </div>
                     <div>
                      <p className="text-sm font-semibold truncate max-w-[140px]">resume_2026.pdf</p>
                      <p className="text-xs text-muted-foreground">Updated 2 weeks ago • 2.3 MB</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full hover:bg-primary/10">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full hover:bg-destructive/10">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Profile Completion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-border/50 shadow-premium bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-500" />
                  Profile Completion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-primary/80" style={{ width: "85%" }} />
                  </div>
                  <p className="text-sm font-semibold text-foreground">85% Complete</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle className="h-3 w-3 text-emerald-500" />
                      <span className="text-muted-foreground">Basic information</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle className="h-3 w-3 text-emerald-500" />
                      <span className="text-muted-foreground">Professional summary</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle className="h-3 w-3 text-emerald-500" />
                      <span className="text-muted-foreground">Work experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="h-3 w-3 rounded-full border-2 border-muted-foreground" />
                      <span className="text-muted-foreground">Add portfolio link</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="border-border/50 shadow-premium bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Personal Information
                </CardTitle>
                <CardDescription>Provide your details for employers to find you.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      value={profileData.firstName}
                      onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                      disabled={!isEditing}
                      className="rounded-xl border-border bg-muted/10" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                      disabled={!isEditing}
                      className="rounded-xl border-border bg-muted/10" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      disabled={!isEditing}
                      className="rounded-xl border-border bg-muted/10" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      disabled={!isEditing}
                      className="rounded-xl border-border bg-muted/10" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input 
                      id="location" 
                      value={profileData.location}
                      onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      disabled={!isEditing}
                      className="rounded-xl border-border bg-muted/10" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Professional Title</Label>
                    <Input 
                      id="title" 
                      value={profileData.title}
                      onChange={(e) => setProfileData({...profileData, title: e.target.value})}
                      disabled={!isEditing}
                      className="rounded-xl border-border bg-muted/10" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Professional Summary</Label>
                  <Textarea 
                    id="bio" 
                    rows={4} 
                    value={profileData.bio}
                    onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                    disabled={!isEditing}
                    className="rounded-2xl border-border bg-muted/10 focus:ring-primary/20" 
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="border-border/50 shadow-premium bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-amber-500" />
                  Skills & Expertise
                </CardTitle>
                <CardDescription>Add your technical and professional skills.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-muted/50 text-muted-foreground px-3 py-1 rounded-full border-border/50 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {skill}
                        {isEditing && (
                          <button 
                            onClick={() => removeSkill(skill)}
                            className="ml-2 text-muted-foreground hover:text-destructive"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        )}
                      </Badge>
                    ))}
                    {isEditing && (
                      <Button variant="outline" size="sm" className="rounded-full h-8">
                        <Plus className="h-3 w-3 mr-1" />
                        Add Skill
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Professional Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="border-border/50 shadow-premium bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LinkIcon className="h-5 w-5 text-primary" />
                  Professional Links
                </CardTitle>
                <CardDescription>Add your professional profiles and portfolio.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <div className="flex gap-2">
                    <Input 
                      id="linkedin" 
                      value={profileData.linkedin}
                      onChange={(e) => setProfileData({...profileData, linkedin: e.target.value})}
                      disabled={!isEditing}
                      className="rounded-xl border-border bg-muted/10" 
                    />
                    {isEditing && (
                      <Button size="icon" variant="outline" className="rounded-xl">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio/Website</Label>
                  <div className="flex gap-2">
                    <Input 
                      id="portfolio" 
                      value={profileData.portfolio}
                      onChange={(e) => setProfileData({...profileData, portfolio: e.target.value})}
                      disabled={!isEditing}
                      className="rounded-xl border-border bg-muted/10" 
                    />
                    {isEditing && (
                      <Button size="icon" variant="outline" className="rounded-xl">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="github">GitHub Profile</Label>
                  <div className="flex gap-2">
                    <Input 
                      id="github" 
                      value={profileData.github}
                      onChange={(e) => setProfileData({...profileData, github: e.target.value})}
                      disabled={!isEditing}
                      className="rounded-xl border-border bg-muted/10" 
                    />
                    {isEditing && (
                      <Button size="icon" variant="outline" className="rounded-xl">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
