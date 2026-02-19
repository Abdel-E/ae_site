const PROJECTS = [
  {
    title: "Twin — Wearable AI Device",
    award: "1st Place Overall · MakeUofT 2026",
    tech: ["Python", "C++", "Raspberry Pi", "Arduino", "Computer Vision", "YOLOv8"],
    description:
      "I wanted to build something that could genuinely help people in their day-to-day — so my team and I built a wearable AI assistant from scratch at MakeUofT. We won 1st place out of 300+ participants.",
    bullets: [
      "Reduced agent response latency by 80% by switching from full-frame image transmission to a localized YOLOv8 bounding box metadata pipeline.",
      "Architected the serial communication protocol between Pi and Arduino, resolving async baud rate mismatches — 99.9% data integrity for heart rate and environmental sensor feeds.",
      "Designed and built the full hardware architecture, then wrote the software backend bridging it all with AI models.",
    ],
    link: "https://devpost.com/software/twin-pywkb4",
  },
  {
    title: "NLP Resume Scorer",
    award: null,
    tech: ["Python", "PyTorch", "Sentence Transformers", "Scikit-learn", "Gemini API"],
    description:
      "I was tired of guessing whether my resume was good enough for a posting — so I built a tool that scores resumes against job descriptions using NLP and gives you actual feedback.",
    bullets: [
      "Combined TF-IDF with semantic embeddings (all-MiniLM-L6-v2) and iterative weight tuning — went from 24% to 64% accuracy.",
      "Plugged in the Gemini API to generate actionable suggestions that consistently improved resume scores by 10%.",
    ],
    link: "https://github.com/Abdel-E/nlp_resume",
  },
  {
    title: "The Underrated Baller",
    award: "30,000+ Views",
    tech: ["AstroJS", "Tailwind CSS", "TinaCMS", "Netlify", "CI/CD"],
    description:
      "Basketball is a huge part of my life, and I felt like the stories I cared about weren't being told — so I started a media brand from scratch and built the platform to match.",
    bullets: [
      "Integrated a headless CMS (TinaCMS) so I could publish posts without touching code — cut blog creation time by 75%.",
      "Set up a CI/CD pipeline via Netlify for instant rebuilds and form collection.",
    ],
    link: "https://theunderratedballer.com/",
  },
  {
    title: "The Great Lock-in",
    award: null,
    tech: ["Python", "AI Agents", "LLMs", "Calendar API"],
    description:
      "My calendar was chaos — overlapping commitments, missed blocks, constant rescheduling. I built an AI agent that handles all of it autonomously so I don't have to.",
    bullets: [
      "Built a conflict-resolution engine that parses calendar state and rebalances time blocks on its own.",
      "Used LLM-driven planning to produce optimized schedules that respect priority rankings and constraints.",
    ],
    link: "https://devpost.com/software/thegreatlockin",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.3em] text-copper">
            Featured Work
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-sand-light sm:text-5xl">
            Projects
          </h2>
          <div className="mt-4 h-px w-24 bg-copper/40" />
        </div>

        {/* Project cards */}
        <div className="space-y-12">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block cursor-pointer rounded-lg border border-slate-border bg-slate-card p-6 backdrop-blur-sm transition-all duration-300 hover:border-copper/30 hover:shadow-lg hover:shadow-copper/5 md:p-8">

      {/* Header row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className="mb-1 block font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-copper/60">
            Project 0{index + 1}
          </span>
          <h3 className="font-display text-2xl font-bold tracking-tight text-sand-light transition-colors duration-200 group-hover:text-copper sm:text-3xl">
            {project.title}
          </h3>
        </div>
        {project.award && (
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-copper/30 bg-copper/10 px-3 py-1 text-xs font-medium text-copper">
            <svg
              className="h-3 w-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {project.award}
          </span>
        )}
      </div>

      {/* Tech stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded bg-lapis-deep/60 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-sand/70"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="mt-5 leading-relaxed text-sand/75">{project.description}</p>

      {/* Bullet points */}
      <ul className="mt-4 space-y-2.5">
        {project.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-sand/65">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-copper/50" />
            {bullet}
          </li>
        ))}
      </ul>

      {/* Link indicator */}
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-copper transition-colors duration-200 group-hover:text-copper-dim">
        View Project
        <svg
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </span>
    </a>
  );
}
