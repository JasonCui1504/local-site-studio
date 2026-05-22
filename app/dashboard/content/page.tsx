"use client";
import { useState } from "react";
import { Save, Clock } from "lucide-react";
import { mockBusinessContent } from "@/lib/mock-data";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContentPage() {
  const { t } = useLanguage();
  const c = t.content;

  const [content, setContent] = useState(mockBusinessContent);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  function updateHour(
    index: number,
    field: "open" | "close" | "closed",
    value: string | boolean
  ) {
    setContent((prev) => ({
      ...prev,
      hours: prev.hours.map((h, i) =>
        i === index ? { ...h, [field]: value } : h
      ),
    }));
  }

  const fieldDefs: [keyof typeof content, string, React.HTMLInputTypeAttribute][] = [
    ["name", c.fields.name, "text"],
    ["tagline", c.fields.tagline, "text"],
    ["phone", c.fields.phone, "tel"],
    ["email", c.fields.email, "email"],
    ["address", c.fields.address, "text"],
    ["instagram", c.fields.instagram, "text"],
    ["reservationLink", c.fields.reservationLink, "url"],
  ];

  return (
    <>
      <header className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">{c.title}</h1>
          <p className="text-sm text-gray-500 mt-0.5">{c.sub}</p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-indigo-600 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-indigo-700 transition-colors"
        >
          <Save size={14} />
          {saved ? t.common.saved : t.common.save}
        </button>
      </header>

      <main className="flex-1 p-8 space-y-6 max-w-3xl">
        {saved && (
          <div className="rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3">
            {c.savedMsg}
          </div>
        )}

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 mb-5">{c.businessInfo}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {fieldDefs.map(([field, label, inputType]) => (
              <div
                key={field}
                className={field === "address" ? "sm:col-span-2" : ""}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {label}
                </label>
                <input
                  type={inputType}
                  value={content[field] as string}
                  onChange={(e) =>
                    setContent((prev) => ({ ...prev, [field]: e.target.value }))
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {c.fields.description}
              </label>
              <textarea
                value={content.description}
                onChange={(e) =>
                  setContent((prev) => ({ ...prev, description: e.target.value }))
                }
                rows={3}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 mb-2">{c.announcement}</h2>
          <p className="text-xs text-gray-400 mb-3">{c.announcementHint}</p>
          <input
            type="text"
            value={content.announcement}
            onChange={(e) =>
              setContent((prev) => ({ ...prev, announcement: e.target.value }))
            }
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-5">
            <Clock size={18} className="text-gray-500" />
            <h2 className="font-semibold text-gray-900">{c.hours}</h2>
          </div>
          <div className="space-y-3">
            {content.hours.map((hour, index) => (
              <div key={hour.day} className="flex items-center gap-4">
                <span className="w-24 text-sm text-gray-700 font-medium shrink-0">
                  {hour.day}
                </span>
                <label className="flex items-center gap-1.5 text-xs text-gray-500 shrink-0">
                  <input
                    type="checkbox"
                    checked={hour.closed}
                    onChange={(e) =>
                      updateHour(index, "closed", e.target.checked)
                    }
                    className="rounded"
                  />
                  {c.closed}
                </label>
                {!hour.closed && (
                  <>
                    <input
                      type="text"
                      value={hour.open}
                      onChange={(e) => updateHour(index, "open", e.target.value)}
                      className="w-28 rounded-lg border border-gray-300 px-2.5 py-1.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <span className="text-gray-400 text-sm">{c.to}</span>
                    <input
                      type="text"
                      value={hour.close}
                      onChange={(e) =>
                        updateHour(index, "close", e.target.value)
                      }
                      className="w-28 rounded-lg border border-gray-300 px-2.5 py-1.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
