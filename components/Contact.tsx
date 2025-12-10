export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 pb-20 pt-16 sm:px-8 lg:px-0"
    >
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-slate-900/40">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-300/80">
            Contact
          </p>
          <h2 className="text-3xl font-semibold text-white">Get in Touch</h2>
          <p className="text-slate-300">
            St #1, Awami Colony, Lahore - 54000
          </p>
        </div>
        <div className="mt-6 grid gap-6 text-lg text-slate-100 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-300/70">
              Phone
            </p>
            <p className="mt-2 text-2xl font-semibold">+92 301 2571556</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-300/70">
              Address
            </p>
            <p className="mt-2 text-slate-200">
              St #1, Awami Colony, Lahore - 54000
            </p>
          </div>
        </div>
        <div className="mt-8">
          <a
            href="https://wa.me/923012571556"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-blue-400"
          >
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
