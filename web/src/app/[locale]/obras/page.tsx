import type { Metadata } from "next";
import Image from "next/image";
import { works } from "@/lib/data/company";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Section } from "@/components/site/primitives";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.worksList");
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/obras",
    },
  };
}

export default async function ObrasPage() {
  const t = await getTranslations("pages.worksList");
  const td = await getTranslations("worksData");

  return (
    <main>
      <PageIntro
        tag={t("tag")}
        title={t("heading")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: t("title") }]}
      />

      <Section>
        <Container>
          <div className="columns-1 gap-4 space-y-4 md:columns-2 xl:columns-3">
            {works.map((work, index) => (
              <article key={work.title} className="mb-4 break-inside-avoid overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                <div className="relative aspect-[4/3]">
                  <Image src={work.image} alt={td(`${index}.altText`)} fill className="object-cover" />
                </div>
                <div className="space-y-2 p-4">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-primary">{td(`${index}.type`)}</div>
                  <h2 className="font-display text-xl font-bold text-zinc-900">{work.title}</h2>
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{td(`${index}.category`)}</p>
                  <p className="text-sm text-zinc-600">{td(`${index}.description`)}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
