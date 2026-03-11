import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/data/company";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Panel, Section } from "@/components/site/primitives";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.careers");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: "/trabalhe-conosco",
    },
  };
}

export default async function TrabalheConoscoPage() {
  const t = await getTranslations("pages.careers");

  const pillars = [t("pillars.0"), t("pillars.1"), t("pillars.2"), t("pillars.3")];

  return (
    <main>
      <PageIntro
        tag={t("tag")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: t("breadcrumb") }]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-12">
          <Panel className="space-y-4 lg:col-span-7">
            <h2 className="font-display text-3xl font-bold text-zinc-900">{t("whyBuildCareer")}</h2>
            <p className="text-zinc-600">{t("whyDescription")}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div key={pillar} className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700">
                  {pillar}
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="space-y-4 lg:col-span-5">
            <h3 className="font-display text-2xl font-bold text-zinc-900">{t("jobsTitle")}</h3>
            <p className="text-sm text-zinc-600">{t("jobsDescription")}</p>
            <Button asChild className="w-full rounded-full font-semibold">
              <a href={company.gupy} target="_blank" rel="noopener noreferrer">
                {t("viewJobs")} <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </Panel>
        </Container>
      </Section>
    </main>
  );
}
