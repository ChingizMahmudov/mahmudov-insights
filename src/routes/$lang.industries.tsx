import { createFileRoute } from "@tanstack/react-router";
import { getDict } from "@/i18n";
import { pageHead, localeOf } from "@/lib/seo";
import { Eyebrow, FinalCta, Reveal } from "@/components/site/ui";
import decision from "@/assets/decision-room.jpg";

export const Route = createFileRoute("/$lang/industries")({
  head: ({ params }) => {
    const t = getDict(localeOf(params.lang));
    return pageHead({
      lang: params.lang,
      path: "/industries",
      title: t.industries.seoTitle,
      description: t.industries.seoDescription,
    });
  },
  component: IndustriesPage,
});

function IndustriesPage() {
  const locale = localeOf(Route.useParams().lang);
  const t = getDict(locale);

  return (
    <>
      <section className="border-b border-border">
        <div className="shell py-16 md:py-24">
          <Eyebrow>{t.industries.eyebrow}</Eyebrow>
          <h1 className="display-1 mt-5 max-w-4xl">{t.industries.title}</h1>
          <p className="lede mt-6 max-w-2xl">{t.industries.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-px border border-border bg-border md:grid-cols-2">
          {t.industries.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60} className="bg-background p-7 md:p-10">
              <span className="font-display text-xs tracking-widest text-forest">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="display-3 mt-4">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
          <Reveal className="hidden bg-background md:block">
            <img
              src={decision}
              alt=""
              width={1408}
              height={912}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <FinalCta t={t} locale={locale} />
    </>
  );
}
