import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { BookOpen, Newspaper } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Section } from "@/components/site/primitives";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.mediaCenter");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: "/media-center",
    },
  };
}

export default async function MediaCenterPage() {
  const t = await getTranslations("pages.mediaCenter");

  const sections = [
    { title: t("newsTitle"), description: t("newsDescription"), href: "/media-center/noticias" as const, Icon: Newspaper, count: t("newsCount") },
    { title: t("blogTitle"), description: t("blogDescription"), href: "/media-center/blog" as const, Icon: BookOpen, count: t("blogCount") },
  ];

  return (
    <main>
      <PageIntro
        tag={t("tag")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: t("breadcrumb") }]}
      />

      <Section>
        <Container className="grid gap-4 md:grid-cols-2">
          {sections.map((section) => (
            <Link key={section.title} href={section.href} className="group rounded-3xl border border-zinc-200 bg-white p-6 transition hover:bg-zinc-50">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg border border-indigo-200 bg-indigo-50 text-primary">
                <section.Icon className="size-6" />
              </div>
              <h2 className="font-display text-3xl font-bold text-zinc-900">{section.title}</h2>
              <p className="mt-2 text-sm text-zinc-600">{section.description}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.14em] text-zinc-500">{section.count}</p>
            </Link>
          ))}
        </Container>
      </Section>
    </main>
  );
}
