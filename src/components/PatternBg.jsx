export default function PatternBg() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-[0.03]">
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Egyptian geometric + PCB hybrid pattern */}
          <pattern
            id="circuit-geo"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* PCB traces — horizontal and vertical */}
            <line x1="0" y1="30" x2="120" y2="30" stroke="#d4a56a" strokeWidth="0.8" />
            <line x1="0" y1="90" x2="120" y2="90" stroke="#d4a56a" strokeWidth="0.8" />
            <line x1="30" y1="0" x2="30" y2="120" stroke="#d4a56a" strokeWidth="0.8" />
            <line x1="90" y1="0" x2="90" y2="120" stroke="#d4a56a" strokeWidth="0.8" />

            {/* PCB vias / pads */}
            <circle cx="30" cy="30" r="3" fill="none" stroke="#d4a56a" strokeWidth="0.8" />
            <circle cx="90" cy="90" r="3" fill="none" stroke="#d4a56a" strokeWidth="0.8" />
            <circle cx="30" cy="90" r="2" fill="none" stroke="#d4a56a" strokeWidth="0.8" />
            <circle cx="90" cy="30" r="2" fill="none" stroke="#d4a56a" strokeWidth="0.8" />

            {/* Egyptian geometric diamond motif */}
            <polygon
              points="60,10 70,20 60,30 50,20"
              fill="none"
              stroke="#d4a56a"
              strokeWidth="0.6"
            />
            <polygon
              points="60,90 70,100 60,110 50,100"
              fill="none"
              stroke="#d4a56a"
              strokeWidth="0.6"
            />

            {/* Small step-pyramid triangles */}
            <polyline
              points="5,60 15,50 25,60"
              fill="none"
              stroke="#d4a56a"
              strokeWidth="0.5"
            />
            <polyline
              points="95,60 105,50 115,60"
              fill="none"
              stroke="#d4a56a"
              strokeWidth="0.5"
            />

            {/* Right-angle PCB corners */}
            <polyline
              points="60,30 60,60 90,60"
              fill="none"
              stroke="#d4a56a"
              strokeWidth="0.5"
            />
            <polyline
              points="30,60 60,60 60,90"
              fill="none"
              stroke="#d4a56a"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-geo)" />
      </svg>
    </div>
  );
}
