import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/buscar", "/curriculo-enviado", "/trabalhe-conosco-old"],
      },
      // Allow AI crawlers explicitly for GEO
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
    ],
    sitemap: "https://www.authomathika.com.br/sitemap.xml",
    host: "https://www.authomathika.com.br",
  };
}
