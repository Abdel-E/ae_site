const ITEMS = [
  { emoji: "🏀", label: "Playing", value: "Intramurals basketball at AC" },
  { emoji: "🔧", label: "Building", value: "MCP Gateways" },
  { emoji: "📖", label: "Reading", value: "My Textbooks" },
  { emoji: "📺", label: "Watching", value: "S.W.A.T. - Netflix" },
];

export default function CurrentlyInto() {
  return (
    <div>
      <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.3em] text-copper/60">
        What I'm Into Right Now
      </p>
      <div className="flex flex-col gap-3">
        {ITEMS.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-slate-border bg-slate-card px-4 py-3 backdrop-blur-sm"
          >
            <span className="mb-1 block text-lg">{item.emoji}</span>
            <span className="block text-[10px] font-semibold uppercase tracking-widest text-copper/70">
              {item.label}
            </span>
            <span className="block text-sm leading-snug text-sand/75">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
