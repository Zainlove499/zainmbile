const services = [
  "Set your budget and filter by brand or PTA status.",
  "Compare specs like camera, battery, and storage.",
  "Contact us to confirm stock and the latest price.",
];

export default function Features() {
  return (
    <section id="how" className="px-6 pb-16 sm:px-8 lg:px-0">
      <div className="mx-auto max-w-5xl space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
        <div className="space-y-2 text-center">
          <p className="section-label fade-up">How It Works</p>
          <h2 className="font-display fade-up delay-100 text-3xl text-slate-900">
            Three easy steps to pick your phone.
          </h2>
          <p className="fade-up delay-200 text-lg text-slate-600">
            Set your budget, compare options, and confirm availability.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service}
              className="fade-up rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-teal-700/70">
                Step {index + 1}
              </p>
              <p className="mt-2 text-base text-slate-600">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
