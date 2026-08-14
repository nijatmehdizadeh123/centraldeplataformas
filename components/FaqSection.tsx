'use client';

import { useState } from 'react';
import Link from 'next/link';

const FAQ_ITEMS = [
  {
    q: 'Os operadores apresentados estão licenciados em Portugal?',
    a: 'Sim. Apenas divulgamos marcas licenciadas com as quais temos acordo de afiliados. Não publicitamos operadores sem licença.',
  },
  {
    q: 'Qual é a idade mínima?',
    a: 'A idade mínima legal é 18 anos. Este site e as plataformas recomendadas são estritamente para adultos.',
  },
  {
    q: 'Como me mantenho no controlo?',
    a: 'Defina limites de tempo e depósito, nunca utilize dinheiro destinado a despesas essenciais e faça pausas regulares. Se sentir perda de controlo, contacte a Linha de Vida 1414 ou visite jogoresponsavel.pt.',
  },
  {
    q: 'Pago para usar este site?',
    a: 'Não. O site é gratuito. Não cobramos nada ao utilizador. Recebemos comissão das marcas licenciadas consoante o desempenho da publicidade.',
  },
  {
    q: 'Que métodos de pagamento posso usar?',
    a: 'Os métodos dependem de cada operador. Exemplos comuns em Portugal incluem MB Way, Multibanco, cartões e carteiras digitais. Confirme no site do operador.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
            Perguntas <span className="gold-text">Frequentes</span>
          </h2>
          <p className="text-white/50 text-sm">
            Respostas rápidas para decisões informadas.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm md:text-base text-white/90">{item.q}</span>
                  <span className={`text-primary text-xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-white/50 leading-relaxed">
                    {item.a}
                    {index === 2 && (
                      <span className="block mt-2">
                        <Link
                          href="https://www.jogoresponsavel.pt/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          jogoresponsavel.pt →
                        </Link>
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
