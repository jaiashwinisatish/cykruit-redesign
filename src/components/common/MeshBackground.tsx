import { motion } from "framer-motion";

export function MeshBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-background" />
      
      {/* Primary Cyan Blob */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px]"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "10%" }}
      />

      {/* Accent Green Blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-accent/10 blur-[100px]"
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -120, 0],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "10%", right: "10%" }}
      />

      {/* Cyber Purple Blob */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full bg-cyber-purple/10 blur-[150px]"
        animate={{
          x: [0, 150, -100, 0],
          y: [0, 100, 150, 0],
          scale: [1, 1.1, 0.8, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "40%", left: "40%" }}
      />

      {/* Surface Depth Blob */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] rounded-full bg-surface/5 blur-[180px]"
        animate={{
          x: [0, -200, 150, 0],
          y: [0, -100, 200, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "-10%", right: "-10%" }}
      />
    </div>
  );
}
