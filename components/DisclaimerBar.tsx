import Link from 'next/link';
import AgeBadge from '@/components/AgeBadge';

export default function DisclaimerBar() {
  return (
    <div className="bg-black/40 border-y border-[#d4af37]/15 py-4">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-3 flex-shrink-0">
            <AgeBadge size={40} />
            <span className="font-black text-white uppercase tracking-widest text-sm">
              Apenas 18+.
            </span>
          </div>

          <p className="text-xs text-white/60 leading-relaxed">
            Utilize com responsabilidade. Pode criar dependência. Se precisar de ajuda, contacte a Linha de Vida{' '}
            <span className="text-white font-bold">1414</span>
            {' '}ou{' '}
            <span className="text-white font-bold">+351 211 167 300</span>
            . Regulado pelo SRIJ.{' '}
            <Link
              href="https://www.jogoresponsavel.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-bold"
            >
              jogoresponsavel.pt
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
