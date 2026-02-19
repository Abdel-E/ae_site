const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-border bg-navy/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-display text-lg font-bold tracking-wider text-copper transition-colors hover:text-sand"
        >
          AE.
        </a>

        <ul className="flex items-center gap-6 text-sm font-medium">
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
          <li>
            <a
              href="/AE_resume_latest.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded border border-copper px-3 py-1.5 text-copper transition-all duration-200 hover:bg-copper hover:text-navy"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
              </svg>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
