"use client";

/**
 * EmblaCarousel — accessible wrapper over embla-carousel-react.
 */

import { useCallback, useEffect, useRef, useState } from "react";
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
  ariaLabel?: string;
}

export function EmblaCarousel({
  children,
  loop = true,
  autoplay = 0,
  align = "start",
  slideClass,
  showArrows = true,
  className,
  ariaLabel = "Carousel",
}: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align });
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || autoplay <= 0) return;
    autoplayRef.current = setInterval(() => emblaApi.scrollNext(), autoplay);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [emblaApi, autoplay]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  const totalSlides = children.length;

  return (
    <div
      className={cn("relative", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
    >
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-4">
          {children.map((child, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} de ${totalSlides}`}
              className={cn("min-w-0 shrink-0", slideClass)}
            >
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
            aria-label={`Slide anterior (${selectedIndex === 0 ? totalSlides : selectedIndex} de ${totalSlides})`}
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/40 transition-colors"
            aria-label={`Próximo slide (${selectedIndex + 2 > totalSlides ? 1 : selectedIndex + 2} de ${totalSlides})`}
          >
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </>
      )}
    </div>
  );
}
