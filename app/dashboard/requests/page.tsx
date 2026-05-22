"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { RequestStatusBadge } from "@/components/RequestStatusBadge";
import { mockRequests } from "@/lib/mock-data";
import { useLanguage } from "@/contexts/LanguageContext";

const priorityColors: Record<string, string> = {
  Low: "bg-gray-100 text-gray-600",
  Normal: "bg-gray-100 text-gray-600",
  High: "bg-orange-100 text-orange-700",
  Urgent: "bg-red-100 text-red-700",
};

export default function RequestsPage() {
  const { t } = useLanguage();
  const r = t.requests;

  const [submitted, setSubmitted] = useState(false);
  const [typeIdx, setTypeIdx] = useState(0);
  const [priorityIdx, setPriorityIdx] = useState(1);
  const [pageIdx, setPageIdx] = useState(0);
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
        <h1 className="text-lg font-semibold text-gray-900">{r.title}</h1>
        <p className="text-sm text-gray-500 mt-0.5">{r.sub}</p>
      </header>

      <main className="flex-1 p-8">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="font-semibold text-gray-900 mb-5">{r.newRequest}</h2>
              {submitted && (
                <div className="mb-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3">
                  {r.successMsg}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {r.fields.type}
                  </label>
                  <select
                    value={typeIdx}
                    onChange={(e) => setTypeIdx(Number(e.target.value))}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    {r.types.map((type, i) => (
                      <option key={i} value={i}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {r.fields.priority}
                  </label>
                  <select
                    value={priorityIdx}
                    onChange={(e) => setPriorityIdx(Number(e.target.value))}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    {r.priorities.map((p, i) => (
                      <option key={i} value={i}>{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {r.fields.page}
                  </label>
                  <select
                    value={pageIdx}
                    onChange={(e) => setPageIdx(Number(e.target.value))}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    {r.pages.map((p, i) => (
                      <option key={i} value={i}>{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {r.fields.description}{" "}
                    <span className="text-gray-400 font-normal">
                      ({r.fields.required})
                    </span>
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows={4}
                    placeholder={r.fields.placeholder}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {r.fields.notes}{" "}
                    <span className="text-gray-400 font-normal">
                      ({r.fields.optional})
                    </span>
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    placeholder={r.fields.notesPlaceholder}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-indigo-700 transition-colors"
                >
                  <Send size={15} />
                  {r.submit}
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-semibold text-gray-900 mb-4">{r.previous}</h2>
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
                          className={`text-xs rounded-full px-2 py-0.5 font-medium ${priorityColors[req.priority]}`}
                        >
                          {req.priority}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {req.page} &middot;{" "}
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
