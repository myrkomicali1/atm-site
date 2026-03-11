import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { getProduct, products } from "@/lib/data/products";
import { productSchema } from "@/lib/schemas";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Eyebrow, Panel, Section } from "@/components/site/primitives";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  const t = await getTranslations('pages.metadata');
  const td = await getTranslations('productData');
  if (!product) return { title: t('notFound') };

  return {
    title: `${td(`${slug}.name`)} – ${td(`${slug}.shortDescription`)}`,
    description: td(`${slug}.description`),
    alternates: {
      canonical: `/produtos/${slug}`,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const tp = await getTranslations('pages.productDetail');
  const td = await getTranslations('productData');
  const tn = await getTranslations('nav');

  const translatedName = td(`${slug}.name`);
  const translatedDescription = td(`${slug}.description`);
  const translatedShortDescription = td(`${slug}.shortDescription`);
  const translatedBadge = product.badge ? td(`${slug}.badge`) : null;
  const translatedFeatures = Array.from({ length: product.features.length }, (_, i) => td(`${slug}.features.${i}`));

  const specKeys = product.specs ? Object.keys(product.specs) : [];
  const translatedSpecs = specKeys.map((key) => ({
    label: td(`${slug}.specs.${key}.label`),
    value: td(`${slug}.specs.${key}.value`),
  }));

  const schema = productSchema({
    name: translatedName,
    description: translatedDescription,
    url: `/produtos/${slug}`,
    specs: product.specs,
    badge: translatedBadge ?? undefined,
  });

  return (
    <main>
      <script id={`schema-product-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageIntro
        tag={tp('product')}
        title={translatedName}
        subtitle={translatedShortDescription}
        breadcrumbs={[
          { label: tn('produtos'), href: "/produtos" },
          { label: translatedName },
        ]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <Panel className="space-y-3">
              <Eyebrow>{tp('application')}</Eyebrow>
              <p className="text-zinc-600">{translatedDescription}</p>
              {translatedBadge ? <span className="w-fit rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-primary">{translatedBadge}</span> : null}
            </Panel>

            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
              <div className="border-b border-zinc-200 px-5 py-3 text-xs uppercase tracking-[0.14em] text-zinc-500">{tp('mainFeatures')}</div>
              <div className="divide-y divide-zinc-200">
                {translatedFeatures.map((feature, idx) => (
                  <div key={feature} className="grid gap-2 px-5 py-4 md:grid-cols-[48px_1fr] md:items-center">
                    <span className="font-mono text-xs text-zinc-500">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-zinc-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {translatedSpecs.length > 0 ? (
              <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                <div className="border-b border-zinc-200 px-5 py-3 text-xs uppercase tracking-[0.14em] text-zinc-500">{tp('specifications')}</div>
                <div className="divide-y divide-zinc-200">
                  {translatedSpecs.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between gap-4 px-5 py-4">
                      <span className="text-xs uppercase tracking-[0.14em] text-zinc-500">{spec.label}</span>
                      <span className="text-sm font-semibold text-zinc-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <Panel className="space-y-4">
              <h3 className="font-display text-xl font-bold text-zinc-900">{tp('requestTechnicalEvaluation')}</h3>
              <Button asChild className="w-full rounded-full font-semibold">
                <Link href="/contato/solicitacao-de-orcamento">
                  {tp('openRequest')} <ArrowRight className="size-4" />
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
              <Eyebrow>{tp('otherProducts')}</Eyebrow>
              {products
                .filter((item) => item.slug !== slug)
                .slice(0, 5)
                .map((item) => (
                  <Link key={item.slug} href={`/produtos/${item.slug}`} className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900">
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
