import type { Metadata } from "next";
import Script from "next/script";
import { HeroSection } from "@/components/home/HeroSection";
import { SectorsSection } from "@/components/home/SectorsSection";
import { CapabilitiesRail } from "@/components/home/CapabilitiesRail";
import { MethodologySection } from "@/components/home/MethodologySection";
import { ProofBento } from "@/components/home/ProofBento";
import { WorksGallery } from "@/components/home/WorksGallery";
import { CompanyBrief } from "@/components/home/CompanyBrief";
import { ContactCTA } from "@/components/home/ContactCTA";
import { FAQSection } from "@/components/content/FAQSection";
import { faqSchema } from "@/lib/schemas";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("metadata");
  const prefix = locale === "pt-BR" ? "" : `/${locale}`;
  const description = t("homeDescription");
  return {
    title: t("homeTitle"),
    description,
    alternates: {
      canonical: `https://www.authomathika.com.br${prefix}/`,
    },
    openGraph: {
      title: t("homeTitle"),
      description,
      locale: locale.replace("-", "_"),
    },
    twitter: {
      title: t("homeTitle"),
      description,
    },
  };
}

export default async function HomePage() {
  const t = await getTranslations("homeFaq");

  const faqItems = [
    { question: t("q1"), answer: t("a1") },
    { question: t("q2"), answer: t("a2") },
    { question: t("q3"), answer: t("a3") },
    { question: t("q4"), answer: t("a4") },
    { question: t("q5"), answer: t("a5") },
  ];

  const faqSchemaData = faqSchema(faqItems);

  return (
    <main>
      <HeroSection />
      <SectorsSection />
      <CapabilitiesRail />
      <MethodologySection />
      <ProofBento />
      <WorksGallery />
      <FAQSection items={faqItems} />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />
      <CompanyBrief />
      <ContactCTA />
    </main>
  );
}
