import type { Metadata } from "next";
import { timeline } from "@/lib/data/company";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Section } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Linha do Tempo",
  description:
    "De 1999 a hoje: mais de 25 anos de marcos na engenharia integradora. 336 MW solares, 2.000+ dias sem acidentes, certificação ISO 9001 e evolução contínua.",
  alternates: {
    canonical: "/empresa/linha-do-tempo",
  },
};

export default function LinhaDoTempoPage() {
  return (
    <main>
      <PageIntro
        tag="Histórico"
        title="Linha do Tempo"
        subtitle="Marcos de evolução da Authomathika desde 1999."
        breadcrumbs={[
          { label: "Empresa", href: "/empresa" },
          { label: "Linha do Tempo" },
        ]}
      />

      <Section>
        <Container>
          <div className="relative ml-2 border-l-2 border-zinc-200 pl-8">
            {timeline.map((item) => (
              <article key={`${item.year}-${item.event}`} className="relative mb-8 rounded-2xl border border-zinc-200 bg-white p-5">
                <span className="absolute -left-[41px] top-6 size-4 rounded-full border-2 border-indigo-300 bg-indigo-100" />
                <div className="font-display text-3xl font-bold text-primary">{item.year}</div>
                <p className="mt-1 text-sm text-zinc-600">{item.event}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
