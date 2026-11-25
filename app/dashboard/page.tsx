import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Bell,
  BriefcaseBusiness,
  ClipboardList,
  FileCheck2,
  Gauge,
  Layers3,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

const metrics = [
  {
    label: "Total Applications",
    value: "128",
    note: "Application portfolio",
    icon: ClipboardList,
    accent: "text-sky-300",
    glow: "bg-sky-400/10",
  },
  {
    label: "Pending Reviews",
    value: "42",
    note: "Awaiting review",
    icon: FileCheck2,
    accent: "text-amber-300",
    glow: "bg-amber-400/10",
  },
  {
    label: "Notifications",
    value: "12",
    note: "Items requiring attention",
    icon: Bell,
    accent: "text-violet-300",
    glow: "bg-violet-400/10",
  },
];

const workspaces = [
  {
    title: "Application Pipeline",
    description: "Review application activity and move files through the workflow.",
    href: "/applications",
    icon: BriefcaseBusiness,
    label: "ORIGINATION",
    accent: "text-sky-300",
  },
  {
    title: "Pipeline Management",
    description: "Monitor active opportunities and processing stages.",
    href: "/pipeline",
    icon: Layers3,
    label: "OPERATIONS",
    accent: "text-emerald-300",
  },
  {
    title: "Audit & Compliance",
    description: "Review platform events and administrative activity.",
    href: "/audit",
    icon: ShieldCheck,
    label: "GOVERNANCE",
    accent: "text-amber-300",
  },
  {
    title: "Pricing Administration",
    description: "Configure pricing intelligence, matrices, and eligibility rules.",
    href: "/admin",
    icon: Gauge,
    label: "RISK & PRICING",
    accent: "text-violet-300",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 text-slate-100">
      <section className="relative isolate overflow-hidden rounded-3xl border border-white/[0.09] bg-[#101C2D] px-6 py-8 shadow-2xl shadow-black/20 sm:px-9 lg:px-10">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-sky-400/[0.10] blur-3xl" />
          <div className="absolute -bottom-36 left-1/3 h-72 w-72 rounded-full bg-amber-300/[0.07] blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.025)_60%,transparent_80%)]" />
        </div>

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/[0.07] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-100/80">
                Institutional workspace
              </span>
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300/80">
              GENXBABY FINANCIAL PLATFORM
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Financial command
              <span className="block text-slate-400">at a higher level.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              A unified view of applications, operations, pricing intelligence,
              and platform governance.
            </p>
          </div>

          <Link
            href="/admin"
            className="inline-flex w-fit items-center gap-3 rounded-xl border border-amber-300/30 bg-amber-300 px-5 py-3 text-sm font-semibold text-[#101827] shadow-lg shadow-amber-950/20 transition hover:-translate-y-0.5 hover:bg-amber-200"
          >
            Open control center
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-5 text-[11px] text-slate-400">
          <span className="inline-flex items-center gap-2">
            <Activity size={14} className="text-emerald-300" />
            Platform workspace
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck size={14} className="text-sky-300" />
            Risk-aware operations
          </span>
          <span className="inline-flex items-center gap-2">
            <TrendingUp size={14} className="text-amber-300" />
            Pricing intelligence
          </span>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300/80">
              Portfolio overview
            </p>
            <h2 className="mt-1 text-lg font-semibold text-white">
              Operational snapshot
            </h2>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-slate-500">
            Display values
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <article
                key={metric.label}
                className="group rounded-2xl border border-white/[0.08] bg-[#111D2E]/90 p-5 transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-[#152338]"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      {metric.label}
                    </p>
                    <p className="mt-4 text-3xl font-semibold tracking-tight text-white">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-[11px] text-slate-500">
                      {metric.note}
                    </p>
                  </div>
                  <div className={`rounded-xl p-3 ${metric.glow}`}>
                    <Icon size={19} className={metric.accent} />
                  </div>
                </div>
                <div className="mt-5 h-px bg-gradient-to-r from-white/15 via-white/[0.04] to-transparent" />
                <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-500">
                  <span>Workspace metric</span>
                  <ArrowUpRight size={13} className="text-slate-500 transition group-hover:text-sky-300" />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section>
        <div className="mb-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-300/80">
            Platform access
          </p>
          <h2 className="mt-1 text-lg font-semibold text-white">
            Your workspaces
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Move directly into the areas that keep your operation moving.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {workspaces.map((workspace, index) => {
            const Icon = workspace.icon;
            return (
              <Link
                key={workspace.href}
                href={workspace.href}
                className="group flex min-h-40 items-start gap-4 rounded-2xl border border-white/[0.08] bg-[#111D2E]/75 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-sky-300/30 hover:bg-[#152338]"
              >
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-3">
                  <Icon size={20} className={workspace.accent} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {workspace.label} · 0{index + 1}
                    </span>
                    <ArrowUpRight size={15} className="shrink-0 text-slate-500 transition group-hover:text-sky-300" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-white">
                    {workspace.title}
                  </h3>
                  <p className="mt-2 max-w-md text-xs leading-6 text-slate-400">
                    {workspace.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}