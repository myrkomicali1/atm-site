import type { Metadata } from "next";
import { Calendar } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Section } from "@/components/site/primitives";
import { articleSchema } from "@/lib/schemas";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.news");
  return {
    title: t("metaTitle"),
    alternates: { canonical: "/media-center/noticias" },
  };
}

const newsDateData = [
  { dateISO: "2022-08-20", date: "2022" },
  { dateISO: "2019-08-22", date: "2019" },
  { dateISO: "2019-06-15", date: "2019" },
  { dateISO: "2019-03-10", date: "2019" },
  { dateISO: "2018-12-15", date: "2018" },
  { dateISO: "2018-08-22", date: "2018" },
  { dateISO: "2017-05-20", date: "2017" },
  { dateISO: "2017-04-10", date: "2017" },
  { dateISO: "2017-03-15", date: "2017" },
];

export default async function NoticiasPage() {
  const t = await getTranslations("pages.news");

  const news = newsDateData.map((item, i) => ({
    ...item,
    title: t(`items.${i}.title`),
    excerpt: t(`items.${i}.excerpt`),
  }));

  /* Article schema JSON-LD para cada notícia (Item 15) */
  const articleSchemas = news.map((item) =>
    articleSchema({
      title: item.title,
      description: item.excerpt,
      url: "/media-center/noticias",
      datePublished: item.dateISO,
      category: t("title"),
    })
  );

  return (
    <main>
      {articleSchemas.map((schema, i) => (
        <script
          key={news[i].title}
          id={`schema-article-news-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <PageIntro
        tag={t("tag")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[
          { label: t("breadcrumbParent"), href: "/media-center" },
          { label: t("breadcrumb") },
        ]}
      />

      <Section>
        <Container>
          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
            <div className="divide-y divide-zinc-200">
              {news.map((item) => (
                <article key={item.title} className="px-5 py-5">
                  <div className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-zinc-500">
                    <Calendar className="size-3.5 text-primary" /> <time dateTime={item.dateISO}>{item.date}</time>
                  </div>
                  <h2 className="mt-2 font-display text-2xl font-bold text-zinc-900">{item.title}</h2>
                  <p className="mt-1 text-sm text-zinc-600">{item.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
