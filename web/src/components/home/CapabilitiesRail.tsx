"use client";

import Link from "next/link";
import { ArrowRight, Sun, Zap, Cpu, Wrench, Settings, Building2, Brain } from "lucide-react";
import { businessAreas } from "@/lib/data/businesses";

const iconMap: Record<string, React.ElementType> = {
  Sun,
  Zap,
  Cpu,
  Wrench,
  Settings,
  Building2,
  Brain,
};

export function CapabilitiesRail() {
  return (
    <section className="bg-white py-20">
      {/* Header */}
      <div className="mx-auto mb-10 max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="mono-label mb-3">Divisões operacionais</p>
            <h2 className="section-heading-sm text-zinc-900">O que fazemos</h2>
          </div>
          <Link
            href="/nossos-negocios"
            className="hidden items-center gap-2 text-sm font-semibold text-zinc-400 transition-colors hover:text-zinc-900 sm:inline-flex"
          >
            Ver todas <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      {/* Uniform grid — no scroll */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {businessAreas.map((area, i) => {
            const Icon = iconMap[area.icon] ?? Building2;
            return (
              <Link
                key={area.slug}
                href={`/nossos-negocios/${area.slug}`}
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-white hover:shadow-lg hover:shadow-zinc-900/6 hover:-translate-y-0.5"
              >
                {/* Number + icon */}
                <div className="mb-5 flex items-start justify-between">
                  <span className="font-mono text-[11px] font-medium text-zinc-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex size-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-400 transition-colors duration-300 group-hover:border-primary/20 group-hover:text-primary">
                    <Icon className="size-5" />
                  </div>
                </div>

                <h3 className="mb-2 font-display text-lg font-bold text-zinc-900">
                  {area.name}
                </h3>
                <p className="mb-auto text-sm leading-relaxed text-zinc-500">
                  {area.shortDescription}
                </p>

                {/* Metrics */}
                {area.metrics.length > 0 ? (
                  <div className="mt-6 grid grid-cols-2 gap-3 border-t border-zinc-100 pt-5">
                    {area.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <div className="font-display text-xl font-bold text-zinc-900">
                          {m.value}
                        </div>
                        <div className="mt-0.5 text-[10px] leading-tight text-zinc-600">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}

                {/* CTA */}
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-zinc-400 transition-colors group-hover:text-primary">
                  <span>Saiba mais</span>
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile: view all */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/nossos-negocios"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-zinc-900"
          >
            Ver todas as divisões <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
