import type { Industry } from "@/lib/industries";
import { ArrowUpRight, Lock } from "lucide-react";
import { ICON_MAP } from "./icon-map";

type Props = {
  industry: Industry;
};

export function IndustryCard({ industry }: Props) {
  const { name, description, icon, active, href } = industry;
  const Icon = ICON_MAP[icon];

  const baseClasses =
    "group relative flex h-full flex-col rounded-2xl border bg-white p-5 text-left transition-all duration-200";

  const content = (
    <>
      <div className="mb-4 flex items-center justify-between">
        <span
          className={[
            "inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
            active
              ? "bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white"
              : "bg-slate-100 text-slate-400",
          ].join(" ")}
        >
          <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
        </span>

        {active ? (
          <ArrowUpRight
            className="h-5 w-5 text-slate-300 transition-colors group-hover:text-primary-600"
            aria-hidden="true"
          />
        ) : (
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-400">
            <Lock className="h-3 w-3" aria-hidden="true" />
            Sắp ra mắt
          </span>
        )}
      </div>

      <h3
        className={[
          "text-base font-semibold leading-snug",
          active ? "text-slate-900" : "text-slate-500",
        ].join(" ")}
      >
        {name}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-500">
        {description}
      </p>

      {active && (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600">
          Xem chi tiết
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      )}
    </>
  );

  if (active && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          baseClasses,
          "featured-glow border-primary-200 hover:-translate-y-1 hover:border-primary-300",
        ].join(" ")}
      >
        <span className="absolute -top-2.5 left-5 rounded-full bg-primary-600 px-2.5 py-0.5 text-[11px] font-semibold text-white shadow-sm">
          Nổi bật
        </span>
        {content}
      </a>
    );
  }

  return (
    <div
      className={[baseClasses, "cursor-not-allowed border-slate-200 opacity-80"].join(
        " ",
      )}
      aria-disabled="true"
    >
      {content}
    </div>
  );
}
