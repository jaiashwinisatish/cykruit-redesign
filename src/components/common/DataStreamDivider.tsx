import { motion } from "framer-motion";

export function DataStreamDivider() {
  return (
    <div className="relative h-px w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.05)]" />
      
      {/* Moving Data Packet */}
      <motion.div
        className="absolute h-[2px] w-40 bg-gradient-to-r from-transparent via-primary/40 to-transparent blur-[1px]"
        animate={{ 
          x: ["-150%", "150%"],
          opacity: [0, 1, 0] 
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute h-[2px] w-20 bg-gradient-to-r from-transparent via-accent/40 to-transparent blur-[1px]"
        animate={{ 
          x: ["150%", "-150%"],
          opacity: [0, 1, 0] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "linear",
          delay: 1
        }}
      />

      <div className="h-1 w-1 rounded-full bg-primary/20 blur-[2px] relative z-10" />
    </div>
  );
}
