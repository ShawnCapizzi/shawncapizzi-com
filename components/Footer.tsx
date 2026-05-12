import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { SymbolMark } from "./SymbolMark";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/engagements", label: "Engagements" },
  { href: "/thinking", label: "Thinking" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/clarity-advantage", label: "Clarity Advantage" },
];

const LINKEDIN_URL = "https://www.linkedin.com/in/shawncapizzi";
const EMAIL = "capizzi@gmail.com";
const PHONE_DISPLAY = "212-380-3900";
const PHONE_DIAL = "2123803900";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle mt-32">
      <div className="max-w-wide mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <Wordmark size="small" href="/" />
          </div>
          <div className="flex items-center gap-3 text-text-secondary">
            <SymbolMark size={16} interactive={false} />
            <span className="text-sm font-medium tracking-tight">Clarity is the advantage.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
            {NAV.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${EMAIL}`} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              {EMAIL}
            </a>
            <a href={`tel:+1${PHONE_DIAL}`} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="border-t border-border-subtle pt-8">
          <p className="text-xs text-text-tertiary tracking-wide">
            © {year} Shawn M. Capizzi · Strategic Experience Design for Regulated and Enterprise Teams
          </p>
        </div>
      </div>
    </footer>
  );
}
