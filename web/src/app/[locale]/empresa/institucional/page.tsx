import { getTranslations } from "next-intl/server";
import { company } from "@/lib/data/company";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Eyebrow, Panel, Section } from "@/components/site/primitives";

export async function generateMetadata() {
  const t = await getTranslations("pages.institucional");
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/empresa/institucional",
    },
  };
}

export default async function InstitucionalPage() {
  const t = await getTranslations("pages.institucional");

  const diferencials = Array.from({ length: 10 }, (_, i) => t(`diferencial${i}`));

  return (
    <main>
      <PageIntro
        tag={t("tag")}
        title={t("pageTitle")}
        subtitle={t("subtitle")}
        breadcrumbs={[
          { label: t("breadcrumbEmpresa"), href: "/empresa" },
          { label: t("breadcrumbInstitucional") },
        ]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-12">
          <article className="space-y-5 lg:col-span-8">
            <Panel className="space-y-4">
              <Eyebrow>{t("quemSomos")}</Eyebrow>
              <p className="text-zinc-600">{t("paragraph1")}</p>
              <p className="text-zinc-600">{t("paragraph2")}</p>
              <p className="text-zinc-600">{t("paragraph3")}</p>
            </Panel>

            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
              <div className="border-b border-zinc-200 px-5 py-3 text-xs uppercase tracking-[0.14em] text-zinc-500">{t("diferenciais")}</div>
              <div className="divide-y divide-zinc-200">
                {diferencials.map((item, idx) => (
                  <div key={idx} className="grid gap-2 px-5 py-4 md:grid-cols-[48px_1fr] md:items-center">
                    <span className="font-mono text-xs text-zinc-500">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6 lg:col-span-4">
            <Panel className="space-y-2">
              <Eyebrow>{t("dadosCorporativos")}</Eyebrow>
              <p className="text-sm text-zinc-600"><strong className="text-zinc-900">{t("fundacao")}</strong> 1999</p>
              <p className="text-sm text-zinc-600"><strong className="text-zinc-900">{t("presidente")}</strong> {company.president}</p>
              <p className="text-sm text-zinc-600"><strong className="text-zinc-900">{t("telefone")}</strong> {company.phone}</p>
            </Panel>

            <Panel className="space-y-3">
              <Eyebrow>{t("conformidades")}</Eyebrow>
              <div className="flex flex-wrap gap-2">
                {[...company.certifications, "RBC", "LGPD", "NR-1"].map((item) => (
                  <span key={item} className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-primary">
                    {item}
                  </span>
                ))}
              </div>
            </Panel>
          </aside>
        </Container>
      </Section>
    </main>
  );
}
