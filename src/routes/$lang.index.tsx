import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { getDict } from "@/i18n";
import { pageHead, localeOf } from "@/lib/seo";
import { CASE_STUDIES } from "@/content/cases";
import {
  btn,
  CHARTS,
  ContactLines,
  Eyebrow,
  FinalCta,
  Reveal,
  SectionHead,
  StatBlock,
  CREDENTIALS_URL,
  PORTRAIT_URL,
} from "@/components/site/ui";
import hero from "@/assets/hero-analysis.jpg";
import retail from "@/assets/fieldwork-retail.jpg";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const t = getDict(localeOf(params.lang));
    return pageHead({
      lang: params.lang,
      path: "",
      title: t.home.seoTitle,
      description: t.home.seoDescription,
    });
  },
  component: HomePage,
});

function HomePage() {
  const locale = localeOf(Route.useParams().lang);
  const t = getDict(locale);
  const cases = CASE_STUDIES[locale];

  return (
    <>
      {/* HERO */}
      <section className="border-b border-border">
        <div className="shell grid gap-12 pb-16 pt-14 md:pb-20 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-24">
          <div>
            <Eyebrow>{t.brand.descriptor}</Eyebrow>
            <h1 className="display-1 mt-5">{t.home.heroTitle}</h1>
            <p className="mt-6 font-display text-xl text-forest md:text-2xl">
              {t.home.heroSubtitle}
            </p>
            <p className="lede mt-5 max-w-xl">{t.home.heroBody}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/$lang/contact" params={{ lang: locale }} className={btn.primary}>
                {t.cta.discuss}
              </Link>
              <Link to="/$lang/case-studies" params={{ lang: locale }} className={btn.outline}>
                {t.cta.viewCases}
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={hero}
              alt={t.home.heroImageAlt}
              width={1600}
              height={1104}
              className="aspect-4/3 w-full object-cover"
            />
          </div>
        </div>
        <div className="shell pb-12">
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.trust.map((item, i) => (
              <Reveal key={item.label} delay={i * 70}>
                <div className="border-t border-border pt-4">
                  <dt className="font-display text-2xl font-semibold text-forest">{item.value}</dt>
                  <dd className="mt-1.5 text-sm text-muted-foreground">{item.label}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* AGENCY SUPPORT */}
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow={t.home.supportEyebrow}
            title={t.home.supportTitle}
            body={t.home.supportBody}
          />
          <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
            {t.home.supportItems.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 60} className="bg-background p-7 md:p-9">
                <h3 className="display-3">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section bg-secondary">
        <div className="shell">
          <SectionHead
            eyebrow={t.home.servicesEyebrow}
            title={t.home.servicesTitle}
            body={t.home.servicesBody}
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {t.services.groups.map((g, i) => (
              <Reveal
                key={g.title}
                delay={i * 60}
                className="border-t border-forest/25 bg-background p-7 md:p-9"
              >
                <p className="font-display text-sm text-muted-foreground">0{i + 1}</p>
                <h3 className="display-3 mt-3">{g.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{g.summary}</p>
                <ul className="mt-6 space-y-2">
                  {g.items.slice(0, 5).map((s) => (
                    <li key={s} className="flex gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" aria-hidden="true" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/$lang/services" params={{ lang: locale }} className={btn.outline}>
              {t.cta.exploreServices} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow={t.home.processEyebrow}
            title={t.home.processTitle}
            body={t.home.processBody}
          />
          <ol className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-5">
            {t.home.process.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 70} className="bg-background p-6 md:p-7">
                <span className="font-display text-xs tracking-widest text-forest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="section bg-secondary">
        <div className="shell">
          <SectionHead eyebrow={t.home.outcomesEyebrow} title={t.home.outcomesTitle} />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {t.home.outcomes.map((o, i) => (
              <Reveal key={o.title} delay={i * 60} className="border-t border-forest/25 pt-6">
                <h3 className="display-3">{o.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {o.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="bg-forest-deep">
        <div className="shell section">
          <SectionHead eyebrow={t.home.proofEyebrow} title={t.home.proofTitle} invert />
          <dl className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.proof.map((p, i) => (
              <Reveal key={p.label} delay={i * 80}>
                <StatBlock value={p.value} label={p.label} invert animate />
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* SELECTED EXPERIENCE */}
      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <SectionHead
              eyebrow={t.home.experienceEyebrow}
              title={t.home.experienceTitle}
              body={t.home.experienceBody}
            />
            <ul className="mt-9 flex flex-wrap gap-2">
              {t.home.experienceTags.map((tag) => (
                <li
                  key={tag}
                  className="border border-border px-4 py-2 text-sm text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <img
              src={retail}
              alt=""
              width={1408}
              height={1008}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* CASE PREVIEW */}
      <section className="section bg-secondary">
        <div className="shell">
          <SectionHead
            eyebrow={t.home.casesEyebrow}
            title={t.home.casesTitle}
            body={t.home.casesBody}
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {cases.map((c, i) => {
              const Chart = CHARTS[c.chart];
              return (
                <Reveal as="article" key={c.slug} delay={i * 70} className="group bg-background">
                  <Chart className="aspect-16/10 w-full" />
                  <div className="border-t border-border p-6 md:p-7">
                    <p className="eyebrow">{c.industry}</p>
                    <h3 className="display-3 mt-3">
                      <Link
                        to="/$lang/case-studies/$slug"
                        params={{ lang: locale, slug: c.slug }}
                        className="underline-offset-4 group-hover:underline"
                      >
                        {c.title}
                      </Link>
                    </h3>
                    <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4">
                      {c.metrics.map((m) => (
                        <div key={m.label}>
                          <dt className="sr-only">{m.label}</dt>
                          <dd className="font-display text-sm font-semibold text-forest">
                            {m.value}
                          </dd>
                          <p className="mt-1 text-xs leading-snug text-muted-foreground">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </dl>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-10">
            <Link to="/$lang/case-studies" params={{ lang: locale }} className={btn.outline}>
              {t.cta.viewAllCases} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <img
              src={PORTRAIT_URL}
              alt={t.home.founderPortraitAlt}
              width={1072}
              height={1449}
              loading="lazy"
              className="aspect-3/4 w-full object-cover object-top"
            />
          </Reveal>
          <div>
            <Eyebrow>{t.home.founderEyebrow}</Eyebrow>
            <h2 className="display-2 mt-4">{t.home.founderTitle}</h2>
            <p className="mt-7 font-display text-xl font-semibold">{t.home.founderName}</p>
            <p className="text-sm text-muted-foreground">{t.home.founderRole}</p>
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {t.home.founderPoints.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 grid gap-8 border-t border-border pt-7 sm:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest">
                  {t.home.toolsLabel}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{t.home.tools.join(" · ")}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest">
                  {t.home.languagesLabel}
                </h3>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {t.home.languages.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/$lang/about" params={{ lang: locale }} className={btn.outline}>
                {t.cta.aboutUs}
              </Link>
              <a href={CREDENTIALS_URL} download className={btn.outline}>
                {t.cta.credentials}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FIRST PROJECT OFFER */}
      <section className="section bg-secondary">
        <div className="shell">
          <Reveal className="border border-forest/25 bg-background p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_auto] lg:items-center">
              <div>
                <Eyebrow>{t.home.offerEyebrow}</Eyebrow>
                <h2 className="display-3 mt-4">{t.home.offerTitle}</h2>
                <p className="lede mt-3 max-w-xl">{t.home.offerBody}</p>
                <p className="mt-3 text-xs text-muted-foreground">{t.home.offerNote}</p>
              </div>
              <Link to="/$lang/contact" params={{ lang: locale }} className={btn.primary}>
                {t.cta.firstProject}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta t={t} locale={locale} />
      <div className="sr-only">
        <ContactLines t={t} />
      </div>
    </>
  );
}
