import Image from "next/image";

const links = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For You", href: "#use-cases" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand — WeatherMax7 */}
          <div>
            <Image
              src="/images/brand-logo.png"
              alt="WeatherMax 7"
              width={160}
              height={80}
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Real-Time Weather Intelligence Without Wi-Fi. Powered by National Weather Service data.
              No subscriptions. No surprises.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">Navigate</h4>
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-zinc-500 text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company — Atmos Corex */}
          <div>
            <div className="rounded-xl border border-zinc-800/40 bg-black p-4 inline-block mb-5">
              <Image
                src="/images/company-logo.png"
                alt="Atmos Corex LLC"
                width={200}
                height={85}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              WeatherMax 7 is a product of Atmos Corex LLC — pioneering accessible weather technology
              for homes, farms, and businesses across America.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Atmos Corex LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-zinc-600 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow inline-block" />
            WeatherMax 7™
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 inline-block" />
            Powered by NWS Data
          </div>
        </div>
      </div>
    </footer>
  );
}
