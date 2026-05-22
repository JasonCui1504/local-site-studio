"use client";
import { Pencil, EyeOff } from "lucide-react";
import { MenuItem } from "@/lib/mock-data";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const [available, setAvailable] = useState(item.available);
  const { t } = useLanguage();

  const menuItemData = t.mockData.menuItems[item.id as keyof typeof t.mockData.menuItems];
  const displayName = menuItemData?.name ?? item.name;
  const displayDescription = menuItemData?.description ?? item.description;

  return (
    <div
      className={`bg-white rounded-xl border shadow-sm p-4 flex items-start justify-between gap-4 transition-opacity ${
        !available ? "opacity-60 border-gray-100" : "border-gray-200"
      }`}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-gray-900 truncate">
            {displayName}
          </p>
          {!available && (
            <span className="shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
              {t.common.unavailable}
            </span>
          )}
        </div>
        <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
          {displayDescription}
        </p>
        <p className="text-sm font-medium text-gray-700 mt-1.5">{item.price}</p>
      </div>
      <div className="flex flex-col gap-1.5 shrink-0">
        <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-indigo-600 transition-colors px-2 py-1 rounded-lg border border-gray-200 hover:border-indigo-200">
          <Pencil size={11} />
          {t.common.edit}
        </button>
        <button
          onClick={() => setAvailable(!available)}
          className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 transition-colors px-2 py-1 rounded-lg border border-gray-200"
        >
          <EyeOff size={11} />
          {available ? t.common.markOff : t.common.enable}
        </button>
      </div>
    </div>
  );
}
