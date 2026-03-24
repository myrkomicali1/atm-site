import { getTranslations, getMessages } from "next-intl/server";
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

export default async function LinhaDoTempoPage() {
  const t = await getTranslations("pages.linhaDoTempo");
  const messages = await getMessages();

  // Access translation entries via raw messages object for dynamic keys
  const timelineMessages = (
    (messages as Record<string, unknown>)?.pages as Record<string, unknown>
  )?.linhaDoTempo as Record<string, unknown> | undefined;

  const entriesMessages = timelineMessages?.entries as
    | Record<string, { headline?: string; highlight?: string }>
    | undefined;

  const sectorLabelsMessages = timelineMessages?.sectorLabels as
    | Record<string, string>
    | undefined;

  const STATS = [
    { value: `${currentYear - founded}+`, label: t("stats.yearsLabel") },
    { value: "250+", label: t("stats.projectsLabel") },
    { value: "892 MW", label: t("stats.solarLabel") },
    { value: t("stats.countriesValue"), label: t("stats.countriesLabel") },
  ];

  const LEGEND = [
    { dot: "bg-zinc-900", label: t("legend.founding") },
    { dot: "bg-primary", label: t("legend.milestone") },
    { dot: "bg-zinc-600", label: t("legend.projects") },
    { dot: "bg-amber-500", label: t("legend.award") },
    { dot: "bg-blue-600", label: t("legend.expansion") },
    { dot: "bg-emerald-600", label: t("legend.international") },
  ];

  const typeLabels: Record<string, string> = {
    founding: t("legend.founding"),
    milestone: t("legend.milestone"),
    project: t("legend.projects"),
    award: t("legend.award"),
    expansion: t("legend.expansion"),
    international: t("legend.international"),
  };

  const translatedTimeline = timeline.map((item) => {
    const yearKey = String(item.year);
    const entryData = entriesMessages?.[yearKey];
    const headline = entryData?.headline ?? item.headline;
    const highlight = entryData?.highlight ?? item.highlight;
    const translatedSectors = item.sectors?.map(
      (s) => sectorLabelsMessages?.[s] ?? s
    );
    return {
      ...item,
      headline,
      highlight,
      sectors: translatedSectors,
    };
  });

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
            <span className="font-medium uppercase tracking-wider text-zinc-600">
              {t("legend.title")}:
            </span>
            {LEGEND.map((item) => (
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
            items={translatedTimeline}
            typeLabels={typeLabels}
            worksLabel={t("worksCount")}
            endCapLabel={t("endCap")}
          />
        </Container>
      </Section>
    </main>
  );
}
