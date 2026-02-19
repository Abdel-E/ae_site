import { useState } from "react";

export default function HardwareRoots() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="roots" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.3em] text-copper">
            Origin Story
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-sand-light sm:text-5xl">
            Hardware Roots
          </h2>
          <div className="mt-4 h-px w-24 bg-copper/40" />
        </div>

        {/* Intro text */}
        <p className="max-w-3xl text-lg leading-relaxed text-sand/80">
          Long before writing my first line of production code, I was soldering
          headers onto Arduinos, tracing signal paths on schematics, and
          building things that blinked, buzzed, and occasionally caught fire.
          That hands-on instinct — understanding{" "}
          <span className="text-sand">how</span> things work at the lowest
          level — is the foundation everything else is built on.
        </p>

        {/* Expandable dropdown */}
        <div className="mt-8 rounded-lg border border-slate-border bg-slate-card backdrop-blur-sm">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200 hover:bg-lapis/15"
          >
            <span className="font-display text-lg font-semibold tracking-tight text-sand-light">
              The Full Story — From Schematics to Systems
            </span>
            <svg
              className={`h-5 w-5 shrink-0 text-copper transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="space-y-5 border-t border-slate-border px-6 py-6 text-sand/75">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-copper/30 bg-copper/10">
                    <span className="font-display text-xs font-bold text-copper">01</span>
                  </div>
                  <div>
                    <h4 className="mb-1 font-display text-base font-semibold text-sand-light">
                      The Arduino Years
                    </h4>
                    <p className="text-sm leading-relaxed">
                      It started with an Arduino Uno and a breadboard full of LEDs. My
                      dad — an engineer himself — showed me how to read datasheets and
                      decode schematics. What looked like noise on paper became a
                      language: voltage dividers, pull-up resistors, PWM signals. Every
                      weekend was a new experiment, a new failure, a new lesson in
                      debugging at the hardware level.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-copper/30 bg-copper/10">
                    <span className="font-display text-xs font-bold text-copper">02</span>
                  </div>
                  <div>
                    <h4 className="mb-1 font-display text-base font-semibold text-sand-light">
                      The Handheld Console
                    </h4>
                    <p className="text-sm leading-relaxed">
                      The project that changed everything: building a handheld gaming
                      console from scratch. Sourcing components, designing the circuit,
                      writing the game logic in C — it was the first time I experienced
                      the full stack of engineering, from bare metal to user interface.
                      It taught me that the best solutions come from understanding every
                      layer of the system.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-copper/30 bg-copper/10">
                    <span className="font-display text-xs font-bold text-copper">03</span>
                  </div>
                  <div>
                    <h4 className="mb-1 font-display text-base font-semibold text-sand-light">
                      Hardware Meets Software
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Those foundations in hardware naturally extended into software
                      engineering. Understanding registers and memory maps made me a
                      better programmer. Debugging intermittent hardware faults trained
                      the same instincts needed for complex distributed systems. Today,
                      whether I'm architecting a FastAPI backend or wiring a Raspberry
                      Pi to an Arduino, the process feels the same: understand the
                      system, find the constraint, solve it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
