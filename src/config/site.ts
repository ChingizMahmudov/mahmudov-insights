/**
 * Single place to configure deployment-wide constants.
 *
 * VITE_SITE_URL is the single source of truth for the production domain.
 * Set it at build time (e.g. VITE_SITE_URL=https://www.mahmudov-insights.com)
 * and everything SEO-related — canonical, hreflang, og:url, sitemap.xml and
 * robots.txt — follows automatically.
 *
 * If it is not set, no environment-specific host is baked into the bundle:
 * canonical/hreflang/og:url fall back to root-relative paths, and
 * sitemap.xml / robots.txt use the origin of the incoming request.
 */
const envUrl =
  typeof import.meta !== "undefined"
    ? (import.meta.env?.["VITE_SITE_URL"] as string | undefined)
    : undefined;

/** Absolute production origin, never with a trailing slash. Empty when unconfigured. */
export const SITE_URL = String(envUrl || "").replace(/\/+$/, "");

/**
 * Build a URL from a root-relative path. Absolute when a production origin is
 * known, otherwise root-relative (still valid for canonical/hreflang).
 */
export const absoluteUrl = (path: string): string => {
  const p = path.startsWith("/") ? path : `/${path}`;
  return SITE_URL ? `${SITE_URL}${p}` : p;
};

/** Local, host-agnostic asset paths (served from /public). */
export const ASSETS = {
  logo: "/assets/mi-logo.png",
  mark: "/assets/mi-mark.png",
  portrait: "/assets/chingiz-mahmudov.jpg",
  credentials: "/assets/mahmudov-insights-credentials.pdf",
} as const;
