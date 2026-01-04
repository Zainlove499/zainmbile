const galleryItems = [
  {
    title: "Budget Picks",
    copy: "Shortlist phones by price, RAM, and storage without the noise.",
    image: "https://source.unsplash.com/featured/800x600/?smartphone,price&sig=4",
  },
  {
    title: "Camera Focus",
    copy: "Compare camera specs fast before you spend the money.",
    image: "https://source.unsplash.com/featured/800x600/?phone-camera&sig=5",
  },
  {
    title: "Daily Use",
    copy: "Pick the right phone for battery, display, and smooth scrolling.",
    image: "https://source.unsplash.com/featured/800x600/?mobile,hand&sig=6",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="px-6 py-16 sm:px-8 lg:px-0">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-2 text-center">
          <p className="section-label fade-up">Mobile Help Gallery</p>
          <h2 className="font-display fade-up delay-100 text-3xl text-slate-900 sm:text-4xl">
            Clear visuals for quick decisions.
          </h2>
          <p className="fade-up delay-200 text-lg text-slate-600">
            Real world use cases to guide your budget choice.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className="fade-up rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <h3 className="font-display mt-4 text-lg text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
