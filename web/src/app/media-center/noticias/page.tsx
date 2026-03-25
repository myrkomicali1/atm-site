import type { Metadata } from "next";
import { Calendar } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Section } from "@/components/site/primitives";
import { articleSchema } from "@/lib/schemas";

export const metadata: Metadata = { title: "Notícias", alternates: { canonical: "/media-center/noticias" } };

const news = [
  { title: "Fenasucro 2022", dateISO: "2022-08-20", date: "2022", excerpt: "Participação da Authomathika na principal feira de bioenergia." },
  { title: "Fenasucro 2019", dateISO: "2019-08-22", date: "2019", excerpt: "Novos projetos e investimentos para o setor industrial." },
  { title: "Marco de segurança operacional", dateISO: "2019-06-15", date: "2019", excerpt: "Reconhecimento da excelência em práticas de segurança nas frentes de trabalho." },
  { title: "Reunião Anual Fermentec 2019", dateISO: "2019-03-10", date: "2019", excerpt: "Fortalecimento de relacionamentos no setor sucroenergético." },
  { title: "Projetos de 2018", dateISO: "2018-12-15", date: "2018", excerpt: "Bahia Etanol, Mosaic Uberaba e outros cases relevantes." },
  { title: "Authomathika na Fenasucro 2018", dateISO: "2018-08-22", date: "2018", excerpt: "Presença consolidada no calendário de bioenergia." },
  { title: "Prêmio Excelência Entressafra 2016/2017", dateISO: "2017-05-20", date: "2017", excerpt: "Reconhecimento da BP Biofuels à performance da equipe." },
  { title: "Parada Geral Vale CMA e Vale CIU", dateISO: "2017-04-10", date: "2017", excerpt: "Execução de parada de manutenção de grande porte." },
  { title: "Planta Piloto de Etanol SENAI", dateISO: "2017-03-15", date: "2017", excerpt: "Conclusão da primeira unidade piloto de etanol (UPPE)." },
];

export default function NoticiasPage() {
  /* Article schema JSON-LD para cada notícia (Item 15) */
  const articleSchemas = news.map((item) =>
    articleSchema({
      title: item.title,
      description: item.excerpt,
      url: "/media-center/noticias",
      datePublished: item.dateISO,
      category: "Notícias",
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
        tag="Atualizações"
        title="Notícias"
        subtitle="Principais marcos, eventos e reconhecimentos da Authomathika."
        breadcrumbs={[
          { label: "Media Center", href: "/media-center" },
          { label: "Notícias" },
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
