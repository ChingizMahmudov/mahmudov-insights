import { createFileRoute } from "@tanstack/react-router";
import { getDict } from "@/i18n";
import { pageHead, localeOf } from "@/lib/seo";
import { CONTACT } from "@/i18n/types";
import { Eyebrow, Reveal } from "@/components/site/ui";
import { ContactForm } from "@/components/site/contact-form";

export const Route = createFileRoute("/$lang/contact")({
  head: ({ params }) => {
    const t = getDict(localeOf(params.lang));
    return pageHead({
      lang: params.lang,
      path: "/contact",
      title: t.contact.seoTitle,
      description: t.contact.seoDescription,
    });
  },
  component: ContactPage,
});

function ContactPage() {
  const locale = localeOf(Route.useParams().lang);
  const t = getDict(locale);

  const rows = [
    { label: t.contact.emailLabel, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { label: t.contact.phoneLabel, value: CONTACT.phone, href: `tel:${CONTACT.phoneHref}` },
    {
      label: t.contact.linkedinLabel,
      value: CONTACT.linkedinLabel,
      href: CONTACT.linkedin,
      external: true,
    },
  ];

  return (
    <section className="section">
      <div className="shell grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <Eyebrow>{t.contact.eyebrow}</Eyebrow>
          <h1 className="display-1 mt-5">{t.contact.title}</h1>
          <p className="lede mt-6 max-w-md">{t.contact.body}</p>
          <dl className="mt-10 grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                {t.contact.responseLabel}
              </dt>
              <dd className="mt-2 font-display text-base font-semibold">
                {t.contact.responseValue}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">NDA</dt>
              <dd className="mt-2 font-display text-base font-semibold">{t.contact.nda}</dd>
            </div>
          </dl>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {rows.map((r) => (
            <Reveal as="li" key={r.label}>
              <a
                href={r.href}
                {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex flex-col gap-1 py-7 transition-colors hover:text-forest"
              >
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {r.label}
                </span>
                <span className="break-words font-display text-xl font-semibold underline-offset-8 group-hover:underline md:text-2xl">
                  {r.value}
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <div className="lg:col-span-2">
          <ContactForm locale={locale} />
        </div>
      </div>
    </section>
  );
}
