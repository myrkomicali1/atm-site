"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  /** Animation variant */
  variant?: "fade-up" | "fade-in" | "fade-left" | "fade-right";
  /** Delay in ms (useful for stagger) */
  delay?: number;
  /** IntersectionObserver threshold (0-1) */
  threshold?: number;
  /** Only animate once */
  once?: boolean;
  /** Tag to render */
  as?: "div" | "section" | "article" | "li" | "span";
}

export function AnimateOnScroll({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  threshold = 0.15,
  once = true,
  as: Tag = "div",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      className={cn(
        "transition-all duration-700 ease-out",
        !visible && "opacity-0",
        !visible && variant === "fade-up" && "translate-y-8",
        !visible && variant === "fade-left" && "-translate-x-8",
        !visible && variant === "fade-right" && "translate-x-8",
        visible && "opacity-100 translate-y-0 translate-x-0",
        className,
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  /** Base delay between each child in ms */
  staggerMs?: number;
  /** Animation variant for children */
  variant?: "fade-up" | "fade-in" | "fade-left" | "fade-right";
  /** Tag to render */
  as?: "div" | "ul" | "ol" | "section";
}

/**
 * Wraps direct children with staggered AnimateOnScroll.
 * Each child gets an incremental delay.
 */
export function StaggerChildren({
  children,
  className,
  staggerMs = 80,
  variant = "fade-up",
  as: Tag = "div",
}: StaggerChildrenProps) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <Tag className={className}>
      {items.map((child, i) => (
        <AnimateOnScroll key={i} variant={variant} delay={i * staggerMs}>
          {child}
        </AnimateOnScroll>
      ))}
    </Tag>
  );
}
