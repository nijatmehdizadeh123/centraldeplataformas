'use client';

import { useEffect } from 'react';
import { brands } from '@/app/data/brands';
import BrandCard from './BrandCard';
import DisclaimerBar from './DisclaimerBar';
import Image from 'next/image';
import Link from 'next/link';

interface MobileModalProps {
  gclid?: string;
}

export default function MobileModal({ gclid }: MobileModalProps) {
  const mobileBrands = brands.filter((b) => b.isMobile);
  const isOpen = Boolean(gclid && mobileBrands.length > 0);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-background overflow-y-auto animate-in fade-in duration-500"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="min-h-screen flex flex-col felt-texture">
        <div className="sticky top-0 z-[110] bg-black/85 backdrop-blur-xl border-b border-[#d4af37]/15 px-4 py-3 flex items-center justify-between">
          <Link href="/" className="relative w-12 h-12">
            <Image
              src="/logo.png"
              alt="Central de Plataformas"
              fill
              className="object-contain"
              priority
              sizes="48px"
            />
          </Link>
          <button className="text-white p-2" aria-label="Menu">
            <div className="w-5 h-4 flex flex-col justify-between items-end">
              <span className="h-0.5 w-5 bg-primary rounded-full" />
              <span className="h-0.5 w-3 bg-primary rounded-full" />
              <span className="h-0.5 w-5 bg-primary rounded-full" />
            </div>
          </button>
        </div>

        <section className="pt-6 pb-4 px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-primary">
              Exclusivo Mobile
            </span>
          </div>
          <h2 id="modal-title" className="text-2xl font-black mb-2 uppercase tracking-tight leading-tight">
            As Melhores <span className="gold-text">Ofertas do Dia</span>
          </h2>
          <p className="text-white/40 text-[11px] max-w-sm mx-auto font-medium mb-4 leading-relaxed">
            Novas ofertas, levantamentos rápidos e melhores plataformas selecionadas para si, com bónus exclusivos optimizados para o seu smartphone.
          </p>
        </section>

        <div className="px-3 pb-6">
          <div className="grid grid-cols-1 gap-3 mb-6">
            {mobileBrands.map((brand, index) => (
              <BrandCard
                key={brand.id}
                brand={brand}
                gclidValue={gclid}
                rank={index + 1}
                variant="modal"
                priority={index === 0}
              />
            ))}
          </div>

          <DisclaimerBar />
        </div>

        <div className="mt-auto bg-black/40 p-6 border-t border-white/5 text-center">
          <div className="flex justify-center gap-4 mb-4 opacity-70">
            <div className="relative w-8 h-8">
              <Image src="/icons/18plus.svg" alt="18+" fill className="object-contain" />
            </div>
            <div className="relative w-24 h-8">
              <Image src="/srij.png" alt="SRIJ" fill className="object-contain" />
            </div>
            <div className="relative w-28 h-8">
              <Image src="/jogo-responsavel.png" alt="Utilizacao Responsavel" fill className="object-contain" />
            </div>
          </div>
          <div className="text-[8px] text-white/10 uppercase tracking-[0.4em] font-black">
            © {currentYear} CENTRALDEPLATAFORMAS.COM
          </div>
        </div>
      </div>
    </div>
  );
}
