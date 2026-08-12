import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ERROR_DICTS, localeFromPathname } from "../i18n/errors";

function useRouteLocale() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return localeFromPathname(pathname);
}

function NotFoundComponent() {
  const locale = useRouteLocale();
  const e = ERROR_DICTS[locale];
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-semibold text-forest">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-foreground">
          {e.notFoundTitle}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">{e.notFoundBody}</p>
        <div className="mt-6">
          <a
            href={`/${locale}`}
            className="inline-flex min-h-11 items-center justify-center rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-forest-deep"
          >
            {e.home}
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const locale = useRouteLocale();
  const e = ERROR_DICTS[locale];
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight text-foreground">
          {e.errorTitle}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{e.errorBody}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-11 items-center justify-center rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-forest-deep"
          >
            {e.retry}
          </button>
          <a
            href={`/${locale}`}
            className="inline-flex min-h-11 items-center justify-center rounded-sm border border-border bg-transparent px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            {e.home}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mahmudov Insights — Research Analysis & Reporting Partner" },
      {
        name: "description",
        content: "Client-ready data analysis & reporting for market research agencies.",
      },
      { name: "author", content: "Mahmudov Insights" },
      { property: "og:title", content: "Mahmudov Insights" },
      {
        property: "og:description",
        content: "Client-ready data analysis & reporting for market research agencies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:site_name", content: "Mahmudov Insights" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const locale = useRouteLocale();
  return (
    <html lang={locale}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
