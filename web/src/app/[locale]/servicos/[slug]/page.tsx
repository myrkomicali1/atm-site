import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { getServicePage, servicePages } from "@/lib/data/services";
import { serviceSchema } from "@/lib/schemas";
import { routing } from "@/i18n/routing";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Eyebrow, Panel, Section } from "@/components/site/primitives";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    servicePages.map((service) => ({ locale, slug: service.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  const t = await getTranslations('pages.metadata');
  const td = await getTranslations('serviceData');
  if (!service) return { title: t('notFound') };

  return {
    title: t('serviceTitle', { name: td(`${slug}.name`) }),
    description: td(`${slug}.description`),
    alternates: {
      canonical: `/servicos/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  const tp = await getTranslations('pages.serviceDetail');
  const td = await getTranslations('serviceData');
  const tn = await getTranslations('nav');

  const translatedName = td(`${slug}.name`);
  const translatedDescription = td(`${slug}.description`);
  const translatedShortDescription = td(`${slug}.shortDescription`);
  const translatedFeatures = Array.from({ length: service.features.length }, (_, i) => td(`${slug}.features.${i}`));

  const schema = serviceSchema({
    name: translatedName,
    description: translatedDescription,
    url: `/servicos/${slug}`,
    features: translatedFeatures,
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageIntro
        tag={tp('service')}
        title={translatedName}
        subtitle={translatedShortDescription}
        breadcrumbs={[
          { label: tn('servicos'), href: "/servicos" },
          { label: translatedName },
        ]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <Panel className="space-y-3">
              <Eyebrow>{tp('scope')}</Eyebrow>
              <p className="text-zinc-600">{translatedDescription}</p>
            </Panel>

            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
              <div className="border-b border-zinc-200 px-5 py-3 text-xs uppercase tracking-[0.14em] text-zinc-500">{tp('deliverables')}</div>
              <div className="divide-y divide-zinc-200">
                {translatedFeatures.map((item, idx) => (
                  <div key={item} className="grid gap-2 px-5 py-4 md:grid-cols-[48px_1fr] md:items-center">
                    <span className="font-mono text-xs text-zinc-500">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-4">
            {service.certifications?.length ? (
              <Panel className="space-y-3">
                <Eyebrow>{tp('certifications')}</Eyebrow>
                <div className="flex flex-wrap gap-2">
                  {service.certifications.map((item) => (
                    <span key={item} className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-primary">
                      {item}
                    </span>
                  ))}
                </div>
              </Panel>
            ) : null}

            <Panel className="space-y-4">
              <h3 className="font-display text-xl font-bold text-zinc-900">{tp('talkToSpecialist')}</h3>
              <Button asChild className="w-full rounded-full font-semibold">
                <Link href="/contato/fale-conosco">
                  {tp('openService')} <ArrowRight className="size-4" />
                </Link>
              </Button>
              <a href="tel:+551635134000" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900">
                <Phone className="size-4 text-primary" /> (16) 3513-4000
              </a>
              <a href="mailto:comercial@authomathika.com.br" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900">
                <Mail className="size-4 text-primary" /> comercial@authomathika.com.br
              </a>
            </Panel>

            <Panel className="space-y-3">
              <Eyebrow>{tp('otherServices')}</Eyebrow>
              {servicePages
                .filter((item) => item.slug !== slug)
                .slice(0, 4)
                .map((item) => (
                  <Link key={item.slug} href={`/servicos/${item.slug}`} className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900">
                    <ArrowRight className="size-3 text-primary" /> {td(`${item.slug}.name`)}
                  </Link>
                ))}
            </Panel>
          </aside>
        </Container>
      </Section>
    </main>
  );
}
