"use client";

import {
  Activity,
  Bell,
  CalendarDays,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";

export default function Topbar() {
  return (
    <header
      className="
        sticky top-0 z-40 w-full
        border-b border-[#00FFC8]/20
        bg-gradient-to-r from-[#041019]/80 via-[#061A2A]/80 to-[#041019]/80
        backdrop-blur-xl shadow-[0_0_25px_#00FFC855]
      "
    >
      <div
        className="
          flex min-h-[76px] items-center justify-between
          gap-4 px-5 sm:px-8 xl:px-10
        "
      >
        {/* Page identity */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span
              className="
                text-[10px] font-bold uppercase tracking-[0.25em]
                text-[#00FFC8]
              "
            >
              GenXBaby OS
            </span>
            <span className="text-[#00FFC8]/40">/</span>
            <span
              className="
                text-[10px] uppercase tracking-[0.15em]
                text-[#A8FFEA]
              "
            >
              Administration
            </span>
          </div>

          <h1
            className="
              mt-1 truncate text-lg font-semibold tracking-tight
              text-[#E8FFF9] sm:text-xl drop-shadow-[0_0_6px_#00FFC8]
            "
          >
            Enterprise Pricing & Risk Control
          </h1>
        </div>

        {/* System information */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-5">

          {/* System status */}
          <div
            className="
              hidden items-center gap-2 rounded-md
              border border-[#00FFC8]/30
              bg-[#041019]/60 px-3 py-2 md:flex
              shadow-[0_0_12px_#00FFC833]
            "
          >
            <Activity size={14} className="text-[#00FFC8]" />
            <span
              className="
                text-[10px] font-semibold uppercase tracking-wider
                text-[#A8FFEA]
              "
            >
              System
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#00FFC8]" />
            <span className="text-[10px] font-semibold text-[#00FFC8]">
              Online
            </span>
          </div>

          {/* Security */}
          <div className="hidden items-center gap-2 lg:flex">
            <ShieldCheck size={15} className="text-[#00FFC8]" />
            <span className="text-[11px] text-[#A8FFEA]">
              Secure Access
            </span>
          </div>

          {/* Notifications */}
          <button
            type="button"
            aria-label="Notifications"
            className="
              relative rounded-md border border-transparent
              p-2 text-[#A8FFEA] transition
              hover:border-[#00FFC8]/40 hover:bg-[#041019]/70
              hover:text-white shadow-[0_0_10px_#00FFC833]
            "
          >
            <Bell size={18} />
            <span
              className="
                absolute right-1.5 top-1.5 h-1.5 w-1.5
                rounded-full bg-[#F5C400]
              "
            />
          </button>

          {/* User menu */}
          <button
            type="button"
            className="
              flex items-center gap-2 rounded-md
              border border-[#00FFC8]/30 bg-[#041019]/60 px-3 py-2
              transition hover:bg-[#06202F]/80
              shadow-[0_0_12px_#00FFC833]
            "
          >
            <div
              className="
                flex h-7 w-7 items-center justify-center
                rounded-full bg-[#00FFC8]/15 text-[11px]
                font-bold text-[#00FFC8]
              "
            >
              GX
            </div>

            <span className="hidden text-xs font-medium text-[#E8FFF9] sm:block">
              Administrator
            </span>

            <ChevronDown size={14} className="text-[#A8FFEA]" />
          </button>
        </div>
      </div>

      {/* Terminal information strip */}
      <div
        className="
          flex items-center justify-between border-t border-[#00FFC8]/20
          bg-[#031017]/90 px-5 py-2 sm:px-8 xl:px-10
        "
      >
        <div className="flex items-center gap-4">
          <span
            className="
              text-[9px] font-semibold uppercase tracking-[0.18em]
              text-[#A8FFEA]
            "
          >
            PLATFORM
          </span>
          <span className="text-[10px] font-medium text-[#E8FFF9]">
            GENXBABY INSTITUTIONAL PRICING TERMINAL
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-[#A8FFEA]">
          <CalendarDays size={12} />
          <span>ADMIN CONSOLE</span>
        </div>
      </div>
    </header>
  );
}
