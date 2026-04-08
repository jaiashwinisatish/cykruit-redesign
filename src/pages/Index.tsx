import { PageWrapper } from "@/components/layout/PageWrapper";
import { HeroSection } from "@/features/home/HeroSection";
import { TrustedBySection } from "@/features/home/TrustedBySection";
import { FeaturesSection } from "@/features/home/FeaturesSection";
import { HowItWorksSection } from "@/features/home/HowItWorksSection";
import { WhoItsForSection } from "@/features/home/WhoItsForSection";
import { StatsSection } from "@/features/home/StatsSection";
import { TestimonialsCarousel } from "@/features/home/TestimonialsCarousel";
import { FAQSection } from "@/features/home/FAQSection";
import { CTABanner } from "@/features/home/CTABanner";
import { DataStreamDivider } from "@/components/common/DataStreamDivider";
import { motion, useScroll, useSpring } from "framer-motion";

function Index() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <PageWrapper>
      {/* Global Scroll Progress */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-cyber-purple to-accent z-[100] origin-left" 
        style={{ scaleX }}
      />
      
      <HeroSection />
      
      <TrustedBySection />
      
      <div className="relative">
        <DataStreamDivider />
        <WhoItsForSection />
        
        <DataStreamDivider />
        <FeaturesSection />
        
        <DataStreamDivider />
        <HowItWorksSection />
        
        <DataStreamDivider />
        <StatsSection />
        
        <DataStreamDivider />
        <TestimonialsCarousel />
        
        <DataStreamDivider />
        <FAQSection />
        
        <CTABanner />
      </div>
    </PageWrapper>
  );
}

export default Index;
