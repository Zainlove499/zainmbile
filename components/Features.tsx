const features = [
  {
    title: "Quality Accessories",
    description: "We provide premium mobile accessories at affordable prices.",
  },
  {
    title: "Mobile Repair",
    description: "Fast and reliable repair services for all smartphone brands.",
  },
  {
    title: "Customer Support",
    description:
      "Friendly customer service available on WhatsApp anytime.",
  },
];

export default function Features() {
  return (
    <section
      id="about"
      className="px-6 py-16 sm:px-8 lg:px-0"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            What we offer
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-slate-300">
            Zain Mobile Shop keeps Lahore connected with curated accessories,
            expert repairs, and attentive support.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="glass-card rounded-3xl p-6 backdrop-blur-lg transition hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(2,6,23,0.45)]"
            >
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm text-slate-200">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
