"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Image,
  UtensilsCrossed,
  Settings,
  MessageSquarePlus,
  ExternalLink,
  Store,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

export function Sidebar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { label: t.sidebar.nav.dashboard, href: "/dashboard", icon: LayoutDashboard },
    { label: t.sidebar.nav.content, href: "/dashboard/content", icon: FileText },
    { label: t.sidebar.nav.requests, href: "/dashboard/requests", icon: MessageSquarePlus },
    { label: t.sidebar.nav.photos, href: "/dashboard/photos", icon: Image },
    { label: t.sidebar.nav.menu, href: "/dashboard/menu", icon: UtensilsCrossed },
    { label: t.sidebar.nav.settings, href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <aside className="w-56 shrink-0 bg-white border-r border-gray-200 flex flex-col min-h-screen">
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

      <nav className="flex-1 py-4 px-3 space-y-0.5">
        {navItems.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <item.icon size={16} />
              {item.label}
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
