import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/app/data/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-24 border-t border-[#d4af37]/15">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-20">
          <Link href="/" className="mb-12">
            <div className="relative w-28 h-28 md:w-32 md:h-32">
              <Image
                src="/logo.png"
                alt="Central de Plataformas"
                fill
                className="object-contain opacity-80 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-6xl text-center md:text-left">
            <div>
              <h4 className="text-white font-black uppercase tracking-[0.2em] mb-6 text-xs">Links Rápidos</h4>
              <ul className="space-y-3 text-[11px] font-bold uppercase tracking-widest text-white/60">
                <li><Link href="/" className="hover:text-primary transition-colors">Início</Link></li>
                <li><Link href="/plataformas" className="hover:text-primary transition-colors">Top Plataformas</Link></li>
                <li><Link href="/guia" className="hover:text-primary transition-colors">Guia de Avaliação</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-[0.2em] mb-6 text-xs">Legal</h4>
              <ul className="space-y-3 text-[11px] font-bold uppercase tracking-widest text-white/60">
                <li><Link href="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link></li>
                <li><Link href="/termos" className="hover:text-primary transition-colors">Termos de Serviço</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-[0.2em] mb-6 text-xs">Suporte</h4>
              <ul className="space-y-3 text-[11px] font-bold uppercase tracking-widest text-white/60">
                <li><Link href="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
                <li><Link href="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="hover:text-primary transition-colors normal-case tracking-wider">
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-[0.2em] mb-6 text-xs">Responsável</h4>
              <ul className="space-y-3 text-[11px] font-bold uppercase tracking-widest text-white/60">
                <li>
                  <Link href={SITE.srijUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    SRIJ Portugal
                  </Link>
                </li>
                <li>
                  <Link href={SITE.responsibleUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Jogo Responsável
                  </Link>
                </li>
                <li className="text-white/40 normal-case tracking-wider">Linha de Vida {SITE.linhaVida}</li>
                <li className="text-white/40 normal-case tracking-wider">{SITE.phone}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12 text-center">
          <p className="text-[11px] text-white/40 leading-relaxed">
            AVISO: O {SITE.domain} é um portal de afiliados independente. As nossas avaliações baseiam-se em experiência e pesquisa. Recebemos comissões dos operadores listados. Proibido a menores de 18 anos. Operadores sujeitos à supervisão do SRIJ — Serviço de Regulação e Inspeção de Jogos de Portugal.
          </p>
        </div>

        <div className="flex flex-col items-center pt-12 border-t border-white/5">
          <div className="w-full max-w-4xl mb-10 pointer-events-none select-none">
            <div className="grid grid-cols-5 gap-2 sm:gap-4 items-center justify-items-center">
              {[
                { src: '/compliance/18plus.png', alt: '18+', w: 56 },
                { src: '/compliance/srij.png', alt: 'SRIJ', w: 88 },
                { src: '/compliance/begambleaware.png', alt: 'BeGambleAware', w: 120 },
                { src: '/compliance/gamcare.png', alt: 'GamCare', w: 96 },
                { src: '/compliance/ibas.png', alt: 'IBAS', w: 88 },
              ].map((logo) => (
                <div
                  key={logo.src}
                  className="relative h-8 sm:h-10 w-full flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.w}
                    height={40}
                    className="object-contain h-8 sm:h-10 w-auto max-w-full"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-[9px] text-white/20 uppercase tracking-[0.4em] font-black">
            © {currentYear} {SITE.domain.toUpperCase()} • TODOS OS DIREITOS RESERVADOS
          </div>
        </div>
      </div>
    </footer>
  );
}
