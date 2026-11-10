
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  LineChart,
  Table,
  Users,
  Activity,
  FlaskConical,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Pricing Engine", href: "/admin/pricing", icon: LineChart },
  { label: "Matrix Management", href: "/admin/matrix", icon: Table },
  { label: "Investor Sheets", href: "/admin/investors", icon: Users },
  { label: "System Health", href: "/admin/system-health", icon: Activity },
  { label: "A/B Pricing Test", href: "/pricing-ab", icon: FlaskConical },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActiveRoute = (href: string) => {
    if (href === "/admin") return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <aside className="hidden lg:flex w-64 shrink-0 min-h-screen flex-col
      bg-[#080D16] border-r border-[#29364A]">

      {/* Brand */}
      <div className="px-6 pt-7 pb-8 border-b border-[#29364A]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center
            rounded-lg border border-[#F59E0B]/40 bg-[#F59E0B]/10">
            <span className="text-lg font-bold text-[#F59E0B]">GX</span>
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-[#F1F5F9]">
              GenXBaby <span className="text-[#F59E0B]">OS</span>
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#94A3B8]">
              Financial Intelligence
            </p>
          </div>
        </div>
      </div>

      {/* Workspace label */}
      <div className="px-6 pt-7 pb-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em]
          text-[#64748B]">
          Workspace
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = isActiveRoute(href);

          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`
                group relative flex items-center justify-between
                rounded-md px-3 py-3 text-[13px] font-medium
                transition-all duration-200
                ${active
                  ? "bg-[#162337] text-[#F59E0B] border border-[#F59E0B]/20"
                  : "border border-transparent text-[#94A3B8] hover:bg-[#111D2E] hover:text-[#F1F5F9]"
                }
              `}
            >
              <span className="flex items-center gap-3">
                <Icon
                  size={17}
                  strokeWidth={active ? 2.2 : 1.8}
                  className={active
                    ? "text-[#F59E0B]"
                    : "text-[#64748B] group-hover:text-[#CBD5E1]"
                  }
                />
                {label}
              </span>

              {active && (
                <ChevronRight size={15} className="text-[#F59E0B]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Security status */}
      <div className="mx-4 mb-5 rounded-lg border border-[#29364A]
        bg-[#111D2E] p-3">
        <div className="flex items-center gap-2">
          <ShieldCheck size={15} className="text-[#14B8A6]" />
          <span className="text-[11px] font-semibold text-[#CBD5E1]">
            Secure Workspace
          </span>
        </div>
        <p className="mt-2 text-[10px] text-[#64748B]">
          GenXBaby Institutional Platform
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6]" />
          <span className="text-[10px] text-[#14B8A6]">
            Interface loaded
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#29364A] px-6 py-4">
        <p className="text-[10px] text-[#64748B]">
          GENXBABY OS · ADMIN
        </p>
      </div>
    </aside>
  );
}
