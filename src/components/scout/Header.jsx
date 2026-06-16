import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Timer, Activity, CheckCircle2, AlertTriangle, Bell, LogOut } from "lucide-react";
import { LocaliQLogo } from "./Logo";

export function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-30">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-8 py-4">
        <div className="flex items-center gap-5">
          <Link to="/" className="flex cursor-pointer items-center gap-2">
              <img
                  src="https://localiq.au/wp-content/uploads/2024/06/LiQ_Logo_icon.png"
                  alt="LocaliQ"
                  className="h-[28px] "
                />
              <span className="font-display text-[20px] font-semibold tracking-tight text-foreground">LocaliQ</span>
          </Link>

          <div className="h-6 w-px bg-border" />
          <div className="flex flex-col">
            <span className="text-[18px] font-semibold leading-tight text-foreground">
              Campaign Intelligence
            </span>
            
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-foreground text-[12px] font-semibold text-background transition-transform hover:scale-105"
            >
              JC
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-32 rounded-lg border border-border bg-card p-1 shadow-lg">
                <Link
                  to="/landing"
                  className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <LogOut className="h-3.5 w-3.5" /> Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
