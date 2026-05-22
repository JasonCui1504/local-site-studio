export function WebsiteMockup() {
  return (
    <div className="w-56 shrink-0 rounded-xl overflow-hidden border border-gray-200 shadow-lg rotate-1 select-none">
      {/* Browser chrome */}
      <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b border-gray-200">
        <div className="flex gap-1 shrink-0">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded text-[9px] text-gray-400 px-2 py-0.5 font-mono truncate border border-gray-200">
          goldenlanternbistro.com
        </div>
      </div>

      {/* Simulated website */}
      <div className="bg-white">
        {/* Nav bar */}
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-100">
          <div className="flex gap-1 items-center">
            <div className="w-2.5 h-2.5 rounded-sm bg-indigo-500" />
            <div className="h-1.5 w-12 bg-gray-300 rounded-full" />
          </div>
          <div className="flex gap-1.5">
            <div className="h-1 w-5 bg-gray-200 rounded-full" />
            <div className="h-1 w-5 bg-gray-200 rounded-full" />
            <div className="h-1 w-5 bg-gray-200 rounded-full" />
          </div>
        </div>

        {/* Hero section */}
        <div className="bg-indigo-600 px-4 py-5 text-center relative overflow-hidden">
          {/* Decorative circle */}
          <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-indigo-500 opacity-40" />
          <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full bg-indigo-700 opacity-40" />
          <p className="text-white font-bold text-[10px] tracking-widest relative z-10">
            GOLDEN LANTERN
          </p>
          <p className="text-indigo-200 text-[8px] mt-0.5 relative z-10">
            Modern Asian Cuisine
          </p>
          <div className="mt-2.5 inline-block bg-white text-indigo-600 text-[8px] rounded-full px-2.5 py-0.5 font-bold relative z-10">
            Reserve a Table
          </div>
        </div>

        {/* Feature strip */}
        <div className="grid grid-cols-3 gap-0 border-b border-gray-100">
          {["🍜", "🥢", "🍵"].map((emoji, i) => (
            <div key={i} className="flex flex-col items-center py-2 px-1 border-r border-gray-100 last:border-r-0">
              <span className="text-sm">{emoji}</span>
              <div className="h-1 w-6 bg-gray-200 rounded-full mt-1" />
            </div>
          ))}
        </div>

        {/* Content lines */}
        <div className="px-3 pt-3 pb-1 space-y-1.5">
          <div className="h-1.5 bg-gray-200 rounded-full w-full" />
          <div className="h-1.5 bg-gray-100 rounded-full w-5/6" />
          <div className="h-1.5 bg-gray-100 rounded-full w-4/5" />
        </div>

        {/* Photo grid */}
        <div className="px-3 pb-3 pt-2 grid grid-cols-3 gap-1">
          <div className="h-9 rounded bg-amber-100" />
          <div className="h-9 rounded bg-orange-100" />
          <div className="h-9 rounded bg-yellow-50" />
        </div>

        {/* Footer bar */}
        <div className="bg-gray-800 px-3 py-2 flex justify-between items-center">
          <div className="h-1 w-12 bg-gray-600 rounded-full" />
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-gray-600" />
            <div className="w-2 h-2 rounded-full bg-gray-600" />
            <div className="w-2 h-2 rounded-full bg-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
