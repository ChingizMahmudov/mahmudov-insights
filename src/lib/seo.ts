import { absoluteUrl } from "@/config/site";
import { getDict } from "@/i18n";
import { isLocale, LOCALES, type Locale } from "@/i18n/types";

export const localeOf = (lang: string | undefined): Locale => (isLocale(lang) ? lang : "en");

export function pageHead({
  lang,
  path,
  title,
  description,
}: {
  lang: string | undefined;
  path: string;
  title: string;
  description: string;
}) {
  const locale = localeOf(lang);
  const url = absoluteUrl(`/${locale}${path}`);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mahmudov Insights" },
      { property: "og:url", content: url },
      { property: "og:locale", content: getDict(locale).htmlLang },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: url },
      ...LOCALES.map((l) => ({
        rel: "alternate",
        hrefLang: l,
        href: absoluteUrl(`/${l}${path}`),
      })),
      { rel: "alternate", hrefLang: "x-default", href: absoluteUrl(`/en${path}`) },
    ],
  };
}
