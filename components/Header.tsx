import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#how", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#home"
          className="font-display text-lg font-semibold tracking-wide text-white"
        >
          Zain Mobile Shop
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="hidden rounded-full bg-blue-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-blue-400 md:inline-flex"
        >
          Get Prices
        </Link>
        <div className="md:hidden">
          <Link
            href="#gallery"
            className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-white"
          >
            Gallery
          </Link>
        </div>
      </div>
    </header>
  );
}
