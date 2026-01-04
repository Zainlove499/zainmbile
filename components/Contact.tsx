export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-16 pt-12 sm:px-8 lg:px-0">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
        <p className="section-label fade-up">Contact</p>
        <h2 className="font-display fade-up delay-100 mt-2 text-3xl text-slate-900">
          Need the latest prices or stock?
        </h2>
        <p className="fade-up delay-200 mt-4 text-lg text-slate-600">
          We can share updated price lists, availability, or help you pick the
          best phone for your budget.
        </p>
        <div className="fade-up delay-300 mt-6 space-y-3 text-lg text-slate-600">
          <p>Call now: +92 301 2571556</p>
          <p>WhatsApp: https://wa.me/923012571556</p>
          <p>Website: https://zainmobileshop.xyz</p>
        </div>
        <div className="fade-up delay-400 mt-8 flex flex-wrap gap-4">
          <a
            href="tel:+923012571556"
            className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-teal-500"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/923012571556"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 transition hover:border-slate-400"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
