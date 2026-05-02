"use client";

import { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";
import { Moon, Sun } from "lucide-react";

export default function GatewaySettingsPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load current theme from document class
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const toggleTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <TopBar title="Settings" showBack={true} backHref="/gateway" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-bold text-[#0F172A] dark:text-white mb-2 tracking-tight">Settings</h1>
          <p className="text-lg text-[#64748B] dark:text-slate-400">Manage your application preferences.</p>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-[#0F172A] dark:text-white mb-4">Appearance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Light Theme Option */}
            <button 
              onClick={() => toggleTheme("light")}
              className={`bento-card-light dark:bg-slate-800 dark:border-slate-700 p-6 flex items-center gap-4 transition-all text-left ${
                theme === "light" ? "ring-2 ring-[#3B82F6] border-[#3B82F6]" : "hover:border-[#3B82F6]"
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-slate-700 flex items-center justify-center shrink-0">
                <Sun size={24} className={theme === "light" ? "text-[#3B82F6]" : "text-[#64748B] dark:text-slate-400"} />
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] dark:text-white">Light Theme</h3>
                <p className="text-sm text-[#64748B] dark:text-slate-400">Clean, bright white aesthetics.</p>
              </div>
            </button>

            {/* Dark Theme Option */}
            <button 
              onClick={() => toggleTheme("dark")}
              className={`bento-card-light dark:bg-slate-800 dark:border-slate-700 p-6 flex items-center gap-4 transition-all text-left ${
                theme === "dark" ? "ring-2 ring-[#3B82F6] border-[#3B82F6]" : "hover:border-[#3B82F6]"
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center shrink-0">
                <Moon size={24} className={theme === "dark" ? "text-[#3B82F6]" : "text-[#64748B] dark:text-slate-400"} />
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] dark:text-white">Dark Theme</h3>
                <p className="text-sm text-[#64748B] dark:text-slate-400">Grey slate color, easy on the eyes.</p>
              </div>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
