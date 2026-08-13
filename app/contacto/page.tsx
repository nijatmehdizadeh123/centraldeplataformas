import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/app/data/site";

export const metadata: Metadata = {
  title: `Contacto — ${SITE.name}`,
  description: `Contacte a equipa da ${SITE.name}. Dúvidas, sugestões ou pedidos de informação.`,
};

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
      <SubpageHero
        title="Contactos"
        subtitle="Tem uma dúvida, sugestão ou pedido? Teremos todo o gosto em ouvi-lo."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="rounded-2xl border border-[#d4af37]/15 bg-[#161616] p-8 md:p-10">
          <h2 className="text-xl font-black uppercase tracking-tight mb-6">
            Envie-nos uma <span className="gold-text">mensagem</span>
          </h2>
          <ContactForm />
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-[#d4af37]/15 bg-[#161616] p-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-4">Email</h3>
            <a href={`mailto:${SITE.email}`} className="text-lg font-bold text-white hover:text-primary transition-colors break-all">
              {SITE.email}
            </a>
            <p className="text-sm text-white/40 mt-3">Resposta habitual em 1–2 dias úteis.</p>
          </div>

          <div className="rounded-2xl border border-[#d4af37]/15 bg-[#161616] p-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-4">Linha de Apoio</h3>
            <p className="text-sm text-white/50 mb-4">
              Para apoio especializado em utilização responsável (não é o nosso suporte editorial):
            </p>
            <div className="space-y-3">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Linha de Vida (gratuito)</div>
                <div className="text-3xl font-black text-primary">{SITE.linhaVida}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Linha de Apoio</div>
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="text-xl font-black text-white hover:text-primary transition-colors">
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#d4af37]/15 bg-[#161616] p-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-4">Recursos oficiais</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href={SITE.srijUrl} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors">
                  SRIJ Portugal →
                </Link>
              </li>
              <li>
                <Link href={SITE.responsibleUrl} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors">
                  jogoresponsavel.pt →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
