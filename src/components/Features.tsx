import Image from "next/image";

const features = [
  {
    icon: "🌡️",
    title: "Current Conditions",
    desc: "Real-time temperature, humidity, wind speed & direction, pressure, dew point, and visibility at a glance.",
  },
  {
    icon: "📅",
    title: "7-Day Forecast",
    desc: "Plan your week with detailed daily outlook — conditions, highs, lows, and precipitation chances.",
  },
  {
    icon: "⚡",
    title: "Rapid Weather Alerts",
    desc: "Severe weather alerts pulled directly from the NWS — warnings, watches, and advisories.",
  },
  {
    icon: "⚠️",
    title: "Hazardous Weather Outlook",
    desc: "Up-to-date NWS hazardous outlook for your county so you can prepare days in advance.",
  },
  {
    icon: "💬",
    title: "Forecast Discussion",
    desc: "Read full NWS meteorologist discussions for in-depth insight into incoming weather systems.",
  },
  {
    icon: "🌅",
    title: "Sunrise & Sunset Times",
    desc: "Know exactly when the sun rises and sets each day — perfect for farmers, hunters, and planners.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-zinc-950 py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-brand-yellow text-xs sm:text-sm font-bold tracking-widest uppercase mb-3">
            What You Get
          </p>
          <h2
            className="font-black uppercase text-white mb-4 sm:mb-5 leading-none tracking-tight text-4xl sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
          >
            Weather Information<br />
            <span className="text-brand-yellow">You Can Trust</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Powered by the National Weather Service — the same data meteorologists and emergency
            managers rely on every day.
          </p>
        </div>

        {/* Full-width marketing image */}
        <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-800 mb-12 sm:mb-16 shadow-2xl shadow-black/40">
          <Image
            src="/images/features-overview.jpeg"
            alt="WeatherMax 7 features overview — weather information you can trust"
            width={1400}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-6 hover:border-zinc-600 hover:bg-zinc-900 transition-all flex flex-col gap-3"
            >
              <span className="text-2xl sm:text-3xl">{f.icon}</span>
              <div>
                <h3 className="text-white font-bold text-sm sm:text-base mb-1.5 sm:mb-2">{f.title}</h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
