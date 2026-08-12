export const LOCALES = ["en", "az", "ru"] as const;
export type Locale = (typeof LOCALES)[number];

export const isLocale = (value: string | undefined): value is Locale =>
  !!value && (LOCALES as readonly string[]).includes(value);

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "EN",
  az: "AZ",
  ru: "RU",
};

export const CONTACT = {
  email: "chingiz@mi-az.com",
  phone: "+994 70 871 74 82",
  phoneHref: "+994708717482",
  linkedin: "https://www.linkedin.com/in/chingiz-mahmudov-b89a97329",
  linkedinLabel: "linkedin.com/in/chingiz-mahmudov-b89a97329",
};

export const CASE_SLUGS = [
  "shopper-segmentation",
  "fieldwork-supervision",
  "satisfaction-questionnaire",
] as const;
export type CaseSlug = (typeof CASE_SLUGS)[number];
