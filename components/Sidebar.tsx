"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Info,
  Image,
  UtensilsCrossed,
  Settings,
  HelpCircle,
  ExternalLink,
  Store,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

export function Sidebar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const n = t.sidebar.nav;
  const d = t.sidebar.navDesc;

  const navItems = [
    { label: n.dashboard, desc: null, href: "/dashboard", icon: Home },
    { label: n.content, desc: d.content, href: "/dashboard/content", icon: Info },
    { label: n.requests, desc: d.requests, href: "/dashboard/requests", icon: HelpCircle },
    { label: n.photos, desc: d.photos, href: "/dashboard/photos", icon: Image },
    { label: n.menu, desc: d.menu, href: "/dashboard/menu", icon: UtensilsCrossed },
    { label: n.settings, desc: d.settings, href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <aside className="w-60 shrink-0 bg-white border-r border-gray-200 flex flex-col min-h-screen">
      <div className="px-5 pt-6 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 rounded-lg p-1.5">
            <Store size={16} className="text-white" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-900 leading-tight">
              Golden Lantern
            </p>
            <p className="text-[10px] text-gray-400 leading-tight">
              {t.sidebar.ownerPortal}
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors group ${
                isActive
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <item.icon
                size={17}
                className={`mt-0.5 shrink-0 ${isActive ? "text-indigo-600" : "text-gray-400 group-hover:text-gray-600"}`}
              />
              <div className="min-w-0">
                <p className={`text-sm font-medium leading-tight ${isActive ? "text-indigo-700" : ""}`}>
                  {item.label}
                </p>
                {item.desc && (
                  <p className={`text-[11px] leading-tight mt-0.5 ${isActive ? "text-indigo-400" : "text-gray-400"}`}>
                    {item.desc}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100 space-y-3">
        <LanguageToggle />
        <a
          href="#"
          className="flex items-center gap-2 text-xs text-gray-400 hover:text-indigo-600 transition-colors"
        >
          <ExternalLink size={12} />
          {t.sidebar.preview}
        </a>
        <p className="text-[10px] text-gray-300">{t.sidebar.powered}</p>
      </div>
    </aside>
  );
}
