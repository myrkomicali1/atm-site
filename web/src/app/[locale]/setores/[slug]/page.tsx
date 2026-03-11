import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { sectors, getSector } from "@/lib/data/sectors";
import { getBusinessArea } from "@/lib/data/businesses";
import { getCaseStudiesBySector } from "@/lib/data/case-studies";

import { faqSchema } from "@/lib/schemas";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Eyebrow, Panel, Section } from "@/components/site/primitives";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSector(slug);
  const t = await getTranslations('pages.metadata');
  const td = await getTranslations('sectorNames');
  if (!sector) return { title: t('notFound') };

  return {
    title: t('sectorTitle', { name: td(`${slug}.name`) }),
    description: td(`${slug}.description`).slice(0, 160),
    alternates: {
      canonical: `/setores/${slug}`,
    },
  };
}

export default async function SectorPage({ params }: Props) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  const tp = await getTranslations('pages.sectorDetail');
  const td = await getTranslations('sectorNames');
  const tb = await getTranslations('businessAreasData');
  const tc = await getTranslations('caseStudyData');
  const tn = await getTranslations('nav');

  const translatedName = td(`${slug}.name`);
  const translatedHeadline = td(`${slug}.headline`);
  const translatedDescription = td(`${slug}.description`);

  const cases = getCaseStudiesBySector(slug);
  const relatedAreas = sector.relatedBusinessAreas
    .map(getBusinessArea)
    .filter(Boolean);

  const translatedFaqs = sector.faq.map((_, i) => ({
    question: td(`${slug}.faq.${i}.question`),
    answer: td(`${slug}.faq.${i}.answer`),
  }));
  const faqJsonLd = translatedFaqs.length > 0 ? faqSchema(translatedFaqs) : null;

  return (
    <main>
      {faqJsonLd ? (
        <script
          id={`schema-faq-setor-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}

      <PageIntro
        tag={`${tp('sector')} ${translatedName}`}
        title={translatedHeadline}
        subtitle={translatedDescription.split(". ").slice(0, 2).join(". ") + "."}
        breadcrumbs={[
          { label: tn('setores'), href: "/setores" },
          { label: translatedName },
        ]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-12">
          {/* Main content */}
          <div className="space-y-8 lg:col-span-8">
            {/* Pain points */}
            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
              <h2 className="border-b border-zinc-200 px-5 py-3 text-xs uppercase tracking-[0.14em] text-zinc-500 font-normal">
                {tp('sectorChallenges')}
              </h2>
              <div className="divide-y divide-zinc-100">
                {sector.painPoints.map((_, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 px-5 py-4"
                  >
                    <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-500" />
                    <p className="text-sm text-zinc-700">{td(`${slug}.painPoints.${i}`)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
              <h2 className="border-b border-zinc-200 px-5 py-3 text-xs uppercase tracking-[0.14em] text-zinc-500 font-normal">
                {tp('howAuthomathikaSolves')}
              </h2>
              <div className="divide-y divide-zinc-100">
                {sector.solutions.map((_, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 px-5 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                    <p className="text-sm text-zinc-700">{td(`${slug}.solutions.${i}`)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related business areas */}
            {relatedAreas.length > 0 ? (
              <div>
                <Eyebrow className="mb-4">{tp('relatedSolutions')}</Eyebrow>
                <div className="grid gap-3 sm:grid-cols-2">
                  {relatedAreas.map((area) =>
                    area ? (
                      <Link
                        key={area.slug}
                        href={`/nossos-negocios/${area.slug}`}
                        className="group rounded-2xl border border-zinc-200 bg-white p-4 transition-all hover:border-primary/20 hover:shadow-sm"
                      >
                        <h3 className="font-display text-sm font-bold text-zinc-900 group-hover:text-primary transition-colors">
                          {tb(`${area.slug}.name`)}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-xs text-zinc-500">
                          {tb(`${area.slug}.shortDescription`)}
                        </p>
                        <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                          {tp('viewSolution')} <ArrowRight className="size-3" />
                        </span>
                      </Link>
                    ) : null,
                  )}
                </div>
              </div>
            ) : null}

            {/* Cases in this sector */}
            {cases.length > 0 ? (
              <div>
                <Eyebrow className="mb-4">{tp('projectsInSector')}</Eyebrow>
                <div className="grid gap-4 sm:grid-cols-2">
                  {cases.map((cs) => (
                    <Link
                      key={cs.slug}
                      href={`/cases/${cs.slug}`}
                      className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:border-primary/20 hover:shadow-sm"
                    >
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={cs.image}
                          alt={tc(`${cs.slug}.altText`)}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
                        <div className="absolute bottom-3 left-3">
                          <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-700">
                            {cs.type}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-display text-base font-bold text-zinc-900">
                          {tc(`${cs.slug}.title`)}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-xs text-zinc-500">
                          {tc(`${cs.slug}.challenge`).split(". ")[0]}.
                        </p>
                        {cs.results[0] ? (
                          <div className="mt-2 flex items-center gap-2">
                            <span className="rounded-full bg-primary/8 px-2 py-0.5 text-[10px] font-semibold text-primary">
                              {tc(`${cs.slug}.results.0.metric`)}: {tc(`${cs.slug}.results.0.value`)}
                            </span>
                          </div>
                        ) : null}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            {/* FAQ */}
            {translatedFaqs.length > 0 ? (
              <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                <h2 className="border-b border-zinc-200 px-5 py-3 text-xs uppercase tracking-[0.14em] text-zinc-500 font-normal">
                  {tp('faq')} — {translatedName}
                </h2>
                <div className="divide-y divide-zinc-200">
                  {translatedFaqs.map((faq) => (
                    <details key={faq.question} className="group">
                      <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors">
                        <span>{faq.question}</span>
                        <ChevronDown className="size-4 shrink-0 text-zinc-400 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="px-5 pb-4 text-sm leading-relaxed text-zinc-600">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:col-span-4">
            {/* Metrics */}
            <Panel className="space-y-3">
              <h2 className="mono-label">{tp('sectorIndicators')}</h2>
              {sector.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3"
                >
                  <div className="text-xs uppercase tracking-[0.14em] text-zinc-500">
                    {td(`${slug}.metric${i}Label`)}
                  </div>
                  <div className="font-display text-2xl font-bold text-zinc-900">
                    {metric.value}
                  </div>
                </div>
              ))}
            </Panel>

            {/* Clients */}
            {sector.clients.length > 0 ? (
              <Panel className="space-y-3">
                <h2 className="mono-label">{tp('sectorClients')}</h2>
                <div className="flex flex-wrap gap-2">
                  {sector.clients.map((client) => (
                    <span
                      key={client}
                      className="inline-block rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </Panel>
            ) : null}

            {/* CTA */}
            <Panel className="space-y-4">
              <h3 className="font-display text-xl font-bold text-zinc-900">
                {tp('talkToSpecialistIn', { sector: translatedName })}
              </h3>
              <p className="text-sm text-zinc-500">
                {tp('teamKnowsChallenges')}
              </p>
              <Button asChild className="w-full rounded-full font-semibold">
                <Link href="/contato/solicitacao-de-orcamento">
                  {tp('requestProposal')} <ArrowRight className="size-4" />
                </Link>
              </Button>
              <div className="space-y-1.5 text-xs text-zinc-500">
                <p>{tp('responseIn48h')}</p>
                <p>{tp('dataConfidential')}</p>
              </div>
            </Panel>
          </aside>
        </Container>
      </Section>
    </main>
  );
}
