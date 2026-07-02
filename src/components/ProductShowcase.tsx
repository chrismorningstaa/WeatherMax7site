import Image from "next/image";

const mountingOptions = [
  {
    img: "/images/kickstand.jpg",
    title: "Tabletop Kickstand",
    desc: "Built-in foldable kickstand lets you prop it up on any flat surface — countertop, desk, or workbench.",
  },
  {
    img: "/images/wall-mount.jpg",
    title: "Wall Mount Insert",
    desc: "Keyhole mounting slot on the back lets you hang it on any standard wall screw for a clean, permanent install.",
  },
];

export default function ProductShowcase() {
  return (
    <section id="product" className="bg-zinc-900 py-20 sm:py-28 lg:py-32 border-y border-zinc-800">

      {/* Accurate. Reliable. Always. full-width banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20">
        <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl shadow-black/50">
          <Image
            src="/images/accurate-reliable.jpeg"
            alt="WeatherMax 7 — Accurate. Reliable. Always."
            width={1400}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="text-brand-yellow text-xs sm:text-sm font-bold tracking-widest uppercase mb-3">
            The Device
          </p>
          <h2
            className="font-black uppercase text-white mb-4 sm:mb-5 leading-none tracking-tight text-4xl sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
          >
            Designed to Be Placed<br />
            <span className="text-brand-yellow">Anywhere You Need It</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Compact touchscreen display. Bold red power button. Two mounting options.
            Built to last in any environment.
          </p>
        </div>

        {/* Large device image */}
        <div className="flex justify-center mb-10 sm:mb-16">
          <div className="relative w-full max-w-xs sm:max-w-lg lg:max-w-2xl">
            <div className="absolute -inset-6 sm:-inset-10 bg-brand-yellow/5 rounded-full blur-3xl" />
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl shadow-black/70">
              <Image
                src="/images/weathermaxtab.png"
                alt="WeatherMax 7 device — front view"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mounting options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {mountingOptions.map((m) => (
            <div
              key={m.title}
              className="group rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-950/50 overflow-hidden hover:border-zinc-600 transition-all"
            >
              <div className="relative h-48 sm:h-64 overflow-hidden bg-zinc-800">
                <Image
                  src={m.img}
                  alt={m.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2">{m.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Power button callout */}
        <div className="mt-6 sm:mt-12 rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-950/50 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-8 text-center sm:text-left">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 shrink-0">
            <Image
              src="/images/power-button.jpg"
              alt="WeatherMax 7 red power button"
              fill
              className="object-cover rounded-full border-2 border-zinc-700"
            />
          </div>
          <div>
            <h3 className="text-white font-bold text-xl mb-3">One Button. Total Control.</h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
              The bold red power button on the side is impossible to miss. Press once to wake the
              screen. Press and hold for 3 seconds to power on or off. That&apos;s it — no complex
              setup, no configuration menus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
