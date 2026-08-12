import { createFileRoute, Outlet, notFound, useRouterState } from "@tanstack/react-router";
import { getDict } from "@/i18n";
import { isLocale, type Locale } from "@/i18n/types";
import { Header, Footer, CookieNotice } from "@/components/site/chrome";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.lang)) throw notFound();
  },
  component: LangLayout,
});

export function useLocale(): Locale {
  const { lang } = Route.useParams();
  return isLocale(lang) ? lang : "en";
}

function LangLayout() {
  const locale = useLocale();
  const t = getDict(locale);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const pathRest = pathname.split("/").slice(2).join("/");

  return (
    <div lang={locale} className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Header t={t} locale={locale} pathRest={pathRest} />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer t={t} locale={locale} pathRest={pathRest} />
      <CookieNotice t={t} locale={locale} />
    </div>
  );
}
