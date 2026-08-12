import { useState, type FormEvent } from "react";
import { FORM_DICTS } from "@/i18n/form";
import { CONTACT, type Locale } from "@/i18n/types";
import { btn, Eyebrow } from "@/components/site/ui";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const fieldCls =
  "mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-forest";
const labelCls = "text-xs uppercase tracking-widest text-muted-foreground";

export function ContactForm({ locale }: { locale: Locale }) {
  const f = FORM_DICTS[locale];
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const name = get("name");
    const email = get("email");
    const company = get("company");
    const service = get("service");
    const message = get("message");

    const next: Errors = {};
    if (!name) next.name = f.required;
    if (!email) next.email = f.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = f.invalidEmail;
    if (!message) next.message = f.required;
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const body = [
      `${f.name}: ${name}`,
      `${f.email}: ${email}`,
      company ? `${f.company}: ${company}` : null,
      service ? `${f.service}: ${service}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    setSent(true);
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `${f.eyebrow} — ${name}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="border-t border-border pt-10">
      <Eyebrow>{f.eyebrow}</Eyebrow>
      <h2 className="display-2 mt-4">{f.title}</h2>

      <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="cf-name">
            {f.name} *
          </label>
          <input
            id="cf-name"
            name="name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            className={cn(fieldCls, errors.name && "border-destructive")}
          />
          {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
        </div>

        <div>
          <label className={labelCls} htmlFor="cf-email">
            {f.email} *
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className={cn(fieldCls, errors.email && "border-destructive")}
          />
          {errors.email ? <p className="mt-1 text-xs text-destructive">{errors.email}</p> : null}
        </div>

        <div>
          <label className={labelCls} htmlFor="cf-company">
            {f.company}
          </label>
          <input id="cf-company" name="company" autoComplete="organization" className={fieldCls} />
        </div>

        <div>
          <label className={labelCls} htmlFor="cf-service">
            {f.service}
          </label>
          <select id="cf-service" name="service" defaultValue="" className={fieldCls}>
            <option value="" disabled>
              {f.servicePlaceholder}
            </option>
            {f.services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="cf-message">
            {f.message} *
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            placeholder={f.messagePlaceholder}
            aria-invalid={!!errors.message}
            className={cn(fieldCls, "resize-y", errors.message && "border-destructive")}
          />
          {errors.message ? (
            <p className="mt-1 text-xs text-destructive">{errors.message}</p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <button type="submit" className={btn.primary}>
            {f.submit}
          </button>
          <p className="mt-3 text-xs text-muted-foreground">{f.note}</p>
          <p aria-live="polite" className="mt-3 text-sm text-forest">
            {sent ? f.success : ""}
          </p>
        </div>
      </form>
    </div>
  );
}
