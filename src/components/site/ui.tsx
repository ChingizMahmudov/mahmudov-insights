import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ASSETS } from "@/config/site";
import { CONTACT, LOCALE_LABEL, LOCALES, type Locale } from "@/i18n/types";
import type { Dict } from "@/i18n/en";
import { cn } from "@/lib/utils";

export const CREDENTIALS_URL = ASSETS.credentials;
export const LOGO_URL = ASSETS.logo;
export const MARK_URL = ASSETS.mark;
export const PORTRAIT_URL = ASSETS.portrait;

/* ---------- motion ---------- */

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref}
      className={cn("reveal", className)}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

/**
 * Renders `value` as-is at all times. The count-up is a pure progressive
 * enhancement: if JS, hydration, rAF or IntersectionObserver are unavailable,
 * the real number is what stays on screen.
 */
export function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\D*)(\d[\d\s,]*)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const target = match ? Number((match[2] ?? "0").replace(/[\s,]/g, "")) : 0;
  // null => show the real, unmodified value. Only set while animating.
  const [animated, setAnimated] = useState<string | null>(null);

  useEffect(() => {
    if (!match || target <= 0) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const separator = (match[2] ?? "").includes(",")
      ? ","
      : (match[2] ?? "").includes(" ")
        ? " "
        : "";
    const format = (n: number) =>
      separator ? String(n).replace(/\B(?=(\d{3})+(?!\d))/g, separator) : String(n);

    const io = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1200;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        if (p >= 1) {
          setAnimated(null); // hand back to the real value
          return;
        }
        setAnimated(format(Math.round(target * (1 - Math.pow(1 - p, 3)))));
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      setAnimated(null);
    };
  }, [target, value, match]);

  if (!match) return <span>{value}</span>;
  return (
    <span ref={ref}>
      {animated === null ? (
        value
      ) : (
        <>
          {match[1]}
          {animated}
          {match[3]}
        </>
      )}
    </span>
  );
}

/* ---------- primitives ---------- */

export function Eyebrow({ children, invert }: { children: ReactNode; invert?: boolean }) {
  return <p className={invert ? "eyebrow-invert" : "eyebrow"}>{children}</p>;
}

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-medium tracking-tight transition-colors duration-200 min-h-11";

export const btn = {
  primary: cn(btnBase, "bg-primary text-primary-foreground hover:bg-forest-deep"),
  outline: cn(btnBase, "border border-border bg-transparent text-foreground hover:bg-secondary"),
  invert: cn(btnBase, "bg-on-forest text-forest-deep hover:bg-sage"),
  invertOutline: cn(btnBase, "border border-forest-line text-on-forest hover:bg-forest-line"),
};

export function StatBlock({
  value,
  label,
  invert,
  animate,
}: {
  value: string;
  label: string;
  invert?: boolean;
  animate?: boolean;
}) {
  return (
    <div className={cn("border-t pt-4", invert ? "border-forest-line" : "border-border")}>
      <p
        className={cn(
          "font-display text-3xl font-semibold tracking-tight md:text-4xl",
          invert ? "text-on-forest" : "text-forest",
        )}
      >
        {animate ? <CountUp value={value} /> : value}
      </p>
      <p className={cn("mt-2 text-sm", invert ? "text-on-forest-muted" : "text-muted-foreground")}>
        {label}
      </p>
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  body,
  invert,
  className,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  invert?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <Eyebrow invert={invert ?? false}>{eyebrow}</Eyebrow>
      <h2 className={cn("display-2 mt-4", invert && "text-on-forest")}>{title}</h2>
      {body ? <p className={cn("lede mt-5", invert && "text-on-forest-muted")}>{body}</p> : null}
    </Reveal>
  );
}

/* ---------- charts (decorative) ---------- */

export function SegmentChart({ className }: { className?: string }) {
  const pts = Array.from({ length: 96 }, (_, i) => {
    const g = i % 4;
    const cx = [30, 68, 42, 78][g]!;
    const cy = [34, 28, 72, 66][g]!;
    const r = 13;
    const a = (i * 137.5 * Math.PI) / 180;
    const d = ((i % 7) / 7) * r;
    return { x: cx + Math.cos(a) * d, y: cy + Math.sin(a) * d, g };
  });
  const fills = [
    "var(--forest-deep)",
    "var(--forest)",
    "oklch(0.55 0.06 155)",
    "oklch(0.72 0.05 152)",
  ];
  return (
    <svg viewBox="0 0 100 100" role="presentation" aria-hidden="true" className={className}>
      <rect width="100" height="100" fill="var(--sage-soft)" />
      {[20, 40, 60, 80].map((v) => (
        <g key={v}>
          <line x1={v} y1="0" x2={v} y2="100" stroke="var(--line)" strokeWidth="0.3" />
          <line x1="0" y1={v} x2="100" y2={v} stroke="var(--line)" strokeWidth="0.3" />
        </g>
      ))}
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="1.5" fill={fills[p.g]} opacity="0.85" />
      ))}
    </svg>
  );
}

