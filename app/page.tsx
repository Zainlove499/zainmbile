import About from "@/components/About";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Page() {
  return (
    <>
      <Header />
      <main className="space-y-0">
        <Hero />
        <About />
        <Features />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/70 px-6 py-8 text-center text-sm text-slate-400">
        <p>© 2025 Zain Mobile Shop. All rights reserved.</p>
        <p>Legal Business Name: Zain Mobile Shop</p>
        <p>Address: St #1, Awami Colony, Lahore – 54000</p>
        <p>Phone: +92 301 2571556</p>
      </footer>
    </>
  );
}
