import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { getDict } from "@/i18n";
import { pageHead, localeOf } from "@/lib/seo";
import { btn, Eyebrow, FinalCta, Reveal, SectionHead } from "@/components/site/ui";

export const Route = createFileRoute("/$lang/services")({
  head: ({ params }) => {
    const t = getDict(localeOf(params.lang));
    return pageHead({
      lang: params.lang,
      path: "/services",
      title: t.services.seoTitle,
      description: t.services.seoDescription,
    });
  },
  component: ServicesPage,
});

function ServicesPage() {
  const locale = localeOf(Route.useParams().lang);
  const t = getDict(locale);

  return (
    <>
      <section className="border-b border-border">
        <div className="shell py-16 md:py-24">
          <Eyebrow>{t.services.eyebrow}</Eyebrow>
          <h1 className="display-1 mt-5 max-w-4xl">{t.services.title}</h1>
          <p className="lede mt-6 max-w-2xl">{t.services.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="shell space-y-px bg-border">
          {t.services.groups.map((g, i) => (
            <Reveal key={g.title} className="bg-background p-7 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <span className="font-display text-xs tracking-widest text-forest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="display-2 mt-4">{g.title}</h2>
                  <p className="lede mt-4 max-w-md">{g.summary}</p>
                </div>
                <ul className="grid gap-2.5 self-center sm:grid-cols-2">
                  {g.items.map((s) => (
                    <li key={s} className="flex gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" aria-hidden="true" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="shell">
          <SectionHead eyebrow={t.services.engagementEyebrow} title={t.services.engagementTitle} />
          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
            {t.services.engagement.map((e, i) => (
              <Reveal key={e.title} delay={i * 60} className="bg-background p-7 md:p-9">
                <h3 className="display-3">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/$lang/contact" params={{ lang: locale }} className={btn.primary}>
              {t.cta.requirements}
            </Link>
          </div>
        </div>
      </section>

      <FinalCta t={t} locale={locale} />
    </>
  );
}
