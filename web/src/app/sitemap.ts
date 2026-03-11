import type { MetadataRoute } from "next";
import { businessAreas } from "@/lib/data/businesses";
import { servicePages } from "@/lib/data/services";
import { products } from "@/lib/data/products";
import { sectors } from "@/lib/data/sectors";
import { caseStudies } from "@/lib/data/case-studies";

const BASE = "https://www.authomathika.com.br";
const LOCALES = ["pt-BR", "en", "es"] as const;
const DEFAULT_LOCALE = "pt-BR";

type ChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

function url(
  path: string,
  priority: number,
  changeFrequency: ChangeFreq = "monthly",
): MetadataRoute.Sitemap[number] {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
    languages[locale] = `${BASE}${prefix}${path}`;
  }

  return {
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core
    url("/", 1.0, "weekly"),

    // Empresa
    url("/empresa/institucional", 0.8),
    url("/empresa/visao-corporativa", 0.7),
    url("/empresa/linha-do-tempo", 0.7),
    url("/empresa/clientes", 0.7),

    // Nossos Negocios
    url("/nossos-negocios", 0.9),
    ...businessAreas.map((b) => url(`/nossos-negocios/${b.slug}`, 0.85)),

    // Setores
    url("/setores", 0.9),
    ...sectors.map((s) => url(`/setores/${s.slug}`, 0.85)),

    // Cases
    url("/cases", 0.9),
    ...caseStudies.map((c) => url(`/cases/${c.slug}`, 0.8)),

    // Servicos
    url("/servicos", 0.9),
    ...servicePages.map((s) => url(`/servicos/${s.slug}`, 0.8)),

    // Produtos
    url("/produtos", 0.9),
    ...products.map((p) => url(`/produtos/${p.slug}`, 0.8)),

    // Obras (legacy — redirect to /cases)
    url("/obras", 0.5),

    // Media Center
    url("/media-center", 0.7),
    url("/media-center/noticias", 0.7, "weekly"),
    url("/media-center/blog", 0.7, "weekly"),

    // Trabalhe Conosco
    url("/trabalhe-conosco", 0.6, "weekly"),

    // Contato
    url("/contato", 0.6),
    url("/contato/fale-conosco", 0.6),
    url("/contato/solicitacao-de-orcamento", 0.7),
    url("/contato/fornecedores", 0.5),
    url("/contato/localizacao", 0.6),
  ];
}
