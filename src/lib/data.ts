import type { Job, Testimonial, Feature, FAQ, TeamMember, NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Jobs", href: "/jobs" },
  { label: "Contact", href: "/contact" },
];

export const HERO_ROLES = [
  "Penetration Tester",
  "SOC Analyst",
  "Security Engineer",
  "CISO",
  "Threat Hunter",
  "Cloud Security Architect",
  "Incident Responder",
];

export const FEATURES: Feature[] = [
  {
    icon: "Shield",
    title: "AI-Powered Matching",
    description: "Our intelligent algorithm matches cybersecurity professionals with roles that fit their skills, certifications, and career goals.",
  },
  {
    icon: "Zap",
    title: "Instant Applications",
    description: "Apply to multiple positions with one click. Your profile, certs, and experience are auto-filled for faster hiring.",
  },
  {
    icon: "Globe",
    title: "Global Opportunities",
    description: "Access cybersecurity roles from companies worldwide. Remote, hybrid, or on-site — find your perfect fit anywhere.",
  },
];

export const STATS = [
  { value: 12500, label: "Jobs Posted", suffix: "+" },
  { value: 3200, label: "Companies", suffix: "+" },
  { value: 85000, label: "Candidates", suffix: "+" },
  { value: 96, label: "Match Rate", suffix: "%" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Senior Penetration Tester",
    company: "CrowdStrike",
    avatar: "SC",
    quote: "Cykruit connected me with my dream role in under two weeks. The AI matching is incredibly accurate — it understood my niche skills perfectly.",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    role: "CISO",
    company: "Datadog",
    avatar: "MJ",
    quote: "As a hiring manager, Cykruit cut our time-to-hire by 60%. The quality of candidates is consistently excellent.",
  },
  {
    id: "3",
    name: "Aisha Patel",
    role: "Cloud Security Engineer",
    company: "Palo Alto Networks",
    avatar: "AP",
    quote: "The platform made my career transition seamless. I went from network security to cloud security with Cykruit's guidance.",
  },
  {
    id: "4",
    name: "David Kim",
    role: "SOC Manager",
    company: "Mandiant",
    avatar: "DK",
    quote: "Cykruit understands cybersecurity like no other job platform. The specialized focus makes all the difference.",
  },
];

export const FAQS: FAQ[] = [
  {
    question: "How does Cykruit's AI matching work?",
    answer: "Our AI analyzes your skills, certifications, experience level, and career preferences to match you with the most relevant cybersecurity positions. It learns from your interactions to improve suggestions over time.",
  },
  {
    question: "Is Cykruit free for job seekers?",
    answer: "Yes! Cykruit is completely free for cybersecurity professionals. Create your profile, upload your resume, and start applying to positions at no cost.",
  },
  {
    question: "What types of cybersecurity roles are available?",
    answer: "We cover the full spectrum: penetration testing, SOC analysis, incident response, security engineering, cloud security, GRC, threat intelligence, CISO positions, and more.",
  },
  {
    question: "How do employers post jobs on Cykruit?",
    answer: "Employers can create an account, choose a plan, and post positions in minutes. Our team reviews listings to ensure quality and relevance to the cybersecurity community.",
  },
  {
    question: "Can I set up job alerts?",
    answer: "Absolutely. Configure custom alerts based on role type, location, salary range, and required certifications. Get notified instantly when matching positions are posted.",
  },
];

export const JOBS: Job[] = [
  {
    id: "1",
    title: "Senior Penetration Tester",
    company: "CrowdStrike",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$150K - $200K",
    tags: ["OSCP", "Burp Suite", "Python", "AWS"],
    posted: "2 days ago",
    description: "Lead penetration testing engagements for enterprise clients across cloud and on-premise environments.",
  },
  {
    id: "2",
    title: "Cloud Security Architect",
    company: "Palo Alto Networks",
    location: "Santa Clara, CA",
    type: "Full-time",
    salary: "$180K - $240K",
    tags: ["AWS", "Azure", "Terraform", "CISSP"],
    posted: "1 day ago",
    description: "Design and implement cloud security architectures for Fortune 500 clients.",
  },
  {
    id: "3",
    title: "SOC Analyst II",
    company: "Datadog",
    location: "New York, NY",
    type: "Full-time",
    salary: "$100K - $130K",
    tags: ["SIEM", "Splunk", "Incident Response", "GCIH"],
    posted: "3 days ago",
    description: "Monitor, detect, and respond to security incidents in a fast-paced SOC environment.",
  },
  {
    id: "4",
    title: "Threat Intelligence Analyst",
    company: "Mandiant",
    location: "Remote (Global)",
    type: "Contract",
    salary: "$120K - $160K",
    tags: ["MITRE ATT&CK", "OSINT", "Malware Analysis", "GIAC"],
    posted: "5 days ago",
    description: "Analyze emerging cyber threats and produce actionable intelligence reports.",
  },
  {
    id: "5",
    title: "Security Engineer",
    company: "Google",
    location: "Mountain View, CA",
    type: "Full-time",
    salary: "$190K - $280K",
    tags: ["Go", "Kubernetes", "Zero Trust", "IAM"],
    posted: "1 week ago",
    description: "Build and maintain security infrastructure protecting billions of users worldwide.",
  },
  {
    id: "6",
    title: "GRC Specialist",
    company: "Deloitte",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$95K - $125K",
    tags: ["ISO 27001", "SOC 2", "NIST", "Risk Assessment"],
    posted: "4 days ago",
    description: "Lead governance, risk, and compliance initiatives for enterprise clients.",
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "Alex Rivera",
    role: "CEO & Co-Founder",
    avatar: "AR",
    bio: "Former CISO with 15 years in cybersecurity. Built Cykruit to solve the talent gap he witnessed firsthand.",
  },
  {
    name: "Dr. Priya Sharma",
    role: "CTO & Co-Founder",
    avatar: "PS",
    bio: "PhD in Machine Learning. Previously led AI teams at a major security company building threat detection systems.",
  },
  {
    name: "Jordan Blake",
    role: "Head of Product",
    avatar: "JB",
    bio: "10+ years in product management. Passionate about creating tools that empower cybersecurity professionals.",
  },
  {
    name: "Maya Okonkwo",
    role: "Head of Partnerships",
    avatar: "MO",
    bio: "Connects Cykruit with leading security firms worldwide. Previously built partner programs at a top security vendor.",
  },
];
