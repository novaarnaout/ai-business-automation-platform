"use client";

import {
  Activity,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
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
  Zap,
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
    label: "High Priority",
    value: "127",
    change: "+8.4%",
    icon: Zap,
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
    name: "Ahmed Hassan",
    company: "TechFlow",
    email: "ahmed@techflow.io",
    score: 94,
    intent: "High Intent",
    priority: "High",
    status: "Qualified",
  },
  {
    name: "Sarah Mitchell",
    company: "Nexora Labs",
    email: "sarah@nexora.com",
    score: 87,
    intent: "Purchase",
    priority: "High",
    status: "Processing",
  },
  {
    name: "Michael Chen",
    company: "CloudPeak",
    email: "michael@cloudpeak.co",
    score: 76,
    intent: "Evaluation",
    priority: "Medium",
    status: "Qualified",
  },
  {
    name: "Omar Khaled",
    company: "DigitalCore",
    email: "omar@digitalcore.ai",
    score: 68,
    intent: "Research",
    priority: "Medium",
    status: "New",
  },
  {
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

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-900">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <button
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-slate-200 bg-white transition-transform duration-200 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white shadow-lg shadow-slate-950/20">
              <BrainCircuit size={22} />
            </div>
            <div>
              <div className="text-sm font-bold tracking-tight">
                AI Automate
              </div>
              <div className="text-[11px] text-slate-400">Business OS</div>
            </div>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 py-6">
          <div className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Workspace
          </div>

          <nav className="space-y-1">
            {[
              { name: "Dashboard", icon: LayoutDashboard },
              { name: "Leads", icon: Users },
              { name: "AI Intelligence", icon: BrainCircuit },
              { name: "Automations", icon: Zap },
              { name: "Analytics", icon: TrendingUp },
            ].map((item) => {
              const Icon = item.icon;
              const selected = active === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActive(item.name);
                    setSidebarOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    selected
                      ? "bg-slate-950 text-white shadow-md shadow-slate-950/10"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </button>
              );
            })}
          </nav>

          <div className="mb-3 mt-9 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            System
          </div>

          <nav className="space-y-1">
            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900">
              <Activity size={18} />
              Activity
            </button>
            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900">
              <Settings size={18} />
              Settings
            </button>
          </nav>
        </div>

        <div className="absolute bottom-5 left-4 right-4">
          <div className="rounded-2xl bg-slate-950 p-4 text-white">
            <div className="mb-2 flex items-center gap-2">
              <Sparkles size={16} />
              <span className="text-xs font-semibold">AI Engine</span>
            </div>
            <div className="mb-3 text-[11px] leading-5 text-slate-400">
              Your automation engine is processing leads automatically.
            </div>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              System operational
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-5 backdrop-blur-xl sm:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
            >
              <Menu size={21} />
            </button>

            <div>
              <div className="text-xs text-slate-400">Workspace</div>
              <div className="font-semibold">AI Business Automation</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm sm:flex">
              <Search size={16} />
              <span>Search</span>
              <span className="ml-4 rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px]">
                ⌘ K
              </span>
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
              MW
            </button>
          </div>
        </header>

        <div className="mx-auto max-w-[1500px] p-5 sm:p-8">
          {/* Welcome */}
          <section className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                <span>Friday, August 14</span>
                <span>•</span>
                <span className="text-emerald-500">Live</span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Good morning, Mahmoud.
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Here&apos;s what&apos;s happening with your AI-powered business
                automation today.
              </p>
            </div>

            <button className="flex w-fit items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5">
              <Plus size={17} />
              New Automation
            </button>
          </section>

          {/* Stats */}
          <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                      <Icon size={19} />
                    </div>

                    <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                      <ArrowUpRight size={13} />
                      {stat.change}
                    </span>
                  </div>

                  <div className="text-2xl font-bold tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-slate-400">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </section>

          {/* Main grid */}
          <section className="grid gap-6 xl:grid-cols-[1fr_380px]">
            {/* Leads */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-semibold">Recent Leads</h2>
                  <p className="mt-1 text-xs text-slate-400">
                    AI-powered lead qualification
                  </p>
                </div>

                <div className="flex gap-2">
                  <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50">
                    <Filter size={14} />
                    Filter
                  </button>

                  <button className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100">
                    View all
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px]">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50/60 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      <th className="px-5 py-3">Lead</th>
                      <th className="px-5 py-3">AI Score</th>
                      <th className="px-5 py-3">Intent</th>
                      <th className="px-5 py-3">Priority</th>
                      <th className="px-5 py-3">Status</th>
                      <th className="px-5 py-3"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {leads.map((lead) => (
                      <tr
                        key={lead.email}
                        className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                              {lead.name
                                .split(" ")
                                .map((x) => x[0])
                                .join("")}
                            </div>
                            <div>
                              <div className="text-sm font-semibold">
                                {lead.name}
                              </div>
                              <div className="text-xs text-slate-400">
                                {lead.company}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-100">
                              <div
                                className="h-full rounded-full bg-slate-900"
                                style={{ width: `${lead.score}%` }}
                              />
                            </div>
                            <span className="text-xs font-bold">
                              {lead.score}
                            </span>
                          </div>
                        </td>

                        <td className="px-5 py-4 text-xs font-medium text-slate-600">
                          {lead.intent}
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
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
                            className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
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
                          <button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                            <MoreHorizontal size={17} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Activity */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 p-5">
                <div>
                  <h2 className="font-semibold">AI Activity</h2>
                  <p className="mt-1 text-xs text-slate-400">
                    Real-time automation events
                  </p>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Activity size={16} />
                </div>
              </div>

              <div className="p-5">
                <div className="mb-5 rounded-xl bg-slate-950 p-4 text-white">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-semibold">
                      AI Processing
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Active
                    </span>
                  </div>

                  <div className="mb-2 flex items-end justify-between">
                    <span className="text-2xl font-bold">98.4%</span>
                    <span className="text-[10px] text-slate-400">
                      System health
                    </span>
                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[98%] rounded-full bg-emerald-400" />
                  </div>
                </div>

                <div className="space-y-5">
                  {activities.map((activity) => {
                    const Icon = activity.icon;

                    return (
                      <div key={activity.title} className="flex gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                          <Icon size={16} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-semibold text-slate-800">
                            {activity.title}
                          </div>
                          <div className="mt-1 text-[11px] leading-4 text-slate-400">
                            {activity.description}
                          </div>
                          <div className="mt-1 flex items-center gap-1 text-[10px] text-slate-300">
                            <Clock3 size={10} />
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

          {/* Automation section */}
          <section className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Lead Qualification",
                description: "Automatically score and prioritize incoming leads.",
                status: "Running",
              },
              {
                title: "Lead Enrichment",
                description: "Enrich lead information before sales follow-up.",
                status: "Running",
              },
              {
                title: "Smart Follow-up",
                description: "Generate personalized next-step recommendations.",
                status: "Paused",
              },
            ].map((automation) => (
              <div
                key={automation.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                    <Zap size={18} />
                  </div>

                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider ${
                      automation.status === "Running"
                        ? "text-emerald-500"
                        : "text-slate-400"
                    }`}
                  >
                    {automation.status}
                  </span>
                </div>

                <h3 className="font-semibold">{automation.title}</h3>

                <p className="mt-2 text-xs leading-5 text-slate-400">
                  {automation.description}
                </p>

                <button className="mt-5 flex items-center gap-1 text-xs font-semibold text-slate-700 group-hover:text-slate-950">
                  Configure
                  <ArrowUpRight size={13} />
                </button>
              </div>
            ))}
          </section>

          <footer className="py-8 text-center text-[11px] text-slate-400">
            AI Business Automation Platform • Intelligent workflows for modern
            businesses
          </footer>
        </div>
      </main>
    </div>
  );
}