"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

const subjects = [
  "Purchase Inquiry",
  "Technical Support",
  "Product Information",
  "Shipping & Returns",
  "General Question",
  "Other",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-zinc-950 border-t border-zinc-800 py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left — Brand info */}
          <div>
            <p className="text-brand-yellow text-xs sm:text-sm font-bold tracking-widest uppercase mb-3">
              Contact
            </p>
            <h2
              className="font-black uppercase text-white mb-4 sm:mb-5 leading-none tracking-tight text-4xl sm:text-5xl lg:text-6xl"
              style={{
                fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)",
              }}
            >
              We&apos;re Here<br />
              <span className="text-brand-yellow">to Help</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-md">
              Have a question about WeatherMax 7? Need support or want to report an issue?
              Fill out the form and we&apos;ll get back to you as quickly as possible.
            </p>

            {/* Company logo */}
            <div className="rounded-2xl border border-zinc-800/40 bg-black p-6 mb-8 inline-block">
              <Image
                src="/images/company-logo.png"
                alt="Atmos Corex LLC"
                width={260}
                height={110}
                className="w-52 h-auto object-contain"
              />
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-yellow" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Email Support</p>
                  <p className="text-zinc-400 text-sm mt-0.5">Use the form to send us a message directly.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-yellow" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Response Time</p>
                  <p className="text-zinc-400 text-sm mt-0.5">We typically respond within 1–2 business days.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 sm:p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-zinc-400 text-sm">
                    Thanks for reaching out. We&apos;ll get back to you within 1–2 business days.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-brand-yellow text-sm font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-zinc-300 text-sm font-semibold">
                      Full Name <span className="text-brand-yellow">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="rounded-xl border border-zinc-700 bg-zinc-800/60 text-white placeholder-zinc-600 px-4 py-3 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/30 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-zinc-300 text-sm font-semibold">
                      Email Address <span className="text-brand-yellow">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="rounded-xl border border-zinc-700 bg-zinc-800/60 text-white placeholder-zinc-600 px-4 py-3 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-zinc-300 text-sm font-semibold">
                    Subject <span className="text-brand-yellow">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="rounded-xl border border-zinc-700 bg-zinc-800/60 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/30 transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a subject…</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-zinc-300 text-sm font-semibold">
                    Message <span className="text-brand-yellow">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help…"
                    className="rounded-xl border border-zinc-700 bg-zinc-800/60 text-white placeholder-zinc-600 px-4 py-3 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/30 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-yellow text-black font-bold text-sm rounded-xl hover:bg-brand-amber transition-all hover:shadow-xl hover:shadow-brand-yellow/20 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
