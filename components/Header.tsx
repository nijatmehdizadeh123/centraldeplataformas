'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/app/data/site';
import AgeBadge from '@/components/AgeBadge';

const PATH_ALIASES: Record<string, string> = {
  '/privacy': '/privacidade',
  '/terms': '/termos',
};

function isActivePath(pathname: string, href: string) {
  const current = PATH_ALIASES[pathname] || pathname;
  if (href === '/') return current === '/';
  return current === href || current.startsWith(`${href}/`);
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-black/85 backdrop-blur-xl border-b border-[#d4af37]/15">
      <div className="container mx-auto px-3 md:px-4 h-20 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center group flex-shrink-0">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image
              src="/logo.png"
              alt="Central de Plataformas"
              fill
              className="object-contain"
              priority
              sizes="64px"
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center justify-end flex-wrap gap-x-4 gap-y-2">
          <div className="flex items-center" title="Apenas para adultos 18+">
            <AgeBadge size={28} />
          </div>
          {NAV_LINKS.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] font-bold uppercase tracking-[0.16em] transition-all ${
                  active ? 'text-primary' : 'text-white/80 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-background border-b border-[#d4af37]/15">
          <nav className="flex flex-col p-8 gap-6">
            {NAV_LINKS.map((link) => {
              const active = isActivePath(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-widest ${
                    active ? 'text-primary' : 'text-white/70 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
