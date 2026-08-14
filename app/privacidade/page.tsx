import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import { SITE } from "@/app/data/site";

export const metadata: Metadata = {
  title: `Política de Privacidade — ${SITE.name}`,
  description: `Política de privacidade e RGPD de ${SITE.domain}.`,
};

export default function PrivacidadePage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <SubpageHero title="Política de" highlight="Privacidade" />

      <div className="space-y-8 text-white/70 leading-relaxed text-sm">
        <p>
          A {SITE.name} ({SITE.domain}), editora em {SITE.country}, trata dados pessoais nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD).
          Contacto do responsável: <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">{SITE.email}</a>.
        </p>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Que dados recolhemos</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dados técnicos: endereço IP, tipo de navegador, páginas visitadas, data e hora.</li>
            <li>Dados de contacto, se nos escrever: nome, email e mensagem.</li>
            <li>Identificadores de campanha, como o parâmetro gclid, quando chega através de anúncios.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Para que servem</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Funcionamento e segurança do site (interesse legítimo).</li>
            <li>Responder a contactos (execução de pedido / consentimento).</li>
            <li>Estatísticas e medição de anúncios (Google Analytics / Google Ads), apenas com o seu consentimento.</li>
            <li>Atribuição de cliques em links de afiliados.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Cookies, Google Ads e Analytics</h2>
          <p>
            Os cookies não essenciais (estatística e publicidade) só são ativados depois de aceitar no banner. Pode recusar.
            O Google pode tratar dados nos EUA segundo as suas políticas. Consulte também a nossa{' '}
            <Link href="/cookies" className="text-primary hover:underline">política de cookies</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Conservação</h2>
          <p>
            Dados de contacto: até 12 meses após a última mensagem, salvo obrigação legal. Logs técnicos: prazo curto de segurança.
            Consentimento de cookies: até 12 meses.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Os seus direitos</h2>
          <p>
            Pode pedir acesso, retificação, apagamento, limitação, oposição e portabilidade, e retirar o consentimento a qualquer momento.
            Também pode apresentar reclamação à CNPD (www.cnpd.pt). Pedidos: {SITE.email}.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Afiliados</h2>
          <p>
            Este site usa links de afiliados apenas com marcas licenciadas parceiras. Não cobramos ao utilizador. A comissão é paga pela marca consoante o desempenho da publicidade.
          </p>
        </section>
      </div>
    </div>
  );
}
