"use client";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`flex items-center rounded-lg border border-gray-200 overflow-hidden text-xs font-medium ${className}`}
    >
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 transition-colors ${
          lang === "en"
            ? "bg-indigo-600 text-white"
            : "bg-white text-gray-500 hover:bg-gray-50"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("zh")}
        className={`px-3 py-1.5 transition-colors ${
          lang === "zh"
            ? "bg-indigo-600 text-white"
            : "bg-white text-gray-500 hover:bg-gray-50"
        }`}
      >
        中文
      </button>
    </div>
  );
}
