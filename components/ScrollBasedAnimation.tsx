"use client";

import React, { useRef, useEffect, useState, ReactNode } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";

interface ScrollBasedAnimationProps {
  children: ReactNode;
  threshold?: number; // how much of the element should be visible before animation starts
  delay?: number; // animation delay
  duration?: number; // animation duration
  offset?: number; // how far it starts from
  direction?: "up" | "down" | "left" | "right"; // animation direction
}

/**
 * A reusable scroll-based reveal animation component.
 * Triggers when the element enters the viewport.
 */
const ScrollBasedAnimation: React.FC<ScrollBasedAnimationProps> = ({
  children,
  threshold = 0.2,
  delay = 0,
  duration = 0.6,
  offset = 70,
  direction = "up",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls: AnimationControls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        } else {
          setIsVisible(false);
          controls.start("hidden");
        }
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls, threshold]);

  // Determine offset direction
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: offset };
      case "down":
        return { y: -offset };
      case "left":
        return { x: offset };
      case "right":
        return { x: -offset };
      default:
        return { y: offset };
    }
  };

  const variants = {
    hidden: { opacity: 0, ...getOffset() },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollBasedAnimation;
