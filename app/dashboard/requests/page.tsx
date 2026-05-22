"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { RequestStatusBadge } from "@/components/RequestStatusBadge";
import { mockRequests, RequestType, Priority } from "@/lib/mock-data";

const requestTypes: RequestType[] = [
  "Menu Update",
  "Hours Change",
  "Photo Upload",
  "Text Edit",
  "New Page",
  "Other",
];
const priorities: Priority[] = ["Low", "Normal", "High", "Urgent"];
const pages = [
  "Homepage",
  "Menu",
  "About",
  "Contact",
  "Gallery",
  "Reservations",
  "Other",
];

export default function RequestsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [type, setType] = useState<RequestType>("Menu Update");
  const [priority, setPriority] = useState<Priority>("Normal");
  const [page, setPage] = useState("Homepage");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setDescription("");
    setNotes("");
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <>
      <header className="bg-white border-b border-gray-200 px-8 py-5">
        <h1 className="text-lg font-semibold text-gray-900">Change Requests</h1>
        <p className="text-sm text-gray-500 mt-0.5">
          Submit a request and we&apos;ll take care of it — usually within 24 hours.
        </p>
      </header>

      <main className="flex-1 p-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="font-semibold text-gray-900 mb-5">
                New request
              </h2>
              {submitted && (
                <div className="mb-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3">
                  Request submitted! We&apos;ll review it shortly.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Request type
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as RequestType)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    {requestTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Priority
                  </label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as Priority)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    {priorities.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Page affected
                  </label>
                  <select
                    value={page}
                    onChange={(e) => setPage(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    {pages.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Description{" "}
                    <span className="text-gray-400 font-normal">(required)</span>
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows={4}
                    placeholder="Describe what you'd like changed..."
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Additional notes{" "}
                    <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    placeholder="Anything else we should know?"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-indigo-700 transition-colors"
                >
                  <Send size={15} />
                  Submit request
                </button>
              </form>
            </div>
          </div>

          {/* Previous requests */}
          <div className="lg:col-span-3">
            <h2 className="font-semibold text-gray-900 mb-4">
              Previous requests
            </h2>
            <div className="space-y-3">
              {mockRequests.map((req) => (
                <div
                  key={req.id}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-gray-900">
                          {req.type}
                        </span>
                        <span
                          className={`text-xs rounded-full px-2 py-0.5 font-medium ${
                            req.priority === "Urgent"
                              ? "bg-red-100 text-red-700"
                              : req.priority === "High"
                                ? "bg-orange-100 text-orange-700"
                                : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {req.priority}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {req.page} &middot; Submitted{" "}
                        {new Date(req.submittedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        {req.description}
                      </p>
                    </div>
                    <RequestStatusBadge status={req.status} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
