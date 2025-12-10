export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-b-[60px] bg-gradient-to-b from-blue-600/80 to-slate-950 px-6 pb-20 pt-20 text-white shadow-2xl shadow-blue-900/30"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.45),_transparent_45%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 py-12 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-200/70">
            Zain Mobile Shop
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Welcome to Zain Mobile Shop
          </h1>
          <p className="max-w-xl text-lg text-blue-50/90">
            Mobile accessories, repairs & digital services.
          </p>
          <p className="text-sm font-medium tracking-wide text-blue-100/70">
            Your trusted mobile accessories & services partner in Lahore.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+923012571556"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-slate-100"
            >
              Call Now
            </a>
          </div>
        </div>
        <div className="flex flex-1 justify-center lg:justify-end">
          <div className="glass-card relative w-full max-w-sm rounded-3xl px-8 py-10 text-left shadow-2xl shadow-blue-900/40">
            <div className="text-xs uppercase tracking-[0.4em] text-blue-200">
              Trusted Since 2020
            </div>
            <div className="mt-4 text-sm text-blue-50">
              St #1, Awami Colony, Lahore - 54000
            </div>
            <div className="mt-6 text-3xl font-semibold text-white">
              +92 301 2571556
            </div>
            <p className="mt-4 text-sm text-blue-100/80">
              Mobile accessories, repairs & digital support with friendly local
              care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
