import Link from "next/link";
import { BadgeCheck, Lock, EyeOff } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="w-full flex-grow flex items-center justify-center p-6 bg-background">
      <div className="w-full max-w-md flex flex-col items-center gap-12 z-10">
        <header className="flex flex-col items-center text-center gap-2">
          <h1 className="text-[40px] leading-[1.2] tracking-tight font-bold text-[#171717]">
            Welcome to Campus Concierge
          </h1>
          <p className="text-base text-[#474747]">Sign in with your Qalam ID</p>
        </header>

        <section className="w-full bento-card flex flex-col gap-4">
          <form className="flex flex-col gap-4" action="/gateway" method="GET">
            <div className="flex flex-col gap-1">
              <label
                className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider font-semibold uppercase text-[#171717]"
                htmlFor="qalam-id"
              >
                Qalam ID
              </label>
              <div className="relative">
                <BadgeCheck
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6e7880]"
                  size={20}
                  strokeWidth={2}
                />
                <input
                  className="w-full pl-10 pr-3 py-3 bg-[#f9f9f8] border border-[#bdc8d1] rounded-lg focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] text-base text-[#171717] transition-colors placeholder-[#6e7880]/50 outline-none"
                  id="qalam-id"
                  name="qalam-id"
                  placeholder="e.g., 345678"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label
                className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider font-semibold uppercase text-[#171717]"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6e7880]"
                  size={20}
                  strokeWidth={2}
                />
                <input
                  className="w-full pl-10 pr-10 py-3 bg-[#f9f9f8] border border-[#bdc8d1] rounded-lg focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] text-base text-[#171717] transition-colors placeholder-[#6e7880]/50 outline-none"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                />
                <button
                  aria-label="Toggle password visibility"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6e7880] hover:text-[#171717] transition-colors focus:outline-none"
                  type="button"
                >
                  <EyeOff size={20} strokeWidth={2} />
                </button>
              </div>
            </div>

            <div className="flex justify-end mt-[-8px]">
              <Link
                className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold text-[var(--color-primary)] hover:text-[#004c6a] transition-colors"
                href="#"
              >
                Forgot Password?
              </Link>
            </div>

            <Link
              href="/gateway"
              className="w-full mt-2 py-3 px-6 rounded-lg font-semibold text-[18px] tracking-wide transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[var(--color-primary)] hover:opacity-90 text-white text-center inline-block"
            >
              Sign In
            </Link>
          </form>
        </section>
      </div>
    </main>
  );
}
