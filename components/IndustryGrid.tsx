"use client";

import { useMemo, useState } from "react";
import { Search, SearchX } from "lucide-react";
import type { Industry } from "@/lib/industries";
import { IndustryCard } from "./IndustryCard";

type Props = {
  industries: Industry[];
};

/** Bỏ dấu tiếng Việt + chuyển thường để tìm kiếm không phân biệt dấu */
function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .toLowerCase()
    .trim();
}

export function IndustryGrid({ industries }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = normalize(query);
    if (!q) return industries;
    return industries.filter((it) => {
      const haystack = normalize(
        [it.name, it.description, ...it.keywords].join(" "),
      );
      return haystack.includes(q);
    });
  }, [industries, query]);

  return (
    <div>
      {/* Thanh tìm kiếm */}
      <div className="sticky top-4 z-10 mx-auto mb-8 max-w-xl">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm ngành nghề theo từ khóa…"
            aria-label="Tìm ngành nghề theo từ khóa"
            className="w-full rounded-full border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-[15px] text-slate-900 shadow-sm outline-none transition-shadow placeholder:text-slate-400 focus:border-primary-300 focus:ring-4 focus:ring-primary-100"
          />
        </div>
      </div>

      {/* Lưới ngành nghề */}
      {filtered.length > 0 ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((industry) => (
            <li key={industry.slug}>
              <IndustryCard industry={industry} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 py-16 text-center">
          <SearchX className="mb-3 h-10 w-10 text-slate-300" aria-hidden="true" />
          <p className="text-slate-600">
            Không tìm thấy ngành nghề phù hợp với{" "}
            <span className="font-medium text-slate-900">“{query}”</span>
          </p>
          <button
            onClick={() => setQuery("")}
            className="mt-4 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
          >
            Xóa tìm kiếm
          </button>
        </div>
      )}
    </div>
  );
}
