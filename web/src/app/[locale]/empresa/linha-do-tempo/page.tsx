import { getTranslations } from "next-intl/server";
import { timeline } from "@/lib/data/company";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Section } from "@/components/site/primitives";
import { TimelineAnimated } from "@/components/site/TimelineAnimated";

export async function generateMetadata() {
  const t = await getTranslations("pages.linhaDoTempo");
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/empresa/linha-do-tempo",
    },
  };
}

const founded = 1999;
const currentYear = new Date().getFullYear();

const STATS = [
  { value: `${currentYear - founded}+`, label: "Anos de mercado" },
  { value: "250+", label: "Projetos entregues" },
  { value: "336 MW", label: "Energia solar instalada" },
  { value: "5 países", label: "Com projetos realizados" },
] as const;

export default async function LinhaDoTempoPage() {
  const t = await getTranslations("pages.linhaDoTempo");

  return (
    <main>
      <PageIntro
        tag={t("tag")}
        title={t("pageTitle")}
        subtitle={t("subtitle")}
        breadcrumbs={[
          { label: t("breadcrumbEmpresa"), href: "/empresa" },
          { label: t("breadcrumbLinhaDoTempo") },
        ]}
      />

      {/* Stats strip */}
      <div className="border-b border-zinc-200 bg-zinc-50">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-zinc-200 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="px-4 py-6 text-center md:py-8">
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
            <span className="font-medium uppercase tracking-wider text-zinc-600">Legenda:</span>
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
          <TimelineAnimated items={timeline} />
        </Container>
      </Section>
    </main>
  );
}
