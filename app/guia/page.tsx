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
        subtitle="Como apresentamos plataformas: apenas marcas licenciadas com acordo de afiliados. Site gratuito para si."
      />

      <div className="space-y-8">
        {[
          {
            title: "Regulação em Portugal",
            text: "Só divulgamos marcas licenciadas com acordo de afiliados. O SRIJ é a autoridade oficial em Portugal.",
          },
          {
            title: "Bónus e termos",
            text: "As ofertas são publicidade. Os termos, requisitos de volume e prazos de levantamento pertencem ao operador e podem mudar.",
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
            text: "Os métodos variam por operador (por exemplo MB Way, Multibanco, cartões ou carteiras digitais). Os prazos não são garantidos por este site.",
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