export function FieldChart({ className }: { className?: string }) {
  const bars = [72, 88, 64, 95, 81, 90, 58, 86, 92, 70, 84, 97];
  return (
    <svg viewBox="0 0 100 100" role="presentation" aria-hidden="true" className={className}>
      <rect width="100" height="100" fill="var(--sage-soft)" />
      <line x1="6" y1="86" x2="94" y2="86" stroke="var(--line)" strokeWidth="0.5" />
      {bars.map((b, i) => (
        <rect
          key={i}
          x={7 + i * 7.3}
          y={86 - b * 0.62}
          width="4.6"
          height={b * 0.62}
          fill={b >= 85 ? "var(--forest)" : "oklch(0.72 0.05 152)"}
        />
      ))}
      <line
        x1="6"
        y1={86 - 85 * 0.62}
        x2="94"
        y2={86 - 85 * 0.62}
        stroke="var(--forest-deep)"
        strokeWidth="0.5"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

export function ModuleChart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" role="presentation" aria-hidden="true" className={className}>
      <rect width="100" height="100" fill="var(--sage-soft)" />
      {[0, 1, 2, 3, 4].map((r) => (
        <g key={r}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((c) => (
            <rect
              key={c}
              x={8 + c * 11}
              y={10 + r * 17}
              width="9"
              height="12"
              fill={
                (r + c) % 3 === 0
                  ? "var(--forest)"
                  : (r + c) % 3 === 1
                    ? "oklch(0.78 0.04 152)"
                    : "oklch(0.90 0.02 152)"
              }
              opacity={c < 6 || r < 4 ? 1 : 0.35}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

export const CHARTS = {
  segments: SegmentChart,
  field: FieldChart,
  modules: ModuleChart,
};

/* ---------- language switcher ---------- */

export function LanguageSwitcher({
  locale,
  pathRest,
  label,
  invert,
}: {
  locale: Locale;
  pathRest: string;
  label: string;
  invert?: boolean;
}) {
  return (
    <nav aria-label={label} className="flex items-center gap-1">
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 ? (
            <span
              aria-hidden="true"
              className={cn(
                "px-1 text-xs",
                invert ? "text-on-forest-muted" : "text-muted-foreground",
              )}
            >
              |
            </span>
          ) : null}
          <a
            href={`/${l}${pathRest ? `/${pathRest}` : ""}`}
            lang={l}
            aria-current={l === locale ? "true" : undefined}
            className={cn(
              "px-1 text-xs font-semibold tracking-widest transition-colors",
              invert
                ? l === locale
                  ? "text-on-forest"
                  : "text-on-forest-muted hover:text-on-forest"
                : l === locale
                  ? "text-forest"
                  : "text-muted-foreground hover:text-forest",
            )}
          >
            {LOCALE_LABEL[l]}
          </a>
        </span>
      ))}
    </nav>
  );
}

/* ---------- contact block ---------- */

export function ContactLines({ t, invert }: { t: Dict; invert?: boolean }) {
  const linkCls = cn(
    "text-base underline-offset-4 hover:underline",
    invert ? "text-on-forest" : "text-foreground",
  );
  const labelCls = cn(
    "text-xs uppercase tracking-widest",
    invert ? "text-on-forest-muted" : "text-muted-foreground",
  );
  return (
    <dl className="grid gap-6 sm:grid-cols-3">
      <div>
        <dt className={labelCls}>{t.contact.emailLabel}</dt>
        <dd className="mt-2">
          <a className={linkCls} href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
        </dd>
      </div>
      <div>
        <dt className={labelCls}>{t.contact.phoneLabel}</dt>
        <dd className="mt-2">
          <a className={linkCls} href={`tel:${CONTACT.phoneHref}`}>
            {CONTACT.phone}
          </a>
        </dd>
      </div>
      <div className="min-w-0">
        <dt className={labelCls}>{t.contact.linkedinLabel}</dt>
        <dd className="mt-2">
          <a
            className={cn(linkCls, "break-all")}
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {CONTACT.linkedinLabel}
          </a>
        </dd>
      </div>
    </dl>
  );
}

/* ---------- final CTA ---------- */

export function FinalCta({ t, locale }: { t: Dict; locale: Locale }) {
  return (
    <section className="bg-forest-deep">
      <div className="shell section">
        <Reveal className="max-w-3xl">
          <h2 className="display-2 text-on-forest">{t.home.finalTitle}</h2>
          <p className="lede mt-5 text-on-forest-muted">{t.home.finalBody}</p>
          <div className="mt-9">
            <Link to="/$lang/contact" params={{ lang: locale }} className={btn.invert}>
              {t.cta.discuss}
            </Link>
          </div>
        </Reveal>
        <Reveal className="mt-14 border-t border-forest-line pt-10">
          <ContactLines t={t} invert />
        </Reveal>
      </div>
    </section>
  );
}
