"use client";
import { useState } from "react";
import { Save, CreditCard, AlertTriangle } from "lucide-react";

const styles = ["Modern", "Warm", "Minimal", "Bold"] as const;
const emphases = [
  "Food photos",
  "Reservations",
  "Catering",
  "Online ordering",
] as const;

type StyleOption = (typeof styles)[number];
type EmphasisOption = (typeof emphases)[number];

export default function SettingsPage() {
  const [brandColor, setBrandColor] = useState("#4f46e5");
  const [selectedStyle, setSelectedStyle] = useState<StyleOption>("Modern");
  const [selectedEmphasis, setSelectedEmphasis] =
    useState<EmphasisOption>("Food photos");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <>
      <header className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Settings</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Manage your website preferences and account settings.
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

      <main className="flex-1 p-8 space-y-6 max-w-2xl">
        {saved && (
          <div className="rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3">
            Settings saved and queued for review.
          </div>
        )}

        {/* Business profile */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Business profile</h2>
          <div className="space-y-4">
            {[
              ["Owner name", "David Chen"],
              ["Business name", "Golden Lantern Bistro"],
              ["Login email", "david@goldenlanternbistro.com"],
            ].map(([label, value]) => (
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

        {/* Website preferences */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 mb-5">
            Website preferences
          </h2>

          {/* Brand color */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Brand color
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={brandColor}
                onChange={(e) => setBrandColor(e.target.value)}
                className="w-10 h-10 rounded-lg cursor-pointer border border-gray-300"
              />
              <span className="text-sm font-mono text-gray-600">{brandColor}</span>
              <span className="text-xs text-gray-400">
                Used for buttons, accents, and highlights
              </span>
            </div>
          </div>

          {/* Style */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Website style
            </label>
            <div className="grid grid-cols-4 gap-2">
              {styles.map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className={`rounded-lg border py-2.5 text-sm font-medium transition-colors ${
                    selectedStyle === style
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Homepage emphasis */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Homepage emphasis
            </label>
            <div className="grid grid-cols-2 gap-2">
              {emphases.map((e) => (
                <button
                  key={e}
                  onClick={() => setSelectedEmphasis(e)}
                  className={`rounded-lg border py-2.5 text-sm font-medium transition-colors ${
                    selectedEmphasis === e
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

        {/* Support plan */}
        <div className="bg-indigo-50 rounded-xl border border-indigo-200 p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-semibold text-indigo-900">
                Current plan: Growth
              </h2>
              <p className="text-sm text-indigo-700 mt-1">
                Unlimited change requests, monthly review, priority support.
              </p>
            </div>
            <span className="rounded-full bg-indigo-600 text-white text-xs px-2.5 py-1 font-medium">
              Active
            </span>
          </div>
          <button className="mt-4 text-sm text-indigo-700 border border-indigo-300 rounded-lg px-3 py-1.5 hover:bg-indigo-100 transition-colors font-medium">
            Upgrade to Premium
          </button>
        </div>

        {/* Billing */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-3">
            <CreditCard size={18} className="text-gray-500" />
            <h2 className="font-semibold text-gray-900">Billing</h2>
          </div>
          <p className="text-sm text-gray-500">
            Billing is managed directly with your account representative. To
            update payment info or view invoices, contact us.
          </p>
          <a
            href="mailto:hello@localsitestudio.com"
            className="mt-3 inline-block text-sm text-indigo-600 hover:underline"
          >
            hello@localsitestudio.com
          </a>
        </div>

        {/* Danger zone */}
        <div className="bg-white rounded-xl border border-red-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle size={18} className="text-red-500" />
            <h2 className="font-semibold text-red-700">Danger zone</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            These actions are permanent. Please contact us if you need help.
          </p>
          <button
            disabled
            className="text-sm text-red-600 border border-red-200 rounded-lg px-3 py-1.5 opacity-60 cursor-not-allowed"
          >
            Request account deletion
          </button>
        </div>
      </main>
    </>
  );
}
