import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { SectorsSection } from "@/components/home/SectorsSection";
import { CapabilitiesRail } from "@/components/home/CapabilitiesRail";
import { MethodologySection } from "@/components/home/MethodologySection";
import { ProofBento } from "@/components/home/ProofBento";

import { WorksGallery } from "@/components/home/WorksGallery";
import { CompanyBrief } from "@/components/home/CompanyBrief";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Authomathika – Engenharia Integradora",
  description:
    "Engenharia integradora com responsabilidade de ponta a ponta. Elétrica, automação, EPC, IA e dados em um único contrato. 25 anos, 208 projetos, 12+ setores industriais.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SectorsSection />
      <CapabilitiesRail />
      <MethodologySection />
      <ProofBento />
      <WorksGallery />
      {/* TODO: FAQSection — criar componente reutilizável (Fase 3) */}
      <CompanyBrief />
      <ContactCTA />
    </main>
  );
}
