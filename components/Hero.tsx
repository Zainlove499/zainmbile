export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden rounded-b-[60px] bg-gradient-to-b from-blue-600/90 to-slate-950 px-6 pb-20 pt-20 text-white shadow-2xl shadow-blue-900/40"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.45),_transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl space-y-10 text-left">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.6em] text-blue-200/70">
            Zain Mobile Shop
          </p>
          <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">
            Zain Mobile Shop
          </h1>
          <p className="text-lg text-blue-50/90">
            Official Website – Lahore, Pakistan
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="glass-card flex flex-col gap-2 rounded-3xl px-6 py-5 text-base font-medium text-blue-50">
            <span className="text-sm uppercase tracking-[0.4em] text-blue-200">
              Address
            </span>
            <p>📍 Address: St #1, Awami Colony, Lahore – 54000</p>
          </div>
          <div className="glass-card flex flex-col gap-2 rounded-3xl px-6 py-5 text-base font-medium text-blue-50">
            <span className="text-sm uppercase tracking-[0.4em] text-blue-200">
              Phone
            </span>
            <p>📞 Phone: +92 301 2571556</p>
          </div>
          <div className="glass-card flex flex-col gap-2 rounded-3xl px-6 py-5 text-base font-medium text-blue-50">
            <span className="text-sm uppercase tracking-[0.4em] text-blue-200">
              Website
            </span>
            <a
              href="https://zainmobileshop.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-100 underline-offset-4 transition hover:text-white"
            >
              🌐 Website: https://zainmobileshop.vercel.app/
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="tel:+923012571556"
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-slate-100"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/923012571556"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
