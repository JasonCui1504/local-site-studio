"use client";
import Link from "next/link";
import {
  UtensilsCrossed,
  Camera,
  Info,
  HelpCircle,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Clock,
  ExternalLink,
} from "lucide-react";
import { mockRequests } from "@/lib/mock-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { WebsiteMockup } from "@/components/WebsiteMockup";
import { Sparkline } from "@/components/Sparkline";

const actionIcons = [UtensilsCrossed, Camera, Info, HelpCircle];
const actionColors = [
  "border-green-100 hover:border-green-300 hover:bg-green-50",
  "border-violet-100 hover:border-violet-300 hover:bg-violet-50",
  "border-amber-100 hover:border-amber-300 hover:bg-amber-50",
  "border-indigo-100 hover:border-indigo-300 hover:bg-indigo-50",
];
const iconColors = [
  "text-green-500 bg-green-50",
  "text-violet-500 bg-violet-50",
  "text-amber-500 bg-amber-50",
  "text-indigo-500 bg-indigo-50",
];

const weeklyVisitors = [38, 52, 45, 78, 63, 91, 85];
const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

export default function DashboardPage() {
  const { t } = useLanguage();
  const d = t.dashboard;

  const statusDisplay: Record<string, { label: string; icon: React.ReactNode; color: string }> = {
    Pending: {
      label: d.statusPending,
      icon: <Clock size={13} />,
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    "In Progress": {
      label: d.statusInProgress,
      icon: <AlertCircle size={13} />,
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    Completed: {
      label: d.statusCompleted,
      icon: <CheckCircle2 size={13} />,
      color: "text-green-600 bg-green-50 border-green-200",
    },
  };

  const recent = mockRequests.slice(0, 4);

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">{d.greeting}</h1>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 border border-green-200">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            {d.websiteLive}
          </span>
          <a
            href="#"
            className="flex items-center gap-1.5 text-xs text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
          >
            <ExternalLink size={13} />
            {d.previewSite}
          </a>
        </div>
      </header>

      <main className="flex-1 p-6 space-y-6">

        {/* Top row: snapshot card + needs attention side by side */}
        <div className="grid grid-cols-3 gap-6">

          {/* Snapshot card — spans 2 cols */}
          <div className="col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex">
            {/* Stats + sparkline */}
            <div className="flex-1 p-6 flex flex-col justify-between min-w-0">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  {d.siteSnapshot}
                </p>
                <div className="mt-3 flex items-end gap-2">
                  <p className="text-4xl font-bold text-gray-900 leading-none">
                    {d.visitorsCount}
                  </p>
                  <p className="text-sm text-gray-500 mb-0.5">{d.visitorsLabel}</p>
                </div>
                <p className="text-xs text-green-600 font-medium mt-1">
                  {d.visitorsChange}
                </p>
              </div>
              <div className="mt-4">
                <Sparkline data={weeklyVisitors} />
                <div className="flex justify-between mt-0.5 px-1">
                  {dayLabels.map((l, i) => (
                    <span key={i} className="text-[10px] text-gray-300 font-medium">{l}</span>
                  ))}
                </div>
              </div>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1.5 text-xs text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
              >
                <ExternalLink size={12} />
                {d.previewSite}
              </a>
            </div>

            {/* Divider */}
            <div className="w-px bg-gray-100 shrink-0" />

            {/* Browser mockup */}
            <div className="bg-gray-50 px-8 py-6 flex items-center justify-center shrink-0">
              <WebsiteMockup />
            </div>
          </div>

          {/* Needs attention — 1 col */}
          <div className="flex flex-col gap-4">
            <div className="flex-1 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <AlertCircle size={17} className="text-amber-500 shrink-0" />
                <p className="text-sm font-semibold text-amber-900">{d.attentionHeading}</p>
              </div>
              <p className="text-sm text-amber-700 leading-relaxed flex-1">
                {d.attentionMsg}
              </p>
              <Link
                href="/dashboard/photos"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-lg px-3 py-2 transition-colors"
              >
                {d.attentionAction}
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row: action cards + recent activity */}
        <div className="grid grid-cols-3 gap-6">

          {/* Action cards — 2 cols, 2×2 grid */}
          <div className="col-span-2">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              {d.actionsHeading}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {d.actions.map((action, i) => {
                const Icon = actionIcons[i];
                return (
                  <Link
                    key={i}
                    href={action.href}
                    className={`group flex items-start gap-4 rounded-2xl border-2 bg-white p-5 transition-all ${actionColors[i]}`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconColors[i]}`}>
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900">{action.title}</p>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{action.desc}</p>
                    </div>
                    <ArrowRight size={15} className="text-gray-300 group-hover:text-gray-500 transition-colors mt-0.5 shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Recent activity — 1 col */}
          <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              {d.recentActivity}
            </h2>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden divide-y divide-gray-100">
              {recent.length === 0 ? (
                <p className="text-sm text-gray-400 px-5 py-4">{d.noActivity}</p>
              ) : (
                recent.map((req) => {
                  const s = statusDisplay[req.status];
                  return (
                    <div key={req.id} className="px-4 py-3.5">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium text-gray-800 leading-tight">{req.type}</p>
                        <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium shrink-0 ${s.color}`}>
                          {s.icon}
                          {s.label}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                        {req.description}
                      </p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
