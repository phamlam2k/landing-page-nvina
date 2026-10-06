import Image from "next/image";
import { INDUSTRIES } from "@/lib/industries";
import { IndustryGrid } from "@/components/IndustryGrid";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <Image
            src="/nvina-logo.png"
            alt="NVINA"
            width={419}
            height={439}
            priority
            className="h-10 w-auto"
          />
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-6 text-center">
        <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-600">
          15 ngành nghề
        </span>
        <h1 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          Ngành nghề kinh doanh có điều kiện
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-500">
          Chọn ngành nghề bạn quan tâm để bắt đầu quy trình đăng ký. Tìm nhanh
          bằng từ khóa bên dưới.
        </p>
      </section>

      {/* Lưới + tìm kiếm */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-4">
        <IndustryGrid industries={INDUSTRIES} />
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-slate-400">
          © 2026 NVINA · Danh mục ngành nghề kinh doanh có điều kiện
        </div>
      </footer>
    </main>
  );
}
