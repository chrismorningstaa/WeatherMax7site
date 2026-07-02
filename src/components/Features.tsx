import Image from "next/image";

const features = [
  {
    icon: "🌡️",
    title: "Current Conditions",
    desc: "Real-time temperature, humidity, wind speed & direction, pressure, dew point, and visibility at a glance.",
    img: null,
  },
  {
    icon: "📅",
    title: "7-Day Forecast",
    desc: "Plan your week with detailed daily outlook — conditions, highs, lows, and precipitation chances.",
    img: null,
  },
  {
    icon: "⚡",
    title: "Rapid Weather Alerts",
    desc: "Severe weather alerts delivered as soon as the NWS issues them — warnings, watches, and advisories.",
    img: "/images/severe-alert.jpg",
  },
  {
    icon: "⚠️",
    title: "Hazardous Weather Outlook",
    desc: "Up-to-date NWS hazardous outlook for your county so you can prepare days in advance.",
    img: "/images/hazardous-outlook.jpg",
  },
  {
    icon: "💬",
    title: "Forecast Discussion",
    desc: "Read full NWS meteorologist discussions for in-depth insight into incoming weather systems.",
    img: "/images/forecast-discussion.jpg",
  },
  {
    icon: "🌅",
    title: "Sunrise & Sunset Times",
    desc: "Know exactly when the sun rises and sets each day — perfect for farmers, hunters, and planners.",
    img: "/images/sunrise-sunset.jpg",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-zinc-950 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-yellow text-sm font-bold tracking-widest uppercase mb-3">
            What You Get
          </p>
          <h2
            className="font-display font-black uppercase text-white mb-5 leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
            }}
          >
            Weather Information<br />
            <span className="text-brand-yellow">You Can Trust</span>
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Powered by the National Weather Service — the same data meteorologists and emergency
            managers rely on every day.
          </p>
        </div>

        {/* Full-width marketing image */}
        <div className="rounded-2xl overflow-hidden border border-zinc-800 mb-16 shadow-2xl shadow-black/40">
          <Image
            src="/images/features-overview.jpeg"
            alt="WeatherMax 7 features overview — weather information you can trust"
            width={1400}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden hover:border-zinc-600 transition-all hover:bg-zinc-900 flex flex-col"
            >
              {/* Optional screenshot preview */}
              {f.img && (
                <div className="relative h-40 overflow-hidden border-b border-zinc-800">
                  <Image
                    src={f.img}
                    alt={f.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                </div>
              )}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
