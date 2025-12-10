import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#home"
          className="text-lg font-semibold tracking-wide text-white"
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
        <div className="md:hidden">
          <button
            type="button"
            className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-white"
            aria-label="Menu"
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
