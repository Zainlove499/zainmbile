export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-16 pt-12 sm:px-8 lg:px-0">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_25px_70px_rgba(2,6,23,0.6)]">
        <p className="section-label fade-up">Contact</p>
        <h2 className="font-display fade-up delay-100 mt-2 text-3xl text-white">
          Need the latest prices or stock?
        </h2>
        <p className="fade-up delay-200 mt-4 text-lg text-slate-200">
          We can share updated price lists, availability, or help you pick the
          best phone for your budget.
        </p>
        <div className="fade-up delay-300 mt-6 space-y-3 text-lg text-slate-200">
          <p>Call now: +92 301 2571556</p>
          <p>WhatsApp: https://wa.me/923012571556</p>
          <p>Website: https://zainmobileshop.xyz</p>
        </div>
        <div className="fade-up delay-400 mt-8 flex flex-wrap gap-4">
          <a
            href="tel:+923012571556"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-slate-100"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/923012571556"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
