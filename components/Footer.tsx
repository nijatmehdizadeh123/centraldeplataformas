import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black py-24 border-t border-[#d4af37]/15">
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
                <li><Link href="#brands" className="hover:text-primary transition-colors">Top Plataformas</Link></li>
                <li><Link href="#guide" className="hover:text-primary transition-colors">Guia de Avaliação</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-[0.2em] mb-6 text-xs">Legal</h4>
              <ul className="space-y-3 text-[11px] font-bold uppercase tracking-widest text-white/60">
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacidade</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Termos de Serviço</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-[0.2em] mb-6 text-xs">Suporte</h4>
              <ul className="space-y-3 text-[11px] font-bold uppercase tracking-widest text-white/60">
                <li><Link href="#about" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
                <li><Link href="#contact" className="hover:text-primary transition-colors">Contacto</Link></li>
                <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-[0.2em] mb-6 text-xs">Responsável</h4>
              <ul className="space-y-3 text-[11px] font-bold uppercase tracking-widest text-white/60">
                <li>
                  <Link href="https://www.srij.turismodeportugal.pt/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    SRIJ Portugal
                  </Link>
                </li>
                <li>
                  <Link href="https://www.jogoresponsavel.pt/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Jogo Responsável
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12 text-center">
          <p className="text-[11px] text-white/40 leading-relaxed">
            AVISO: O centraldeplataformas.com é um portal de afiliados independente. As nossas avaliações baseiam-se em experiência e pesquisa. Recebemos comissões dos operadores listados. Proibido a menores de 18 anos. Operadores sujeitos à supervisão do SRIJ — Serviço de Regulação e Inspeção de Jogos de Portugal.
          </p>
        </div>

        <div className="flex flex-col items-center pt-12 border-t border-white/5">
          <div className="flex flex-wrap justify-center items-center gap-8 mb-10 opacity-70 hover:opacity-100 transition-all duration-700">
            <div className="relative w-12 h-12">
              <Image src="/icons/18plus.svg" alt="18+" fill className="object-contain" />
            </div>
            <div className="relative w-28 h-12">
              <Image src="/srij.png" alt="SRIJ" fill className="object-contain" />
            </div>
            <div className="relative w-36 h-12">
              <Image src="/jogo-responsavel.png" alt="Utilizacao Responsavel" fill className="object-contain" />
            </div>
          </div>

          <div className="text-[9px] text-white/20 uppercase tracking-[0.4em] font-black">
            © {currentYear} CENTRALDEPLATAFORMAS.COM • TODOS OS DIREITOS RESERVADOS
          </div>
        </div>
      </div>
    </footer>
  );
}
