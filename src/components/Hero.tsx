import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950">
      {/* Atmospheric background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] bg-blue-900/20 rounded-full blur-[100px] sm:blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-amber-900/10 rounded-full blur-[80px] sm:blur-[100px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left — Copy */}
          <div className="order-2 lg:order-1">
            {/* NWS badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/25 text-brand-yellow text-xs sm:text-sm font-semibold mb-5 sm:mb-8">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
              </svg>
              <span>Powered by National Weather Service Data</span>
            </div>

            {/* Headline */}
            <h1
              className="font-black uppercase leading-[0.88] mb-5 sm:mb-7 tracking-tight"
              style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
            >
              <span className="block text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl">KNOW</span>
              <span className="block text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl">BEFORE.</span>
              <span className="block text-brand-yellow text-5xl sm:text-6xl md:text-7xl lg:text-8xl">ACT FIRST.</span>
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 mb-2 sm:mb-3 leading-relaxed">
              Real-Time Weather Intelligence{" "}
              <span className="text-white font-semibold">Without Wi-Fi.</span>
            </p>
            <p className="text-sm sm:text-base text-zinc-500 mb-8 sm:mb-10 leading-relaxed max-w-lg">
              Trusted weather intelligence to protect your family, farm, livestock, business,
              and property — anywhere in the United States.
            </p>

            {/* CTAs */}
            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-14">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-yellow text-black font-bold text-sm rounded-xl hover:bg-brand-amber transition-all hover:shadow-2xl hover:shadow-brand-yellow/20 hover:-translate-y-0.5 active:translate-y-0"
              >
                Get Support
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 text-white font-semibold text-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                Explore Features
              </a>
            </div>

            {/* Quick badges */}
            <div className="flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-3">
              {[
                { label: "No Wi-Fi Needed" },
                { label: "No Monthly Fees" },
                { label: "No Recurring Fees" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-zinc-400">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Product image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Extra padding on lg+ to accommodate floating badges */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[520px] pt-0 lg:pt-6 pb-0 lg:pb-6">
              {/* Glow behind device */}
              <div className="absolute -inset-4 sm:-inset-8 bg-brand-blue/8 rounded-full blur-3xl" />

              {/* Device card */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-black/60">
                <Image
                  src="/images/weathermaxtab.png"
                  alt="WeatherMax 7 weather display device"
                  width={700}
                  height={530}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating — real-time badge (desktop only) */}
              <div className="hidden lg:flex absolute -bottom-5 -left-5 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 shadow-xl items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-yellow/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-xs font-bold leading-none">Real-Time Updates</p>
                  <p className="text-zinc-500 text-[11px] mt-0.5">Auto-refreshing data</p>
                </div>
              </div>

              {/* Floating — NWS badge (desktop only) */}
              <div className="hidden lg:flex absolute -top-5 -right-5 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 shadow-xl items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-brand-blue-light" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-xs font-bold leading-none">Powered by National Weather Service Data.</p>
                  <p className="text-zinc-500 text-[11px] mt-0.5">Official NWS data</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-600 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase font-medium hidden sm:block">Scroll</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
