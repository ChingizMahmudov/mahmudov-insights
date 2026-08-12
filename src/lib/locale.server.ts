import { getRequestHeader } from "@tanstack/react-start/server";
import { LOCALES, type Locale } from "@/i18n/types";

/** Pick a supported locale from the incoming Accept-Language header. */
export function localeFromRequest(): Locale {
  const header = getRequestHeader("accept-language") ?? "";
  const entries = header
    .split(",")
    .map((part) => {
      const [tag = "", ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { code: tag.toLowerCase().split("-")[0] ?? "", q: q ? Number(q.split("=")[1]) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const entry of entries) {
    if ((LOCALES as readonly string[]).includes(entry.code)) return entry.code as Locale;
  }
  return "en";
}
