import Link from "next/link";

/**
 * FinalCTA: the homepage's closing ask. Since October 2026 the button goes to
 * /contact (calendar, email, or phone) and the copy names no call length.
 */
export function FinalCTA() {
  return (
    <section className="cta-purple-block py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <h2 className="section-title">
            Bring me what you&apos;re working through.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
            A defined problem, an opportunity you&apos;re still trying to
            understand, or something that just isn&apos;t working the way it
            should.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-5 sm:gap-8 sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#6B5CFF] hover:bg-[#7B6CFF] text-white text-base font-medium tracking-tight hover:scale-[1.02] transition-all"
            >
              Start a conversation
              <span aria-hidden="true" className="ml-2">&rarr;</span>
            </Link>
            <a
              href="mailto:capizzi@shawncapizzi.com"
              className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
            >
              Email me
              <span aria-hidden="true" className="ml-2">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
