import { PageWrapper } from "@/components/layout/PageWrapper";
import { HeroSection } from "@/features/home/HeroSection";
import { FeaturesSection } from "@/features/home/FeaturesSection";
import { WhoItsForSection } from "@/features/home/WhoItsForSection";
import { StatsSection } from "@/features/home/StatsSection";
import { TestimonialsCarousel } from "@/features/home/TestimonialsCarousel";
import { FAQSection } from "@/features/home/FAQSection";
import { CTABanner } from "@/features/home/CTABanner";

const Index = () => (
  <PageWrapper>
    <HeroSection />
    <WhoItsForSection />
    <FeaturesSection />
    <StatsSection />
    <TestimonialsCarousel />
    <FAQSection />
    <CTABanner />
  </PageWrapper>
);

export default Index;
