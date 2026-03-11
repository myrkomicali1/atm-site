"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollableStripProps {
  children: ReactNode;
}

export function ScrollableStrip({ children }: ScrollableStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide"
      >
        {children}
      </div>
      {/* Left fade */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-zinc-950 to-transparent transition-opacity duration-300"
        style={{ opacity: canScrollLeft ? 1 : 0 }}
      />
      {/* Right fade */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-zinc-950 to-transparent transition-opacity duration-300"
        style={{ opacity: canScrollRight ? 1 : 0 }}
      />
    </div>
  );
}
