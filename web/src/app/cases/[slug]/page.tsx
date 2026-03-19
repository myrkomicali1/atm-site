import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  caseStudies,
  getCaseStudy,
  getCaseStudiesBySector,
} from "@/lib/data/case-studies";
import { getBusinessArea } from "@/lib/data/businesses";
import { getSector } from "@/lib/data/sectors";
import { getTestimonialById } from "@/lib/data/testimonials";
import { articleSchema } from "@/lib/schemas";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Eyebrow, Panel, Section } from "@/components/site/primitives";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.filter((c) => c.hasDetails !== false).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Não encontrado" };

  return {
    title: cs.title,
    description: (cs.challenge ?? "").slice(0, 160),
    alternates: {
      canonical: `/cases/${slug}`,
    },
  };
}

const typeLabels: Record<string, string> = {
  greenfield: "Greenfield",
  brownfield: "Brownfield",
  revamp: "Revamp",
  epc: "EPC",
  montagem: "Montagem",
  solar: "Energia Solar",
};

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const sector = getSector(cs.sector);
  const relatedAreas = cs.servicesUsed.map(getBusinessArea).filter(Boolean);
  const testimonial = cs.testimonialId
    ? getTestimonialById(cs.testimonialId)
    : null;
  const relatedCases = getCaseStudiesBySector(cs.sector)
    .filter((c) => c.slug !== cs.slug)
    .slice(0, 3);

  const schema = articleSchema({
    title: cs.title,
    description: (cs.challenge ?? "").slice(0, 160),
    url: `/cases/${slug}`,
    datePublished: `${cs.year}-01-01`,
    category: "Case de Sucesso",
  });

  return (
    <main>
      <script
        id={`schema-case-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageIntro
        tag="Case de sucesso"
        title={cs.title}
        subtitle={`${cs.client} — ${typeLabels[cs.type] ?? cs.type}`}
        breadcrumbs={[
          { label: "Cases", href: "/cases" },
          { label: cs.title },
        ]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-12">
          {/* Main content */}
          <div className="space-y-8 lg:col-span-8">
            {/* Hero image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={cs.image}
                alt={cs.altText}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-600">
                <MapPin className="size-3.5" />
                {cs.location}
              </div>
              <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-600">
                <Calendar className="size-3.5" />
                {cs.year}
              </div>
              {cs.duration ? (
                <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-600">
                  <Clock className="size-3.5" />
                  {cs.duration}
                </div>
              ) : null}
              {sector ? (
                <Link
                  href={`/setores/${sector.slug}`}
                  className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/10"
                >
                  {sector.name}
                </Link>
              ) : null}
            </div>

            {/* Challenge */}
            <Panel className="space-y-3">
              <Eyebrow>O desafio</Eyebrow>
              <p className="text-sm leading-relaxed text-zinc-700">
                {cs.challenge}
              </p>
            </Panel>

            {/* Solution */}
            <Panel className="space-y-3">
              <Eyebrow>A solução</Eyebrow>
              <p className="text-sm leading-relaxed text-zinc-700">
                {cs.solution}
              </p>
            </Panel>

            {/* Results */}
            {cs.results.length > 0 ? (
              <div>
                <Eyebrow className="mb-4">Resultados</Eyebrow>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {cs.results.map((r) => (
                    <div
                      key={r.metric}
                      className="rounded-xl border border-zinc-200 bg-white p-4 text-center"
                    >
                      <div className="font-display text-lg font-bold text-zinc-900">
                        {r.value}
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-zinc-500">
                        {r.metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Testimonial */}
            {testimonial ? (
              <Panel className="space-y-3 border-l-4 border-l-primary">
                <blockquote className="text-sm italic leading-relaxed text-zinc-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="text-sm font-semibold text-zinc-900">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-zinc-500">
                    {testimonial.role} — {testimonial.company}
                  </div>
                </div>
              </Panel>
            ) : null}

            {/* Related cases */}
            {relatedCases.length > 0 ? (
              <div>
                <Eyebrow className="mb-4">
                  Outros projetos em {sector?.name ?? "setor"}
                </Eyebrow>
                <div className="grid gap-4 sm:grid-cols-3">
                  {relatedCases.map((rc) => (
                    <Link
                      key={rc.slug}
                      href={`/cases/${rc.slug}`}
                      className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:border-primary/20 hover:shadow-sm"
                    >
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={rc.image}
                          alt={rc.altText}
                          fill
                          sizes="33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-display text-sm font-bold text-zinc-900">
                          {rc.title}
                        </h3>
                        <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                          Ver case <ArrowRight className="size-3" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:col-span-4">
            {/* Services used */}
            {relatedAreas.length > 0 ? (
              <Panel className="space-y-3">
                <h2 className="mono-label">Divisões envolvidas</h2>
                {relatedAreas.map((area) =>
                  area ? (
                    <Link
                      key={area.slug}
                      href={`/nossos-negocios/${area.slug}`}
                      className="block rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 transition-colors hover:border-primary/20 hover:bg-white"
                    >
                      <div className="font-display text-sm font-bold text-zinc-900">
                        {area.name}
                      </div>
                      <div className="mt-0.5 text-xs text-zinc-500">
                        {area.shortDescription.split(" ").slice(0, 6).join(" ")}...
                      </div>
                    </Link>
                  ) : null,
                )}
              </Panel>
            ) : null}

            {/* CTA */}
            <Panel className="space-y-4">
              <h3 className="font-display text-xl font-bold text-zinc-900">
                Tem um desafio similar?
              </h3>
              <p className="text-sm text-zinc-500">
                Fale com nossa equipe de engenharia e receba uma proposta
                técnica personalizada para o seu projeto.
              </p>
              <Button asChild className="w-full rounded-full font-semibold">
                <Link href="/contato/solicitacao-de-orcamento">
                  Fale com nossa engenharia <ArrowRight className="size-4" />
                </Link>
              </Button>
              <div className="space-y-1.5 text-xs text-zinc-500">
                <p>Resposta em até 48h úteis</p>
                <p>Seus dados são confidenciais</p>
              </div>
            </Panel>
          </aside>
        </Container>
      </Section>
    </main>
  );
}
