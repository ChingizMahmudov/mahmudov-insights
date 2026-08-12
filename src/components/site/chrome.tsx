import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import type { Dict } from "@/i18n/en";
import { CONTACT, type Locale } from "@/i18n/types";
import { cn } from "@/lib/utils";
import { CREDENTIALS_URL, LanguageSwitcher, LOGO_URL, btn } from "./ui";

const navItems = (t: Dict) => [
  { key: "home", to: "/$lang" as const, label: t.nav.home },
  { key: "services", to: "/$lang/services" as const, label: t.nav.services },
  { key: "industries", to: "/$lang/industries" as const, label: t.nav.industries },
  { key: "cases", to: "/$lang/case-studies" as const, label: t.nav.cases },
  { key: "about", to: "/$lang/about" as const, label: t.nav.about },
  { key: "contact", to: "/$lang/contact" as const, label: t.nav.contact },
];

export function Header({ t, locale, pathRest }: { t: Dict; locale: Locale; pathRest: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = navItems(t);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background/92 backdrop-blur-sm transition-shadow",
        scrolled ? "border-b border-border" : "border-b border-transparent",
      )}
    >
      <div className="shell">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3.5 lg:py-4">
          <Link
            to="/$lang"
            params={{ lang: locale }}
            className="flex min-w-0 items-center"
            aria-label={t.brand.name}
          >
            <img
              src={LOGO_URL}
              alt={`${t.brand.name} — ${t.brand.descriptor}`}
              width={152}
              height={101}
              className="h-9 w-auto lg:h-11"
            />
          </Link>

          <div className="flex items-center gap-5">
            <nav aria-label={t.nav.menu} className="hidden items-center gap-6 lg:flex">
              {items.map((i) => (
                <Link
                  key={i.key}
                  to={i.to}
                  params={{ lang: locale }}
                  activeOptions={{ exact: i.key === "home" }}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-forest data-[status=active]:font-medium"
                >
                  {i.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <LanguageSwitcher locale={locale} pathRest={pathRest} label={t.nav.language} />
            </div>

            <Link
              to="/$lang/contact"
              params={{ lang: locale }}
              className={cn(btn.primary, "hidden px-5 py-2.5 lg:inline-flex")}
            >
              {t.cta.discuss}
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t.nav.close : t.nav.menu}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-border lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <div className="shell py-5">
            <nav className="flex flex-col">
              {items.map((i) => (
                <Link
                  key={i.key}
                  to={i.to}
                  params={{ lang: locale }}
                  activeOptions={{ exact: i.key === "home" }}
                  className="border-b border-border py-4 font-display text-lg data-[status=active]:text-forest"
                >
                  {i.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex items-center justify-between">
              <LanguageSwitcher locale={locale} pathRest={pathRest} label={t.nav.language} />
              <a
                href={CREDENTIALS_URL}
                download
                className="inline-flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Download className="h-4 w-4" />
                {t.cta.credentials}
              </a>
            </div>
            <Link
              to="/$lang/contact"
              params={{ lang: locale }}
              className={cn(btn.primary, "mt-6 w-full")}
            >
              {t.cta.discuss}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function Footer({ t, locale, pathRest }: { t: Dict; locale: Locale; pathRest: string }) {
  const items = navItems(t);
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="shell py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <img
              src={LOGO_URL}
              alt={t.brand.name}
              width={168}
              height={112}
              loading="lazy"
              className="h-12 w-auto"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {t.brand.positioning}
            </p>
            <a
              href={CREDENTIALS_URL}
              download
              className="mt-6 inline-flex items-center gap-2 border-b border-forest pb-1 text-sm font-medium text-forest"
            >
              <Download className="h-4 w-4" />
              {t.cta.credentials}
            </a>
          </div>

          <nav aria-label={t.footer.nav}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              {t.footer.nav}
            </h2>
            <ul className="mt-5 space-y-3">
              {items.map((i) => (
                <li key={i.key}>
                  <Link
                    to={i.to}
                    params={{ lang: locale }}
                    className="text-sm text-muted-foreground hover:text-forest"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              {t.footer.contact}
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  className="text-muted-foreground hover:text-forest"
                  href={`mailto:${CONTACT.email}`}
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-forest"
                  href={`tel:${CONTACT.phoneHref}`}
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-forest"
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
            <h2 className="mt-8 text-xs font-semibold uppercase tracking-widest text-foreground">
              {t.footer.language}
            </h2>
            <div className="mt-4">
              <LanguageSwitcher locale={locale} pathRest={pathRest} label={t.footer.language} />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.rights.replace("{year}", String(new Date().getFullYear()))}</p>
          <nav aria-label={t.footer.legal} className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              to="/$lang/legal/$doc"
              params={{ lang: locale, doc: "privacy" }}
              className="hover:text-forest"
            >
              {t.footer.privacy}
            </Link>
            <Link
              to="/$lang/legal/$doc"
              params={{ lang: locale, doc: "cookies" }}
              className="hover:text-forest"
            >
              {t.footer.cookies}
            </Link>
            <Link
              to="/$lang/legal/$doc"
              params={{ lang: locale, doc: "terms" }}
              className="hover:text-forest"
            >
              {t.footer.terms}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export function CookieNotice({ t, locale }: { t: Dict; locale: Locale }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("mi-cookie-notice") !== "ack") setShow(true);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl border border-border bg-card p-4 shadow-lg sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {t.cookies.text}{" "}
          <Link
            to="/$lang/legal/$doc"
            params={{ lang: locale, doc: "cookies" }}
            className="text-forest underline underline-offset-4"
          >
            {t.cookies.link}
          </Link>
        </p>
        <button
          type="button"
          onClick={() => {
            localStorage.setItem("mi-cookie-notice", "ack");
            setShow(false);
          }}
          className={cn(btn.primary, "shrink-0 px-5 py-2.5")}
        >
          {t.cookies.accept}
        </button>
      </div>
    </div>
  );
}
