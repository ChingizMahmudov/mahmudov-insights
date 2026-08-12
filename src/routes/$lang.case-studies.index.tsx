import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getDict } from "@/i18n";
import { pageHead, localeOf } from "@/lib/seo";
import { CASE_STUDIES } from "@/content/cases";
import { CHARTS, Eyebrow, FinalCta, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/$lang/case-studies/")({
  head: ({ params }) => {
    const t = getDict(localeOf(params.lang));
    return pageHead({
      lang: params.lang,
      path: "/case-studies",
      title: t.cases.seoTitle,
      description: t.cases.seoDescription,
    });
  },
  component: CasesIndex,
});

function CasesIndex() {
  const locale = localeOf(Route.useParams().lang);
  const t = getDict(locale);
  const cases = CASE_STUDIES[locale];

  return (
    <>
      <section className="border-b border-border">
        <div className="shell py-16 md:py-24">
          <Eyebrow>{t.cases.eyebrow}</Eyebrow>
          <h1 className="display-1 mt-5 max-w-4xl">{t.cases.title}</h1>
          <p className="lede mt-6 max-w-2xl">{t.cases.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="shell space-y-px bg-border">
          {cases.map((c) => {
            const Chart = CHARTS[c.chart];
            return (
              <Reveal as="article" key={c.slug} className="group bg-background p-7 md:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
                  <div>
                    <p className="eyebrow">
                      {c.industry} — {c.market}
                    </p>
                    <h2 className="display-2 mt-4 max-w-2xl">
                      <Link
                        to="/$lang/case-studies/$slug"
                        params={{ lang: locale, slug: c.slug }}
                        className="underline-offset-8 group-hover:underline"
                      >
                        {c.title}
                      </Link>
                    </h2>
                    <p className="lede mt-4 max-w-xl">{c.summary}</p>
                    <dl className="mt-8 grid gap-6 border-t border-border pt-6 sm:grid-cols-3">
                      {c.metrics.map((m) => (
                        <div key={m.label}>
                          <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                            {m.label}
                          </dt>
                          <dd className="mt-2 font-display text-xl font-semibold text-forest">
                            {m.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <Link
                      to="/$lang/case-studies/$slug"
                      params={{ lang: locale, slug: c.slug }}
                      className="mt-8 inline-flex items-center gap-2 border-b border-forest pb-1 text-sm font-medium text-forest"
                    >
                      {t.cta.readCase} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                  <Chart className="aspect-square w-full" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <FinalCta t={t} locale={locale} />
    </>
  );
}
