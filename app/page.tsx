"use client";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  UtensilsCrossed,
  Camera,
  Clock,
  CheckCircle2,
  ArrowRight,
  Star,
  Zap,
  Shield,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";

const problemIcons = [Globe, Smartphone, UtensilsCrossed, Camera, Clock];
const solutionIcons = [Star, Zap, Camera, CheckCircle2, Shield];

export default function HomePage() {
  const { t } = useLanguage();
  const l = t.landing;

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">L</span>
            </div>
            <span className="font-semibold text-gray-900">Local Site Studio</span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <a
              href="#pricing"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {l.nav.pricing}
            </a>
            <Link
              href="/dashboard"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors border border-gray-200 px-3 py-1.5 rounded-lg hover:border-gray-300"
            >
              {l.nav.ownerLogin}
            </Link>
            <Link
              href="/dashboard"
              className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              {l.nav.viewDemo}
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm text-indigo-700 font-medium mb-6 border border-indigo-100">
          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
          {l.badge}
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight tracking-tight max-w-3xl mx-auto">
          {l.hero.headline1}{" "}
          <span className="text-indigo-600">{l.hero.headline2}</span>
        </h1>
        <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          {l.hero.sub}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-indigo-700 transition-colors shadow-sm"
          >
            {l.hero.ctaDemo}
            <ArrowRight size={18} />
          </Link>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-white text-gray-700 px-7 py-3.5 rounded-xl font-semibold text-base border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            {l.hero.ctaSample}
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto text-center">
          <div>
            <p className="text-2xl font-bold text-gray-900">{l.stats.responseLabel}</p>
            <p className="text-sm text-gray-500 mt-1">{l.stats.responseDesc}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{l.stats.mobileLabel}</p>
            <p className="text-sm text-gray-500 mt-1">{l.stats.mobileDesc}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{l.stats.noCodeLabel}</p>
            <p className="text-sm text-gray-500 mt-1">{l.stats.noCodeDesc}</p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-2">
              {l.problems.label}
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              {l.problems.heading}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {l.problems.items.map((p, i) => {
              const Icon = problemIcons[i];
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                    <Icon className="text-red-500" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900">{p.title}</h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-2">
              {l.solutions.label}
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              {l.solutions.heading}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {l.solutions.items.map((s, i) => {
              const Icon = solutionIcons[i];
              return (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 p-6 hover:border-indigo-200 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center mb-4">
                    <Icon className="text-indigo-600" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900">{s.title}</h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-2">
              {l.pricing.label}
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              {l.pricing.heading}
            </h2>
            <p className="text-gray-500 mt-3">{l.pricing.sub}</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {l.pricing.plans.map((plan, i) => {
              const featured = i === 1;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border p-7 flex flex-col ${
                    featured
                      ? "bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-200"
                      : "bg-white border-gray-200 shadow-sm"
                  }`}
                >
                  <h3
                    className={`text-lg font-bold ${featured ? "text-white" : "text-gray-900"}`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mt-2 leading-relaxed ${featured ? "text-indigo-200" : "text-gray-500"}`}
                  >
                    {plan.desc}
                  </p>
                  <ul className="mt-5 space-y-2 flex-1">
                    {plan.features.map((f, fi) => (
                      <li
                        key={fi}
                        className={`text-sm flex items-center gap-2 ${featured ? "text-indigo-100" : "text-gray-600"}`}
                      >
                        <CheckCircle2
                          size={14}
                          className={
                            featured ? "text-indigo-300" : "text-green-500"
                          }
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <p
                      className={`text-2xl font-bold mb-1 ${featured ? "text-white" : "text-gray-900"}`}
                    >
                      {l.pricing.customQuote}
                    </p>
                    <a
                      href="#"
                      className={`block text-center py-2.5 rounded-xl font-semibold text-sm mt-3 transition-colors ${
                        featured
                          ? "bg-white text-indigo-600 hover:bg-indigo-50"
                          : "bg-indigo-600 text-white hover:bg-indigo-700"
                      }`}
                    >
                      {l.pricing.cta}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">L</span>
            </div>
            <span className="font-semibold text-gray-900 text-sm">
              Local Site Studio
            </span>
          </div>
          <p className="text-sm text-gray-400 text-center">{l.footer.tagline}</p>
          <div className="flex gap-4 text-sm">
            <a href="mailto:hello@localsitestudio.com" className="text-gray-500 hover:text-indigo-600 transition-colors">
              {l.footer.contact}
            </a>
            <Link
              href="/dashboard"
              className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
            >
              {l.footer.ownerPortal} →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
