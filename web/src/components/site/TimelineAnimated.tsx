"use client";

import { useEffect, useRef, useState } from "react";
import type { TimelineEntry } from "@/lib/data/company";

const TYPE_STYLE: Record<
  string,
  { yearColor: string; dotBg: string; badgeCls: string; lineCls: string }
> = {
  founding: {
    yearColor: "text-zinc-900",
    dotBg: "bg-zinc-900",
    badgeCls: "bg-zinc-900 text-white",
    lineCls: "bg-zinc-900",
  },
  milestone: {
    yearColor: "text-primary",
    dotBg: "bg-primary",
    badgeCls: "bg-primary text-white",
    lineCls: "bg-primary",
  },
  project: {
    yearColor: "text-zinc-700",
    dotBg: "bg-zinc-600",
    badgeCls: "bg-zinc-100 text-zinc-600 border border-zinc-300",
    lineCls: "bg-zinc-400",
  },
  award: {
    yearColor: "text-amber-600",
    dotBg: "bg-amber-500",
    badgeCls: "bg-amber-50 text-amber-700 border border-amber-200",
    lineCls: "bg-amber-400",
  },
  expansion: {
    yearColor: "text-blue-600",
    dotBg: "bg-blue-600",
    badgeCls: "bg-blue-50 text-blue-700 border border-blue-200",
    lineCls: "bg-blue-500",
  },
  international: {
    yearColor: "text-emerald-600",
    dotBg: "bg-emerald-600",
    badgeCls: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    lineCls: "bg-emerald-500",
  },
};

interface TimelineAnimatedProps {
  items: TimelineEntry[];
  typeLabels: Record<string, string>;
  worksLabel: string;
  endCapLabel: string;
}

export function TimelineAnimated({
  items,
  typeLabels,
  worksLabel,
  endCapLabel,
}: TimelineAnimatedProps) {
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => new Set([...prev, i]));
            obs.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-zinc-200 md:hidden"
        style={{ left: "1.25rem" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 bottom-0 w-px hidden md:block bg-zinc-200"
        style={{ left: "50%", transform: "translateX(-50%)" }}
        aria-hidden="true"
      />

      <div className="space-y-0">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isVis = visible.has(index);
          const style = TYPE_STYLE[item.type] ?? TYPE_STYLE.project;
          const label = typeLabels[item.type] ?? item.type;
          const major = item.isMajor ?? false;

          return (
            <div
              key={item.year}
              ref={(el) => { refs.current[index] = el; }}
              className={`relative flex pb-12 md:pb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
              style={{
                opacity: isVis ? 1 : 0,
                transform: isVis
                  ? "none"
                  : `translateY(20px) translateX(${isLeft ? "-" : ""}12px)`,
                transition: `opacity 0.55s ease ${(index % 5) * 70}ms, transform 0.55s ease ${(index % 5) * 70}ms`,
              }}
            >
              {/* ── Dot (mobile only) ── */}
              <div
                className={`
                  absolute z-10 flex md:hidden items-center justify-center rounded-full
                  border-2 border-white shadow
                  ${style.dotBg}
                  ${major ? "size-10" : "size-7"}
                `}
                style={{
                  left: "calc(1.25rem - " + (major ? "1.25rem" : "0.875rem") + ")",
                  top: "1.5rem",
                  ["--tw-shadow" as string]: "0 1px 6px rgba(0,0,0,0.15)",
                }}
                aria-hidden="true"
              >
                {major && (
                  <div className="size-3 rounded-full bg-white/80" />
                )}
              </div>
              {/* Desktop dot */}
              <div
                className={`
                  absolute z-10 hidden md:flex items-center justify-center rounded-full
                  border-2 border-white shadow
                  ${style.dotBg}
                  ${major ? "size-10" : "size-7"}
                `}
                style={{
                  left: "50%",
                  top: "1.5rem",
                  transform: "translateX(-50%)",
                }}
                aria-hidden="true"
              >
                {major && (
                  <div className="size-3 rounded-full bg-white/80" />
                )}
              </div>

              {/* ── Card ── */}
              <div
                className={`
                  ml-12 flex-1
                  md:ml-0
                  md:w-[calc(50%-3rem)]
                  md:max-w-[calc(50%-3rem)]
                  md:flex-none
                  ${isLeft ? "md:mr-[calc(50%+3rem)]" : "md:ml-[calc(50%+3rem)]"}
                `}
              >
                <div
                  className={`
                    rounded-2xl border bg-white p-5 md:p-6
                    transition-shadow hover:shadow-md
                    ${major
                      ? "border-zinc-300 shadow-sm ring-1 ring-zinc-100"
                      : "border-zinc-200 shadow-xs"
                    }
                  `}
                >
                  {/* Badges row */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${style.badgeCls}`}
                    >
                      {label}
                    </span>
                    {item.count && item.count > 1 && (
                      <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                        {worksLabel.replace("{count}", String(item.count))}
                      </span>
                    )}
                  </div>

                  {/* Year */}
                  <div className={`font-display text-5xl font-bold leading-none mb-2 ${style.yearColor}`}>
                    {item.year}
                  </div>

                  {/* Headline */}
                  <h3 className="text-sm font-semibold leading-snug text-zinc-800">
                    {item.headline}
                  </h3>

                  {/* Highlight */}
                  {item.highlight && (
                    <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                      {item.highlight}
                    </p>
                  )}

                  {/* Featured works — card format for all items */}
                  {item.featured && item.featured.length > 0 && (
                    <div className="mt-4 space-y-2 border-t border-zinc-100 pt-4">
                      {item.featured.map((w, wi) => (
                        <div
                          key={wi}
                          className="rounded-xl bg-zinc-50 px-3 py-2"
                        >
                          <p className="text-xs font-semibold text-zinc-800 leading-tight">
                            {w.client}
                          </p>
                          <p className="text-[11px] text-zinc-500 mt-0.5 leading-tight">
                            {w.scope}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Sector tags */}
                  {item.sectors && item.sectors.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {item.sectors.map((s) => (
                        <span
                          key={s}
                          className="inline-block rounded-md bg-zinc-100 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-zinc-400"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* End cap */}
      <div className="relative ml-10 md:flex md:ml-0 md:justify-center">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm">
          <span className="size-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          <span className="text-xs font-medium text-zinc-500">{endCapLabel}</span>
        </div>
      </div>
    </div>
  );
}
