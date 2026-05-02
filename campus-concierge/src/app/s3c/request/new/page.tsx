import TopBar from "@/components/TopBar";

export default function NewRequestPage() {
  return (
    <>
      <TopBar title="New Request" showBack={true} backHref="/s3c" />
      <main className="w-full max-w-4xl mx-auto px-6 py-12 pb-32 flex flex-col gap-6">
        <section className="mb-6">
          <h2 className="text-[40px] leading-[1.2] font-bold text-[#171717] mb-2">Create Request</h2>
          <p className="text-lg text-[#474747]">Submit a new service request to S3C.</p>
        </section>

        <section className="bento-card flex flex-col gap-6">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider font-semibold uppercase text-[#171717]">
                Service Category
              </label>
              <select className="w-full px-4 py-3 bg-[#f9f9f8] border border-[#bdc8d1] rounded-lg focus:border-[var(--color-primary)] outline-none text-[#171717]">
                <option>IT Support</option>
                <option>Hostel Maintenance</option>
                <option>Academic Advising</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider font-semibold uppercase text-[#171717]">
                Subject
              </label>
              <input 
                type="text" 
                placeholder="Brief summary of your request" 
                className="w-full px-4 py-3 bg-[#f9f9f8] border border-[#bdc8d1] rounded-lg focus:border-[var(--color-primary)] outline-none text-[#171717]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider font-semibold uppercase text-[#171717]">
                Description
              </label>
              <textarea 
                rows={5}
                placeholder="Provide detailed information..." 
                className="w-full px-4 py-3 bg-[#f9f9f8] border border-[#bdc8d1] rounded-lg focus:border-[var(--color-primary)] outline-none text-[#171717]"
              ></textarea>
            </div>

            <button type="button" className="w-full mt-4 py-3 px-6 rounded-lg font-semibold text-[18px] tracking-wide transition-colors bg-[var(--color-primary)] hover:opacity-90 text-white">
              Submit Request
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
