export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-16 pt-12 sm:px-8 lg:px-0">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_25px_75px_rgba(2,6,23,0.65)]">
        <p className="text-sm uppercase tracking-[0.4em] text-blue-300/70">
          Contact Us
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-white">Contact Us</h2>
        <div className="mt-6 space-y-3 text-lg text-slate-200">
          <p>📞 Call Now: +92 301 2571556</p>
          <p>💬 WhatsApp: https://wa.me/923012571556</p>
          <p>📍 Location: St #1, Awami Colony, Lahore – 54000</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="tel:+923012571556"
            className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-blue-400"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/923012571556"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-blue-500/70 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-blue-300"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
