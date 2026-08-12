import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getDict } from "@/i18n";
import { pageHead, localeOf } from "@/lib/seo";
import { getCase } from "@/content/cases";
import { CHARTS, Eyebrow, FinalCta, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/$lang/case-studies/$slug")({
  beforeLoad: ({ params }) => {
    if (!getCase(localeOf(params.lang), params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const locale = localeOf(params.lang);
    const c = getCase(locale, params.slug);
    const t = getDict(locale);
    if (!c) return { meta: [{ title: t.cases.seoTitle }, { name: "robots", content: "noindex" }] };
    return pageHead({
      lang: params.lang,
      path: `/case-studies/${c.slug}`,
      title: `${c.title} — Mahmudov Insights`,
      description: c.summary,
    });
  },
  component: CaseDetail,
});

function CaseDetail() {
  const params = Route.useParams();
  const locale = localeOf(params.lang);
  const t = getDict(locale);
  const c = getCase(locale, params.slug);
  if (!c) return null;
  const Chart = CHARTS[c.chart];
  const L = t.cases.labels;

  const sections: { label: string; body: string }[] = [
    { label: L.objective, body: c.objective },
    { label: L.challenge, body: c.challenge },
    { label: L.approach, body: c.approach },
    { label: L.analysis, body: c.analysis },
  ];

  const lists: { label: string; items: string[] }[] = [
    { label: L.methodology, items: c.methodology },
    { label: L.findings, items: c.findings },
    { label: L.implications, items: c.implications },
    { label: L.deliverables, items: c.deliverables },
  ];

  return (
    <>
      <section className="border-b border-border">
        <div className="shell py-12 md:py-16">
          <Link
            to="/$lang/case-studies"
            params={{ lang: locale }}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-forest"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> {t.cta.backToCases}
          </Link>
          <Eyebrow>{c.client}</Eyebrow>
          <h1 className="display-1 mt-4 max-w-4xl">{c.title}</h1>
          <p className="lede mt-6 max-w-2xl">{c.summary}</p>
          <dl className="mt-12 grid gap-6 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {c.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                  {f.label}
                </dt>
                <dd className="mt-2 font-display text-base font-semibold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="space-y-10">
            {sections.map((s) => (
              <Reveal key={s.label}>
                <h2 className="eyebrow">{s.label}</h2>
                <p className="mt-3 text-base leading-relaxed">{s.body}</p>
              </Reveal>
            ))}
          </div>
          <div>
            <Chart className="w-full" />
            <div className="mt-10 space-y-10">
              {lists.slice(0, 1).map((l) => (
                <Reveal key={l.label}>
                  <h2 className="eyebrow">{l.label}</h2>
                  <ul className="mt-4 space-y-2.5 border-t border-border pt-4">
                    {l.items.map((i) => (
                      <li key={i} className="text-sm leading-relaxed text-muted-foreground">
                        {i}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="shell mt-16 grid gap-10 border-t border-border pt-14 md:grid-cols-3">
          {lists.slice(1).map((l) => (
            <Reveal key={l.label}>
              <h2 className="eyebrow">{l.label}</h2>
              <ul className="mt-4 space-y-3">
                {l.items.map((i) => (
                  <li key={i} className="border-t border-border pt-3 text-sm leading-relaxed">
                    {i}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCta t={t} locale={locale} />
    </>
  );
}
