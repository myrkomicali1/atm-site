import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Factory,
  Mountain,
  Sun,
  Droplets,
  Sprout,
  UtensilsCrossed,
  Flame,
  Warehouse,
  TreePine,
  Landmark,
  Fuel,
  Building,
} from "lucide-react";
import { sectors } from "@/lib/data/sectors";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Section } from "@/components/site/primitives";

const iconMap: Record<string, React.ElementType> = {
  Factory,
  Mountain,
  Sun,
  Droplets,
  Sprout,
  UtensilsCrossed,
  Flame,
  Warehouse,
  TreePine,
  Landmark,
  Fuel,
  Building,
};

export const metadata: Metadata = {
  title: "Setores Atendidos",
  description:
    "A Authomathika atende 12 setores industriais: sucroenergético, mineração, energias renováveis, saneamento, fertilizantes, alimentos, siderurgia, logística, papel e celulose, cimento, petróleo e gás e infraestrutura.",
  alternates: {
    canonical: "/setores",
  },
};

export default function SetoresPage() {
  const featured = sectors.filter((s) => s.featured);
  const secondary = sectors.filter((s) => !s.featured);

  return (
    <main>
      <PageIntro
        tag="Atuação setorial"
        title="Setores que Atendemos"
        subtitle="Cada setor tem desafios únicos. Nossa engenharia é especializada para resolver os problemas reais da sua operação industrial."
        breadcrumbs={[{ label: "Setores" }]}
      />

      <Section>
        <Container>
          {/* Featured sectors — large cards */}
          <div className="mb-6">
            <p className="mono-label mb-6">Setores prioritários</p>
            <div className="grid gap-4 md:grid-cols-3">
              {featured.map((sector) => {
                const Icon = iconMap[sector.icon] ?? Factory;
                return (
                  <Link
                    key={sector.slug}
                    href={`/setores/${sector.slug}`}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-zinc-900/6"
                  >
                    <div className="mb-5 flex size-12 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-400 transition-colors group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary">
                      <Icon className="size-6" />
                    </div>
                    <h2 className="mb-2 font-display text-xl font-bold text-zinc-900">
                      {sector.name}
                    </h2>
                    <p className="mb-4 text-sm leading-relaxed text-zinc-500">
                      {sector.headline}
                    </p>

                    {/* Metrics */}
                    <div className="mt-auto grid grid-cols-2 gap-3 border-t border-zinc-100 pt-4">
                      {sector.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <div className="font-display text-lg font-bold text-zinc-900">
                            {m.value}
                          </div>
                          <div className="text-[10px] leading-tight text-zinc-500">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-zinc-400 transition-colors group-hover:text-primary">
                      <span>Ver soluções</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Secondary sectors — compact list */}
          <div className="mt-12">
            <p className="mono-label mb-6">Outros setores</p>
            <div className="divide-y divide-zinc-200 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
              {secondary.map((sector) => {
                const Icon = iconMap[sector.icon] ?? Factory;
                return (
                  <Link
                    key={sector.slug}
                    href={`/setores/${sector.slug}`}
                    className="group flex items-center gap-4 px-5 py-5 transition hover:bg-zinc-50"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-400 transition-colors group-hover:border-primary/20 group-hover:text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-base font-bold text-zinc-900">
                        {sector.name}
                      </h3>
                      <p className="mt-0.5 text-sm text-zinc-500">
                        {sector.headline}
                      </p>
                    </div>
                    <span className="hidden items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100 sm:flex">
                      Ver setor <ArrowRight className="size-3.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
