import { getTranslations } from "next-intl/server";
import { visionPillars } from "@/lib/data/company";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Eyebrow, Panel, Section } from "@/components/site/primitives";

export async function generateMetadata() {
  const t = await getTranslations("pages.visaoCorporativa");
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/empresa/visao-corporativa",
    },
  };
}

export default async function VisaoCorporativaPage() {
  const t = await getTranslations("pages.visaoCorporativa");
  const td = await getTranslations("companyData.visionPillars");

  return (
    <main>
      <PageIntro
        tag={t("tag")}
        title={t("pageTitle")}
        subtitle={t("subtitle")}
        breadcrumbs={[
          { label: t("breadcrumbEmpresa"), href: "/empresa" },
          { label: t("breadcrumbVisao") },
        ]}
      />

      <Section>
        <Container className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            {visionPillars.map((pillar, i) => (
              <Panel key={pillar.icon} className="space-y-3">
                <Eyebrow>{td(`${i}.title`)}</Eyebrow>
                <p className="text-sm text-zinc-600">{td(`${i}.description`)}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-zinc-200 bg-zinc-100/70">
        <Container className="max-w-4xl text-center">
          <p className="font-display text-3xl font-bold leading-tight text-zinc-900 md:text-5xl">
            &ldquo;{t("quote")}&rdquo;
          </p>
        </Container>
      </Section>
    </main>
  );
}
