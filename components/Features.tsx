const services = [
  "✔ High-quality mobile accessories",
  "✔ Fast mobile repair services",
  "✔ Affordable prices",
  "✔ Friendly customer support",
  "✔ WhatsApp assistance available anytime",
];

export default function Features() {
  return (
    <section className="px-6 pb-16 sm:px-8 lg:px-0">
      <div className="mx-auto max-w-5xl space-y-6 rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/70 to-slate-950/70 p-8 shadow-2xl shadow-slate-950/50">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-blue-300/60">
            Our Services
          </p>
          <h2 className="text-3xl font-semibold text-white">Our Services</h2>
        </div>
        <ul className="space-y-4 text-lg text-slate-200">
          {services.map((service) => (
            <li
              key={service}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left shadow-[0_20px_45px_rgba(2,6,23,0.5)]"
            >
              <span className="text-blue-400">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
