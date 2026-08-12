import { createFileRoute, redirect } from "@tanstack/react-router";
import { detectLocale } from "@/i18n";
import { isLocale } from "@/i18n/types";

export const Route = createFileRoute("/")({
  // Server-side (and client-side) redirect before anything renders, so users
  // never see a blank or loading screen while JavaScript boots.
  beforeLoad: async () => {
    let target = "en";

    if (import.meta.env.SSR) {
      const { localeFromRequest } = await import("@/lib/locale.server");
      target = localeFromRequest();
    } else {
      const stored = localStorage.getItem("mi-lang");
      target = isLocale(stored ?? undefined) ? stored! : detectLocale();
    }

    throw redirect({ to: "/$lang", params: { lang: target }, replace: true });
  },
  head: () => ({
    meta: [
      { title: "Mahmudov Insights — Research Analysis & Reporting Partner" },
      {
        name: "description",
        content:
          "Client-ready data analysis, statistical analysis and reporting for market research agencies.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
});
