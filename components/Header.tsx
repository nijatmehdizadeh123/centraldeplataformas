'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0514]/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="relative w-48 h-12 md:w-64 md:h-16">
            <Image
              src="/logo.png"
              alt="Central de Plataformas"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 192px, 256px"
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20">
            <span className="text-[10px] font-black text-red-500">18+</span>
          </div>
          <Link href="/" className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 hover:text-primary transition-all">Início</Link>
          <Link href="#brands" className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 hover:text-primary transition-all">Marcas</Link>
          <Link href="#guide" className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 hover:text-primary transition-all">Guia</Link>
          <Link href="#about" className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 hover:text-primary transition-all">Sobre Nós</Link>
          <Link href="#contact" className="px-6 py-2 rounded-full border border-primary/30 text-xs font-bold uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-black transition-all">Contacto</Link>
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
        <div className="lg:hidden bg-background border-b border-white/5 animate-in slide-in-from-top duration-500">
          <nav className="flex flex-col p-8 gap-6">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-primary">Início</Link>
            <Link href="#brands" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-primary">Marcas</Link>
            <Link href="#guide" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-primary">Guia</Link>
            <Link href="#about" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-primary">Sobre Nós</Link>
            <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-primary">Contacto</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
