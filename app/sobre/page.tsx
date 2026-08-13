import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import { SITE } from "@/app/data/site";

export const metadata: Metadata = {
  title: `Sobre Nós — ${SITE.name}`,
  description: `Conheça a missão e o método de análise da ${SITE.name}. Informação independente e transparente.`,
};

export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <SubpageHero
        title="Sobre a"
        highlight="Central de Plataformas"
        subtitle="Informação independente e transparente para ajudá-lo a tomar decisões informadas."
      />

      <div className="space-y-10 text-white/70 leading-relaxed">
        <p>
          A {SITE.name} é uma plataforma dedicada a análises honestas e independentes e a guias especializados.
          Ajudamos os utilizadores a encontrar opções fidedignas com critérios claros e atualizações regulares.
        </p>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">A nossa missão</h2>
          <p>
            Acreditamos que todos merecem acesso a informação clara e fiável. O nosso objetivo é simplificar a sua escolha
            com critérios rigorosos de confiança, transparência e qualidade.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Como analisamos</h2>
          <p>
            Verificamos credenciais, analisamos termos e testamos o apoio ao cliente. Os nossos rankings e guias são
            atualizados regularmente para que possa confiar em avaliações atuais e comparáveis.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">O que avaliamos</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Confiança e credenciais",
              "Termos e ofertas",
              "Experiência do utilizador",
              "Qualidade do apoio",
              "Transparência",
              "Atualizações regulares",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
                <span className="text-primary">✓</span>
                <span className="text-sm text-white/80">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Responsabilidade</h2>
          <p>
            Promovemos um comportamento responsável. Use o nosso conteúdo apenas para escolhas informadas e entretenimento,
            dentro dos seus limites. Se precisar de apoio, contacte a Linha de Vida {SITE.linhaVida} ou visite{' '}
            <Link href={SITE.responsibleUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              jogoresponsavel.pt
            </Link>.
          </p>
        </section>

        <section className="rounded-2xl border border-[#d4af37]/15 bg-[#161616] p-8">
          <h2 className="text-xl font-black text-white uppercase tracking-tight mb-3">Afiliados e transparência</h2>
          <p className="text-sm">
            A {SITE.name} pode utilizar links de afiliados. Se se registar através dos nossos links, podemos receber uma
            comissão. Isto não tem custo adicional para si e ajuda-nos a manter o site gratuito e atualizado.
          </p>
        </section>

        <div className="pt-4">
          <Link href="/contacto" className="inline-flex btn-gradient rounded-xl px-8 py-3 text-xs font-black uppercase tracking-[0.2em]">
            Fale connosco
          </Link>
        </div>
      </div>
    </div>
  );
}
