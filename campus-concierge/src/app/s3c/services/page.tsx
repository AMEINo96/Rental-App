import Link from "next/link";
import TopBar from "@/components/TopBar";
import { DoorOpen, FileText, Activity, GraduationCap, Search, BadgeCheck, Wallet, Plus } from "lucide-react";

export default function ServicesDirectoryPage() {
  return (
    <>
      <TopBar title="Services Directory" showBack={true} backHref="/s3c" />
      <main className="w-full max-w-5xl mx-auto px-6 py-12 pb-32">
        <div className="mb-12">
          <h1 className="text-[40px] leading-[1.2] font-bold text-[#171717] mb-2">Service Directory</h1>
          <p className="text-lg text-[#474747]">Browse and manage your campus service requests.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/s3c/request/new?category=hostel" className="bento-card-light bg-white border border-[#E2E2E2] rounded-xl p-6 flex flex-col items-center justify-center text-center aspect-square md:col-span-1 hover:-translate-y-1 hover:border-[#171717] transition-all group">
            <div className="w-16 h-16 rounded-full bg-[#f9f9f8] group-hover:bg-[#eeeeed] flex items-center justify-center mb-4 transition-colors">
              <DoorOpen size={32} strokeWidth={2} className="text-[#171717]" />
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold text-[#171717] uppercase tracking-widest">HOSTEL SERVICES</span>
          </Link>

          <Link href="/s3c/request/new?category=documents" className="bento-card-light bg-white border border-[#E2E2E2] rounded-xl p-6 flex flex-col items-center justify-center text-center aspect-square md:col-span-1 hover:-translate-y-1 hover:border-[#171717] transition-all group">
            <div className="w-16 h-16 rounded-full bg-[#f9f9f8] group-hover:bg-[#eeeeed] flex items-center justify-center mb-4 transition-colors">
              <FileText size={32} strokeWidth={2} className="text-[#171717]" />
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold text-[#171717] uppercase tracking-widest">DOCUMENTS</span>
          </Link>

          <Link href="/s3c/request/new?category=sports" className="bento-card-light bg-white border border-[#E2E2E2] rounded-xl p-6 flex flex-col items-center justify-center text-center aspect-square md:col-span-1 hover:-translate-y-1 hover:border-[#171717] transition-all group">
            <div className="w-16 h-16 rounded-full bg-[#f9f9f8] group-hover:bg-[#eeeeed] flex items-center justify-center mb-4 transition-colors">
              <Activity size={32} strokeWidth={2} className="text-[#171717]" />
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold text-[#171717] uppercase tracking-widest">SPORTS COMPLEX</span>
          </Link>

          <Link href="/s3c/request/new?category=exams" className="bento-card-light bg-white border border-[#E2E2E2] rounded-xl p-6 flex flex-col items-center justify-center text-center aspect-square md:col-span-1 hover:-translate-y-1 hover:border-[#171717] transition-all group">
            <div className="w-16 h-16 rounded-full bg-[#f9f9f8] group-hover:bg-[#eeeeed] flex items-center justify-center mb-4 transition-colors">
              <GraduationCap size={32} strokeWidth={2} className="text-[#171717]" />
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold text-[#171717] uppercase tracking-widest">EXAMS</span>
          </Link>

          <Link href="/s3c/request/new?category=lost" className="bento-card-light bg-white border border-[#E2E2E2] rounded-xl p-6 flex flex-col items-center justify-center text-center aspect-square md:col-span-1 hover:-translate-y-1 hover:border-[#171717] transition-all group">
            <div className="w-16 h-16 rounded-full bg-[#f9f9f8] group-hover:bg-[#eeeeed] flex items-center justify-center mb-4 transition-colors">
              <Search size={32} strokeWidth={2} className="text-[#171717]" />
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold text-[#171717] uppercase tracking-widest">LOST & FOUND</span>
          </Link>

          <Link href="/s3c/request/new?category=cards" className="bento-card-light bg-white border border-[#E2E2E2] rounded-xl p-6 flex flex-col items-center justify-center text-center aspect-square md:col-span-1 hover:-translate-y-1 hover:border-[#171717] transition-all group">
            <div className="w-16 h-16 rounded-full bg-[#f9f9f8] group-hover:bg-[#eeeeed] flex items-center justify-center mb-4 transition-colors">
              <BadgeCheck size={32} strokeWidth={2} className="text-[#171717]" />
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold text-[#171717] uppercase tracking-widest">UNIVERSITY CARDS</span>
          </Link>

          <Link href="/s3c/request/new?category=fees" className="bento-card-light bg-white border border-[#E2E2E2] rounded-xl p-6 flex flex-col items-center justify-center text-center aspect-square md:col-span-1 hover:-translate-y-1 hover:border-[#171717] transition-all group">
            <div className="w-16 h-16 rounded-full bg-[#f9f9f8] group-hover:bg-[#eeeeed] flex items-center justify-center mb-4 transition-colors">
              <Wallet size={32} strokeWidth={2} className="text-[#171717]" />
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold text-[#171717] uppercase tracking-widest">FEES</span>
          </Link>

          <Link href="/s3c/request/new?category=custom" className="bento-card bg-[#15A8E3] border border-[#15A8E3] rounded-xl p-6 flex flex-col items-center justify-center text-center aspect-square md:col-span-1 hover:-translate-y-1 hover:shadow-lg transition-all group">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 text-[#15A8E3] group-hover:scale-110 transition-transform">
              <Plus size={32} strokeWidth={3} />
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold text-white uppercase tracking-widest">CUSTOM REQUEST</span>
          </Link>
        </div>
      </main>
    </>
  );
}
