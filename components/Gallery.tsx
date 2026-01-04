const galleryItems = [
  {
    title: "Budget Picks",
    copy: "Shortlist phones by price, RAM, and storage without the noise.",
    image:
      "https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Camera Focus",
    copy: "Compare camera specs fast before you spend the money.",
    image:
      "https://images.unsplash.com/photo-1570101945621-945409a6370f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Daily Use",
    copy: "Pick the right phone for battery, display, and smooth scrolling.",
    image:
      "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="px-6 py-16 sm:px-8 lg:px-0">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-2 text-center">
          <p className="section-label fade-up">Mobile Help Gallery</p>
          <h2 className="font-display fade-up delay-100 text-3xl text-white sm:text-4xl">
            Clear visuals for quick decisions.
          </h2>
          <p className="fade-up delay-200 text-lg text-blue-50/90">
            Real world use cases to guide your budget choice.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className="fade-up rounded-3xl border border-white/10 bg-slate-900/60 p-4 shadow-[0_20px_45px_rgba(2,6,23,0.55)]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <h3 className="font-display mt-4 text-lg text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-blue-100/80">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
