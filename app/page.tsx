import About from "@/components/About";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MetaInfo from "@/components/MetaInfo";

export default function Page() {
  return (
    <>
      <Header />
      <main className="space-y-0">
        <Hero />
        <About />
        <Features />
        <Contact />
        <MetaInfo />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/70 px-6 py-8 text-center text-sm text-slate-400">
        © 2025 Zain Mobile Shop. All rights reserved.
      </footer>
    </>
  );
}
