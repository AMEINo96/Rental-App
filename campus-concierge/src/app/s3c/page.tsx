import Link from "next/link";
import TopBar from "@/components/TopBar";
import { Grip, GraduationCap, Utensils, Laptop, HeartPulse, ArrowRight } from "lucide-react";

export default function S3CServicesDashboardPage() {
  return (
    <>
      <TopBar title="S3C Services" showBack={false} />
      <main className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 pb-32">
        <header className="mb-12 max-w-2xl">
          <h1 className="text-[40px] leading-[1.2] font-bold text-[#171717] mb-2">
            How can we help you today?
          </h1>
          <p className="text-lg text-[#474747]">
            Your unified dashboard for campus life, schedules, and support.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Browse Services Bento */}
          <Link href="/s3c/services" className="lg:col-span-7 bento-card flex flex-col hover:-translate-y-1 transition-transform duration-300 cursor-pointer group">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="font-[family-name:var(--font-space-grotesk)] text-[12px] font-semibold text-[#474747] uppercase tracking-widest block mb-2">
                  DIRECTORY
                </span>
                <h2 className="text-[28px] font-bold text-[#171717]">Browse Services</h2>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#15A8E3]/20 flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <Grip size={24} strokeWidth={2} className="text-[var(--color-primary)] group-hover:text-white transition-colors" />
              </div>
            </div>
            
            <p className="text-base text-[#474747] mb-8 flex-grow">
              Access academic advising, IT support, dining plans, and facility reservations all in one centralized location.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex flex-col items-center p-3 rounded-lg bg-[#f9f9f8] hover:bg-[#eeeeed] transition-colors">
                <GraduationCap size={24} strokeWidth={2} className="text-[#474747] mb-2" />
                <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] font-bold text-[#171717] text-center uppercase tracking-widest">
                  Academics
                </span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-[#f9f9f8] hover:bg-[#eeeeed] transition-colors">
                <Utensils size={24} strokeWidth={2} className="text-[#474747] mb-2" />
                <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] font-bold text-[#171717] text-center uppercase tracking-widest">
                  Dining
                </span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-[#f9f9f8] hover:bg-[#eeeeed] transition-colors">
                <Laptop size={24} strokeWidth={2} className="text-[#474747] mb-2" />
                <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] font-bold text-[#171717] text-center uppercase tracking-widest">
                  IT Help
                </span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-[#f9f9f8] hover:bg-[#eeeeed] transition-colors">
                <HeartPulse size={24} strokeWidth={2} className="text-[#474747] mb-2" />
                <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] font-bold text-[#171717] text-center uppercase tracking-widest">
                  Health
                </span>
              </div>
            </div>
          </Link>

          {/* Chatbot Guide Bento */}
          <Link
            href="/s3c/chat"
            className="lg:col-span-5 bg-[var(--color-primary)] rounded-[16px] p-6 shadow-sm border border-[var(--color-primary)] flex flex-col relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
            <div className="relative z-10 flex flex-col h-full">
              <span className="font-[family-name:var(--font-space-grotesk)] text-[12px] font-semibold text-[#c5e7ff] uppercase tracking-widest block mb-2">
                INSTANT HELP
              </span>
              <div className="flex flex-row items-center gap-4 mb-8 flex-grow">
                <div className="flex-1">
                  <h2 className="text-[28px] font-bold text-white mb-4">Chatbot Guide</h2>
                  <p className="text-[14px] text-[#c5e7ff] leading-relaxed">
                    Ask questions about your schedule, find campus locations, or get immediate answers to common university policy inquiries.
                  </p>
                </div>
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                  <img
                    alt="Chatbot Robot"
                    className="w-full h-full object-contain mix-blend-luminosity brightness-200"
                    src="https://lh3.googleusercontent.com/aida/ADBb0uj14Zt2xc9Y5WgNFmlwfwpKJqK3RDQJ45mu_XE3nXN5EJMXMYWKS6QRsdOY_pmzqVUCaJn31qRp0gbfJHu4Lt8OAc4NyudtewgIl2TyiqTOxFRayQG6gSNpAefu52_bPrbSR1I8ChSkavZwx7LiNogXaesXN7iAGRJNOrRDTnmfUDhgsuqs67m_PM22wnjK6LyGOrvqeORVIqgKIZVwxh3vh00jc54NWh9PFNnMLmMs03QMLNB61_-QEfeqVtk6H3rrY45mEhzwtjg"
                  />
                </div>
              </div>
              <button className="bg-[#c5e7ff] text-[#004c6a] font-[family-name:var(--font-space-grotesk)] text-[12px] font-bold uppercase tracking-widest px-6 py-4 rounded-full flex items-center justify-between hover:bg-white transition-colors w-full mt-auto group/btn">
                START CONVERSATION
                <ArrowRight size={20} strokeWidth={2.5} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
