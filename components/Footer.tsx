import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#05020a] py-24 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-20">
          <Link href="/" className="mb-12">
            <div className="relative w-64 h-16">
              <Image
                src="/logo.png"
                alt="Central de Plataformas"
                fill
                className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full max-w-6xl text-center md:text-left">
            <div className="md:col-span-1">
              <h4 className="text-white font-black uppercase tracking-[0.2em] mb-8 text-xs">Links Rápidos</h4>
              <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-white/60">
                <li><Link href="/" className="hover:text-primary transition-colors">Início</Link></li>
                <li><Link href="#brands" className="hover:text-primary transition-colors">Marcas</Link></li>
                <li><Link href="#guide" className="hover:text-primary transition-colors">Guia</Link></li>
                <li><Link href="#about" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h4 className="text-white font-black uppercase tracking-[0.2em] mb-8 text-xs">Legal</h4>
              <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-white/60">
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacidade</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Termos</Link></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-white font-black uppercase tracking-[0.2em] mb-8 text-xs">Aviso Legal</h4>
              <p className="text-[11px] text-white/50 leading-relaxed font-medium uppercase tracking-wider mb-4">
                A Central de Plataformas é um site de comparação independente. Recebemos comissões das marcas apresentadas neste site. Estas comissões podem influenciar a posição das marcas, mas não afetam a imparcialidade das nossas análises baseadas em testes reais. Regulado pelo SRIJ.
              </p>
              <div className="flex items-center gap-2 text-[10px] text-primary font-black uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Conteúdo Publicitário
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center pt-12 border-t border-white/5">
          <div className="flex flex-wrap justify-center gap-10 mb-10 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <div className="relative w-10 h-10">
              <Image src="/icons/18plus.svg" alt="18+" fill className="object-contain" />
            </div>
            <div className="relative w-24 h-10">
              <Image src="/srij.svg" alt="SRIJ" fill className="object-contain" />
            </div>
            <div className="relative w-24 h-10">
              <Image src="/jogo-responsavel.svg" alt="Jogo Responsável" fill className="object-contain" />
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
