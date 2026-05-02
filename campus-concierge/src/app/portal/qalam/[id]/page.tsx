import TopBar from "@/components/TopBar";
import { Flame } from "lucide-react";

export default function QalamSubjectDetailsPage() {
  return (
    <>
      <TopBar title="Artificial Intelligence" showBack={true} backHref="/portal/qalam" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 flex flex-col gap-6">
        
        <section className="bg-white border border-[#E2E2E2] rounded-xl p-6 flex flex-col gap-2 relative overflow-hidden shadow-sm">
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#ffedd5] rounded-full blur-3xl opacity-50"></div>
          <div className="flex justify-between items-center relative z-10">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-xs text-[#474747] uppercase tracking-widest font-semibold">
              ATTENDANCE RECORD
            </h2>
            <div className="flex items-center gap-1 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white px-3 py-1 rounded-full font-bold text-sm shadow-md animate-pulse">
              <Flame size={16} strokeWidth={2.5} />
              <span>14 Streak</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-2 relative z-10">
            <div className="flex flex-col">
              <span className="text-[40px] leading-[1.2] tracking-tight font-bold text-[#171717]">85%</span>
              <span className="text-base text-[#474747] mt-1">Present: 26 | Absent: 4</span>
            </div>
            
            <div className="relative w-24 h-24">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#e8e8e7" strokeWidth="8"></circle>
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#15A8E3" strokeDasharray="251.2" strokeDashoffset="37.68" strokeLinecap="round" strokeWidth="8"></circle>
              </svg>
            </div>
          </div>
        </section>

        <section className="border border-[#171717] rounded-xl p-6 flex flex-col gap-2 bg-[#f0f9ff]">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-xs text-[#474747] uppercase tracking-widest font-semibold mb-2">
            EVALUATIONS
          </h2>
          <div className="flex flex-col">
            <div className="flex justify-between items-center py-4 border-b border-[#bdc8d1]">
              <span className="text-base text-[#171717]">Quiz 1</span>
              <span className="text-base text-[#171717] font-semibold">18 / 20</span>
            </div>
            
            <div className="flex justify-between items-center py-4 border-b border-[#bdc8d1]">
              <span className="text-base text-[#171717]">Midterm Exam</span>
              <span className="text-base text-[#171717] font-semibold">42 / 50</span>
            </div>
            
            <div className="flex justify-between items-center py-4">
              <span className="text-base text-[#171717]">Project Phase 1</span>
              <span className="font-[family-name:var(--font-space-grotesk)] text-[13px] font-medium border border-[#171717] rounded-full px-4 py-1 bg-white text-[#171717] uppercase inline-flex items-center justify-center min-w-[100px]">Pending</span>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
