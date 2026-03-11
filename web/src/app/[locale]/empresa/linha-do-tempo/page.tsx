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

export default async function LinhaDoTempoPage() {
  const t = await getTranslations("pages.linhaDoTempo");
  const td = await getTranslations("companyData.timeline");

  const translatedTimeline = timeline.map((item, i) => ({
    year: item.year,
    event: td(`${i}.event`),
  }));

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

      <Section>
        <Container>
          <TimelineAnimated items={translatedTimeline} />
        </Container>
      </Section>
    </main>
  );
}
