import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/layout/PageWrapper";

const NotFound = () => (
  <PageWrapper>
    <section className="min-h-[70vh] flex items-center justify-center">
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-8xl sm:text-9xl font-extrabold text-gradient-cyber mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">This page doesn't exist in our security perimeter.</p>
        <div className="flex items-center justify-center gap-4">
          <Button asChild variant="outline">
            <Link to="/"><ArrowLeft className="h-4 w-4 mr-2" />Go Back</Link>
          </Button>
          <Button asChild className="glow-primary">
            <Link to="/"><Home className="h-4 w-4 mr-2" />Home</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  </PageWrapper>
);

export default NotFound;
