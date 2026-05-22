"use client";
import { useState } from "react";
import { Save, CreditCard, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SettingsPage() {
  const { t } = useLanguage();
  const s = t.settings;

  const [brandColor, setBrandColor] = useState("#4f46e5");
  const [styleIdx, setStyleIdx] = useState(0);
  const [emphasisIdx, setEmphasisIdx] = useState(0);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  const profileFields = [
    [s.fields.ownerName, "David Chen"],
    [s.fields.businessName, "Golden Lantern Bistro"],
    [s.fields.loginEmail, "david@goldenlanternbistro.com"],
  ];

  return (
    <>
      <header className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">{s.title}</h1>
          <p className="text-sm text-gray-500 mt-0.5">{s.sub}</p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-indigo-600 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-indigo-700 transition-colors"
        >
          <Save size={14} />
          {saved ? t.common.saved : t.common.save}
        </button>
      </header>

      <main className="flex-1 p-8 space-y-6 max-w-2xl">
        {saved && (
          <div className="rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3">
            {s.savedMsg}
          </div>
        )}

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 mb-4">{s.profile}</h2>
          <div className="space-y-4">
            {profileFields.map(([label, value]) => (
              <div key={label}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {label}
                </label>
                <input
                  type="text"
                  defaultValue={value}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 mb-5">{s.preferences}</h2>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {s.brandColor}
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={brandColor}
                onChange={(e) => setBrandColor(e.target.value)}
                className="w-10 h-10 rounded-lg cursor-pointer border border-gray-300"
              />
              <span className="text-sm font-mono text-gray-600">{brandColor}</span>
              <span className="text-xs text-gray-400">{s.brandColorHint}</span>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {s.styleLabel}
            </label>
            <div className="grid grid-cols-4 gap-2">
              {s.styles.map((style, i) => (
                <button
                  key={i}
                  onClick={() => setStyleIdx(i)}
                  className={`rounded-lg border py-2.5 text-sm font-medium transition-colors ${
                    styleIdx === i
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {s.emphasisLabel}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {s.emphases.map((e, i) => (
                <button
                  key={i}
                  onClick={() => setEmphasisIdx(i)}
                  className={`rounded-lg border py-2.5 text-sm font-medium transition-colors ${
                    emphasisIdx === i
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-xl border border-indigo-200 p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-semibold text-indigo-900">{s.plan.current}</h2>
              <p className="text-sm text-indigo-700 mt-1">{s.plan.desc}</p>
            </div>
            <span className="rounded-full bg-indigo-600 text-white text-xs px-2.5 py-1 font-medium">
              {s.plan.active}
            </span>
          </div>
          <button className="mt-4 text-sm text-indigo-700 border border-indigo-300 rounded-lg px-3 py-1.5 hover:bg-indigo-100 transition-colors font-medium">
            {s.plan.upgrade}
          </button>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-3">
            <CreditCard size={18} className="text-gray-500" />
            <h2 className="font-semibold text-gray-900">{s.billing.title}</h2>
          </div>
          <p className="text-sm text-gray-500">{s.billing.desc}</p>
          <a
            href="mailto:hello@localsitestudio.com"
            className="mt-3 inline-block text-sm text-indigo-600 hover:underline"
          >
            hello@localsitestudio.com
          </a>
        </div>

        <div className="bg-white rounded-xl border border-red-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle size={18} className="text-red-500" />
            <h2 className="font-semibold text-red-700">{s.danger.title}</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">{s.danger.desc}</p>
          <button
            disabled
            className="text-sm text-red-600 border border-red-200 rounded-lg px-3 py-1.5 opacity-60 cursor-not-allowed"
          >
            {s.danger.delete}
          </button>
        </div>
      </main>
    </>
  );
}
