const cases = [
  {
    icon: "🏠",
    title: "Home",
    desc: "Stay ahead of storms that could impact your family, home, and property.",
  },
  {
    icon: "🌾",
    title: "Farm",
    desc: "Plan planting, harvesting, and irrigation with real-time local weather data.",
  },
  {
    icon: "🐄",
    title: "Livestock",
    desc: "Protect your animals with early severe weather warnings before conditions turn dangerous.",
  },
  {
    icon: "🏕️",
    title: "Cabin / Off-Grid",
    desc: "No Wi-Fi Required. Get reliable weather updates without needing a wireless network.",
  },
  {
    icon: "🏢",
    title: "Business",
    desc: "Keep operations running safely with weather awareness for your staff and facilities.",
  },
  {
    icon: "⛏️",
    title: "Jobsite",
    desc: "Outdoor crews get timely alerts and 7-day outlooks for smarter, safer scheduling.",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-zinc-900 border-t border-zinc-800 py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="text-brand-yellow text-xs sm:text-sm font-bold tracking-widest uppercase mb-3">
            Built For
          </p>
          <h2
            className="font-black uppercase text-white mb-4 sm:mb-5 leading-none tracking-tight text-4xl sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
          >
            Designed for<br />
            <span className="text-brand-yellow">Everywhere</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            From city homes to remote farms — wherever you need reliable weather intelligence,
            WeatherMax 7 is ready.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cases.map((c) => (
            <div
              key={c.title}
              className="group rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 sm:p-7 hover:border-zinc-600 hover:bg-zinc-950 transition-all"
            >
              <span className="text-3xl sm:text-4xl block mb-3 sm:mb-4">{c.icon}</span>
              <h3 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">{c.title}</h3>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-10 sm:mt-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-brand-yellow/10 to-brand-amber/5 border border-brand-yellow/20 p-6 sm:p-12 text-center">
          <h3
            className="font-black uppercase text-white mb-3 leading-none text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
          >
            Ready to Stay Ahead of the Weather?
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto">
            Have a question, need support, or want to learn more? Reach out — we&apos;re here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-black font-bold text-sm rounded-xl hover:bg-brand-amber transition-all hover:shadow-2xl hover:shadow-brand-yellow/20 hover:-translate-y-0.5"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
