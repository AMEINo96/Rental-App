import Link from "next/link";
import { GraduationCap, Compass, ArrowRight } from "lucide-react";
import TopBar from "@/components/TopBar";

export default function GatewayPage() {
  return (
    <>
      <TopBar />
      <main className="flex-grow px-4 md:px-12 pt-12 pb-32 max-w-7xl mx-auto w-full">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-[40px] leading-[1.2] tracking-tight font-bold text-slate-900 dark:text-white mb-2">
            Welcome back, Amein
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Where would you like to go today?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/portal"
            className="group block bento-card relative overflow-hidden min-h-[220px] bg-white dark:bg-slate-800 transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] cursor-pointer border border-slate-200 dark:border-slate-600 hover:border-cyan-300 hover:shadow-cyan-100/50 hover:shadow-lg dark:hover:border-cyan-700 dark:hover:shadow-cyan-900/50"
          >
            {/* Line Art Illustration */}
            <div className="absolute right-0 bottom-0 top-0 w-1/2 z-0 overflow-hidden pointer-events-none">
              <img 
                src="/images/gateway-library.png" 
                alt="NUST Central Library" 
                className="w-full h-full object-contain object-right-bottom mix-blend-multiply dark:invert dark:mix-blend-screen opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-slate-800 dark:via-slate-800/80" />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-lg bg-cyan-50 dark:bg-slate-700/80 flex items-center justify-center border border-slate-200 dark:border-slate-600 group-hover:bg-[#15A8E3] group-hover:border-[#15A8E3] transition-colors shadow-sm">
                  <GraduationCap
                    size={36}
                    strokeWidth={2}
                    className="text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors"
                  />
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 dark:text-slate-500 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm group-hover:translate-x-1 group-hover:text-[#15A8E3] transition-transform duration-300">
                  <ArrowRight size={24} strokeWidth={2} />
                </div>
              </div>
              <div className="w-[65%] md:w-[60%]">
                <h2 className="text-[28px] leading-[1.3] font-semibold text-slate-900 dark:text-white mb-2">
                  Student Portal
                </h2>
                <p className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider font-semibold text-slate-600 dark:text-slate-400 mb-4 uppercase">
                  (LMS &amp; Qalam)
                </p>
                <p className="text-base text-slate-600 dark:text-slate-300">
                  Access LMS courses, check attendance, view grades, and Qalam updates.
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/s3c"
            className="group block bento-card relative overflow-hidden min-h-[220px] bg-white dark:bg-slate-800 transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] cursor-pointer border border-slate-200 dark:border-slate-600 hover:border-cyan-300 hover:shadow-cyan-100/50 hover:shadow-lg dark:hover:border-cyan-700 dark:hover:shadow-cyan-900/50"
          >
            {/* Line Art Illustration */}
            <div className="absolute right-0 bottom-0 top-0 w-1/2 z-0 overflow-hidden pointer-events-none">
              <img 
                src="/images/gateway-s3c.png" 
                alt="NUST S3C Office" 
                className="w-full h-full object-contain object-right-bottom mix-blend-multiply dark:invert dark:mix-blend-screen opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-slate-800 dark:via-slate-800/80" />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-lg bg-cyan-50 dark:bg-slate-700/80 flex items-center justify-center border border-slate-200 dark:border-slate-600 group-hover:bg-[#15A8E3] group-hover:border-[#15A8E3] transition-colors shadow-sm">
                  <Compass
                    size={36}
                    strokeWidth={2}
                    className="text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors"
                  />
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 dark:text-slate-500 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm group-hover:translate-x-1 group-hover:text-[#15A8E3] transition-transform duration-300">
                  <ArrowRight size={24} strokeWidth={2} />
                </div>
              </div>
              <div className="w-[65%] md:w-[60%]">
                <h2 className="text-[28px] leading-[1.3] font-semibold text-slate-900 dark:text-white mb-2">
                  S3C Support
                </h2>
                <p className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider font-semibold text-slate-600 dark:text-slate-400 mb-4 uppercase">
                  &nbsp;
                </p>
                <p className="text-base text-slate-600 dark:text-slate-300">
                  Browse campus services, manage hostel requests, IT help, and chatbot.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
