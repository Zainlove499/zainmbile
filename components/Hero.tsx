export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden rounded-b-[60px] bg-gradient-to-b from-blue-600/90 to-slate-950 px-6 pb-20 pt-24 text-white shadow-2xl shadow-blue-900/40"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.45),_transparent_45%)]" />
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute right-10 top-24 -z-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="section-label fade-up">Budget Phone Finder</p>
          <h1 className="font-display fade-up delay-100 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Find the best phone for your budget without the stress.
          </h1>
          <p className="fade-up delay-200 text-lg text-blue-50/90">
            Compare popular models, filter by budget, and get a clean shortlist
            in minutes. Simple, fast, and built for real buyers.
          </p>
          <div className="fade-up delay-300 flex flex-wrap gap-4">
            <a
              href="#gallery"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-slate-100"
            >
              See Gallery
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white"
            >
              Get Price List
            </a>
          </div>
          <div className="fade-up delay-400 grid gap-4 text-sm text-blue-50/90 sm:grid-cols-3">
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
                className="glass-card rounded-2xl px-4 py-3"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-blue-200/80">
                  {item.label}
                </p>
                <p className="font-display text-base text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 -top-6 -z-10 h-24 w-24 rounded-full bg-blue-400/20 blur-2xl" />
          <div className="space-y-4">
            <div className="float-soft glass-card rounded-3xl p-3">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80"
                alt="Modern smartphone display"
                className="h-56 w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <p className="mt-3 text-sm text-blue-100/80">
                Smooth browsing for price comparisons.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div
                className="float-soft glass-card rounded-3xl p-3"
                style={{ animationDelay: "0.4s" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1480694313141-fce5e697ee25?auto=format&fit=crop&w=900&q=80"
                  alt="Phone camera closeup"
                  className="h-36 w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <p className="mt-3 text-xs text-blue-100/80">
                  Compare camera and battery easily.
                </p>
              </div>
              <div className="glass-card rounded-3xl p-4">
                <p className="section-label">Weekly updates</p>
                <p className="mt-2 text-sm text-blue-100/80">
                  New prices, best picks, and local deals shared with you first.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex rounded-full bg-blue-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-blue-400"
                >
                  Contact
                </a>
              </div>
            </div>
            <div
              className="float-soft glass-card rounded-3xl p-3"
              style={{ animationDelay: "0.8s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?auto=format&fit=crop&w=900&q=80"
                alt="Phone accessories on a desk"
                className="h-36 w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <p className="mt-3 text-xs text-blue-100/80">
                See options for every budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
