/**
 * Single source of truth for every numeric business claim on the site.
 *
 * IMPORTANT: these are factual claims. Update them here only — all pages,
 * dictionaries and case studies read from this file.
 */

import type { Locale } from "@/i18n/types";

export const BUSINESS_STATS = {
  /** "200+" analytical reports delivered */
  reportsDelivered: 200,
  /** Years of market research experience */
  yearsExperience: 6,
  /** Discount offered on a first eligible project engagement, in percent */
  firstProjectDiscountPercent: 25,
  /** Typical response time, in hours */
  responseHours: 24,
} as const;

export const CASE_STATS = {
  shopperSegmentation: {
    sample: 2100,
    segments: 4,
    clusterSolutions: [3, 4, 5] as const,
  },
  fieldworkSupervision: {
    interviewers: 22,
  },
  satisfactionQuestionnaire: {
    questions: 44,
    modules: 5,
    pilotSample: 50,
  },
} as const;

/** Thousands separator per locale: EN uses a comma, AZ/RU use a thin space. */
export const formatCount = (n: number, locale: Locale): string =>
  locale === "en"
    ? n.toLocaleString("en-US")
    : String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "\u202f");

export const reportsDeliveredDisplay = `${BUSINESS_STATS.reportsDelivered}+`;
