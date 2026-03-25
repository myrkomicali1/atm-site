import type { Metadata } from "next";
import { timeline } from "@/lib/data/company";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Section } from "@/components/site/primitives";
import { TimelineAnimated } from "@/components/site/TimelineAnimated";

export const metadata: Metadata = {
  title: "Linha do Tempo",
  description:
    "De 1999 a hoje: mais de 27 anos de marcos na engenharia integradora. Mais de 890 MW solares, sistema de gestão da qualidade e evolução contínua.",
  alternates: {
    canonical: "/empresa/linha-do-tempo",
  },
};

const founded = 1999;
const currentYear = new Date().getFullYear();

const STATS = [
  { value: `${currentYear - founded}+`, label: "Anos de mercado" },
  { value: "250+", label: "Projetos entregues" },
  { value: "892 MW", label: "Energia solar instalada" },
  { value: "5 países", label: "Com projetos realizados" },
] as const;

export default function LinhaDoTempoPage() {
  return (
    <main>
      <PageIntro
        tag="Histórico"
        title="Linha do Tempo"
        subtitle="Mais de 25 anos de projetos industriais — de Sertãozinho ao mundo."
        breadcrumbs={[
          { label: "Empresa", href: "/empresa" },
          { label: "Linha do Tempo" },
        ]}
      />

      {/* Stats strip */}
      <div className="border-b border-zinc-200 bg-zinc-50">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-zinc-200 md:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="px-4 py-6 text-center md:py-8"
              >
                <div className="font-display text-2xl font-bold text-zinc-900 md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-zinc-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Legend */}
      <div className="border-b border-zinc-100 bg-white">
        <Container>
          <div className="flex flex-wrap gap-x-6 gap-y-2 py-4 text-[11px] text-zinc-500">
            <span className="font-medium text-zinc-600 uppercase tracking-wider">Legenda:</span>
            {[
              { dot: "bg-zinc-900", label: "Fundação" },
              { dot: "bg-primary", label: "Marco" },
              { dot: "bg-zinc-600", label: "Projetos" },
              { dot: "bg-amber-500", label: "Prêmio" },
              { dot: "bg-blue-600", label: "Expansão" },
              { dot: "bg-emerald-600", label: "Internacional" },
            ].map((item) => (
              <span key={item.label} className="flex items-center gap-1.5">
                <span className={`inline-block size-2.5 rounded-full ${item.dot}`} />
                {item.label}
              </span>
            ))}
          </div>
        </Container>
      </div>

      <Section>
        <Container className="max-w-5xl">
          <TimelineAnimated
            items={timeline}
            typeLabels={{
              founding: "Fundação",
              milestone: "Marco",
              project: "Projetos",
              award: "Prêmio",
              expansion: "Expansão",
              international: "Internacional",
            }}
            worksLabel="{count} obras"
            endCapLabel="Construindo o futuro"
          />
        </Container>
      </Section>
    </main>
  );
}
