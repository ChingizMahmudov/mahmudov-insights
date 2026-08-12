import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL } from "@/config/site";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: ({ request }) => {
        // Prefer the configured production origin (VITE_SITE_URL); fall back to
        // the origin the request actually arrived on, so a newly connected
        // custom domain advertises itself correctly even before a rebuild.
        const origin = SITE_URL || new URL(request.url).origin;

        const body = ["User-agent: *", "Allow: /", "", `Sitemap: ${origin}/sitemap.xml`, ""].join(
          "\n",
        );

        return new Response(body, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
