const LINKS = [
  {
    label: "Email",
    href: "mailto:abdel.elshrief@mail.utoronto.ca",
    value: "abdel.elshrief@mail.utoronto.ca",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/abdel-elshrief",
    value: "linkedin.com/in/abdel-elshrief",
  },
  {
    label: "GitHub",
    href: "https://github.com/Abdel-E",
    value: "github.com/Abdel-E",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-slate-border py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Left */}
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-sand-light">
              Let's Connect
            </h2>
            <p className="mt-2 max-w-md text-sand/60">
              Actively seeking Summer 2026 Software Engineering Co-ops.
              Always open to interesting projects and conversations.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sand/70 transition-colors duration-200 hover:text-copper"
              >
                <span className="text-[11px] font-semibold uppercase tracking-widest text-copper/50 group-hover:text-copper">
                  {link.label}
                </span>
                <span className="text-sm">{link.value}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-2 border-t border-slate-border pt-8 text-xs text-sand/30 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Abdelrahman Elshrief</p>
          <p className="font-display text-[10px] uppercase tracking-[0.3em] text-copper/30">
            Engineered, not decorated.
          </p>
        </div>
      </div>
    </footer>
  );
}
