import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL } from "@/config/site";
import { CASE_SLUGS, LOCALES } from "@/i18n/types";

const PAGES = [
  { path: "", changefreq: "weekly", priority: "1.0" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/industries", changefreq: "monthly", priority: "0.8" },
  { path: "/case-studies", changefreq: "monthly", priority: "0.8" },
  ...CASE_SLUGS.map((slug) => ({
    path: `/case-studies/${slug}`,
    changefreq: "yearly",
    priority: "0.7",
  })),
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.9" },
  { path: "/legal/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/legal/cookies", changefreq: "yearly", priority: "0.3" },
  { path: "/legal/terms", changefreq: "yearly", priority: "0.3" },
] as const;

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        // Prefer the configured production origin; otherwise use the request's own.
        const origin = SITE_URL || new URL(request.url).origin;
        const urls = LOCALES.flatMap((locale) =>
          PAGES.map((page) => {
            const alternates = [
              ...LOCALES.map(
                (l) =>
                  `    <xhtml:link rel="alternate" hreflang="${l}" href="${origin}/${l}${page.path}" />`,
              ),
              `    <xhtml:link rel="alternate" hreflang="x-default" href="${origin}/en${page.path}" />`,
            ].join("\n");
            return [
              `  <url>`,
              `    <loc>${origin}/${locale}${page.path}</loc>`,
              alternates,
              `    <changefreq>${page.changefreq}</changefreq>`,
              `    <priority>${page.priority}</priority>`,
              `  </url>`,
            ].join("\n");
          }),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
