"use client";
import { Trash2, Globe } from "lucide-react";
import { Photo } from "@/lib/mock-data";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface PhotoCardProps {
  photo: Photo;
}

export function PhotoCard({ photo }: PhotoCardProps) {
  const [usedOnHomepage, setUsedOnHomepage] = useState(photo.usedOnHomepage);
  const { t } = useLanguage();

  const categoryLabels: Record<Photo["category"], string> = {
    Food: t.common.catFood,
    Interior: t.common.catInterior,
    Team: t.common.catTeam,
    Events: t.common.catEvents,
    Logo: t.common.catLogo,
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden group">
      <div className="relative">
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-44 object-cover"
        />
        <span className="absolute top-2 left-2 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-gray-700 border border-gray-200">
          {categoryLabels[photo.category]}
        </span>
      </div>
      <div className="p-3">
        <p className="text-sm font-medium text-gray-800 truncate">{photo.alt}</p>
        <p className="text-xs text-gray-400 mt-0.5">
          {t.common.uploadedOn} {photo.uploadedAt}
        </p>
        <div className="flex items-center justify-between mt-3">
          <button
            onClick={() => setUsedOnHomepage(!usedOnHomepage)}
            className={`flex items-center gap-1.5 text-xs rounded-full px-3 py-1 border transition-colors ${
              usedOnHomepage
                ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                : "bg-gray-50 text-gray-500 border-gray-200"
            }`}
          >
            <Globe size={11} />
            {usedOnHomepage ? t.common.onHomepage : t.common.notOnHomepage}
          </button>
          <button className="text-gray-400 hover:text-red-500 transition-colors p-1">
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
