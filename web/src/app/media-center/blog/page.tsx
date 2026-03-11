import type { Metadata } from "next";
import { Calendar, Clock3 } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Section } from "@/components/site/primitives";
import { articleSchema } from "@/lib/schemas";

export const metadata: Metadata = { title: "Blog", alternates: { canonical: "/media-center/blog" } };

const posts = [
  {
    title: "10 Dicas para Escolher seu Fornecedor de Painéis e Quadros Elétricos",
    date: "2022",
    dateISO: "2022-06-15",
    category: "Elétrica",
    readTime: "7 min",
    excerpt: "Critérios de engenharia para avaliar fornecedores com foco em confiabilidade, prazo e suporte.",
  },
  {
    title: "Como o DCLT Melhora a Eficiência de uma Usina de Açúcar e Etanol?",
    date: "2021",
    dateISO: "2021-09-10",
    category: "Produtos",
    readTime: "5 min",
    excerpt: "Aplicação prática de medição contínua no chute Donnelly para ganho operacional.",
  },
];

export default function BlogPage() {
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
        tag="Conteúdo técnico"
        title="Blog"
        subtitle="Artigos práticos sobre elétrica, automação e performance industrial."
        breadcrumbs={[
          { label: "Media Center", href: "/media-center" },
          { label: "Blog" },
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
