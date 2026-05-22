"use client";
import { ExternalLink, Clock, AlertCircle } from "lucide-react";
import { ClientBusiness, WebsiteStatus, Plan } from "@/lib/mock-data";
import { useLanguage } from "@/contexts/LanguageContext";

const statusStyles: Record<WebsiteStatus, string> = {
  Live: "bg-green-100 text-green-700",
  Draft: "bg-gray-100 text-gray-600",
  "In Review": "bg-amber-100 text-amber-700",
  Offline: "bg-red-100 text-red-600",
};

const planStyles: Record<Plan, string> = {
  Starter: "bg-slate-100 text-slate-600",
  Growth: "bg-indigo-100 text-indigo-700",
  Premium: "bg-violet-100 text-violet-700",
};

interface ClientCardProps {
  client: ClientBusiness;
}

export function ClientCard({ client }: ClientCardProps) {
  const { t } = useLanguage();

  const statusLabels: Record<WebsiteStatus, string> = {
    Live: t.common.live,
    Draft: t.common.draft,
    "In Review": t.common.inReview,
    Offline: t.common.offline,
  };

  const planLabels: Record<Plan, string> = {
    Starter: t.common.planStarter,
    Growth: t.common.planGrowth,
    Premium: t.common.planPremium,
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-semibold text-gray-900">
              {client.name}
            </h3>
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${planStyles[client.plan]}`}
            >
              {planLabels[client.plan]}
            </span>
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[client.websiteStatus]}`}
            >
              {statusLabels[client.websiteStatus]}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-0.5">
            {t.admin.ownerLabel}: {client.ownerName} &middot; {client.website}
          </p>
          <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {client.lastActivity}
            </span>
            {client.openRequests > 0 && (
              <span className="flex items-center gap-1 text-amber-600">
                <AlertCircle size={12} />
                {client.openRequests} {t.admin.stats.openRequests}
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <a
            href="/dashboard"
            className="text-xs text-indigo-600 hover:text-indigo-800 flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-indigo-200 hover:bg-indigo-50 transition-colors"
          >
            <ExternalLink size={12} />
            {t.common.view}
          </a>
        </div>
      </div>
    </div>
  );
}
