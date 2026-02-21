const EXPERIENCE = [
  {
    role: "Driverless Recruit",
    company: "UTFR",
    location: "Toronto, ON",
    period: "Jan 2026 – Present",
    bullets: [
      "Selected for UTFR's driverless program; supported vehicle integration and test operations.",
      "Calibrated and validated sensor stacks (LiDAR, cameras), contributing to high-quality perception datasets.",
      "Automated test-run orchestration and telemetry aggregation, improving test throughput and diagnostics.",
    ],
  },
  {
    role: "MCP Gateway Developer",
    company: "UTMIST x Agentiiv",
    location: "Toronto, ON",
    period: "Jan 2026 – Present",
    bullets: [
      "Architected a FastAPI backend for an MCP Gateway, enabling deterministic routing across multiple MCP connectors to validate multi-agent interoperability.",
      "Implemented RBAC and JWT-based validation to secure agent communication and enforce granular permissions.",
      "Containerized services with Docker and added Prometheus/Grafana instrumentation to monitor system health and reduce deployment latency.",
    ],
  },
  {
    role: "AI Quality Assurance & Prompt Engineer",
    company: "Stellar AI",
    location: "Toronto, ON",
    period: "Nov 2024 – Present",
    bullets: [
      "Designed and evaluated prompts and rubrics to stress-test AI models for correctness and safety.",
      "Performed QA across large datasets, identifying and correcting labeling errors to improve training data quality.",
      "Produced 100+ edge-case datasets and evaluation suites used for targeted model fine-tuning.",
    ],
  },
  {
    role: "Developer",
    company: "PayBridge Technologies",
    location: "Kingston, ON",
    period: "Aug 2022 – Aug 2023",
    bullets: [
      "Built a full-stack fintech platform with Next.js and Python, deployed with Docker for reproducible releases.",
      "Integrated payment APIs (Venmo, PayPal) to support beta transactions and merchant flows.",
      "Operated AWS infrastructure and security measures, significantly improving uptime and operational resilience.",
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
