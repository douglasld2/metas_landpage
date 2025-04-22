import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  threshold = 0.1,
  delay = 0,
  direction = "up"
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold });
  const controls = useAnimation();

  // Define animation variants based on direction
  const getVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        };
      case "none":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay 
      }}
    >
      {children}
    </motion.div>
  );
};
