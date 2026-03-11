import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingCTA } from "@/components/conversion/FloatingCTA";
import { organizationSchema, websiteSchema } from "@/lib/schemas";

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
  verification: {
    // Add Google Search Console verification token here when available
    // google: "your-verification-token",
  },
  category: "Engenharia Industrial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = organizationSchema();
  const webSchema = websiteSchema();

  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect para Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* TODO: Migrar Google Fonts para next/font/google para eliminar request externo e melhorar LCP.
            Fontes: Plus Jakarta Sans (body), Space Grotesk (display), JetBrains Mono (mono) */}

        {/* Critical CSS inline — estilos above-the-fold para evitar render-blocking (Item 21)
            Inclui: layout base, fontes, header, hero, cores primarias e grid overlay */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root{--primary:oklch(0.451 0.225 17.5);--primary-foreground:oklch(1 0 0);--background:oklch(0.99 0.002 100);--foreground:oklch(0.13 0.01 260);--border:oklch(0.91 0.008 250);--font-body:"Plus Jakarta Sans",system-ui,sans-serif;--font-display:"Space Grotesk",system-ui,sans-serif;--font-mono:"JetBrains Mono",monospace}
              *{box-sizing:border-box;border-color:var(--border)}
              body{margin:0;font-family:var(--font-body);background:var(--background);color:var(--foreground);-webkit-font-smoothing:antialiased}
              h1,h2,h3,h4,h5,h6{font-family:var(--font-display);letter-spacing:-0.025em}
              .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
              header{position:fixed;top:0;left:0;right:0;z-index:50}
              .mono-label{font-family:var(--font-mono);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--primary);font-weight:600}
              .section-heading{font-size:clamp(2rem,3.5vw,3.75rem);line-height:1.04;font-weight:700;letter-spacing:-0.03em}
            `.replace(/\n\s*/g, ""),
          }}
        />

        <Script
          id="schema-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSchema) }}
        />
      </head>
      <body className="antialiased">
        {/* Skip navigation link para acessibilidade (WCAG 2.4.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-900 focus:shadow-lg focus:outline focus:outline-2 focus:outline-primary"
        >
          Pular para o conteúdo principal
        </a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
        <FloatingCTA />
      </body>
    </html>
  );
}
