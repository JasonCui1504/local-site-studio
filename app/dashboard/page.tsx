"use client";
import Link from "next/link";
import {
  Globe,
  MessageSquarePlus,
  Camera,
  Clock,
  UtensilsCrossed,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { RequestStatusBadge } from "@/components/RequestStatusBadge";
import { mockRequests, mockBusinessContent } from "@/lib/mock-data";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DashboardPage() {
  const { t } = useLanguage();
  const d = t.dashboard;
  const recent = mockRequests.slice(0, 4);

  const quickActions = [
    { label: d.actions.requestChange, href: "/dashboard/requests", icon: MessageSquarePlus, color: "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100" },
    { label: d.actions.uploadPhotos, href: "/dashboard/photos", icon: Camera, color: "bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100" },
    { label: d.actions.updateHours, href: "/dashboard/content", icon: Clock, color: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100" },
    { label: d.actions.updateMenu, href: "/dashboard/menu", icon: UtensilsCrossed, color: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100" },
    { label: d.actions.previewWebsite, href: "#", icon: ExternalLink, color: "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100" },
  ];

  const healthItems = [
    { label: d.healthItems.mobile, ok: true },
    { label: d.healthItems.menu, ok: true },
    { label: d.healthItems.hours, ok: true },
    { label: d.healthItems.photos, ok: false },
    { label: d.healthItems.contact, ok: true },
  ];

  const businessTagline =
    t.mockData.businessTagline;

  return (
    <>
      <header className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">{d.title}</h1>
          <p className="text-sm text-gray-500 mt-0.5">{d.sub}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            {d.websiteLive}
          </span>
        </div>
      </header>

      <main className="flex-1 p-8 space-y-8">
        <div className="bg-indigo-600 rounded-2xl p-6 text-white flex items-start justify-between">
          <div>
            <p className="text-indigo-200 text-sm">{d.yourWebsite}</p>
            <h2 className="text-xl font-bold mt-1">{mockBusinessContent.name}</h2>
            <p className="text-indigo-200 text-sm mt-1">{businessTagline}</p>
            <p className="text-indigo-200 text-xs mt-3">{d.lastUpdated}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <a
              href="#"
              className="flex items-center gap-1.5 rounded-lg bg-white/20 hover:bg-white/30 transition-colors px-3 py-2 text-xs font-medium text-white"
            >
              <Globe size={13} />
              goldenlanternbistro.com
            </a>
            <span className="text-indigo-200 text-xs">{d.growthPlan}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label={d.stats.openRequests}
            value={mockRequests.filter((r) => r.status !== "Completed").length}
            icon={MessageSquarePlus}
            iconColor="text-amber-500"
            sub={`2 ${d.stats.needAttention}`}
          />
          <StatCard
            label={d.stats.photosOnline}
            value={6}
            icon={Camera}
            iconColor="text-violet-500"
            sub={`3 ${d.stats.onHomepage}`}
          />
          <StatCard
            label={d.stats.menuItems}
            value={10}
            icon={UtensilsCrossed}
            iconColor="text-green-500"
            sub={`1 ${d.stats.unavailable}`}
          />
          <StatCard
            label={d.stats.siteStatus}
            value={t.common.live}
            icon={Globe}
            iconColor="text-indigo-600"
            sub={d.stats.allPagesUp}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <h2 className="font-semibold text-gray-900 mb-4">{d.quickActions}</h2>
            <div className="space-y-2">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium border transition-colors ${action.color}`}
                >
                  <action.icon size={16} />
                  {action.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <h2 className="font-semibold text-gray-900 mb-4">{d.health}</h2>
            <div className="space-y-3">
              {healthItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  {item.ok ? (
                    <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                  ) : (
                    <AlertCircle size={16} className="text-amber-500 shrink-0" />
                  )}
                  <span
                    className={`text-sm ${item.ok ? "text-gray-700" : "text-amber-700 font-medium"}`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-900">{d.recentRequests}</h2>
              <Link
                href="/dashboard/requests"
                className="text-xs text-indigo-600 hover:text-indigo-800"
              >
                {t.common.viewAll}
              </Link>
            </div>
            <div className="space-y-3">
              {recent.map((req) => (
                <div key={req.id} className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {req.type}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {req.description.slice(0, 48)}…
                    </p>
                  </div>
                  <RequestStatusBadge status={req.status} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
