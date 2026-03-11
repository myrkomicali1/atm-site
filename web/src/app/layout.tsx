import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://www.authomathika.com.br";
const OG_IMAGE = `${SITE_URL}/logo-authomathika.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Authomathika – Engenharia Integradora de Sistemas Elétricos e Automação",
    template: "%s | Authomathika",
  },
  description:
    "Authomathika é uma empresa completa de engenharia integradora de sistemas Elétricos e de Automação, sediada em Sertãozinho, SP. Desde 1999, atuando em automação industrial, elétrica, energias renováveis, montagem eletromecânica e engenharia EPC.",
  keywords: [
    "engenharia automação",
    "automação industrial",
    "engenharia elétrica",
    "energias renováveis",
    "energia solar fotovoltaica",
    "montagem eletromecânica",
    "engenharia EPC",
    "instrumentação industrial",
    "setor sucroenergético",
    "manutenção industrial",
    "metrologia industrial",
    "painéis elétricos",
    "SCADA",
    "CLP",
    "Sertãozinho SP",
    "Authomathika",
  ],
  authors: [{ name: "Authomathika Engenharia", url: SITE_URL }],
  creator: "Authomathika Engenharia",
  publisher: "Authomathika Engenharia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Authomathika",
    title: "Authomathika – Engenharia Integradora de Sistemas Elétricos e Automação",
    description:
      "Empresa completa de engenharia integradora desde 1999. Automação industrial, elétrica, energias renováveis e montagem eletromecânica em Sertãozinho, SP.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Authomathika – Engenharia Integradora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Authomathika – Engenharia Integradora",
    description:
      "Empresa completa de engenharia integradora desde 1999. Automação industrial, elétrica e energias renováveis em Sertãozinho, SP.",
    images: [OG_IMAGE],
  },
  category: "Engenharia Industrial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
