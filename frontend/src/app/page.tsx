"use client";

import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bell,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Filter,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  X,
} from "lucide-react";
import { useState } from "react";

const stats = [
  {
    label: "Total Leads",
    value: "1,284",
    change: "+12.5%",
    icon: Users,
  },
  {
    label: "Qualified Leads",
    value: "846",
    change: "+18.2%",
    icon: Target,
  },
  {
    label: "AI Processing",
    value: "98.4%",
    change: "+2.8%",
    icon: BrainCircuit,
  },
  {
    label: "Conversion Rate",
    value: "24.8%",
    change: "+4.6%",
    icon: TrendingUp,
  },
];

const leads = [
  {
    initials: "AH",
    name: "Ahmed Hassan",
    company: "TechFlow",
    email: "ahmed@techflow.io",
    score: 94,
    intent: "High Intent",
    priority: "High",
    status: "Qualified",
  },
  {
    initials: "SM",
    name: "Sarah Mitchell",
    company: "Nexora Labs",
    email: "sarah@nexora.com",
    score: 87,
    intent: "Purchase",
    priority: "High",
    status: "Processing",
  },
  {
    initials: "MC",
    name: "Michael Chen",
    company: "CloudPeak",
    email: "michael@cloudpeak.co",
    score: 76,
    intent: "Evaluation",
    priority: "Medium",
    status: "Qualified",
  },
  {
    initials: "OK",
    name: "Omar Khaled",
    company: "DigitalCore",
    email: "omar@digitalcore.ai",
    score: 68,
    intent: "Research",
    priority: "Medium",
    status: "New",
  },
  {
    initials: "EW",
    name: "Emma Wilson",
    company: "ScaleWorks",
    email: "emma@scaleworks.io",
    score: 91,
    intent: "High Intent",
    priority: "High",
    status: "Qualified",
  },
];

const activities = [
  {
    icon: Bot,
    title: "AI qualified a new lead",
    description: "Ahmed Hassan scored 94/100",
    time: "2 min ago",
  },
  {
    icon: CheckCircle2,
    title: "Automation completed",
    description: "Lead enrichment workflow finished",
    time: "8 min ago",
  },
  {
    icon: Sparkles,
    title: "AI recommendation generated",
    description: "Follow-up recommended for Nexora Labs",
    time: "14 min ago",
  },
  {
    icon: Users,
    title: "New lead received",
    description: "Omar Khaled from DigitalCore",
    time: "21 min ago",
  },
];

