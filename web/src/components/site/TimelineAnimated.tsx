"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface TimelineItem {
  year: number;
  event: string;
}

export function TimelineAnimated({ items }: { items: TimelineItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fillHeight, setFillHeight] = useState(0);
  const [activeItems, setActiveItems] = useState<Set<number>>(new Set());

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.7;
    const scrolled = triggerPoint - rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / rect.height));

    setFillHeight(progress * 100);

    // Determine which items the fill bar has reached
    const articles = container.querySelectorAll<HTMLElement>("article");
    const newActive = new Set<number>();

    articles.forEach((article) => {
      const index = Number(article.dataset.index);
      const dot = article.querySelector<HTMLElement>("[data-dot]");
      if (!dot) return;

      const dotRect = dot.getBoundingClientRect();
      const dotCenter = dotRect.top + dotRect.height / 2;

      // Dot is active if the scroll trigger point has passed it
      if (dotCenter <= triggerPoint) {
        newActive.add(index);
      }
    });

    setActiveItems(newActive);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div ref={containerRef} className="relative ml-2 pl-8">
      {/* Background track */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-zinc-200" />

      {/* Animated fill */}
      <div
        className="absolute left-0 top-0 w-0.5 bg-primary transition-[height] duration-100 ease-out"
        style={{ height: `${fillHeight}%` }}
      />

      {items.map((item, index) => (
        <article
          key={`${item.year}-${item.event}`}
          data-index={index}
          className="relative mb-8 rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-500 ease-out"
          style={{
            opacity: activeItems.has(index) ? 1 : 0.3,
            transform: activeItems.has(index)
              ? "translateY(0)"
              : "translateY(12px)",
          }}
        >
          {/* Dot */}
          <span
            data-dot
            className="absolute -left-[41px] top-6 size-4 rounded-full border-2 transition-all duration-300"
            style={{
              borderColor: activeItems.has(index)
                ? "var(--primary)"
                : "color-mix(in oklch, var(--primary) 25%, white)",
              backgroundColor: activeItems.has(index)
                ? "var(--primary)"
                : "color-mix(in oklch, var(--primary) 15%, white)",
              transform: activeItems.has(index) ? "scale(1)" : "scale(0.6)",
            }}
          />

          <div className="font-display text-3xl font-bold text-primary">
            {item.year}
          </div>
          <p className="mt-1 text-sm text-zinc-600">{item.event}</p>
        </article>
      ))}
    </div>
  );
}
