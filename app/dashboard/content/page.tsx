"use client";
import { useState } from "react";
import { Save, Clock } from "lucide-react";
import { mockBusinessContent } from "@/lib/mock-data";

export default function ContentPage() {
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

  return (
    <>
      <header className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">
            Website Content
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Edit your business information. Changes go to review before publishing.
          </p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-indigo-600 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-indigo-700 transition-colors"
        >
          <Save size={14} />
          {saved ? "Saved!" : "Save changes"}
        </button>
      </header>

      <main className="flex-1 p-8 space-y-6 max-w-3xl">
        {saved && (
          <div className="rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3">
            Changes saved and queued for review. We&apos;ll publish them within 24 hours.
          </div>
        )}

        {/* Basic Info */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 mb-5">Business info</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {(
              [
                ["name", "Business name", "text"],
                ["tagline", "Tagline", "text"],
                ["phone", "Phone number", "tel"],
                ["email", "Email address", "email"],
                ["address", "Address", "text"],
                ["instagram", "Instagram handle", "text"],
                ["reservationLink", "Reservation / order link", "url"],
              ] as [
                keyof typeof content,
                string,
                React.HTMLInputTypeAttribute,
              ][]
            ).map(([field, label, inputType]) => (
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
                    setContent((prev) => ({
                      ...prev,
                      [field]: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Description
              </label>
              <textarea
                value={content.description}
                onChange={(e) =>
                  setContent((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                rows={3}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              />
            </div>
          </div>
        </div>

        {/* Announcement */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 mb-2">
            Featured announcement
          </h2>
          <p className="text-xs text-gray-400 mb-3">
            Shown as a banner on your homepage. Leave blank to hide.
          </p>
          <input
            type="text"
            value={content.announcement}
            onChange={(e) =>
              setContent((prev) => ({ ...prev, announcement: e.target.value }))
            }
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Hours */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-5">
            <Clock size={18} className="text-gray-500" />
            <h2 className="font-semibold text-gray-900">Opening hours</h2>
          </div>
          <div className="space-y-3">
            {content.hours.map((hour, index) => (
              <div
                key={hour.day}
                className="flex items-center gap-4"
              >
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
                  Closed
                </label>
                {!hour.closed && (
                  <>
                    <input
                      type="text"
                      value={hour.open}
                      onChange={(e) =>
                        updateHour(index, "open", e.target.value)
                      }
                      className="w-28 rounded-lg border border-gray-300 px-2.5 py-1.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <span className="text-gray-400 text-sm">to</span>
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
