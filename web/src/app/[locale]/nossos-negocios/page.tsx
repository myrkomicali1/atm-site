import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { businessAreas } from "@/lib/data/businesses";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Panel, Section } from "@/components/site/primitives";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.businessList");
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/nossos-negocios",
    },
  };
}

export default async function NossosNegociosPage() {
  const t = await getTranslations("pages.businessList");
  const td = await getTranslations("businessAreasData");

  return (
    <main>
      <PageIntro
        tag={t("tag")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: t("title") }]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-12">
          <aside className="space-y-4 lg:col-span-4">
            <Panel className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-zinc-900">{t("capabilitiesMap")}</h2>
              <p className="text-sm text-zinc-600">{t("capabilitiesDescription")}</p>
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
                    <h3 className="font-display text-2xl font-bold text-zinc-900">{td(`${area.slug}.name`)}</h3>
                    <p className="text-sm text-zinc-600">{td(`${area.slug}.shortDescription`)}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2">
                    {t("details")} <ArrowRight className="size-4" />
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
