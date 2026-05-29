const CAL_URL = "https://cal.com/capizzi/30min";

export function FinalCTA() {
  return (
    <section className="cta-purple-block py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-3xl lg:text-[30px] font-bold tracking-tight leading-[1.05]">
            Let&apos;s talk through your challenges.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            30 minutes. Virtual. We figure out together if there&apos;s a fit.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#6B5CFF] hover:bg-[#7B6CFF] text-white text-base font-medium tracking-tight hover:scale-[1.02] transition-all"
            >
              Book a Strategy Call
            </a>
            <p className="text-base text-text-secondary">
              Or email{" "}
              <a
                href="mailto:capizzi@shawncapizzi.com"
                className="text-text-primary font-medium hover:text-link transition-colors"
              >
                capizzi@shawncapizzi.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
