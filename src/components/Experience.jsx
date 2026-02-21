const EXPERIENCE = [
  {
    role: "Machine Learning Engineer",
    company: "UTMIST x Agentiiv",
    location: "Toronto, ON",
    period: "Jan 2025 – Present",
    bullets: [
      "Architected FastAPI MCP Gateway, engineering deterministic routing for 5+ MCP connectors.",
      "Engineered zero-trust security pipelines via JWT and RBAC, strictly securing enterprise agent access.",
      "Orchestrated Dockerized microservices with Prometheus + Grafana, slashing deployment latency by 86%.",
      "Optimized API throughput using asynchronous processing, reducing cross-agent response times by 40%.",
    ],
  },
  {
    role: "Driverless Perception Recruit",
    company: "University of Toronto Formula Racing",
    location: "Toronto, ON",
    period: "Sep 2025 – Present",
    bullets: [
      "Engineered C++ linear algebra algorithms for LiDAR ground detection, boosting accuracy by 10%.",
      "Orchestrated 3D mapping telemetry on Foxglove to simulate dynamic track obstacles for cross-team routing.",
      "Architected high-performance sensor fusion and perception pipelines, optimizing autonomous navigation.",
    ],
  },
  {
    role: "Developer",
    company: "PayBridge Technologies",
    location: "Kingston, ON",
    period: "Aug 2022 – Aug 2023",
    bullets: [
      "Spearheaded development of a fintech startup using Next.js and Python; deployed via Docker.",
      "Developed API integrations (Venmo, PayPal) to process $3,500+ in transactions for 100+ beta users",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.3em] text-copper">
            Professional
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-sand-light sm:text-5xl">
            Experience
          </h2>
          <div className="mt-4 h-px w-24 bg-copper/40" />
        </div>

        {/* Timeline */}
        <div className="relative space-y-10 pl-8 before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-copper/40 before:via-sand/10 before:to-transparent">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-8 top-5 flex h-[11px] w-[11px] items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full border border-copper/60 bg-navy" />
              </div>

              <div className="rounded-lg border border-slate-border bg-slate-card p-5 backdrop-blur-sm transition-all duration-300 hover:border-copper/20 md:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-sand-light">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-copper/80">
                      {exp.company}{" "}
                      <span className="text-sand/40">· {exp.location}</span>
                    </p>
                  </div>
                  <span className="shrink-0 font-display text-xs font-medium uppercase tracking-widest text-sand/40">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-sand/65"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-copper/40" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
