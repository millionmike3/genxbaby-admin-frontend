
import {
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="relative overflow-hidden rounded-xl
      border border-[#29364A] bg-[#0B1220]">

      {/* Subtle accent */}
      <div className="absolute left-0 top-0 h-full w-1
        bg-[#F59E0B]" />

      <div className="flex flex-col justify-between gap-5
        px-6 py-6 sm:px-8 lg:flex-row lg:items-center">

        {/* Heading */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase
              tracking-[0.2em] text-[#F59E0B]">
              GX / CONTROL CENTER
            </span>
            <span className="h-1 w-1 rounded-full bg-[#52647A]" />
            <span className="text-[10px] uppercase
              tracking-wider text-[#64748B]">
              Administration
            </span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight
            text-[#F1F5F9] sm:text-3xl">
            GenXBaby Admin Dashboard
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6
            text-[#94A3B8]">
            Manage pricing intelligence, investor matrices,
            borrower eligibility rules, and institutional
            system configuration.
          </p>
        </div>

        {/* Context indicators */}
        <div className="flex flex-wrap items-center gap-3">

          <div className="flex items-center gap-2 rounded-lg
            border border-[#29364A] bg-[#111D2E] px-3 py-2">
            <SlidersHorizontal size={15}
              className="text-[#F59E0B]" />
            <span className="text-xs font-medium text-[#CBD5E1]">
              Pricing Controls
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-lg
            border border-[#29364A] bg-[#111D2E] px-3 py-2">
            <ShieldCheck size={15}
              className="text-[#14B8A6]" />
            <span className="text-xs font-medium text-[#CBD5E1]">
              Admin Workspace
            </span>
          </div>

          <div className="flex h-9 w-9 items-center justify-center
            rounded-lg border border-[#29364A] bg-[#162337]">
            <Settings2 size={17} className="text-[#94A3B8]" />
          </div>

        </div>
      </div>

      {/* Bottom information strip */}
      <div className="flex flex-wrap items-center justify-between
        gap-2 border-t border-[#29364A] bg-[#080D16]
        px-6 py-3 sm:px-8">
        <span className="text-[10px] font-semibold uppercase
          tracking-[0.16em] text-[#64748B]">
          Institutional Pricing & Risk Management
        </span>

        <span className="text-[10px] font-medium
          tracking-wider text-[#94A3B8]">
          GENXBABY OS
        </span>
      </div>
    </header>
  );
}
