import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { servicePages } from "@/lib/data/services";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Panel, Section } from "@/components/site/primitives";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.serviceList");
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/servicos",
    },
  };
}

const stats = [
  { value: "42.027", key: "statsEquipamentos" },
  { value: "297.000+", key: "statsHoras" },
  { value: "1.630", key: "statsAtendimentos" },
] as const;

export default async function ServicosPage() {
  const t = await getTranslations("pages.serviceList");
  const td = await getTranslations("serviceData");

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
          <div className="space-y-3 lg:col-span-4">
            <h2 className="font-display text-3xl font-bold text-zinc-900">{t("journeyTitle")}</h2>
            <p className="text-zinc-600">{t("journeyDescription")}</p>
          </div>

          <div className="space-y-3 lg:col-span-8">
            {servicePages.map((service, index) => (
              <Link key={service.slug} href={`/servicos/${service.slug}`}>
                <div className="group grid gap-3 rounded-2xl border border-zinc-200 bg-white px-5 py-4 transition hover:bg-zinc-50 md:grid-cols-[56px_1fr_auto] md:items-center">
                  <span className="font-mono text-xs text-zinc-500">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-zinc-900">{td(`${service.slug}.name`)}</h3>
                    <p className="text-sm text-zinc-600">{td(`${service.slug}.shortDescription`)}</p>
                  </div>
                  <span className="text-sm font-semibold text-primary group-hover:text-zinc-900">
                    {t("details")} <ArrowRight className="ml-1 inline size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-zinc-200 bg-zinc-100/70">
        <Container className="grid gap-3 md:grid-cols-3">
          {stats.map((item) => (
            <Panel key={item.key} className="text-center">
              <div className="font-display text-4xl font-bold text-zinc-900">{item.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-500">{t(item.key)}</div>
            </Panel>
          ))}
        </Container>
      </Section>
    </main>
  );
}
