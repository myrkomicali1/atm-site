import type { Metadata } from "next";
import Image from "next/image";
import { works } from "@/lib/data/company";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Section } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Obras",
  description: "Portfólio de projetos e obras executadas pela Authomathika.",
  alternates: {
    canonical: "/obras",
  },
};

export default function ObrasPage() {
  return (
    <main>
      <PageIntro
        tag="Portfólio executado"
        title="Projetos e Obras"
        subtitle="Implantações industriais entregues em diferentes segmentos e contextos operacionais."
        breadcrumbs={[{ label: "Obras" }]}
      />

      <Section>
        <Container>
          <div className="columns-1 gap-4 space-y-4 md:columns-2 xl:columns-3">
            {works.map((work) => (
              <article key={work.title} className="mb-4 break-inside-avoid overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                <div className="relative aspect-[4/3]">
                  <Image src={work.image} alt={work.altText ?? work.title} fill className="object-cover" />
                </div>
                <div className="space-y-2 p-4">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-primary">{work.type}</div>
                  <h2 className="font-display text-xl font-bold text-zinc-900">{work.title}</h2>
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{work.category}</p>
                  <p className="text-sm text-zinc-600">{work.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
