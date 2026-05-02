import Link from "next/link";
import { GraduationCap, Compass, ArrowRight } from "lucide-react";
import TopBar from "@/components/TopBar";

export default function GatewayPage() {
  return (
    <>
      <TopBar />
      <main className="flex-grow px-4 md:px-12 pt-12 pb-32 max-w-7xl mx-auto w-full bg-background">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-[40px] leading-[1.2] tracking-tight font-bold text-[#171717] mb-2">
            Welcome back, Amein
          </h1>
          <p className="text-lg text-[#474747]">
            Where would you like to go today?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/portal"
            className="group block bento-card hover:bg-[#f3f4f3] transition-colors duration-200"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 rounded-lg bg-[#eeeeed] flex items-center justify-center border border-black group-hover:border-[var(--color-primary)] transition-colors">
                <GraduationCap
                  size={36}
                  strokeWidth={2}
                  className="text-[#171717] group-hover:text-[var(--color-primary)] transition-colors"
                />
              </div>
              <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center text-[var(--color-primary)] bg-white group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300">
                <ArrowRight size={20} strokeWidth={2} />
              </div>
            </div>
            <div>
              <h2 className="text-[28px] leading-[1.3] font-semibold text-[#171717] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Student Portal
              </h2>
              <p className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider font-semibold text-[#474747] mb-4 uppercase">
                (LMS & Qalam)
              </p>
              <p className="text-base text-[#474747]">
                Access LMS courses, check attendance, view grades, and Qalam updates.
              </p>
            </div>
          </Link>

          <Link
            href="/s3c"
            className="group block bento-card hover:bg-[#f3f4f3] transition-colors duration-200"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 rounded-lg bg-[#eeeeed] flex items-center justify-center border border-black group-hover:border-[var(--color-primary)] transition-colors">
                <Compass
                  size={36}
                  strokeWidth={2}
                  className="text-[#171717] group-hover:text-[var(--color-primary)] transition-colors"
                />
              </div>
              <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center text-[var(--color-primary)] bg-white group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300">
                <ArrowRight size={20} strokeWidth={2} />
              </div>
            </div>
            <div>
              <h2 className="text-[28px] leading-[1.3] font-semibold text-[#171717] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                S3C Support
              </h2>
              <p className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider font-semibold text-[#474747] mb-4 uppercase">
                &nbsp;
              </p>
              <p className="text-base text-[#474747]">
                Browse campus services, manage hostel requests, IT help, and chatbot.
              </p>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
