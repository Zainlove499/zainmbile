export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden px-6 pb-20 pt-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.18),_transparent_45%)]" />
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-300/40 blur-3xl" />
      <div className="absolute right-10 top-24 -z-10 h-56 w-56 rounded-full bg-sky-200/70 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="section-label fade-up">Budget Phone Finder</p>
          <h1 className="font-display fade-up delay-100 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Find the best phone for your budget without the stress.
          </h1>
          <p className="fade-up delay-200 text-lg text-slate-600">
            Compare popular models, filter by budget, and get a clean shortlist
            in minutes. Simple, fast, and built for real buyers.
          </p>
          <div className="fade-up delay-300 flex flex-wrap gap-4">
            <a
              href="#gallery"
              className="rounded-full bg-teal-600 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-teal-500"
            >
              See Gallery
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 transition hover:border-slate-400"
            >
              Get Price List
            </a>
          </div>
          <div className="fade-up delay-400 grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
            {[
              {
                label: "Budget Range",
                value: "PKR 20k to 400k",
              },
              {
                label: "Smart Filters",
                value: "Brand, PTA, Storage",
              },
              {
                label: "Compare",
                value: "Pick 3 phones",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-teal-700/70">
                  {item.label}
                </p>
                <p className="font-display text-base text-slate-900">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 -top-6 -z-10 h-24 w-24 rounded-full bg-emerald-200/70 blur-2xl" />
          <div className="space-y-4">
            <div className="float-soft glass-card rounded-3xl p-3">
              <img
                src="https://source.unsplash.com/featured/800x600/?smartphone&sig=1"
                alt="Modern smartphone display"
                className="h-56 w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <p className="mt-3 text-sm text-slate-600">
                Smooth browsing for price comparisons.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="float-soft glass-card rounded-3xl p-3" style={{ animationDelay: "0.4s" }}>
                <img
                  src="https://source.unsplash.com/featured/800x600/?mobile-phone&sig=2"
                  alt="Phone camera closeup"
                  className="h-36 w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <p className="mt-3 text-xs text-slate-600">
                  Compare camera and battery easily.
                </p>
              </div>
              <div className="glass-card rounded-3xl p-4">
                <p className="section-label">Weekly updates</p>
                <p className="mt-2 text-sm text-slate-600">
                  New prices, best picks, and local deals shared with you first.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-slate-800"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="float-soft glass-card rounded-3xl p-3" style={{ animationDelay: "0.8s" }}>
              <img
                src="https://source.unsplash.com/featured/800x600/?phone-accessories&sig=3"
                alt="Phone accessories on a desk"
                className="h-36 w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <p className="mt-3 text-xs text-slate-600">
                See options for every budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
