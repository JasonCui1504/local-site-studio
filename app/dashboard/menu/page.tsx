"use client";
import { Plus, Upload } from "lucide-react";
import { MenuItemCard } from "@/components/MenuItemCard";
import { mockMenuItems, MenuItem } from "@/lib/mock-data";
import { useLanguage } from "@/contexts/LanguageContext";

const sectionKeys: MenuItem["section"][] = [
  "Appetizers",
  "Entrees",
  "Drinks",
  "Desserts",
];

export default function MenuPage() {
  const { t } = useLanguage();
  const m = t.menu;

  const itemsBySection = (section: MenuItem["section"]) =>
    mockMenuItems.filter((i) => i.section === section);

  return (
    <>
      <header className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">{m.title}</h1>
          <p className="text-sm text-gray-500 mt-0.5">{m.sub}</p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-indigo-700 transition-colors">
          <Plus size={15} />
          {m.addItem}
        </button>
      </header>

      <main className="flex-1 p-8 space-y-8">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
            <Upload size={18} className="text-amber-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-amber-900">
              {m.uploadCard.title}
            </p>
            <p className="text-sm text-amber-700 mt-0.5">{m.uploadCard.desc}</p>
            <button className="mt-3 text-xs font-medium text-amber-700 border border-amber-300 rounded-lg px-3 py-1.5 hover:bg-amber-100 transition-colors">
              {m.uploadCard.btn}
            </button>
          </div>
        </div>

        {sectionKeys.map((section) => {
          const items = itemsBySection(section);
          const sectionLabel = m.sections[section];
          return (
            <div key={section}>
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold text-gray-900 text-base">
                  {sectionLabel}{" "}
                  <span className="text-gray-400 font-normal text-sm">
                    ({items.length})
                  </span>
                </h2>
                <button className="flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 border border-indigo-200 rounded-lg px-2.5 py-1 hover:bg-indigo-50 transition-colors">
                  <Plus size={12} />
                  {m.addTo} {sectionLabel.toLowerCase()}
                </button>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {items.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
