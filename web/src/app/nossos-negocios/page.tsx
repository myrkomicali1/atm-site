import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { businessAreas } from "@/lib/data/businesses";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Panel, Section } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Nossos Negócios",
  description: "Divisões especializadas em engenharia elétrica e automação industrial.",
  alternates: {
    canonical: "/nossos-negocios",
  },
};

export default function NossosNegociosPage() {
  return (
    <main>
      <PageIntro
        tag="Estrutura de serviços"
        title="Nossos Negócios"
        subtitle="Unidades complementares para projeto, implantação e sustentação de ativos industriais."
        breadcrumbs={[{ label: "Nossos Negócios" }]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-12">
          <aside className="space-y-4 lg:col-span-4">
            <Panel className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-zinc-900">Mapa de capacidades</h2>
              <p className="text-sm text-zinc-600">Cada divisão opera com equipe e método próprios, integrados por uma governança técnica única.</p>
            </Panel>
          </aside>

          <div className="lg:col-span-8">
            <div className="divide-y divide-zinc-200 rounded-3xl border border-zinc-200 bg-white">
              {businessAreas.map((area, index) => (
                <Link
                  key={area.slug}
                  href={`/nossos-negocios/${area.slug}`}
                  className="group grid gap-4 px-5 py-5 transition hover:bg-zinc-50 md:grid-cols-[56px_1fr_auto] md:items-center"
                >
                  <span className="font-mono text-xs text-zinc-500">{String(index + 1).padStart(2, "0")}</span>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-zinc-900">{area.name}</h3>
                    <p className="text-sm text-zinc-600">{area.shortDescription}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2">
                    Detalhes <ArrowRight className="size-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
