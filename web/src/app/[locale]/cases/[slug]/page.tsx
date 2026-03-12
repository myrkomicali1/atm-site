import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Calendar, Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import {
  caseStudies,
  getCaseStudy,
  getCaseStudiesBySector,
} from "@/lib/data/case-studies";
import { getBusinessArea } from "@/lib/data/businesses";
import { getSector } from "@/lib/data/sectors";

import { articleSchema } from "@/lib/schemas";
import { routing } from "@/i18n/routing";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Eyebrow, Panel, Section } from "@/components/site/primitives";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    caseStudies.map((c) => ({ locale, slug: c.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  const t = await getTranslations('pages.metadata');
  const td = await getTranslations('caseStudyData');
  if (!cs) return { title: t('notFound') };

  return {
    title: td(`${slug}.title`),
    description: td(`${slug}.challenge`).slice(0, 160),
    alternates: {
      canonical: `/cases/${slug}`,
    },
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const tp = await getTranslations('pages.caseDetail');
  const td = await getTranslations('caseStudyData');
  const tb = await getTranslations('businessAreasData');
  const ts = await getTranslations('sectorNames');
  const tn = await getTranslations('nav');

  const translatedTitle = td(`${slug}.title`);
  const translatedChallenge = td(`${slug}.challenge`);
  const translatedSolution = td(`${slug}.solution`);
  const translatedAltText = td(`${slug}.altText`);
  const translatedDuration = cs.duration ? td(`${slug}.duration`) : null;

  const translatedResults = cs.results.map((_, i) => ({
    metric: td(`${slug}.results.${i}.metric`),
    value: td(`${slug}.results.${i}.value`),
  }));

  const typeLabel = tp(`typeLabels.${cs.type}`);

  const sector = getSector(cs.sector);
  const translatedSectorName = sector ? ts(`${sector.slug}.name`) : null;

  const relatedAreas = cs.servicesUsed.map(getBusinessArea).filter(Boolean);
  const relatedCases = getCaseStudiesBySector(cs.sector)
    .filter((c) => c.slug !== cs.slug)
    .slice(0, 3);

  const schema = articleSchema({
    title: translatedTitle,
    description: translatedChallenge.slice(0, 160),
    url: `/cases/${slug}`,
    datePublished: `${cs.year}-01-01`,
    category: tp('successCase'),
  });

  return (
    <main>
      <script
        id={`schema-case-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageIntro
        tag={tp('successCase')}
        title={translatedTitle}
        subtitle={`${cs.client} — ${typeLabel}`}
        breadcrumbs={[
          { label: tn('cases'), href: "/cases" },
          { label: translatedTitle },
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
                alt={translatedAltText}
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
              {translatedDuration ? (
                <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-600">
                  <Clock className="size-3.5" />
                  {translatedDuration}
                </div>
              ) : null}
              {sector ? (
                <Link
                  href={`/setores/${sector.slug}`}
                  className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/10"
                >
                  {translatedSectorName}
                </Link>
              ) : null}
            </div>

            {/* Challenge */}
            <Panel className="space-y-3">
              <Eyebrow>{tp('theChallenge')}</Eyebrow>
              <p className="text-sm leading-relaxed text-zinc-700">
                {translatedChallenge}
              </p>
            </Panel>

            {/* Solution */}
            <Panel className="space-y-3">
              <Eyebrow>{tp('theSolution')}</Eyebrow>
              <p className="text-sm leading-relaxed text-zinc-700">
                {translatedSolution}
              </p>
            </Panel>

            {/* Results */}
            {translatedResults.length > 0 ? (
              <div>
                <Eyebrow className="mb-4">{tp('results')}</Eyebrow>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {translatedResults.map((r) => (
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

            {/* Related cases */}
            {relatedCases.length > 0 ? (
              <div>
                <Eyebrow className="mb-4">
                  {tp('otherProjectsIn', { sector: translatedSectorName ?? "setor" })}
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
                          alt={td(`${rc.slug}.altText`)}
                          fill
                          sizes="33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-display text-sm font-bold text-zinc-900">
                          {td(`${rc.slug}.title`)}
                        </h3>
                        <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                          {tp('viewCase')} <ArrowRight className="size-3" />
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
                <h2 className="mono-label">{tp('divisionsInvolved')}</h2>
                {relatedAreas.map((area) =>
                  area ? (
                    <Link
                      key={area.slug}
                      href={`/nossos-negocios/${area.slug}`}
                      className="block rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 transition-colors hover:border-primary/20 hover:bg-white"
                    >
                      <div className="font-display text-sm font-bold text-zinc-900">
                        {tb(`${area.slug}.name`)}
                      </div>
                      <div className="mt-0.5 text-xs text-zinc-500">
                        {tb(`${area.slug}.shortDescription`).split(" ").slice(0, 6).join(" ")}...
                      </div>
                    </Link>
                  ) : null,
                )}
              </Panel>
            ) : null}

            {/* CTA */}
            <Panel className="space-y-4">
              <h3 className="font-display text-xl font-bold text-zinc-900">
                {tp('similarChallenge')}
              </h3>
              <p className="text-sm text-zinc-500">
                {tp('engineeringDescription')}
              </p>
              <Button asChild className="w-full rounded-full font-semibold">
                <Link href="/contato/solicitacao-de-orcamento">
                  {tp('talkToEngineering')} <ArrowRight className="size-4" />
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
