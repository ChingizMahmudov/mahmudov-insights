import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { getDict } from "@/i18n";
import { pageHead, localeOf } from "@/lib/seo";
import {
  btn,
  CREDENTIALS_URL,
  Eyebrow,
  FinalCta,
  PORTRAIT_URL,
  Reveal,
  SectionHead,
} from "@/components/site/ui";

export const Route = createFileRoute("/$lang/about")({
  head: ({ params }) => {
    const t = getDict(localeOf(params.lang));
    return pageHead({
      lang: params.lang,
      path: "/about",
      title: t.about.seoTitle,
      description: t.about.seoDescription,
    });
  },
  component: AboutPage,
});

function AboutPage() {
  const locale = localeOf(Route.useParams().lang);
  const t = getDict(locale);

  return (
    <>
      <section className="border-b border-border">
        <div className="shell py-16 md:py-24">
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <h1 className="display-1 mt-5 max-w-4xl">{t.about.title}</h1>
          <p className="lede mt-6 max-w-2xl">{t.about.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="display-2">{t.about.philosophyTitle}</h2>
          <p className="lede max-w-2xl">{t.about.philosophyBody}</p>
        </div>
      </section>

      <section className="section bg-secondary">
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
            <Eyebrow>{t.about.founderEyebrow}</Eyebrow>
            <h2 className="display-2 mt-4">{t.home.founderName}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t.home.founderRole}</p>
            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
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
            <div className="mt-9 border-t border-border pt-7">
              <h3 className="display-3">{t.about.esomarTitle}</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {t.about.esomarBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead eyebrow={t.about.eyebrow} title={t.about.workTitle} />
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {t.about.work.map((w, i) => (
              <Reveal key={w.title} delay={i * 50} className="bg-background p-7 md:p-9">
                <h3 className="display-3">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 border border-forest/25 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_auto] lg:items-center">
              <div>
                <h2 className="display-3">{t.about.credentialsTitle}</h2>
                <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                  {t.about.credentialsBody}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={CREDENTIALS_URL} download className={btn.primary}>
                  {t.cta.credentials}
                </a>
                <Link to="/$lang/contact" params={{ lang: locale }} className={btn.outline}>
                  {t.cta.discuss}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta t={t} locale={locale} />
    </>
  );
}
