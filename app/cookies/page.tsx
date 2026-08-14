import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import { SITE } from "@/app/data/site";

export const metadata: Metadata = {
  title: `Política de Cookies — ${SITE.name}`,
  description: `Como ${SITE.domain} utiliza cookies e o seu consentimento.`,
};

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <SubpageHero title="Política de" highlight="Cookies" />

      <div className="space-y-8 text-white/70 leading-relaxed text-sm">
        <p>
          Utilizamos cookies e tecnologias semelhantes. Os cookies necessários ao funcionamento do site não exigem consentimento.
          Estatística e publicidade só após aceitar no banner.
        </p>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Tipos</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Necessários: sessão, segurança e memorização da sua escolha de cookies.</li>
            <li>Analíticos: Google Analytics e Vercel Analytics (com consentimento).</li>
            <li>Publicidade: Google Ads, conversões e o parâmetro gclid (com consentimento).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Como gerir</h2>
          <p>
            Use Aceitar ou Recusar no banner. Pode também limpar cookies no navegador. Mais informação:{' '}
            <Link href="/privacidade" className="text-primary hover:underline">política de privacidade</Link>
            {' '}· {SITE.email}
          </p>
        </section>
      </div>
    </div>
  );
}
