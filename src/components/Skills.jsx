const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "JavaScript/TypeScript", "C", "C++", "SQL"],
  },
  {
    category: "Web & Infra",
    items: ["React", "Next.js", "AstroJS", "Node.js", "Tailwind CSS", "Docker", "AWS", "GCP", "Linux"],
  },
  {
    category: "AI & Data",
    items: ["PyTorch", "Sentence Transformers", "RAG", "Scikit-learn", "Gemini API", "LLMs"],
  },
  {
    category: "Hardware",
    items: ["Raspberry Pi", "Arduino", "Serial Protocols", "Sensor Integration"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub Copilot", "MongoDB", "Figma", "Jira", "Docker"],
  },
];

export default function Skills() {
  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.3em] text-copper">
            Technical Toolkit
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-sand-light sm:text-5xl">
            Skills
          </h2>
          <div className="mt-4 h-px w-24 bg-copper/40" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-slate-border bg-slate-card p-5 backdrop-blur-sm"
            >
              <h3 className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-copper">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-lapis-deep/60 px-2.5 py-1 text-xs font-medium text-sand/70 transition-colors duration-200 hover:bg-lapis-deep hover:text-sand"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
