"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/games", label: "Games" },
  { href: "/tools", label: "Tools" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-shell items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-paper transition-opacity hover:opacity-80"
        >
          Sam Makes Games
        </Link>

        <ul className="flex items-center gap-1 text-sm">
          {LINKS.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 transition-colors ${
                    active
                      ? "bg-white/10 text-paper"
                      : "text-paper-dim hover:bg-white/5 hover:text-paper"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
