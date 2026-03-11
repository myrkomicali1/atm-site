import Script from "next/script";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingCTA } from "@/components/conversion/FloatingCTA";
import { organizationSchema, websiteSchema } from "@/lib/schemas";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();
  const ta = await getTranslations("accessibility");
  const ts = await getTranslations("schemas");
  const orgSchema = organizationSchema(ts);
  const webSchema = websiteSchema(ts, locale);

  const SITE_URL = "https://www.authomathika.com.br";
  const currentPath = ""; // root for now

  return (
    <html lang={locale} className={`${plusJakarta.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* hreflang alternates for i18n SEO */}
        {routing.locales.map((loc) => (
          <link
            key={loc}
            rel="alternate"
            hrefLang={loc}
            href={`${SITE_URL}${loc === routing.defaultLocale ? "" : `/${loc}`}${currentPath}`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${currentPath}`} />

        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root{--primary:oklch(0.451 0.225 17.5);--primary-foreground:oklch(1 0 0);--background:oklch(0.99 0.002 100);--foreground:oklch(0.13 0.01 260);--border:oklch(0.91 0.008 250)}
              *{box-sizing:border-box;border-color:var(--border)}
              body{margin:0;font-family:var(--font-body),system-ui,sans-serif;background:var(--background);color:var(--foreground);-webkit-font-smoothing:antialiased}
              h1,h2,h3,h4,h5,h6{font-family:var(--font-display),system-ui,sans-serif;letter-spacing:-0.025em}
              .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
              header{position:fixed;top:0;left:0;right:0;z-index:50}
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
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-900 focus:shadow-lg focus:outline focus:outline-2 focus:outline-primary"
          >
            {ta("skipToContent")}
          </a>
          <SiteHeader />
          <div id="main-content">{children}</div>
          <SiteFooter />
          <FloatingCTA />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
