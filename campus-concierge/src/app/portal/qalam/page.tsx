import Link from "next/link";
import TopBar from "@/components/TopBar";
import { ChevronRight, Flame } from "lucide-react";

export default function QalamPage() {
  return (
    <>
      <TopBar title="Qalam" showBack={true} backHref="/portal" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 flex flex-col gap-6">
        <section className="mb-6">
          <h2 className="text-[40px] leading-[1.2] font-bold text-[#171717] mb-2">My Courses (Qalam)</h2>
          <p className="text-lg text-[#474747]">Check your attendance and evaluations.</p>
        </section>

        <div className="flex flex-col gap-4">
          <Link
            href="/portal/qalam/ai301"
            className="group block border border-[#E2E2E2] rounded-[16px] p-6 bg-white hover:border-[#f97316] hover:bg-[#fff7ed] transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-[#474747] uppercase tracking-widest font-semibold group-hover:text-[#f97316]">AI-301</span>
                <h3 className="text-lg font-semibold text-[#171717]">Artificial Intelligence</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-[#ffedd5] text-[#ea580c] px-3 py-1.5 rounded-full font-bold text-sm shadow-sm">
                  <Flame size={16} strokeWidth={2.5} />
                  <span>14 Streak</span>
                </div>
                <ChevronRight className="text-[#171717] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link
            href="/portal/qalam/cs201"
            className="group block border border-[#E2E2E2] rounded-[16px] p-6 bg-white hover:border-[#f97316] hover:bg-[#fff7ed] transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-[#474747] uppercase tracking-widest font-semibold group-hover:text-[#f97316]">CS-201</span>
                <h3 className="text-lg font-semibold text-[#171717]">Data Structures</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-[#ffedd5] text-[#ea580c] px-3 py-1.5 rounded-full font-bold text-sm shadow-sm">
                  <Flame size={16} strokeWidth={2.5} />
                  <span>8 Streak</span>
                </div>
                <ChevronRight className="text-[#171717] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
