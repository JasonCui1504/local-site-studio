import Link from "next/link";
import {
  Users,
  AlertCircle,
  CheckCircle2,
  Clock,
  Zap,
  ExternalLink,
  LayoutDashboard,
} from "lucide-react";
import { ClientCard } from "@/components/ClientCard";
import { RequestStatusBadge } from "@/components/RequestStatusBadge";
import { StatCard } from "@/components/StatCard";
import { mockClients, mockAdminRequests } from "@/lib/mock-data";

const priorityColors: Record<string, string> = {
  Urgent: "bg-red-100 text-red-700",
  High: "bg-orange-100 text-orange-700",
  Normal: "bg-gray-100 text-gray-600",
  Low: "bg-gray-50 text-gray-500",
};

function generateClaudeTask(req: (typeof mockAdminRequests)[0]) {
  return `## Task: ${req.type} — ${req.clientName}

**Context:** Restaurant owner dashboard request (ID: ${req.id})
**Priority:** ${req.priority}
**Page:** ${req.page}

**Owner request:**
"${req.description}"

**Steps:**
1. Open the live site at \`${mockClients.find((c) => c.id === req.clientId)?.website}\`
2. Identify the section(s) on the ${req.page} page that need to change
3. Apply the requested edits in the CMS / codebase
4. QA on mobile and desktop
5. Submit for owner review before publishing

**Done when:** Changes are live and owner has been notified.`;
}

export default function AdminPage() {
  const totalOpen = mockClients.reduce((sum, c) => sum + c.openRequests, 0);
  const pendingRequests = mockAdminRequests.filter(
    (r) => r.status === "Pending"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin nav */}
      <nav className="bg-gray-900 text-white px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-indigo-500 rounded-lg flex items-center justify-center">
            <span className="text-xs font-bold">L</span>
          </div>
          <span className="font-semibold text-sm">Local Site Studio</span>
          <span className="text-gray-500 text-sm">/ Admin</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white"
          >
            <LayoutDashboard size={14} />
            View demo client
          </Link>
          <Link href="/" className="text-xs text-gray-300 hover:text-white">
            Marketing site
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Operator Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Manage all client sites, requests, and tasks from one place.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Active clients"
            value={mockClients.length}
            icon={Users}
            iconColor="text-indigo-600"
          />
          <StatCard
            label="Open requests"
            value={totalOpen}
            icon={AlertCircle}
            iconColor="text-amber-500"
            sub="Across all clients"
          />
          <StatCard
            label="Pending review"
            value={pendingRequests.length}
            icon={Clock}
            iconColor="text-blue-500"
            sub="Need your attention"
          />
          <StatCard
            label="Sites live"
            value={mockClients.filter((c) => c.websiteStatus === "Live").length}
            icon={CheckCircle2}
            iconColor="text-green-500"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Client list */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-semibold text-gray-900 text-base">Clients</h2>
            {mockClients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>

          {/* Request queue */}
          <div className="space-y-4">
            <h2 className="font-semibold text-gray-900 text-base">
              Incoming requests
            </h2>
            <div className="space-y-3">
              {mockAdminRequests.map((req) => (
                <div
                  key={req.id}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm p-4"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="text-sm font-semibold text-gray-900">
                      {req.clientName}
                    </span>
                    <RequestStatusBadge status={req.status} />
                  </div>
                  <p className="text-xs font-medium text-gray-600">
                    {req.type}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {req.description}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <span
                      className={`text-xs rounded-full px-2 py-0.5 font-medium ${priorityColors[req.priority]}`}
                    >
                      {req.priority}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(req.submittedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="flex items-center gap-1 text-xs text-green-700 border border-green-200 rounded-lg px-2.5 py-1 hover:bg-green-50 transition-colors">
                      <CheckCircle2 size={11} />
                      Complete
                    </button>
                    <Link
                      href="/dashboard/requests"
                      className="flex items-center gap-1 text-xs text-gray-600 border border-gray-200 rounded-lg px-2.5 py-1 hover:bg-gray-50 transition-colors"
                    >
                      <ExternalLink size={11} />
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Claude Code task preview */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded bg-gray-900 flex items-center justify-center">
              <Zap size={13} className="text-amber-400" />
            </div>
            <h2 className="font-semibold text-gray-900">
              Claude Code Task Preview
            </h2>
          </div>
          <p className="text-sm text-gray-500 mb-5">
            Automatically turns a restaurant owner&apos;s request into a structured
            developer task.
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Source request */}
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
                Owner request
              </p>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-900">
                    {mockAdminRequests[0].clientName}
                  </span>
                  <span
                    className={`text-xs rounded-full px-2 py-0.5 font-medium ${priorityColors[mockAdminRequests[0].priority]}`}
                  >
                    {mockAdminRequests[0].priority}
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  {mockAdminRequests[0].type} &middot;{" "}
                  {mockAdminRequests[0].page}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {mockAdminRequests[0].description}
                </p>
              </div>
            </div>

            {/* Generated task */}
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
                Generated Claude Code task
              </p>
              <div className="bg-gray-900 rounded-xl p-4 font-mono text-xs text-gray-300 whitespace-pre-wrap leading-relaxed overflow-auto max-h-64">
                {generateClaudeTask(mockAdminRequests[0])}
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <button className="flex items-center gap-2 bg-gray-900 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-gray-800 transition-colors">
              <Zap size={14} className="text-amber-400" />
              Generate Claude Code task
            </button>
            <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-gray-50 transition-colors">
              <CheckCircle2 size={14} className="text-green-500" />
              Mark completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
