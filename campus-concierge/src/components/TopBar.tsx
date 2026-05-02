"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Bell, Menu, X, LayoutDashboard, Home, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TopBarProps {
  title?: string;
  showBack?: boolean;
  backHref?: string;
}

export default function TopBar({ title, showBack = false, backHref = "#" }: TopBarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isPortal = pathname?.startsWith("/portal");
  const isS3C = pathname?.startsWith("/s3c") || pathname === "/inbox" || pathname === "/requests" || pathname === "/profile";

  return (
    <>
      <header className="flex justify-between items-center h-16 w-full px-4 md:px-6 sticky top-0 z-40 bg-white border-b border-[#E2E2E2]">
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center justify-center w-10 h-10 text-[#171717] hover:bg-[#f9f9f8] rounded-full transition-colors"
          >
            <Menu size={24} strokeWidth={2} />
          </button>
          
          {showBack && (
            <Link
              href={backHref}
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-[#15A8E3] hover:text-[#E4E613] transition-colors"
            >
              <ArrowLeft size={24} strokeWidth={2} />
            </Link>
          )}
          
          <span className="font-[family-name:var(--font-public-sans)] font-black uppercase text-xl text-[#15A8E3] tracking-widest hidden md:block ml-2">
            {title || "CAMPUS HUB"}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {isPortal && (
            <>
              <Link href="/portal" className={`px-3 py-2 ${pathname === "/portal" ? "text-[#15A8E3] font-bold" : "text-[#474747] hover:bg-[#f9f9f8] rounded-lg transition-colors"}`}>Portal</Link>
              <Link href="/portal/lms" className={`px-3 py-2 ${pathname.includes("/lms") ? "text-[#15A8E3] font-bold" : "text-[#474747] hover:bg-[#f9f9f8] rounded-lg transition-colors"}`}>LMS</Link>
              <Link href="/portal/qalam" className={`px-3 py-2 ${pathname.includes("/qalam") ? "text-[#15A8E3] font-bold" : "text-[#474747] hover:bg-[#f9f9f8] rounded-lg transition-colors"}`}>Qalam</Link>
            </>
          )}
          {isS3C && (
            <>
              <Link href="/s3c" className={`px-3 py-2 ${pathname === "/s3c" ? "text-[#15A8E3] font-bold" : "text-[#474747] hover:bg-[#f9f9f8] rounded-lg transition-colors"}`}>Home</Link>
              <Link href="/requests" className={`px-3 py-2 ${pathname === "/requests" ? "text-[#15A8E3] font-bold" : "text-[#474747] hover:bg-[#f9f9f8] rounded-lg transition-colors"}`}>Requests</Link>
              <Link href="/inbox" className={`px-3 py-2 ${pathname === "/inbox" ? "text-[#15A8E3] font-bold" : "text-[#474747] hover:bg-[#f9f9f8] rounded-lg transition-colors"}`}>Inbox</Link>
              <Link href="/profile" className={`px-3 py-2 ${pathname === "/profile" ? "text-[#15A8E3] font-bold" : "text-[#474747] hover:bg-[#f9f9f8] rounded-lg transition-colors"}`}>Profile</Link>
            </>
          )}
        </nav>

        {/* Mobile Title (Centered) */}
        <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
           <span className="font-[family-name:var(--font-public-sans)] font-bold uppercase text-lg text-[#171717] tracking-tight">
            {title || "CAMPUS HUB"}
          </span>
        </div>

        <button className="text-[#15A8E3] hover:text-[#E4E613] transition-colors flex items-center justify-center w-10 h-10">
          <Bell size={24} strokeWidth={2} />
        </button>
      </header>

      {/* Slide-over Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 left-0 w-72 bg-white z-50 shadow-2xl flex flex-col border-r border-[#E2E2E2]"
            >
              <div className="flex items-center justify-between p-4 border-b border-[#E2E2E2]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#e8e8e7] overflow-hidden border border-[#171717]">
                    <img
                      alt="Student Profile Avatar"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida/ADBb0uihtiEBdCvCO2_LQjzdIk0AT6zjGn7dxBRGKkgSf_tJr3csMxYsdr8HlDahhINq3aszr9_pPCWPCa4LmZlrGsBD0yatwrf9rOku20lvaVqNXnnwDtSOX1sfci-mD7dBcpLB2SUd3cXk55djW0mFwv5jZG86qWNZuOhuF_m53leMULOYWlr9A1gbGYIJggwpUuodpfIvs3wLbn1PcOQar3Lwbv9DkCcje3Uci8gT31TPohS14PiiBpeeCatVsB9292SI1NGazbZ1tUc"
                    />
                  </div>
                  <span className="font-bold text-[#171717]">Amein</span>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-[#f9f9f8] rounded-full">
                  <X size={24} className="text-[#171717]" />
                </button>
              </div>

              <div className="flex flex-col p-4 gap-2 flex-grow">
                <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-[#474747] font-semibold uppercase tracking-widest mb-2 mt-4 px-2">Navigate</span>
                
                <Link 
                  href="/gateway" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#f0f9ff] text-[#171717] hover:text-[#15A8E3] transition-colors font-semibold"
                >
                  <Home size={24} />
                  Gateway Hub
                </Link>

                <Link 
                  href="/portal" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#f0f9ff] text-[#171717] hover:text-[#15A8E3] transition-colors font-semibold"
                >
                  <LayoutDashboard size={24} />
                  Student Portal
                </Link>

                <Link 
                  href="/s3c" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#f0f9ff] text-[#171717] hover:text-[#15A8E3] transition-colors font-semibold"
                >
                  <Bot size={24} />
                  S3C Services
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
