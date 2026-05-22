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

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Website Content", href: "/dashboard/content", icon: FileText },
  {
    label: "Change Requests",
    href: "/dashboard/requests",
    icon: MessageSquarePlus,
  },
  { label: "Photos", href: "/dashboard/photos", icon: Image },
  { label: "Menu", href: "/dashboard/menu", icon: UtensilsCrossed },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 bg-white border-r border-gray-200 flex flex-col min-h-screen">
      {/* Logo / business name */}
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
              Owner Portal
            </p>
          </div>
        </div>
      </div>

      {/* Nav */}
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

      {/* Footer */}
      <div className="p-4 border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 text-xs text-gray-400 hover:text-indigo-600 transition-colors"
        >
          <ExternalLink size={12} />
          Preview your website
        </a>
        <p className="text-[10px] text-gray-300 mt-2">
          Powered by Local Site Studio
        </p>
      </div>
    </aside>
  );
}
