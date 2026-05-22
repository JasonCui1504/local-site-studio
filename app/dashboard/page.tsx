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

// Mock weekly visitor data (Mon–Sun)
const weeklyVisitors = [38, 52, 45, 78, 63, 91, 85];

export default function DashboardPage() {
  const { t } = useLanguage();
  const d = t.dashboard;

  const statusDisplay: Record<
    string,
    { label: string; icon: React.ReactNode; color: string }
  > = {
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
  const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

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
        </div>
      </header>

      <main className="flex-1 p-8 space-y-8 max-w-3xl">

        {/* Site snapshot card with mockup + sparkline */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex items-stretch">
            {/* Left: stats + sparkline */}
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

              {/* Sparkline */}
              <div className="mt-4">
                <Sparkline data={weeklyVisitors} />
                {/* Day labels */}
                <div className="flex justify-between mt-0.5 px-1">
                  {dayLabels.map((l, i) => (
                    <span key={i} className="text-[10px] text-gray-300 font-medium">
                      {l}
                    </span>
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

            {/* Right: browser mockup */}
            <div className="bg-gray-50 px-8 py-6 flex items-center justify-center shrink-0">
              <WebsiteMockup />
            </div>
          </div>
        </div>

        {/* Needs attention */}
        <div className="flex items-start gap-4 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-5">
          <AlertCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-amber-900">
              {d.attentionHeading}
            </p>
            <p className="text-sm text-amber-700 mt-0.5 leading-relaxed">
              {d.attentionMsg}
            </p>
          </div>
          <Link
            href="/dashboard/photos"
            className="shrink-0 text-xs font-semibold text-amber-700 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-lg px-3 py-2 transition-colors whitespace-nowrap"
          >
            {d.attentionAction}
          </Link>
        </div>

        {/* Action cards */}
        <div>
          <h2 className="text-base font-semibold text-gray-700 mb-4">
            {d.actionsHeading}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {d.actions.map((action, i) => {
              const Icon = actionIcons[i];
              return (
                <Link
                  key={i}
                  href={action.href}
                  className={`group flex items-start gap-4 rounded-2xl border-2 bg-white p-5 transition-all ${actionColors[i]}`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconColors[i]}`}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-gray-700">
                      {action.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {action.desc}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-gray-300 group-hover:text-gray-500 transition-colors mt-0.5 shrink-0"
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent activity */}
        <div>
          <h2 className="text-base font-semibold text-gray-700 mb-4">
            {d.recentActivity}
          </h2>
          {recent.length === 0 ? (
            <p className="text-sm text-gray-400">{d.noActivity}</p>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden divide-y divide-gray-100">
              {recent.map((req) => {
                const s = statusDisplay[req.status];
                return (
                  <div
                    key={req.id}
                    className="flex items-start justify-between gap-4 px-5 py-4"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800">
                        {req.type}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5 truncate">
                        {req.description.slice(0, 60)}
                        {req.description.length > 60 ? "…" : ""}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium shrink-0 ${s.color}`}
                    >
                      {s.icon}
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
