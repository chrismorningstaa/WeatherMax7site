import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Unbox",
    desc: "Remove all items from the box. Everything you need is included — no accessories required.",
  },
  {
    number: "02",
    title: "Power On",
    desc: "Plug in the power adapter and press the red power button on the side for 3 seconds.",
  },
  {
    number: "03",
    title: "Let It Update",
    desc: "Allow a few minutes for the device to pull in the latest NWS data. Updates run automatically.",
  },
  {
    number: "04",
    title: "View Weather",
    desc: "Tap any section on the touchscreen to explore current conditions, forecasts, alerts, and more.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-zinc-950 py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="text-brand-yellow text-xs sm:text-sm font-bold tracking-widest uppercase mb-3">
            Setup
          </p>
          <h2
            className="font-black uppercase text-white mb-4 sm:mb-5 leading-none tracking-tight text-4xl sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
          >
            Turn On.<br />
            <span className="text-brand-yellow">Check Anywhere.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Getting started takes less than 5 minutes. Plug it in and your weather station
            is already working — no app, no account, no Wi-Fi network needed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Steps */}
          <div className="flex flex-col gap-0">
            {steps.map((s, i) => (
              <div
                key={s.number}
                className="group flex gap-4 sm:gap-6 pb-8 sm:pb-10 last:pb-0 relative"
              >
                {/* Vertical connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[28px] top-14 bottom-0 w-px bg-zinc-800" />
                )}

                {/* Number circle */}
                <div className="shrink-0 w-14 h-14 rounded-full border-2 border-brand-yellow bg-brand-yellow/10 flex items-center justify-center z-10">
                  <span
                    className="text-brand-yellow font-black text-lg leading-none"
                    style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
                  >
                    {s.number}
                  </span>
                </div>

                <div className="pt-1">
                  <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-md">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-6 bg-brand-blue/5 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-black/60">
              <Image
                src="/images/know-before-guide.jpeg"
                alt="WeatherMax 7 quick start guide — Know Before. Act First."
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Full-width "Turn On. Check Anywhere." banner */}
        <div className="mt-12 sm:mt-20 rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl shadow-black/40">
          <Image
            src="/images/banner-anywhere.jpeg"
            alt="Turn On. Check Anywhere. — No Wi-Fi, no monthly fees, no recurring fees"
            width={1400}
            height={280}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
