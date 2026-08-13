import type { Metadata } from "next";
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

      <div className="space-y-8 text-white/70 leading-relaxed">
        <p>
          Bem-vindo à {SITE.name}. Ao aceder a este website, assumimos que aceita estes termos de serviço. Não continue a utilizar o site se não aceitar todos os termos indicados nesta página.
        </p>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Licença</h2>
          <p>
            Salvo indicação em contrário, a {SITE.name} e/ou os seus licenciadores detêm os direitos de propriedade intelectual de todo o conteúdo. Pode aceder para uso pessoal, sujeito às restrições definidas nestes termos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Restrições</h2>
          <p className="mb-3">Não deve:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Republicar o conteúdo da {SITE.name}</li>
            <li>Vender, alugar ou sublicenciar o conteúdo</li>
            <li>Reproduzir, duplicar ou copiar o conteúdo</li>
            <li>Redistribuir o conteúdo</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Afiliação</h2>
          <p>
            Este site contém links de afiliados. Podemos receber comissões quando se regista através dos nossos links, sem custo adicional para si.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Idade mínima</h2>
          <p>O acesso é estritamente reservado a adultos com 18 ou mais anos.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Aviso Legal</h2>
          <p>
            Na medida máxima permitida pela lei aplicável, excluímos todas as representações, garantias e condições relativas ao nosso website e à sua utilização. Para questões, contacte{' '}
            <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">{SITE.email}</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
