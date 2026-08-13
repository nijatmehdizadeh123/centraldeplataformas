'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/app/data/site';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/85 backdrop-blur-xl border-b border-[#d4af37]/15">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="relative w-14 h-14 md:w-16 md:h-16">
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

        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20">
            <span className="text-[10px] font-black text-red-500">18+</span>
          </div>
          {NAV_LINKS.map((link) =>
            link.href === '/contacto' ? (
              <Link
                key={link.href}
                href={link.href}
                className="px-6 py-2 rounded-full border border-primary/40 text-xs font-bold uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-black transition-all"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 hover:text-primary transition-all"
              >
                {link.label}
              </Link>
            )
          )}
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
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-bold uppercase tracking-widest ${link.href === '/contacto' ? 'text-primary' : 'text-white/70 hover:text-primary'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
