import type { Metadata } from "next";
import SubpageHero from "@/components/SubpageHero";
import { SITE } from "@/app/data/site";

export const metadata: Metadata = {
  title: `Política de Privacidade — ${SITE.name}`,
  description: `Política de privacidade de ${SITE.domain}.`,
};

export default function PrivacidadePage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <SubpageHero title="Política de" highlight="Privacidade" />

      <div className="space-y-8 text-white/70 leading-relaxed">
        <p>
          Na {SITE.name}, acessível através de {SITE.domain}, uma das nossas principais prioridades é a privacidade dos nossos visitantes. Este documento contém os tipos de informações que são recolhidas e registadas e como as utilizamos.
        </p>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Ficheiros de Registo</h2>
          <p>
            Seguimos um procedimento padrão de utilização de ficheiros de registo. As informações recolhidas incluem endereços IP, tipo de navegador, ISP, carimbo de data/hora, páginas de referência/saída e, eventualmente, o número de cliques.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Cookies e Web Beacons</h2>
          <p>
            Como qualquer outro website, utilizamos &quot;cookies&quot; para armazenar informações, incluindo preferências dos visitantes e páginas visitadas, de forma a otimizar a experiência do utilizador.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Parceiros Publicitários</h2>
          <p>
            Alguns anunciantes no nosso site podem utilizar cookies e web beacons. Cada parceiro publicitário tem a sua própria política de privacidade relativa aos dados dos utilizadores.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Contacto</h2>
          <p>
            Para questões sobre esta política, contacte-nos em{' '}
            <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">{SITE.email}</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Consentimento</h2>
          <p>Ao utilizar o nosso website, consente com esta política de privacidade e aceita os seus termos.</p>
        </section>
      </div>
    </div>
  );
}
