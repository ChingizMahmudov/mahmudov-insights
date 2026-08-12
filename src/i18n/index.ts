import { en, type Dict } from "./en";
import { az } from "./az";
import { ru } from "./ru";
import { LOCALES, isLocale, type Locale } from "./types";

export const DICTS: Record<Locale, Dict> = { en, az, ru };

export const getDict = (locale: Locale): Dict => DICTS[locale];

export const detectLocale = (): Locale => {
  if (typeof navigator === "undefined") return "en";
  const langs = [navigator.language, ...(navigator.languages ?? [])];
  for (const raw of langs) {
    const code = raw?.toLowerCase().split("-")[0];
    if (code === "az") return "az";
    if (code === "ru") return "ru";
    if (code === "en") return "en";
  }
  return "en";
};

export { LOCALES, isLocale };
export type { Locale, Dict };
