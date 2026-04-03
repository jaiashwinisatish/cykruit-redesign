

# Cykruit.com Premium Redesign — Dark Cyber Aesthetic

## Visual Identity
- **Dark-first** design: deep navy/charcoal backgrounds (#0a0f1c, #111827)
- **Neon accents**: cyan (#00f0ff), electric green (#39ff14), with subtle glow effects
- **Glassmorphism** cards with backdrop-blur and border glow
- **Typography**: Inter for body, bold modern headings with gradient text
- **Animated background**: floating grid lines, subtle particle/noise texture

## Pages & Routing (React Router)
1. **Home** (`/`) — Hero, Features, Who It's For, Stats, Testimonials, FAQ, CTA, Footer
2. **About** (`/about`) — Company story, mission, team section
3. **Jobs** (`/jobs`) — Job listings with search/filter UI (static demo data)
4. **Contact** (`/contact`) — Contact form with React Hook Form + Zod validation
5. **Not Found** (`/404`)

## Shared Components
- **Sticky Navbar** — transparent → blurred on scroll, mobile hamburger menu, dark/light toggle
- **Command Palette** (Ctrl+K) — searchable navigation overlay
- **Footer** — rich multi-column layout with social links, newsletter input

## Home Page Sections
1. **Hero** — Typing text effect cycling through roles ("Penetration Tester", "SOC Analyst", etc.), animated CTA buttons with glow, floating cyber-themed decorative elements
2. **Who It's For** — Two interactive cards (Job Seekers / Employers) with hover glow effects
3. **Features** — 3 interactive cards with icons, hover lift + border glow animations
4. **Stats Counter** — Animated numbers (jobs posted, companies, candidates) triggered on scroll
5. **Testimonials** — Auto-playing carousel with avatar, quote, role
6. **FAQ** — Accordion with smooth expand animations
7. **CTA Banner** — Full-width gradient section with strong call-to-action

## Animations & Interactions (Framer Motion)
- Scroll-reveal for all sections (fade-up + stagger)
- Hero typing effect with cursor blink
- Card hover: scale, glow border, subtle lift
- Stats: count-up animation on viewport entry
- Page transitions (fade between routes)
- Navbar background transition on scroll
- Skeleton loaders on Jobs page
- Toast notifications (sonner) for form submission
- Easter egg: Konami code triggers a matrix rain effect

## Custom Hooks
- `useScrollProgress` — navbar style changes
- `useIntersectionObserver` — scroll-triggered animations
- `useDebounce` — search input on Jobs page
- `useLocalStorage` — theme persistence

## State Management (Zustand)
- Theme state (dark/light) with localStorage persistence
- Command palette open/close
- Mobile menu state

## Dark/Light Mode
- CSS variables swapped via class toggle
- Smooth transition on all color properties
- Default: dark mode

## Form Handling (Contact Page)
- React Hook Form + Zod schema validation
- Fields: Name, Email, Subject, Message
- Inline error states with animations
- Success toast + confetti-style animation on submit

## Performance
- Lazy-loaded route pages via React.lazy + Suspense
- Skeleton shimmer UI during lazy loads
- Optimized images with loading="lazy"
- Intersection Observer for deferred animation triggers

## File Structure
```
src/
  components/
    ui/          — shadcn components
    layout/      — Navbar, Footer, PageWrapper
    common/      — AnimatedCounter, TypeWriter, CommandPalette, SkeletonCard
  features/
    home/        — HeroSection, FeaturesSection, StatsSection, TestimonialsCarousel, FAQSection, CTABanner
    jobs/        — JobCard, JobFilters, JobList
    contact/     — ContactForm
    about/       — AboutContent, TeamSection
  hooks/         — useScrollProgress, useIntersectionObserver, useDebounce, useLocalStorage
  store/         — useAppStore (Zustand)
  lib/           — utils, constants, demo data
  pages/         — Index, About, Jobs, Contact, NotFound
  types/         — shared TypeScript types
```

