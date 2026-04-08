<div align="center">

```
 ██████╗██╗   ██╗██╗  ██╗██████╗ ██╗   ██╗██╗████████╗
██╔════╝╚██╗ ██╔╝██║ ██╔╝██╔══██╗██║   ██║██║╚══██╔══╝
██║      ╚████╔╝ █████╔╝ ██████╔╝██║   ██║██║   ██║   
██║       ╚██╔╝  ██╔═██╗ ██╔══██╗██║   ██║██║   ██║   
╚██████╗   ██║   ██║  ██╗██║  ██║╚██████╔╝██║   ██║   
 ╚═════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝  
```

**AI-Powered Cybersecurity Recruitment Platform**

*Connecting Elite Security Talent with World-Class Teams*

---

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[![Build Status](https://img.shields.io/badge/Build-Passing-00D26A?style=for-the-badge&logo=github-actions&logoColor=white)](#)
[![License](https://img.shields.io/badge/License-MIT-A855F7?style=for-the-badge)](#)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-00C4CC?style=for-the-badge)](#contributing)

</div>

---

## ◈ Overview

**Cykruit** is a next-generation cybersecurity recruitment platform engineered from the ground up for the security industry. Unlike generic job boards, Cykruit understands the language of CVEs, certifications, threat landscapes, and security toolchains — delivering AI-powered matching that's orders of magnitude more relevant.

> *"Built by security veterans who were tired of sifting through irrelevant job listings and unqualified candidates."*

### ✦ What Makes Cykruit Different

| Capability | Generic Platforms | Cykruit |
|---|---|---|
| Understands OSCP, CISSP, CEH | ✗ | ✓ |
| Cyber-specific skill taxonomy | ✗ | ✓ |
| Role-level threat intelligence matching | ✗ | ✓ |
| Salary benchmarking by security niche | ✗ | ✓ |
| AI-powered profile scoring | ✗ | ✓ |
| Zero-noise candidate filtering | ✗ | ✓ |

---

## ◈ Feature Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      CYKRUIT PLATFORM                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐        │
│   │   AI Match  │    │  Job Search │    │   Profiles  │        │
│   │   Engine    │    │  & Filters  │    │  & Resumes  │        │
│   └──────┬──────┘    └──────┬──────┘    └──────┬──────┘        │
│          │                  │                  │                │
│          └──────────────────┼──────────────────┘                │
│                             │                                    │
│   ┌──────────────────────────▼───────────────────────────────┐  │
│   │              CORE APPLICATION LAYER                       │  │
│   │   React 18 · TypeScript · Zustand · React Query          │  │
│   └──────────────────────────┬───────────────────────────────┘  │
│                              │                                   │
│   ┌──────────────────────────▼───────────────────────────────┐  │
│   │                   UI LAYER                                │  │
│   │   Tailwind CSS · shadcn/ui · Framer Motion               │  │
│   └──────────────────────────────────────────────────────────┘  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## ◈ Tech Stack

```
◦ Frontend Framework   ──  React 18 (Concurrent Features)
◦ Language             ──  TypeScript 5.8 (Strict Mode)
◦ Build Tool           ──  Vite 5 + SWC Compiler
◦ Styling              ──  Tailwind CSS 3 + CSS Variables
◦ UI Components        ──  shadcn/ui (Radix UI primitives)
◦ Animations           ──  Framer Motion 12
◦ State Management     ──  Zustand 5
◦ Server State         ──  TanStack Query v5
◦ Forms & Validation   ──  React Hook Form + Zod
◦ Routing              ──  React Router DOM v6
◦ Testing              ──  Vitest + Testing Library
◦ E2E Testing          ──  Playwright
◦ Linting              ──  ESLint 9 + TypeScript ESLint
```

---

## ◈ Project Architecture

```
cykruit/
│
├── src/
│   ├── app/                          # ← Application root & routing
│   │   └── App.tsx                   #   Root component, providers, lazy routes
│   │
│   ├── components/                   # ← Shared UI components
│   │   ├── common/                   #   Domain-agnostic reusable components
│   │   │   ├── AnimatedCounter.tsx   #   Intersection-triggered count-up
│   │   │   ├── CommandPalette.tsx    #   ⌘K navigation overlay
│   │   │   ├── DataStreamDivider.tsx #   Animated section separator
│   │   │   ├── MatrixRain.tsx        #   Easter egg: Konami code trigger
│   │   │   ├── MeshBackground.tsx    #   Animated gradient mesh
│   │   │   ├── SkeletonCard.tsx      #   Loading placeholder
│   │   │   └── TypeWriter.tsx        #   Multi-word typewriter effect
│   │   │
│   │   ├── layout/                   #   Structural page components
│   │   │   ├── Footer.tsx            #   Global footer with newsletter
│   │   │   ├── Navbar.tsx            #   Sticky nav with mobile menu
│   │   │   └── PageWrapper.tsx       #   Layout shell + global overlays
│   │   │
│   │   └── ui/                       #   shadcn/ui component library (40+ components)
│   │       ├── accordion.tsx
│   │       ├── button.tsx
│   │       ├── ...                   #   (full Radix UI component suite)
│   │       └── tooltip.tsx
│   │
│   ├── features/                     # ← Feature-based modules
│   │   └── home/                     #   Home page feature sections
│   │       ├── CTABanner.tsx         #   Conversion call-to-action
│   │       ├── FAQSection.tsx        #   Accordion FAQ
│   │       ├── FeaturesSection.tsx   #   Platform feature showcase
│   │       ├── HeroSection.tsx       #   Hero with dashboard mockup
│   │       ├── StatsSection.tsx      #   Animated statistics
│   │       ├── TestimonialsCarousel.tsx # Auto-rotating testimonials
│   │       └── WhoItsForSection.tsx  #   Audience targeting cards
│   │
│   ├── hooks/                        # ← Custom React hooks
│   │   ├── use-mobile.tsx            #   Responsive breakpoint detection
│   │   ├── use-toast.ts              #   Toast notification system
│   │   ├── useDebounce.ts            #   Input debouncing
│   │   ├── useIntersectionObserver.ts #  Scroll-triggered visibility
│   │   └── useScrollProgress.ts     #   Scroll position tracking
│   │
│   ├── lib/                          # ← Utilities & application data
│   │   ├── data.ts                   #   Static content & mock data
│   │   └── utils.ts                  #   cn() classname utility
│   │
│   ├── pages/                        # ← Route-level page components
│   │   ├── Index.tsx                 #   Home page
│   │   ├── About.tsx                 #   Company & team
│   │   ├── Jobs.tsx                  #   Job listings with filters
│   │   ├── Contact.tsx               #   Contact form
│   │   └── NotFound.tsx              #   404 page
│   │
│   ├── store/                        # ← Global state management
│   │   └── useAppStore.ts            #   Zustand store (theme, UI state)
│   │
│   ├── test/                         # ← Test configuration
│   │   ├── setup.ts                  #   Test environment setup
│   │   └── example.test.ts           #   Example test suite
│   │
│   ├── types/                        # ← TypeScript type definitions
│   │   └── index.ts                  #   Shared interfaces & types
│   │
│   ├── index.css                     # ← Global styles, design tokens
│   └── main.tsx                      # ← Application entry point
│
├── public/                           # ← Static assets
│
├── vite.config.ts                    # ← Vite configuration
├── tailwind.config.ts                # ← Tailwind + custom tokens
├── tsconfig.json                     # ← TypeScript configuration
├── vitest.config.ts                  # ← Test runner configuration
└── playwright.config.ts              # ← E2E test configuration
```

---

## ◈ Page & Route Map

```
/                    ──  Home          HeroSection + Features + Stats + Testimonials + FAQ + CTA
│
├── /about           ──  About         Story + Values + Team Grid + Animated Stats
│
├── /jobs            ──  Jobs          Search + Multi-filter + Sorted Job Cards
│
├── /contact         ──  Contact       Validated Form + Contact Info
│
└── /*               ──  404           Branded not-found page
```

---

## ◈ Data Flow Architecture

```
┌───────────────────────────────────────────────────────────────┐
│                      USER INTERACTION                          │
└────────────────────────────┬──────────────────────────────────┘
                             │
              ┌──────────────▼──────────────┐
              │         React Components     │
              │   (Pages / Features / UI)    │
              └──────────────┬──────────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
         ▼                   ▼                   ▼
  ┌─────────────┐    ┌──────────────┐    ┌──────────────┐
  │   Zustand   │    │ TanStack     │    │  Local State │
  │   Store     │    │ Query        │    │  (useState)  │
  │             │    │              │    │              │
  │ • theme     │    │ • server     │    │ • form data  │
  │ • navOpen   │    │   data cache │    │ • filter val │
  │ • cmdOpen   │    │ • mutations  │    │ • search q   │
  └─────────────┘    └──────────────┘    └──────────────┘
         │                   │
         └─────────┬─────────┘
                   │
         ┌─────────▼─────────┐
         │   UI Re-render    │
         │   (React 18       │
         │   Concurrent)     │
         └───────────────────┘
```

---

## ◈ Component Architecture

```
PageWrapper
│
├── MeshBackground          ← Animated gradient blobs (fixed, z-0)
├── CyberGrid               ← CSS grid overlay (fixed, z-0)
├── Navbar                  ← Sticky navigation bar
│   ├── Logo
│   ├── NavLinks (desktop)
│   ├── SearchButton → CommandPalette
│   ├── ThemeToggle
│   └── MobileMenu (AnimatePresence)
│
├── CommandPalette          ← Global ⌘K overlay
├── MatrixRain              ← Konami code easter egg
│
├── <Page Content />        ← Route-specific components
│
└── Footer
    ├── Brand + Social Links
    ├── Navigation Links
    ├── Resource Links
    └── Newsletter Form
```

---

## ◈ Jobs Filter System

```
User Input
│
├── Search Query ──────────────────────────────┐
│   (debounced 300ms)                          │
│                                              ▼
├── Job Type Filter ─────────────────────── useMemo()
├── Date Posted Filter                         │
├── Work Mode Filter ──────────────────────────┤
├── Experience Level Filter                    │   filteredJobs[]
├── Industry Filter ──────────────────────────►│
│                                              │
└── Sort Order ────────────────────────────────┘
    (newest | salary-high)                     │
                                               ▼
                                        <AnimatePresence>
                                           <JobCard />
                                        </AnimatePresence>
```

---

## ◈ Theme System

Cykruit uses CSS custom properties with Tailwind's dark mode class strategy:

```css
:root {
  /* Core Tokens */
  --primary:    187 100% 50%;   /* Cyber Cyan   #00C8FF */
  --accent:     142 100% 56%;   /* Cyber Green  #47FF6B */
  --cyber-purple: 270 100% 65%; /* Deep Purple  #8000FF */

  /* Dark Mode (default) */
  --background: 225 60% 3%;    /* Near Black    #060914 */
  --foreground: 210 40% 98%;   /* Off White     #F8FAFC */
  --card:       225 45% 6%;    /* Dark Surface  #0C1220 */
  --border:     225 25% 15%;   /* Subtle Border #1E2D4A */
}
```

**Switching themes** is handled by Zustand store + `localStorage` persistence:

```
User clicks toggle
       │
       ▼
useAppStore.toggleTheme()
       │
       ├── Update Zustand state
       ├── Persist to localStorage
       └── Toggle .dark on <html>
               │
               ▼
         CSS variables switch
         instantly, no flash
```

---

## ◈ Animation Philosophy

Framer Motion is used strategically across three tiers:

```
TIER 1 — Page-level transitions
  ├── Route changes: opacity fade (0.3s)
  ├── Hero entrance: staggered x/y slides
  └── Scroll progress: spring-physics scaleX

TIER 2 — Section entrances
  ├── whileInView + viewport={{ once: true }}
  ├── Staggered children (delay: index * 0.1)
  └── Custom easing: [0.22, 1, 0.36, 1]

TIER 3 — Micro-interactions
  ├── Hover: y translation, scale, border glow
  ├── Card: internal gradient reveal
  └── Buttons: shine overlay on hover
```

---

## ◈ Quick Start

### Prerequisites

```bash
node >= 18.0.0
npm >= 8.0.0  (or bun, pnpm, yarn)
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-org/cykruit-redesign.git
cd cykruit-redesign

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# → App available at http://localhost:8080
```

### Available Scripts

```bash
npm run dev          # Start Vite dev server (HMR enabled)
npm run build        # Production build → /dist
npm run build:dev    # Development build
npm run preview      # Preview production build locally
npm run lint         # ESLint with TypeScript rules
npm run test         # Run Vitest test suite
npm run test:watch   # Watch mode testing
```

---

## ◈ Key Design Decisions

### Why Vite over Next.js?

```
┌────────────────────────────────────────────────────────┐
│  Next.js App Router                                    │
│  ✗ SSR overhead for a mostly-static content site       │
│  ✗ Increased deployment complexity                     │
│  ✗ Larger bundle sizes for this use case               │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│  Vite + React Router                                   │
│  ✓ Near-instant HMR in development                    │
│  ✓ Simpler deployment (any static CDN)                 │
│  ✓ SWC compiler for maximum build speed                │
│  ✓ Full control over bundle splitting                  │
└────────────────────────────────────────────────────────┘
```

### Why Zustand over Redux?

```
Redux Toolkit          Zustand
──────────────         ──────────────
Boilerplate: High  →   Boilerplate: Minimal
Bundle: ~47kb      →   Bundle: ~1kb
Setup: Complex     →   Setup: One file
DevX: Verbose      →   DevX: Natural JS
```

### Feature-Based Architecture

Components are co-located by feature domain, not by type:

```
features/home/HeroSection.tsx   ← all hero-related logic lives here
features/home/StatsSection.tsx  ← not split across /components, /hooks, /utils
```

This enables easy deletion, modification, and testing of entire features.

---

## ◈ Performance Optimizations

```
Code Splitting
  └── All pages are lazy-loaded via React.lazy()
      → Initial bundle only loads the landing page

Debouncing
  └── Job search input debounced at 300ms
      → Prevents expensive filter re-computation on every keystroke

Memoization
  └── filteredJobs computed with useMemo()
      → Only re-runs when search/filter dependencies change

Intersection Observer
  └── Animations only trigger when elements enter the viewport
      → No wasted CPU on offscreen animations

Image Strategy
  └── Placeholder avatars via external URL with fallback initials
      → No large assets bundled

Animation Optimization
  └── viewport={{ once: true }} on all section-level animations
      → Re-entry animations disabled after first trigger
```

---

## ◈ Accessibility

- Semantic HTML throughout (`nav`, `main`, `section`, `article`)
- ARIA labels on icon-only buttons
- Focus management in CommandPalette and mobile menu
- Keyboard navigation: `⌘K` command palette, `ESC` to close
- Color contrast meets WCAG AA for all text elements
- Reduced motion via `prefers-reduced-motion` (Framer Motion respects this)
- Screen reader friendly — decorative elements marked `aria-hidden`

---

## ◈ Roadmap

```
Phase 1 — Current (MVP)                        ████████████ 100%
  ✓ Core pages (Home, About, Jobs, Contact)
  ✓ Job listing with advanced filters
  ✓ Dark/Light theme toggle
  ✓ Command palette (⌘K)
  ✓ Responsive design
  ✓ Animations & micro-interactions

Phase 2 — In Progress                          ████░░░░░░░░  33%
  ◦ User authentication (JWT + OAuth)
  ◦ Candidate profile creation
  ◦ Employer dashboard
  ◦ Real API integration

Phase 3 — Planned                              ░░░░░░░░░░░░   0%
  ◦ AI match scoring engine
  ◦ Real-time job alerts
  ◦ Resume parsing
  ◦ Video screening integration
  ◦ Analytics dashboard
```

---

## ◈ Contributing

Contributions are welcome and encouraged.

```bash
# 1. Fork the repository

# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Make your changes and commit
git commit -m "feat: add amazing feature"

# 4. Push to your fork
git push origin feature/your-feature-name

# 5. Open a Pull Request
```

### Commit Convention

```
feat:     New feature
fix:      Bug fix
chore:    Dependency updates, config changes
docs:     Documentation changes
style:    Formatting, no logic changes
refactor: Code restructuring
perf:     Performance improvement
test:     Adding or fixing tests
```

---

## ◈ License

MIT License — see [`LICENSE`](./LICENSE) for details.

---

<div align="center">

**Built with precision for the cybersecurity community**

*© 2026 Cykruit · [cykruit.com](https://cykruit.com)*

```
[ SYSTEM SECURE ] ··· ALL NODES ACTIVE ··· MISSION: CONNECT THE DEFENDERS
```

</div>
