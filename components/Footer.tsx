import Link from 'next/link';
import Image from 'next/image';
import { SITE, FOOTER_NOTICE } from '@/app/data/site';
import AgeBadge from '@/components/AgeBadge';

const FOOTER_LOGOS = [
  { src: '/ptreg/srij.png', alt: 'SRIJ', href: SITE.srijUrl, w: 140 },
  { src: '/ptreg/gamcare.png', alt: 'GamCare', href: SITE.gamcareUrl, w: 140 },
  { src: '/ptreg/begambleaware.png', alt: 'BeGambleAware', href: SITE.begambleawareUrl, w: 160 },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t border-[#d4af37]/15 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center gap-5 border-b border-[#d4af37]/15 pb-6">
          <div className="flex items-center gap-3">
            <AgeBadge size={44} />
            <span className="text-sm font-semibold tracking-wide text-white/80">
              Apenas Portugal. Apenas adultos 18+.
            </span>
          </div>
          <div className="mx-auto grid w-full max-w-2xl min-w-0 grid-cols-3 items-center justify-items-center gap-3 sm:gap-4 md:gap-6">
            {FOOTER_LOGOS.map((logo) => (
              <Link
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center opacity-90 transition hover:opacity-100"
                aria-label={logo.alt}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={56}
                  className="h-8 w-auto max-w-[85px] object-contain object-center sm:h-10 sm:max-w-[110px] md:h-12 md:max-w-[140px]"
                />
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-white/70">
          Pode criar dependência. Utilize com responsabilidade. Se precisar de ajuda, use os links acima.
        </p>

        <Link
          href="/"
          className="group mx-auto mt-8 flex w-fit flex-col items-center"
          aria-label={`${SITE.domain} — início`}
        >
          <div className="relative h-16 w-16 md:h-20 md:w-20">
            <Image
              src="/logo.png"
              alt={SITE.name}
              fill
              className="object-contain opacity-90 transition group-hover:opacity-100"
            />
          </div>
        </Link>

        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
          <Link className="text-white/80 transition hover:text-primary" href="/termos">Termos e Condições</Link>
          <Link className="text-white/80 transition hover:text-primary" href="/privacidade">Política de Privacidade</Link>
          <Link className="text-white/80 transition hover:text-primary" href="/cookies">Cookies</Link>
          <Link className="text-white/80 transition hover:text-primary" href="/sobre">Sobre Nós</Link>
          <Link className="text-white/80 transition hover:text-primary" href="/contacto">Contactos</Link>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href={SITE.responsibleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/60 hover:text-primary"
          >
            Jogo Responsável Portugal
          </Link>
          <Link
            href={SITE.gamcareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/60 hover:text-primary"
          >
            GamCare
          </Link>
        </div>

        <p className="mt-6 mx-auto max-w-3xl text-center text-[11px] leading-relaxed text-white/40">
          {FOOTER_NOTICE}
        </p>

        <p className="mt-6 text-center text-xs text-white/50">
          © {currentYear} {SITE.domain}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
