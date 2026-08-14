'use client';

import Image from 'next/image';
import { Fragment } from 'react';
import { Brand } from '@/app/data/brands';
import { track } from '@vercel/analytics';

interface BrandCardProps {
  brand: Brand;
  gclidValue?: string;
  rank: number;
  variant?: 'default' | 'modal';
  priority?: boolean;
}

export const buildUrl = (url: string, gclid?: string) => {
  if (!gclid) return url;
  return `${url}${gclid}`;
};

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

const RANK_BADGES: Record<number, { label: string; className: string }> = {
  1: { label: 'Escolha do Editor', className: 'from-[#f5d76e] via-[#d4af37] to-[#8b6e31]' },
  2: { label: 'Mais Popular', className: 'from-[#e8d5a3] via-[#c5a059] to-[#8b6e31]' },
  3: { label: 'Em Destaque', className: 'from-[#d4af37] via-[#b8963a] to-[#6b5424]' },
};

const getBadgeTextColor = (hex: string) => {
  const match = /^#?([a-f\d]{6})$/i.exec(hex);
  if (!match) return '#000';
  const num = parseInt(match[1], 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? '#0a0a0a' : '#fff';
};

const generateDynamicRating = (rank: number) => {
  return Math.max(9.0, 9.9 - (rank - 1) * 0.1);
};

const highlightBonus = (text: string) => {
  const parts = text.split(/(\d[\d.,\s]*(?:%|€|\$)?(?:\s?(?:EUR|RG|FS|TG))?)/gi);
  return parts.map((part, i) =>
    /\d/.test(part) ? (
      <span key={i} className="gold-text whitespace-nowrap">{part}</span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
};

export default function BrandCard({ brand, gclidValue, rank, variant = 'default', priority }: BrandCardProps) {
  const finalUrl = buildUrl(brand.url, gclidValue);
  const isModal = variant === 'modal';
  const dynamicRating = generateDynamicRating(rank);
  const rankBadge = RANK_BADGES[rank];

  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    track('Brand Click', { brand: brand.name });
    if (typeof window.gtag_report_conversion === 'function') {
      e.preventDefault();
      window.gtag_report_conversion(finalUrl);
    }
  };

  return (
    <div className="relative">
      {rankBadge && (
        <div
          className={`absolute -top-3 right-4 z-20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-linear-to-r ${rankBadge.className} text-black shadow-lg`}
        >
          {rankBadge.label}
        </div>
      )}

      {brand.badge && (
        <div
          className={`absolute z-20 rounded-full font-black uppercase tracking-widest shadow-lg ${isModal ? '-top-2.5 left-3 px-2.5 py-1 text-[8px]' : '-top-3 left-4 px-3 py-1 text-[10px]'}`}
          style={{ backgroundColor: brand.badge.color, color: getBadgeTextColor(brand.badge.color) }}
        >
          {brand.badge.text}
        </div>
      )}

      <a
        href={finalUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCardClick}
        className="platform-card-bg platform-glow relative group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      >
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/40 rounded-tr-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/30 rounded-bl-2xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-2xl pointer-events-none" />

        <div className={isModal ? 'p-4' : 'p-5'}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col items-start flex-shrink-0">
              <div className={`relative flex items-center justify-center ${isModal ? 'w-28 h-14 mb-1.5' : 'w-32 h-16 mb-2'}`}>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  priority={priority}
                  sizes="(max-width: 768px) 40vw, 20vw"
                />
              </div>
              <div className={`flex items-center gap-1 ${isModal ? 'mb-1' : 'mb-1.5'}`}>
                <div className={`flex text-[#d4af37] ${isModal ? 'text-[8px]' : 'text-[9px]'}`} aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className={`font-bold text-white/90 ${isModal ? 'text-[10px]' : 'text-[11px]'}`}>
                  {dynamicRating.toFixed(1)}
                </span>
                <span className={`text-white/40 font-medium ${isModal ? 'text-[8px]' : 'text-[9px]'}`}>/10</span>
              </div>
              <div className={`text-white/30 font-medium ${isModal ? 'text-[8px]' : 'text-[9px]'}`}>
                Pontuação editorial
              </div>
            </div>

            <div className="flex flex-col items-end text-right flex-grow min-w-0">
              <div className={`inline-block rounded-full bg-white/5 border border-white/10 ${isModal ? 'px-2 py-0.5 mb-1.5' : 'px-2.5 py-1 mb-2'}`}>
                <span className={`font-black uppercase tracking-[0.2em] text-primary ${isModal ? 'text-[7px]' : 'text-[9px]'}`}>
                  Anúncio
                </span>
              </div>
              <div className={`font-black leading-snug tracking-tight ${isModal ? 'text-[13px] mb-2' : 'text-sm mb-2'}`}>
                {highlightBonus(brand.bonus)}
              </div>
              <div className={`text-white/35 font-bold uppercase tracking-widest mb-2 ${isModal ? 'text-[8px]' : 'text-[9px]'}`}>
                Link de afiliado
              </div>

              <span
                className={`w-full btn-gradient rounded-xl shadow-lg shadow-primary/20 uppercase font-black tracking-[0.15em] inline-flex items-center justify-center group-hover:scale-[1.01] overflow-hidden relative transition-all duration-300 gold-shimmer ${isModal ? 'py-2.5 text-[10px]' : 'py-3 text-xs'}`}
              >
                <span className="relative z-10">Obter Bónus</span>
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
              <p className={`text-white/35 mt-2 ${isModal ? 'text-[7px]' : 'text-[8px]'}`}>
                +18. Aplicam-se termos e condições da marca licenciada. Ofertas sujeitas a alteração.
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
