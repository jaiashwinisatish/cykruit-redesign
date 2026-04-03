import { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CommandPalette } from "@/components/common/CommandPalette";
import { MatrixRain } from "@/components/common/MatrixRain";
import { useAppStore } from "@/store/useAppStore";

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const { theme } = useAppStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col noise-bg cyber-grid">
      <Navbar />
      <CommandPalette />
      <MatrixRain />
      <motion.main
        className="flex-1 pt-16 lg:pt-20 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
