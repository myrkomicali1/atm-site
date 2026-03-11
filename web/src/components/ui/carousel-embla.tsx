"use client";

/**
 * EmblaCarousel — wrapper simples sobre embla-carousel-react.
 *
 * Usage:
 *   <EmblaCarousel>
 *     <div>Slide 1</div>
 *     <div>Slide 2</div>
 *     <div>Slide 3</div>
 *   </EmblaCarousel>
 *
 * Props:
 *   loop        — loop infinito (default: true)
 *   autoplay    — ms entre slides. 0 = desligado (default: 0)
 *   align       — "start" | "center" | "end" (default: "start")
 *   slideClass  — classes aplicadas a cada slide wrapper
 */

import { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmblaCarouselProps {
  children: React.ReactNode[];
  loop?: boolean;
  autoplay?: number;
  align?: "start" | "center" | "end";
  slideClass?: string;
  showArrows?: boolean;
  className?: string;
}

export function EmblaCarousel({
  children,
  loop = true,
  autoplay = 0,
  align = "start",
  slideClass,
  showArrows = true,
  className,
}: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align });
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi || autoplay <= 0) return;
    autoplayRef.current = setInterval(() => emblaApi.scrollNext(), autoplay);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [emblaApi, autoplay]);

  return (
    <div className={cn("relative", className)}>
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-4">
          {children.map((child, i) => (
            <div key={i} className={cn("min-w-0 shrink-0", slideClass)}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      {showArrows && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/40 transition-colors"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/40 transition-colors"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}
    </div>
  );
}
