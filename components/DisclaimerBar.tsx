import Link from 'next/link';

export default function DisclaimerBar() {
  return (
    <div className="bg-red-950/20 border-y border-red-500/10 py-4">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="text-red-500 text-lg font-black" aria-hidden="true">⚠</span>
            <span className="font-black text-white uppercase tracking-widest text-sm">
              Apenas para adultos 18+.
            </span>
          </div>

          <p className="text-xs text-white/60 leading-relaxed">
            O jogo pode causar dependência. Para ajuda, ligue{' '}
            <span className="text-white font-bold">213 123 400</span>{' '}
            ou visite{' '}
            <Link
              href="https://www.jogoresponsavel.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-bold"
            >
              Jogo Responsável
            </Link>
            . Regulado pelo SRIJ.
          </p>
        </div>
      </div>
    </div>
  );
}
