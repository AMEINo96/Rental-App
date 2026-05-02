import Link from "next/link";
import TopBar from "@/components/TopBar";
import { ChevronRight } from "lucide-react";

export default function LMSPage() {
  return (
    <>
      <TopBar title="LMS Workspace" showBack={true} backHref="/portal" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 flex flex-col gap-6">
        <section className="mb-6">
          <h2 className="text-[40px] leading-[1.2] font-bold text-[#171717] mb-2">My Courses</h2>
          <p className="text-lg text-[#474747]">Access your lecture slides, lab manuals, and assignments.</p>
        </section>

        <div className="flex flex-col gap-4">
          {/* Course Card 1 */}
          <Link
            href="/portal/lms/cs211"
            className="group block border border-[#171717] rounded-[16px] p-6 bg-white hover:bg-[#f9f9f8] transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-[#474747] uppercase tracking-widest font-semibold">CS-211</span>
                <h3 className="text-lg font-semibold text-[#171717]">Object-Oriented Programming (Java)</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-[#15A8E3] text-white font-[family-name:var(--font-space-grotesk)] text-[13px] font-medium px-3 py-1 rounded-full whitespace-nowrap">2 New Files</span>
                <ChevronRight className="text-[#171717] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Course Card 2 */}
          <Link
            href="/portal/lms/cs350"
            className="group block border border-[#171717] rounded-[16px] p-6 bg-white hover:bg-[#f9f9f8] transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-[#474747] uppercase tracking-widest font-semibold">CS-350</span>
                <h3 className="text-lg font-semibold text-[#171717]">Artificial Intelligence</h3>
              </div>
              <div className="flex items-center gap-3">
                <ChevronRight className="text-[#171717] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Course Card 3 */}
          <Link
            href="/portal/lms/mth201"
            className="group block border border-[#171717] rounded-[16px] p-6 bg-white hover:bg-[#f9f9f8] transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-[#474747] uppercase tracking-widest font-semibold">MTH-201</span>
                <h3 className="text-lg font-semibold text-[#171717]">Linear Algebra & Differential Equations</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-[#E4E613] text-[#171717] font-[family-name:var(--font-space-grotesk)] text-[13px] font-medium px-3 py-1 rounded-full whitespace-nowrap">Assignment Due</span>
                <ChevronRight className="text-[#171717] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
