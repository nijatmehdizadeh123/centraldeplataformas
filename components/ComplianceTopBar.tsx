import Link from 'next/link';
import AgeBadge from '@/components/AgeBadge';

export default function ComplianceTopBar() {
  return (
    <div className="bg-black/60 border-b border-[#d4af37]/10 py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
          <AgeBadge size={18} />
          <span>Apenas 18+</span>
          <span className="text-white/20 mx-1">|</span>
          <span>Utilize com responsabilidade</span>
          <span className="text-white/20 mx-1">|</span>
          <Link
            href="https://www.jogoresponsavel.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/80 hover:text-primary transition-colors"
          >
            jogoresponsavel.pt
          </Link>
        </div>
      </div>
    </div>
  );
}
