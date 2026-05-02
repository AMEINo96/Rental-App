import TopBar from "@/components/TopBar";
import { Send, Bot } from "lucide-react";

export default function AIChatPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopBar title="NUST AI Assistant" showBack={true} backHref="/s3c" />
      <main className="flex-grow flex flex-col max-w-4xl mx-auto w-full px-6 py-6 pb-[140px] md:pb-24">
        
        <div className="flex flex-col gap-6 overflow-y-auto flex-grow mb-6">
          {/* System Message */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white flex-shrink-0">
              <Bot size={20} />
            </div>
            <div className="bento-card-light rounded-tl-none py-3 px-4 max-w-[85%] text-[#171717]">
              <p>Hello! I am the NUST AI Assistant. How can I help you today?</p>
            </div>
          </div>
          
          {/* User Message */}
          <div className="flex gap-4 justify-end">
            <div className="bento-card-light bg-[#f3f4f3] border-transparent rounded-tr-none py-3 px-4 max-w-[85%] text-[#171717]">
              <p>What are the library hours today?</p>
            </div>
          </div>
          
          {/* System Message */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white flex-shrink-0">
              <Bot size={20} />
            </div>
            <div className="bento-card-light rounded-tl-none py-3 px-4 max-w-[85%] text-[#171717]">
              <p>The Central Library is open from 9:00 AM to 10:00 PM today. Let me know if you need help finding a specific book!</p>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="fixed md:sticky bottom-24 md:bottom-6 left-0 w-full px-6 md:px-0">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-[#171717] rounded-full p-2 pl-6 flex items-center shadow-lg">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-grow bg-transparent border-none focus:ring-0 text-[#171717] outline-none"
              />
              <button className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white hover:bg-[#004c6a] transition-colors flex-shrink-0">
                <Send size={20} className="ml-1" />
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