const automations = [
  {
    title: "Lead Qualification",
    description: "Automatically score and prioritize incoming leads.",
    runs: "1,842",
    status: "Running",
    icon: Target,
  },
  {
    title: "Lead Enrichment",
    description: "Enrich company and contact information automatically.",
    runs: "927",
    status: "Running",
    icon: Workflow,
  },
  {
    title: "Smart Follow-up",
    description: "Generate personalized follow-up recommendations.",
    runs: "614",
    status: "Paused",
    icon: Sparkles,
  },
];

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Leads", icon: Users },
  { name: "AI Intelligence", icon: BrainCircuit },
  { name: "Automations", icon: Workflow },
  { name: "Analytics", icon: BarChart3 },
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-900">
      {sidebarOpen && (
        <button
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col border-r border-slate-200 bg-white transition-transform duration-200 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[76px] items-center border-b border-slate-100 px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white shadow-lg shadow-slate-950/15">
              <BrainCircuit size={21} />
            </div>

            <div>
              <div className="text-[14px] font-bold tracking-tight">
                AI Automate
              </div>
              <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                Business OS
              </div>
            </div>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto rounded-lg p-2 text-slate-400 hover:bg-slate-100 lg:hidden"
          >
            <X size={19} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Workspace
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const selected = active === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActive(item.name);
                    setSidebarOpen(false);
                  }}
                  className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition ${
                    selected
                      ? "bg-slate-950 text-white shadow-md shadow-slate-950/10"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon size={17} />
                  <span>{item.name}</span>

                  {item.name === "Leads" && (
                    <span
                      className={`ml-auto rounded-md px-1.5 py-0.5 text-[9px] ${
                        selected
                          ? "bg-white/10 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      1.2K
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="mb-3 mt-9 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            System
          </div>

          <nav className="space-y-1">
            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold text-slate-500 transition hover:bg-slate-50 hover:text-slate-900">
              <Activity size={17} />
              Activity
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold text-slate-500 transition hover:bg-slate-50 hover:text-slate-900">
              <Settings size={17} />
              Settings
            </button>
          </nav>
        </div>

        <div className="p-4">
          <div className="rounded-2xl bg-slate-950 p-4 text-white">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                <Sparkles size={14} />
              </div>

              <span className="text-xs font-semibold">AI Engine</span>
            </div>

            <p className="mb-4 text-[11px] leading-5 text-slate-400">
              Intelligent automation engine is actively processing your
              business workflows.
            </p>

            <div className="flex items-center gap-2 text-[10px] font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              All systems operational
            </div>
          </div>
        </div>
      </aside>

      <main className="lg:pl-[260px]">
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-slate-200/80 bg-white/90 px-5 backdrop-blur-xl sm:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
            >
              <Menu size={21} />
            </button>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                Workspace
              </div>
              <div className="mt-0.5 text-sm font-bold">
                AI Business Automation
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {searchOpen ? (
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <Search size={15} className="text-slate-400" />

                <input
                  autoFocus
                  placeholder="Search..."
                  className="w-28 bg-transparent text-xs outline-none sm:w-48"
                />

                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-slate-400"
                >
                  <X size={15} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-500 shadow-sm transition hover:border-slate-300 hover:text-slate-900 sm:flex"
              >
                <Search size={15} />
                Search

                <span className="ml-5 rounded-md bg-slate-100 px-1.5 py-0.5 text-[9px] text-slate-400">
                  ⌘ K
                </span>
              </button>
            )}

            <button
              onClick={() => setSearchOpen(true)}
              className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 sm:hidden"
            >
              <Search size={18} />
            </button>

            <button className="relative rounded-xl p-2 text-slate-500 hover:bg-slate-100">
              <Bell size={18} />
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
            </button>

            <div className="hidden h-6 w-px bg-slate-200 sm:block" />

            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-[10px] font-bold text-white shadow-sm">
              MW
            </button>
          </div>
        </header>

        <div className="mx-auto max-w-[1500px] p-5 sm:p-8">
          <section className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-3 flex items-center gap-2 text-[11px] font-medium text-slate-400">
                <span>Friday, August 14, 2026</span>
                <span className="text-slate-300">•</span>

                <span className="flex items-center gap-1.5 text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Live
                </span>
              </div>

              <h1 className="text-3xl font-bold tracking-[-0.03em] sm:text-[38px]">
                Good morning, Mahmoud.
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Your AI workforce is running smoothly. Here&apos;s the latest
                intelligence from your business automation platform.
              </p>
            </div>

            <button className="flex w-fit items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:shadow-xl">
              <Plus size={16} />
              New Automation
            </button>
          </section>

          <section className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                >
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-slate-950 group-hover:text-white">
                      <Icon size={18} />
                    </div>

                    <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                      <ArrowUpRight size={11} />
                      {stat.change}
                    </span>
                  </div>

                  <div className="text-[27px] font-bold tracking-tight">
                    {stat.value}
                  </div>

                  <div className="mt-1 text-[11px] font-semibold text-slate-400">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </section>

          <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-bold">Recent Leads</h2>

                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-500">
                      1,284 total
                    </span>
                  </div>

                  <p className="mt-1 text-[11px] text-slate-400">
                    AI-powered qualification and intent detection
                  </p>
                </div>

                <div className="flex gap-2">
                  <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-[11px] font-semibold text-slate-600 transition hover:bg-slate-50">
                    <Filter size={13} />
                    Filter
                  </button>

                  <button className="flex items-center gap-1 rounded-lg bg-slate-50 px-3 py-2 text-[11px] font-bold text-slate-700 transition hover:bg-slate-100">
                    View all
                    <ChevronRight size={13} />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px]">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50/70 text-left text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      <th className="px-5 py-3">Lead</th>
                      <th className="px-5 py-3">AI Score</th>
                      <th className="px-5 py-3">Intent</th>
                      <th className="px-5 py-3">Priority</th>
                      <th className="px-5 py-3">Status</th>
                      <th className="px-5 py-3" />
                    </tr>
                  </thead>

                  <tbody>
                    {leads.map((lead) => (
                      <tr
                        key={lead.email}
                        className="border-b border-slate-100 last:border-0 transition hover:bg-slate-50/60"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-600">
                              {lead.initials}
                            </div>

                            <div>
                              <div className="text-xs font-bold">
                                {lead.name}
                              </div>

                              <div className="mt-0.5 text-[10px] text-slate-400">
                                {lead.company}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-14 overflow-hidden rounded-full bg-slate-100">
                              <div
                                className="h-full rounded-full bg-slate-900"
                                style={{ width: `${lead.score}%` }}
                              />
                            </div>

                            <span className="text-[11px] font-bold">
                              {lead.score}
                            </span>
                          </div>
                        </td>

                        <td className="px-5 py-4 text-[11px] font-semibold text-slate-600">
                          {lead.intent}
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`rounded-full px-2 py-1 text-[9px] font-bold ${
                              lead.priority === "High"
                                ? "bg-red-50 text-red-600"
                                : "bg-amber-50 text-amber-600"
                            }`}
                          >
                            {lead.priority}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`rounded-full px-2 py-1 text-[9px] font-bold ${
                              lead.status === "Qualified"
                                ? "bg-emerald-50 text-emerald-600"
                                : lead.status === "Processing"
                                  ? "bg-blue-50 text-blue-600"
                                  : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            {lead.status}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <button className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700">
                            <MoreHorizontal size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3">
                <span className="text-[10px] text-slate-400">
                  Showing 5 of 1,284 leads
                </span>

                <button className="flex items-center gap-1 text-[10px] font-bold text-slate-600 hover:text-slate-950">
                  Open lead intelligence
                  <ArrowUpRight size={11} />
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 p-5">
                <div>
                  <h2 className="text-sm font-bold">AI Activity</h2>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Real-time automation events
                  </p>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Activity size={15} />
                </div>
              </div>

              <div className="p-5">
                <div className="mb-6 rounded-xl bg-slate-950 p-4 text-white">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[11px] font-bold">
                      AI Processing Engine
                    </span>

                    <span className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Active
                    </span>
                  </div>

                  <div className="mb-2 flex items-end justify-between">
                    <span className="text-2xl font-bold">98.4%</span>

                    <span className="text-[9px] text-slate-400">
                      System health
                    </span>
                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[98.4%] rounded-full bg-emerald-400" />
                  </div>

                  <div className="mt-3 flex justify-between text-[8px] text-slate-500">
                    <span>API</span>
                    <span>Worker</span>
                    <span>Redis</span>
                    <span>Database</span>
                  </div>
                </div>

                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Recent events
                  </span>

                  <span className="text-[9px] font-semibold text-emerald-600">
                    Live
                  </span>
                </div>

                <div className="space-y-5">
                  {activities.map((activity) => {
                    const Icon = activity.icon;

                    return (
                      <div key={activity.title} className="flex gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                          <Icon size={14} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="text-[11px] font-bold text-slate-800">
                            {activity.title}
                          </div>

                          <div className="mt-1 text-[10px] leading-4 text-slate-400">
                            {activity.description}
                          </div>

                          <div className="mt-1.5 flex items-center gap-1 text-[9px] text-slate-300">
                            <Clock3 size={9} />
                            {activity.time}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-6">
            <div className="mb-4 flex items-end justify-between">
              <div>
                <h2 className="text-sm font-bold">Automation Workflows</h2>

                <p className="mt-1 text-[11px] text-slate-400">
                  AI-powered workflows running across your business
                </p>
              </div>

              <button className="hidden text-[10px] font-bold text-slate-600 hover:text-slate-950 sm:block">
                Manage workflows →
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {automations.map((automation) => {
                const Icon = automation.icon;

                return (
                  <div
                    key={automation.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-slate-950 group-hover:text-white">
                        <Icon size={17} />
                      </div>

                      <span
                        className={`flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider ${
                          automation.status === "Running"
                            ? "text-emerald-600"
                            : "text-slate-400"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            automation.status === "Running"
                              ? "bg-emerald-500"
                              : "bg-slate-300"
                          }`}
                        />
                        {automation.status}
                      </span>
                    </div>

                    <h3 className="text-xs font-bold">
                      {automation.title}
                    </h3>

                    <p className="mt-2 min-h-[40px] text-[10px] leading-5 text-slate-400">
                      {automation.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                      <div>
                        <div className="text-sm font-bold">
                          {automation.runs}
                        </div>

                        <div className="text-[9px] text-slate-400">
                          executions
                        </div>
                      </div>

                      <button className="flex items-center gap-1 rounded-lg bg-slate-50 px-2.5 py-2 text-[9px] font-bold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
                        Configure
                        <ChevronRight size={11} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mt-6 overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-950/10 sm:p-7">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400">
                  <Sparkles size={13} />
                  AI Insight
                </div>

                <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                  Your highest-intent leads are converting 31% faster.
                </h2>

                <p className="mt-2 text-[11px] leading-5 text-slate-400">
                  AI detected a strong correlation between intent score and
                  conversion speed. Consider prioritizing leads above 85 for
                  immediate sales follow-up.
                </p>
              </div>

              <button className="flex w-fit shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-[11px] font-bold text-slate-950 transition hover:bg-slate-100">
                View AI Intelligence
                <ArrowUpRight size={14} />
              </button>
            </div>
          </section>

          <footer className="py-8 text-center text-[10px] font-medium text-slate-400">
            AI Business Automation Platform · Intelligent workflows for modern
            businesses
          </footer>
        </div>
      </main>
    </div>
  );
}