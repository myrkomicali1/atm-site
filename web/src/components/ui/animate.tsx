"use client";

/**
 * Reusable animation wrappers using Framer Motion.
 *
 * Usage:
 *   <FadeIn>...</FadeIn>
 *   <FadeIn delay={0.2}>...</FadeIn>
 *   <SlideUp>...</SlideUp>
 *   <StaggerChildren staggerDelay={0.08}>
 *     <StaggerItem>...</StaggerItem>
 *     <StaggerItem>...</StaggerItem>
 *   </StaggerChildren>
 */

import { motion, type Variants } from "framer-motion";

/* ── Shared viewport config ─────────────────────────────────────── */
const viewport = { once: true, margin: "-80px" } as const;

/* ── FadeIn ─────────────────────────────────────────────────────── */
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, duration = 0.5, className }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── SlideUp ────────────────────────────────────────────────────── */
interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function SlideUp({ children, delay = 0, className }: SlideUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── SlideIn (lateral) ───────────────────────────────────────────── */
interface SlideInProps {
  children: React.ReactNode;
  from?: "left" | "right";
  delay?: number;
  className?: string;
}

export function SlideIn({ children, from = "left", delay = 0, className }: SlideInProps) {
  const x = from === "left" ? -40 : 40;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── ScaleIn ────────────────────────────────────────────────────── */
interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function ScaleIn({ children, delay = 0, className }: ScaleInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewport}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── StaggerChildren ────────────────────────────────────────────── */
const staggerContainer = (staggerDelay: number): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  },
});

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

interface StaggerChildrenProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerChildren({
  children,
  staggerDelay = 0.08,
  className,
}: StaggerChildrenProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer(staggerDelay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

/* ── CountUp number (para stats) ───────────────────────────────── */
export { motion };
