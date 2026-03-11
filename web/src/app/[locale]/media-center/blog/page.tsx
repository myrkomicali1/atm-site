import type { Metadata } from "next";
import { Calendar, Clock3 } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Section } from "@/components/site/primitives";
import { articleSchema } from "@/lib/schemas";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.blog");
  return {
    title: t("metaTitle"),
    alternates: { canonical: "/media-center/blog" },
  };
}

const postDateData = [
  { date: "2022", dateISO: "2022-06-15" },
  { date: "2021", dateISO: "2021-09-10" },
];

export default async function BlogPage() {
  const t = await getTranslations("pages.blog");

  const posts = postDateData.map((item, i) => ({
    ...item,
    title: t(`posts.${i}.title`),
    category: t(`posts.${i}.category`),
    readTime: t(`posts.${i}.readTime`),
    excerpt: t(`posts.${i}.excerpt`),
  }));

  /* Article schema JSON-LD para cada post (Item 15) */
  const articleSchemas = posts.map((post) =>
    articleSchema({
      title: post.title,
      description: post.excerpt,
      url: "/media-center/blog",
      datePublished: post.dateISO,
      category: post.category,
    })
  );

  return (
    <main>
      {articleSchemas.map((schema, i) => (
        <script
          key={posts[i].title}
          id={`schema-article-${i}`}
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
        <Container className="space-y-4">
          {posts.map((post) => (
            <article key={post.title} className="rounded-3xl border border-zinc-200 bg-white p-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
                <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-primary">{post.category}</span>
                <span className="inline-flex items-center gap-1"><Calendar className="size-3.5 text-primary" /> {post.date}</span>
                <span className="inline-flex items-center gap-1"><Clock3 className="size-3.5 text-primary" /> {post.readTime}</span>
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold text-zinc-900">{post.title}</h2>
              <p className="mt-2 text-sm text-zinc-600">{post.excerpt}</p>
            </article>
          ))}
        </Container>
      </Section>
    </main>
  );
}
