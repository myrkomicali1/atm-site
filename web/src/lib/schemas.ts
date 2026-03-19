/**
 * JSON-LD Schema helpers for SEO & GEO (Generative Engine Optimization)
 * All schemas follow Schema.org vocabulary for maximum AI/search engine compatibility.
 */

const SITE_URL = "https://www.authomathika.com.br";
const COMPANY_NAME = "Authomathika";
const LOGO_URL = `${SITE_URL}/logo-authomathika.png`;

export function organizationSchema(t: (key: string) => string) {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY_NAME,
    alternateName: "Authomathika Engenharia",
    legalName: "Authomathika Engenharia Ltda",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
      width: 300,
      height: 80,
    },
    image: LOGO_URL,
    description: t("description"),
    foundingDate: "1999",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
    },
    taxID: "03.119.551/0001-67",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Ivone Fernandes Bernardi, 504",
      addressLocality: "Sertãozinho",
      addressRegion: "SP",
      postalCode: "14169-379",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -21.128,
      longitude: -47.999,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+55-16-3513-4000",
        contactType: "sales",
        areaServed: "BR",
        availableLanguage: ["Portuguese", "English", "Spanish"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: "+55-16-99646-5516",
        contactType: "customer support",
        contactOption: "TollFree",
        areaServed: "BR",
      },
      {
        "@type": "ContactPoint",
        email: "comercial@authomathika.com.br",
        contactType: "sales",
        areaServed: "BR",
      },
    ],
    sameAs: [
      "https://www.facebook.com/authomathika",
      "https://www.instagram.com/authomathika/",
      "https://www.linkedin.com/company/authomathika-epc/",
      "https://www.youtube.com/@authomathika8151",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t("offerCatalogName"),
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: t("service0") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: t("service1") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: t("service2") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: t("service3") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: t("service4") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: t("service5") } },
      ],
    },
    knowsAbout: [
      t("knows0"), t("knows1"), t("knows2"), t("knows3"),
      t("knows4"), t("knows5"), t("knows6"), t("knows7"),
      "SCADA", "CLP / PLC",
      t("knows10"), t("knows11"),
    ],
    award: [
      t("award0"),
      t("award1"),
      t("award2"),
    ],
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", name: "ISO 9001" },
      { "@type": "EducationalOccupationalCredential", name: "NR-10" },
      { "@type": "EducationalOccupationalCredential", name: "NR-35" },
      { "@type": "EducationalOccupationalCredential", name: t("credential3") },
    ],
  };
}

export function websiteSchema(t: (key: string) => string, locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: COMPANY_NAME,
    description: t("websiteDescription"),
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: locale,
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url?: string }>, homeName = "Início") {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: homeName, item: SITE_URL },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        ...(item.url ? { item: `${SITE_URL}${item.url}` } : {}),
      })),
    ],
  };
}

export function serviceSchema({
  name,
  description,
  url,
  features,
}: {
  name: string;
  description: string;
  url: string;
  features?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "BR",
    },
    serviceType: "Industrial Engineering",
    ...(features && features.length > 0
      ? {
          offers: {
            "@type": "Offer",
            itemOffered: features.map((f) => ({
              "@type": "Service",
              name: f,
            })),
          },
        }
      : {}),
  };
}

export function productSchema({
  name,
  description,
  url,
  specs,
  badge,
}: {
  name: string;
  description: string;
  url: string;
  specs?: Record<string, string>;
  badge?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url: `${SITE_URL}${url}`,
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    brand: {
      "@type": "Brand",
      name: COMPANY_NAME,
    },
    ...(badge ? { award: badge } : {}),
    ...(specs
      ? {
          additionalProperty: Object.entries(specs).map(([name, value]) => ({
            "@type": "PropertyValue",
            name,
            value,
          })),
        }
      : {}),
    offers: {
      "@type": "Offer",
      seller: { "@id": `${SITE_URL}/#organization` },
      availability: "https://schema.org/InStock",
      areaServed: "BR",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "BRL",
        description: "Request a quote",
      },
    },
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  category,
  locale = "pt-BR",
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  category?: string;
  locale?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    datePublished,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    ...(category ? { articleSection: category } : {}),
    inLanguage: locale,
  };
}

/**
 * Schema for case studies / project articles.
 * Based on Article schema adapted for engineering project narratives.
 */
export function caseStudySchema({
  title,
  description,
  slug,
  client,
  sector,
  year,
  results,
  locale = "pt-BR",
}: {
  title: string;
  description: string;
  slug: string;
  client: string;
  sector: string;
  year: number;
  results?: Array<{ metric: string; value: string }>;
  locale?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}/cases/${slug}`,
    datePublished: `${year}-01-01`,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    articleSection: "Case Study",
    about: {
      "@type": "Thing",
      name: client,
    },
    keywords: [sector, "engineering", "case study", "industrial project"],
    inLanguage: locale,
    ...(results && results.length > 0
      ? {
          hasPart: results.map((r) => ({
            "@type": "PropertyValue",
            name: r.metric,
            value: r.value,
          })),
        }
      : {}),
  };
}

/**
 * Schema for review / testimonials.
 * Uses Organization review aggregate pattern.
 */
export function reviewsSchema(
  items: Array<{
    name: string;
    role: string;
    company: string;
    text: string;
    rating: number;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    review: items.map((item) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: item.name,
        jobTitle: item.role,
      },
      reviewBody: item.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: item.rating,
        bestRating: 5,
      },
      publisher: {
        "@type": "Organization",
        name: item.company,
      },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue:
        items.reduce((sum, t) => sum + t.rating, 0) / items.length,
      reviewCount: items.length,
      bestRating: 5,
    },
  };
}

export function SITE_URL_BASE() {
  return SITE_URL;
}
