import CurrentlyInto from "./CurrentlyInto";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center pt-16">
      <div className="mx-auto max-w-7xl px-8 py-12 sm:px-12 md:py-16 lg:px-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Left: Photo + Text */}
          <div className="flex flex-1 flex-col items-center gap-10 md:flex-row md:items-stretch md:gap-14">
            {/* Photo */}
            <div className="shrink-0 w-40 sm:w-48 md:w-64 lg:w-72">
                <img
                  src={`${import.meta.env.BASE_URL}abdel.jpg`}
                  alt="Abdelrahman Elshrief"
                  className="h-full w-full rounded-2xl object-cover object-top"
                />
            </div>

            {/* Text content */}
            <div className="flex-1">
              {/* Eyebrow */}
              <p className="mb-4 font-display text-sm font-medium uppercase tracking-[0.3em] text-copper">
                Computer Engineering · University of Toronto
              </p>

              {/* Name */}
              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-sand-light sm:text-5xl md:text-6xl lg:text-7xl">
                Abdelrahman
                <br />
                <span className="text-copper">Elshrief</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sand/80 md:text-xl">
                Hey! I'm Abdel, a Computer Engineering student @{" "}
                <span className="font-semibold text-sand">The University of Toronto</span>.
                I love basketball and tackling real world problems.
              </p>

              {/* About blurb */}
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-sand/55">
                I grew up soldering circuits with my dad, got hooked on basketball,
                and now I build things through both hardware and software.
                When I'm not coding, I'm probably in the gym, deep in a rabbit hole
                about something I just discovered, or desperately studying for a test.
              </p>

              {/* Status badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                <StatusBadge label="Seeking" value="Summer 2026 SWE Co-ops" />
                <StatusBadge label="Latest Win" value="1st Place — MakeUofT 2026" />
              </div>
            </div>
          </div>

          {/* Right: Currently Into */}
          <div className="shrink-0 lg:w-52">
            <CurrentlyInto />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://github.com/Abdel-E"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-sand/20 px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-sand transition-all duration-200 hover:border-copper hover:text-copper"
          >
            GitHub
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795 .945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/abdel-elshrief"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-sand/20 px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-sand transition-all duration-200 hover:border-copper hover:text-copper"
          >
            LinkedIn
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://devpost.com/Abdel-E"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-sand/20 px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-sand transition-all duration-200 hover:border-copper hover:text-copper"
          >
            Devpost
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853h-1.336z" />
            </svg>
          </a>
        </div>

        {/* Decorative divider */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sand/20 to-transparent" />
          <span className="font-display text-xs uppercase tracking-[0.4em] text-sand/30">
            Scroll
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sand/20 to-transparent" />
        </div>
        </div>
    </section>
  );
}

function StatusBadge({ label, value }) {
  return (
    <div className="rounded border border-slate-border bg-slate-card px-4 py-2 backdrop-blur-sm">
      <span className="block text-[10px] font-semibold uppercase tracking-widest text-copper/80">
        {label}
      </span>
      <span className="text-sm text-sand/90">{value}</span>
    </div>
  );
}
