import Link from "next/link";
import TopBar from "@/components/TopBar";
import { BookOpen, CalendarClock, Receipt, GraduationCap, AlertTriangle, HelpCircle } from "lucide-react";

export default function PortalDashboardPage() {
  return (
    <>
      <TopBar title="STUDENT PORTAL" showBack={false} />
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-12 pb-32">
        <div className="mb-12">
          <h1 className="text-[40px] leading-[1.2] font-bold text-[#171717] mb-2">
            Student Portal
          </h1>
          <p className="text-lg text-[#474747]">
            Welcome back. Here's your academic overview.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Academic Snapshot */}
          <div className="lg:col-span-5 bento-card flex flex-col justify-between bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] border-[#bae6fd] relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-[#bae6fd] rounded-full blur-3xl opacity-50"></div>
            <div className="relative z-10">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-[12px] font-semibold text-[#004c6a] uppercase mb-6 tracking-widest">
                Academic Snapshot
              </h2>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[28px] font-bold text-[#171717] leading-[1.3]">
                    BS-AI 2A
                  </p>
                  <p className="text-base text-[#474747] mt-1">
                    Computer Science Dept.
                  </p>
                </div>
                <div className="bg-[#15A8E3]/20 px-3 py-1.5 rounded-full border border-[#15A8E3]/50">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-[13px] font-bold text-[#004c6a]">
                    Active
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-4 relative z-10">
              <div className="flex-1 bg-white/60 backdrop-blur-sm p-4 rounded-[12px] border border-white/50">
                <p className="font-[family-name:var(--font-space-grotesk)] text-[12px] font-semibold text-[#474747] uppercase tracking-widest mb-1">
                  CGPA
                </p>
                <p className="text-[28px] font-bold text-[#171717]">3.82</p>
              </div>
              <div className="flex-1 bg-white/60 backdrop-blur-sm p-4 rounded-[12px] border border-white/50 flex items-center justify-between">
                <div>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-[12px] font-semibold text-[#474747] uppercase tracking-widest mb-1">
                    Completion
                  </p>
                  <p className="text-[28px] font-bold text-[#171717]">88%</p>
                </div>
                <div className="relative w-12 h-12 flex-shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-white"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="100, 100"
                      strokeWidth="4"
                    />
                    <path
                      className="text-[#15A8E3]"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="88, 100"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Access Grid */}
          <div className="lg:col-span-7 bento-card">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-[12px] font-semibold text-[#474747] uppercase mb-6 tracking-widest">
              Quick Access
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/portal/lms" className="flex flex-col items-center justify-center p-6 border border-[#E2E2E2] rounded-[12px] hover:border-[#15A8E3] bg-[#f0f9ff] hover:bg-[#e0f2fe] transition-colors group">
                <BookOpen size={32} strokeWidth={2} className="mb-3 text-[#15A8E3] group-hover:scale-110 transition-transform" />
                <span className="text-base font-semibold text-center text-[#171717]">My Courses (LMS)</span>
              </Link>
              <Link href="/portal/makeup" className="flex flex-col items-center justify-center p-6 border border-[#E2E2E2] rounded-[12px] hover:border-[#8b5cf6] bg-[#f5f3ff] hover:bg-[#ede9fe] transition-colors group">
                <CalendarClock size={32} strokeWidth={2} className="mb-3 text-[#8b5cf6] group-hover:scale-110 transition-transform" />
                <span className="text-base font-semibold text-center text-[#171717]">Make-up classes</span>
              </Link>
              <Link href="/portal/evaluator" className="flex flex-col items-center justify-center p-6 border border-[#E2E2E2] rounded-[12px] hover:border-[#ec4899] bg-[#fdf2f8] hover:bg-[#fce7f3] transition-colors group">
                <div className="mb-3 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <img src="https://lh3.googleusercontent.com/aida/ADBb0uj14Zt2xc9Y5WgNFmlwfwpKJqK3RDQJ45mu_XE3nXN5EJMXMYWKS6QRsdOY_pmzqVUCaJn31qRp0gbfJHu4Lt8OAc4NyudtewgIl2TyiqTOxFRayQG6gSNpAefu52_bPrbSR1I8ChSkavZwx7LiNogXaesXN7iAGRJNOrRDTnmfUDhgsuqs67m_PM22wnjK6LyGOrvqeORVIqgKIZVwxh3vh00jc54NWh9PFNnMLmMs03QMLNB61_-QEfeqVtk6H3rrY45mEhzwtjg" alt="AI Evaluator" className="w-8 h-8 object-contain mix-blend-multiply" />
                </div>
                <span className="text-base font-semibold text-center text-[#171717]">AI Evaluator</span>
              </Link>
              <Link href="/portal/qalam" className="flex flex-col items-center justify-center p-6 border border-[#E2E2E2] rounded-[12px] hover:border-[#10b981] bg-[#ecfdf5] hover:bg-[#d1fae5] transition-colors group">
                <GraduationCap size={32} strokeWidth={2} className="mb-3 text-[#10b981] group-hover:scale-110 transition-transform" />
                <span className="text-base font-semibold text-center text-[#171717]">Qalam</span>
              </Link>
            </div>
          </div>

          {/* LMS Deadlines */}
          <div className="lg:col-span-12 bento-card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-[12px] font-semibold text-[#474747] uppercase tracking-widest">
                LMS Deadlines
              </h2>
              <button className="text-[var(--color-primary)] hover:text-[#004c6a] transition-colors text-sm font-semibold">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {/* Deadline Item 1 */}
              <div className="flex items-center justify-between p-4 border border-[#E2E2E2] rounded-[12px] hover:border-black transition-colors bg-[#f9f9f8]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#E4E613]/20 rounded-full flex items-center justify-center border border-[#E4E613]">
                    <AlertTriangle size={24} strokeWidth={2} className="text-[#96960d]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#171717]">
                      Data Structures Assignment 3
                    </h3>
                    <p className="text-sm text-[#474747] mt-1">
                      CS-201 • Due Tonight, 11:59 PM
                    </p>
                  </div>
                </div>
                <Link href="/portal/lms/submit" className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
                  Submit
                </Link>
              </div>
              
              {/* Deadline Item 2 */}
              <div className="flex items-center justify-between p-4 border border-[#E2E2E2] rounded-[12px] hover:border-black transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#eeeeed] rounded-full flex items-center justify-center">
                    <HelpCircle size={24} strokeWidth={2} className="text-[#474747]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#171717]">AI Quiz</h3>
                    <p className="text-sm text-[#474747] mt-1">
                      AI-301 • Tomorrow, 10:00 AM
                    </p>
                  </div>
                </div>
                <button className="border-2 border-black text-black px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#E4E613] hover:border-[#E4E613] transition-colors">
                  Prepare
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
