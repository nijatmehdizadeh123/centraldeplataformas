import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import { SITE } from "@/app/data/site";

export const metadata: Metadata = {
  title: `Guia de Avaliação — ${SITE.name}`,
  description: `Como escolhemos e avaliamos as melhores plataformas online em Portugal.`,
};

export default function GuiaPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <SubpageHero
        title="Guia de"
        highlight="Avaliação"
        subtitle="Como escolhemos as melhores plataformas online: licenças SRIJ, termos de bónus e apoio ao cliente."
      />

      <div className="space-y-8">
        {[
          {
            title: "Regulação em Portugal",
            text: "Confirmamos licenças SRIJ e conformidade com a legislação portuguesa para que apenas operadores legítimos apareçam nas nossas listas.",
          },
          {
            title: "Bónus e termos",
            text: "Analisamos termos de bónus, requisitos de volume e políticas de levantamento para que saiba exatamente o que esperar antes de se registar.",
          },
          {
            title: "Apoio ao cliente",
            text: "Testamos tempos de resposta e qualidade do apoio em português por chat, email e telefone.",
          },
          {
            title: "Segurança e proteção",
            text: "Só recomendamos operadores que utilizam encriptação forte e cumprem normas rigorosas de proteção de dados e fundos.",
          },
          {
            title: "Métodos de pagamento em Portugal",
            text: "As plataformas que recomendamos aceitam tipicamente MB Way, Multibanco, cartões e carteiras digitais. Os levantamentos são muitas vezes concluídos em 24–48 horas.",
          },
          {
            title: "Utilização responsável",
            text: `O entretenimento deve permanecer dentro dos seus limites. Se precisar de apoio, ligue ${SITE.linhaVida} ou ${SITE.phone}, ou visite jogoresponsavel.pt.`,
          },
        ].map((section, i) => (
          <article key={section.title} className="rounded-2xl border border-[#d4af37]/10 bg-[#161616] p-8">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary text-sm font-black flex items-center justify-center">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-xl font-black text-white uppercase tracking-tight mb-3">{section.title}</h2>
                <p className="text-white/60 leading-relaxed">{section.text}</p>
              </div>
            </div>
          </article>
        ))}

        <div className="flex flex-wrap gap-4 pt-4">
          <Link href="/plataformas" className="btn-gradient rounded-xl px-8 py-3 text-xs font-black uppercase tracking-[0.2em]">
            Ver plataformas
          </Link>
          <Link href="/contacto" className="rounded-xl border border-primary/40 px-8 py-3 text-xs font-black uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-black transition-all">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
}
