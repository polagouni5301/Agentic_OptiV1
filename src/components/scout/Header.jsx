import { Link } from "@tanstack/react-router";
import { Timer, Activity, CheckCircle2, AlertTriangle, Bell } from "lucide-react";
import { LocaliQLogo } from "./Logo";

export function Header() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-30">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-8 py-4">
        <div className="flex items-center gap-5">
          <Link to="/">
            <LocaliQLogo />
          </Link>
          <div className="h-6 w-px bg-border" />
          <div className="flex flex-col">
            <span className="text-[13px] font-semibold leading-tight text-foreground">
              Campaign Intelligence
            </span>
            <span className="text-[11px] leading-tight text-muted-foreground">
              Jordan Cole · Performance team
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 md:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="text-[12px] text-muted-foreground">
              Live · data through <span className="font-semibold text-foreground">yesterday EOD</span>
            </span>
          </div>
          <div className="hidden items-center gap-2 rounded-full bg-secondary px-3 py-1.5 lg:flex">
            <Activity className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
            <span className="text-[12px] text-muted-foreground">
              <span className="font-semibold text-foreground">12</span> scored today
            </span>
          </div>
          <div className="hidden items-center gap-2 rounded-full bg-[oklch(0.97_0.05_60)] px-3 py-1.5 text-[oklch(0.5_0.16_45)] lg:flex">
            <AlertTriangle className="h-3.5 w-3.5" strokeWidth={2} />
            <span className="text-[12px]">
              <span className="font-semibold">3</span> need a look
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5">
            <Timer className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
            <span className="text-[12px] text-muted-foreground">
              Reclaimed <span className="font-semibold text-primary">47m</span> today
            </span>
          </div>
          <button
            aria-label="Notifications"
            className="relative grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition hover:text-foreground"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
          </button>
          <div className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-[12px] font-semibold text-background">
            JC
          </div>
        </div>
      </div>
    </header>
  );
}
