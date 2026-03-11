import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data/products";
import { productSchema } from "@/lib/schemas";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Panel, Section } from "@/components/site/primitives";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.productList");
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/produtos",
    },
  };
}

export default async function ProdutosPage() {
  const t = await getTranslations("pages.productList");
  const td = await getTranslations("productData");

  /* Schema Product JSON-LD para cada produto */
  const productSchemas = products.map((product) =>
    productSchema({
      name: product.name,
      description: product.description,
      url: `/produtos/${product.slug}`,
      specs: product.specs,
      badge: product.badge,
    })
  );

  return (
    <main>
      {/* Product schemas JSON-LD */}
      {productSchemas.map((schema, i) => (
        <script
          key={products[i].slug}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <PageIntro
        tag={t("tag")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: t("title") }]}
      />

      <Section>
        <Container className="space-y-5">
          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
            <div className="hidden grid-cols-[2fr_1fr_120px] border-b border-zinc-200 bg-zinc-50 px-5 py-3 text-xs uppercase tracking-[0.14em] text-zinc-500 md:grid">
              <span>{t("columnProduct")}</span>
              <span>{t("columnHighlight")}</span>
              <span className="text-right">{t("columnAction")}</span>
            </div>
            <div className="divide-y divide-zinc-200">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/produtos/${product.slug}`}
                  className="group grid gap-2 px-5 py-4 transition hover:bg-zinc-50 md:grid-cols-[2fr_1fr_120px] md:items-center"
                >
                  <div>
                    <h2 className="font-display text-xl font-bold text-zinc-900">{td(`${product.slug}.name`)}</h2>
                    <p className="text-sm text-zinc-600">{td(`${product.slug}.shortDescription`)}</p>
                  </div>
                  <div>
                    {product.badge ? <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-primary">{td(`${product.slug}.badge`)}</span> : <span className="text-sm text-zinc-500">-</span>}
                  </div>
                  <div className="text-right text-sm font-semibold text-primary group-hover:text-zinc-900">
                    {t("open")} <ArrowRight className="ml-1 inline size-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Panel className="text-sm text-zinc-600">
            {t("specNote")}
          </Panel>
        </Container>
      </Section>
    </main>
  );
}
