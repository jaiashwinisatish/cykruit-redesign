export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  workMode: "Remote" | "On-site" | "Hybrid";
  experience: "Junior" | "Mid" | "Senior" | "Lead";
  industry: string;
  salary: string;
  salaryMin: number;
  salaryMax: number;
  tags: string[];
  posted: string;
  postedDate: string; // ISO format for sorting
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface NavItem {
  label: string;
  href: string;
}
