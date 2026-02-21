import { useState } from "react";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-border bg-navy/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-display text-lg font-bold tracking-wider text-copper transition-colors hover:text-sand"
        >
          AE.
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sand/70 transition-colors duration-200 hover:text-copper"
              >
                {link.label}
              </a>
            </li>
          ))}
          
        </ul>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded bg-navy/30 text-sand/90 transition-colors hover:bg-navy/50"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? 'block' : 'hidden'} border-t border-slate-border bg-navy/95 backdrop-blur-md`}
      >
        <div className="px-6 py-4">
          <ul className="flex flex-col gap-3 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={link.href}
                  className="block rounded px-3 py-2 text-sand/90 transition-colors hover:bg-slate-card hover:text-copper"
                >
                  {link.label}
                </a>
              </li>
            ))}
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
