import { createFileRoute, notFound } from "@tanstack/react-router";
import { getDict } from "@/i18n";
import { pageHead, localeOf } from "@/lib/seo";

const DOCS = ["privacy", "cookies", "terms"] as const;
type Doc = (typeof DOCS)[number];
const isDoc = (v: string): v is Doc => (DOCS as readonly string[]).includes(v);

export const Route = createFileRoute("/$lang/legal/$doc")({
  beforeLoad: ({ params }) => {
    if (!isDoc(String(params.doc))) throw notFound();
  },
  head: ({ params }) => {
    const t = getDict(localeOf(params.lang));
    const doc: Doc = isDoc(String(params.doc)) ? (String(params.doc) as Doc) : "privacy";
    const title = `${t.legal[doc].title} — Mahmudov Insights`;
    return pageHead({
      lang: params.lang,
      path: `/legal/${doc}`,
      title,
      description: t.legal[doc].body[0] ?? title,
    });
  },
  component: LegalPage,
});

function LegalPage() {
  const params = Route.useParams();
  const locale = localeOf(params.lang);
  const t = getDict(locale);
  const raw = String(params.doc);
  const doc: Doc = isDoc(raw) ? raw : "privacy";
  const page = t.legal[doc];

  return (
    <section className="section">
      <div className="shell max-w-3xl">
        <h1 className="display-2">{page.title}</h1>
        <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
          {t.legal.updated}
        </p>
        <div className="mt-10 space-y-6 border-t border-border pt-8">
          {page.body.map((p) => (
            <p key={p} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
