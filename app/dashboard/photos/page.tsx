"use client";
import { useState } from "react";
import { Upload, Info } from "lucide-react";
import { PhotoCard } from "@/components/PhotoCard";
import { mockPhotos } from "@/lib/mock-data";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PhotosPage() {
  const [dragging, setDragging] = useState(false);
  const { t } = useLanguage();
  const p = t.photos;

  return (
    <>
      <header className="bg-white border-b border-gray-200 px-8 py-5">
        <h1 className="text-lg font-semibold text-gray-900">{p.title}</h1>
        <p className="text-sm text-gray-500 mt-0.5">{p.sub}</p>
      </header>

      <main className="flex-1 p-8 space-y-6">
        <div className="flex items-start gap-3 rounded-xl bg-blue-50 border border-blue-200 px-5 py-4">
          <Info size={18} className="text-blue-500 mt-0.5 shrink-0" />
          <p className="text-sm text-blue-700">{p.notice}</p>
        </div>

        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => { e.preventDefault(); setDragging(false); }}
          className={`border-2 border-dashed rounded-2xl p-12 text-center transition-colors cursor-pointer ${
            dragging
              ? "border-indigo-400 bg-indigo-50"
              : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50"
          }`}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
              <Upload size={24} className="text-gray-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700">{p.dragDrop}</p>
              <p className="text-xs text-gray-400 mt-1">
                or{" "}
                <span className="text-indigo-600 cursor-pointer hover:underline">
                  {p.browse}
                </span>
              </p>
            </div>
            <p className="text-xs text-gray-400">{p.fileTypes}</p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">
              {p.yourPhotos} ({mockPhotos.length})
            </h2>
            <span className="text-xs text-gray-400">
              {mockPhotos.filter((ph) => ph.usedOnHomepage).length} {p.onHomepageCount}
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockPhotos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
