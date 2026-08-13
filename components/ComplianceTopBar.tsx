import Link from 'next/link';

export default function ComplianceTopBar() {
  return (
    <div className="bg-black/60 border-b border-white/5 py-2">
      <div className="container mx-auto px-4">
        <p className="text-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
          18+ Apenas{' '}
          <span className="text-white/20 mx-2">|</span>
          Utilize com responsabilidade{' '}
          <span className="text-white/20 mx-2">|</span>
          <Link
            href="https://www.jogoresponsavel.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/80 hover:text-primary transition-colors"
          >
            jogoresponsavel.pt
          </Link>
        </p>
      </div>
    </div>
  );
}
