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

const problems = [
  {
    icon: Globe,
    title: "Outdated website",
    desc: "Your site looks like it was built in 2010 — and customers notice.",
  },
  {
    icon: Smartphone,
    title: "Poor mobile experience",
    desc: "Over 70% of diners search on their phones. Most restaurant sites break on mobile.",
  },
  {
    icon: UtensilsCrossed,
    title: "Hard-to-update menus",
    desc: "Prices change, items disappear — but updating your website takes a phone call to a developer.",
  },
  {
    icon: Camera,
    title: "Old or missing photos",
    desc: "Your food looks amazing. Your website photos are from 2017.",
  },
  {
    icon: Clock,
    title: "Wrong hours and contact info",
    desc: "Customers show up when you're closed. That's a review waiting to happen.",
  },
];

const solutions = [
  {
    icon: Star,
    title: "A modern, beautiful website",
    desc: "Custom-designed for your restaurant — fast, mobile-first, and built to impress.",
  },
  {
    icon: Zap,
    title: "Simple owner dashboard",
    desc: "Update anything yourself — no tech skills needed. Just log in and click.",
  },
  {
    icon: Camera,
    title: "Easy photo & menu updates",
    desc: "Upload photos, update prices, or mark items unavailable in seconds.",
  },
  {
    icon: CheckCircle2,
    title: "Submit change requests",
    desc: "Need something more complex? Send a request and we handle it for you.",
  },
  {
    icon: Shield,
    title: "Human-reviewed publishing",
    desc: "Every change is reviewed before it goes live. No accidental mistakes.",
  },
];

const pricing = [
  {
    name: "Starter Site",
    desc: "Everything you need to get online with a site that actually works.",
    features: [
      "Custom design",
      "Mobile-responsive",
      "Menu & hours page",
      "Owner dashboard",
      "1 round of revisions",
    ],
    cta: "Get a quote",
  },
  {
    name: "Ongoing Care",
    desc: "Keep your site fresh with monthly updates and priority support.",
    features: [
      "Everything in Starter",
      "Unlimited change requests",
      "Monthly review call",
      "Photo updates",
      "Priority response",
    ],
    cta: "Get a quote",
    featured: true,
  },
  {
    name: "Premium Support",
    desc: "Full-service for busy owners who want zero involvement in the tech.",
    features: [
      "Everything in Ongoing Care",
      "Menu management",
      "SEO optimization",
      "Online ordering setup",
      "Social media links",
    ],
    cta: "Get a quote",
  },
];

export default function HomePage() {
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
            <a
              href="#pricing"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </a>
            <Link
              href="/dashboard"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Owner Login
            </Link>
            <Link
              href="/dashboard"
              className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              View Demo
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm text-indigo-700 font-medium mb-6 border border-indigo-100">
          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
          Built for local restaurants & small businesses
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight tracking-tight max-w-3xl mx-auto">
          A better website for your restaurant,{" "}
          <span className="text-indigo-600">without the tech headache.</span>
        </h1>
        <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          We design and build a clean, modern site for your restaurant — then
          hand you a simple owner portal to keep menus, hours, and photos
          up to date. You run your restaurant. We handle the rest.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-indigo-700 transition-colors shadow-sm"
          >
            View Demo Dashboard
            <ArrowRight size={18} />
          </Link>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-white text-gray-700 px-7 py-3.5 rounded-xl font-semibold text-base border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Request a Sample Site
          </a>
        </div>

        {/* Social proof strip */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto text-center">
          <div>
            <p className="text-2xl font-bold text-gray-900">24h</p>
            <p className="text-sm text-gray-500 mt-1">Average response time</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">100%</p>
            <p className="text-sm text-gray-500 mt-1">Mobile-first design</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">No code</p>
            <p className="text-sm text-gray-500 mt-1">required from you</p>
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-2">
              The Problem
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Most restaurant websites are hurting your business
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                  <p.icon className="text-red-500" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-2">
              The Solution
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Your restaurant, online — the way it should be
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-gray-200 p-6 hover:border-indigo-200 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center mb-4">
                  <s.icon className="text-indigo-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-2">
              Pricing
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Simple, honest pricing
            </h2>
            <p className="text-gray-500 mt-3">
              Every project is quoted individually — no surprises, no hidden
              fees.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-7 flex flex-col ${
                  plan.featured
                    ? "bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-200"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                <h3
                  className={`text-lg font-bold ${plan.featured ? "text-white" : "text-gray-900"}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mt-2 leading-relaxed ${plan.featured ? "text-indigo-200" : "text-gray-500"}`}
                >
                  {plan.desc}
                </p>
                <ul className="mt-5 space-y-2 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`text-sm flex items-center gap-2 ${plan.featured ? "text-indigo-100" : "text-gray-600"}`}
                    >
                      <CheckCircle2
                        size={14}
                        className={
                          plan.featured ? "text-indigo-300" : "text-green-500"
                        }
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <p
                    className={`text-2xl font-bold mb-1 ${plan.featured ? "text-white" : "text-gray-900"}`}
                  >
                    Custom quote
                  </p>
                  <a
                    href="#"
                    className={`block text-center py-2.5 rounded-xl font-semibold text-sm mt-3 transition-colors ${
                      plan.featured
                        ? "bg-white text-indigo-600 hover:bg-indigo-50"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">L</span>
            </div>
            <span className="font-semibold text-gray-900 text-sm">
              Local Site Studio
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Beautiful websites for local restaurants and small businesses.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link href="/dashboard" className="hover:text-indigo-600">
              Owner Portal
            </Link>
            <Link href="/admin" className="hover:text-indigo-600">
              Admin
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
