import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Newspaper } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Section } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Media Center",
  description:
    "Notícias, cases e conteúdo técnico sobre automação industrial, energia solar fotovoltaica e engenharia EPC da Authomathika.",
  alternates: {
    canonical: "/media-center",
  },
};

const sections = [
  { title: "Notícias", description: "Cobertura de eventos, marcos e atualizações institucionais.", href: "/media-center/noticias", Icon: Newspaper, count: "9 publicações" },
  { title: "Blog", description: "Conteúdos técnicos sobre engenharia elétrica e automação.", href: "/media-center/blog", Icon: BookOpen, count: "2 artigos" },
];

export default function MediaCenterPage() {
  return (
    <main>
      <PageIntro
        tag="Conteúdo"
        title="Media Center"
        subtitle="Notícias e conteúdo técnico da Authomathika."
        breadcrumbs={[{ label: "Media Center" }]}
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
