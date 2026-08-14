import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import { SITE } from "@/app/data/site";

export const metadata: Metadata = {
  title: `Termos de Serviço — ${SITE.name}`,
  description: `Termos de serviço de ${SITE.domain}.`,
};

export default function TermosPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <SubpageHero title="Termos de" highlight="Serviço" />

      <div className="space-y-8 text-white/70 leading-relaxed text-sm">
        <p>
          Ao utilizar {SITE.domain} aceita estes termos. Se não aceitar, não utilize o site. Destinado a adultos em {SITE.country}, com 18 ou mais anos.
        </p>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Natureza do site</h2>
          <p>
            Somos um site informativo de publicidade. Não somos operador nem regulador. Apenas divulgamos marcas licenciadas com acordo de afiliados.
          O site é gratuito para o utilizador. A nossa remuneração vem das marcas licenciadas, consoante o desempenho da publicidade.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Afiliação e ordenação</h2>
          <p>
            Os botões e cartões são anúncios de marcas licenciadas com as quais temos acordo. Não cobramos nada ao utilizador.
            Recebemos comissão da marca licenciada consoante o desempenho da publicidade.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Ofertas</h2>
          <p>
            Os bónus pertencem aos operadores e estão sujeitos aos respetivos termos e condições, requisitos de volume e elegibilidade (muitas vezes apenas novos utilizadores). Confirme sempre no site do operador.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Licenças</h2>
          <p>
            Só apresentamos marcas licenciadas com acordo de afiliados connosco. Pode consultar a lista oficial do{' '}
            <Link href={SITE.srijUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SRIJ</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Idade mínima</h2>
          <p>Proibido a menores de 18 anos. Utilize com responsabilidade.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Contacto</h2>
          <p>
            {SITE.publisher} · {SITE.country} · <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">{SITE.email}</a>
          </p>
        </section>
      </div>
    </div>
  );
}
