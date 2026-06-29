import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { Header } from "./Header";
import { ScoutIconMark } from "./Logo";

export default function ScoutLoadingPage({ campaignName, step, elapsed, steps }) {
  const progress = Math.min(step / steps.length, 1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto flex max-w-[920px] flex-col items-center px-8 pb-24">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative grid h-[280px] w-[280px] place-items-center"
        >
          <motion.svg
            aria-hidden
            viewBox="0 0 280 280"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <defs>
              <radialGradient id="scoutGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="oklch(0.72 0.18 45)" stopOpacity="0.35" />
                <stop offset="70%" stopColor="oklch(0.72 0.18 45)" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="scoutArc" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="oklch(0.52 0.19 28)" stopOpacity="0" />
                <stop offset="60%" stopColor="oklch(0.62 0.2 38)" stopOpacity="1" />
                <stop offset="100%" stopColor="oklch(0.78 0.18 55)" stopOpacity="1" />
              </linearGradient>
            </defs>
            <circle cx="140" cy="140" r="135" fill="url(#scoutGlow)" />
            <circle
              cx="140"
              cy="140"
              r="118"
              fill="none"
              stroke="oklch(0.55 0.12 35 / 0.18)"
              strokeWidth="1"
              strokeDasharray="2 6"
            />
            <circle cx="140" cy="140" r="98" fill="none" stroke="oklch(0.55 0.12 35 / 0.12)" strokeWidth="1" />
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "140px 140px" }}
            >
              <path
                d="M 140 22 A 118 118 0 0 1 258 140"
                fill="none"
                stroke="url(#scoutArc)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="258" cy="140" r="4" fill="oklch(0.78 0.18 55)" />
            </motion.g>
            <motion.g
              animate={{ rotate: -360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "140px 140px" }}
            >
              <path
                d="M 140 42 A 98 98 0 0 0 42 140"
                fill="none"
                stroke="oklch(0.62 0.2 38 / 0.55)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <circle cx="42" cy="140" r="3" fill="oklch(0.62 0.2 38)" />
            </motion.g>
            <motion.circle
              cx="140"
              cy="140"
              r="80"
              fill="none"
              stroke="oklch(0.78 0.18 55)"
              strokeWidth="1.5"
              animate={{ r: [80, 130, 80], opacity: [0.55, 0, 0.55] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
            />
          </motion.svg>
          <div className="relative">
            <ScoutIconMark size={200} />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="text-center font-display text-[42px] font-semibold tracking-tight"
        >
          Scout is on it.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="text-center text-[15px] text-muted-foreground"
        >
          Assembling evidence on{" "}
          <span className="font-semibold text-foreground">{campaignName}</span>. This usually takes 12 seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-6 w-full rounded-3xl border border-border bg-card p-8"
        >
          <div className="flex items-baseline justify-between">
            <span className="text-[14px] text-muted-foreground">
              Step {Math.min(step + 1, steps.length)} of {steps.length}
            </span>
            <span className="font-display text-[16px] font-semibold text-foreground">
              {elapsed.toFixed(1)}s elapsed
            </span>
          </div>

          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full rounded-full bg-primary"
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>

          <ul className="mt-8 space-y-5">
            {steps.map((label, i) => {
              const state = i < step ? "done" : i === step ? "active" : "pending";
              return (
                <li key={label} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <StepDot state={state} />
                    <span
                      className={`text-[15px] ${
                        state === "pending"
                          ? "text-muted-foreground/70"
                          : state === "active"
                            ? "font-semibold text-foreground"
                            : "text-foreground"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                  <AnimatePresence>
                    {state === "done" && (
                      <motion.span
                        initial={{ opacity: 0, x: 4 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[13px] italic text-muted-foreground"
                      >
                        done
                      </motion.span>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </motion.div>

        <p className="mt-8 text-center text-[13px] text-muted-foreground">
          You'll be able to see every input Scout used to reach its conclusion.
        </p>
      </main>
    </div>
  );
}

function StepDot({ state }) {
  if (state === "done") {
    return (
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
        <Check className="h-3.5 w-3.5 text-primary-foreground" strokeWidth={3} />
      </div>
    );
  }
  if (state === "active") {
    return (
      <div className="relative flex h-6 w-6 items-center justify-center">
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-primary"
          animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
        />
        <span className="h-3 w-3 rounded-full bg-primary" />
      </div>
    );
  }
  return <div className="h-6 w-6 rounded-full bg-secondary" />;
}
