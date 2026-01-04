import About from "@/components/About"
import Contact from "@/components/Contact"
import Features from "@/components/Features"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Gallery from "@/components/Gallery"
import Link from "next/link"

export default function Page() {
  return (
    <>
      <Header />
      <main className="space-y-0">
        <Hero />
        <Gallery />
        <About />
        <Features />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/70 px-6 py-12 text-center">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="space-y-2 text-sm text-slate-400">
            <p>(c) 2025 Zain Mobile Shop. All rights reserved.</p>
            <p>Legal Business Name: Zain Mobile Shop</p>
            <p>Phone: +92 301 2571556</p>
            <p>Website: https://zainmobileshop.xyz</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400 sm:text-sm">
            <span className="whitespace-nowrap">Design and Developed by</span>
            <Link
              href="https://wa.me/923012571556"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center overflow-hidden rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold leading-none text-[#FFD166] transition hover:scale-105 hover:bg-white/20 sm:px-4"
              aria-label="Chat with Muhammad Saleem on WhatsApp"
            >
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[9px] font-bold uppercase leading-none tracking-[0.2em] text-white/25 animate-pulse sm:text-[10px]">
                wa.me/923012571556
              </span>
              <span className="relative z-10 whitespace-nowrap">Muhammad Saleem</span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
