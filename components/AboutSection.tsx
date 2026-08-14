import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-accent/5 to-transparent -z-10" />

      <div className="container mx-auto px-4">
        <div id="guide" className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
            O Nosso Padrão de <span className="gold-text">Excelência</span>
          </h2>
          <p className="text-white/70 font-medium">
            Como apresentamos plataformas: apenas marcas licenciadas com acordo de afiliados. Não somos operador. O site é gratuito para si.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {[
            {
              title: 'Regulação em Portugal',
              text: 'Só divulgamos marcas licenciadas com as quais temos acordo de afiliados. O SRIJ é a autoridade oficial em Portugal.',
            },
            {
              title: 'Bónus e Termos',
              text: 'As ofertas publicitadas incluem termos do operador. Prazos de levantamento variam e não são garantidos por este site.',
            },
            {
              title: 'Apoio ao Cliente',
              text: 'Testamos tempos de resposta e qualidade do apoio em português por chat, email e telefone.',
            },
          ].map((card) => (
            <div key={card.title} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all">
              <h3 className="text-sm font-black uppercase tracking-widest text-primary mb-4">{card.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-1 rounded-3xl bg-linear-to-br from-white/10 to-transparent">
            <div className="bg-[#161616] p-10 rounded-[23px] h-full border border-[#d4af37]/10">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-4 uppercase tracking-tight text-white/90">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary text-sm">✓</span>
                Processo de Avaliação
              </h3>
              <ul className="space-y-6">
                {[
                  { title: 'Licença', desc: 'Recomendamos confirmar a licença no SRIJ. Este site não emite licenças.' },
                  { title: 'Ofertas', desc: 'Os bónus apresentados são publicidade e podem mudar sem aviso.' },
                  { title: 'Segurança', desc: 'Avaliação editorial com base em informação pública e testes internos quando aplicável.' },
                  { title: 'Apoio', desc: 'A qualidade do apoio pode variar. Não substituímos o suporte do operador.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4 group">
                    <span className="text-primary mt-1 group-hover:scale-125 transition-transform">✓</span>
                    <span>
                      <span className="block font-bold text-white/90 text-sm">{item.title}</span>
                      <span className="text-white/50 text-sm">{item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-1 rounded-3xl bg-linear-to-br from-red-500/20 to-transparent">
            <div className="bg-[#161616] p-10 rounded-[23px] h-full border border-red-500/10">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-4 uppercase tracking-tight text-red-500">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500/10 text-red-500 text-sm">!</span>
                Compromisso Ético
              </h3>
              <p className="text-white/50 mb-8 leading-relaxed font-medium">
                A nossa prioridade é a sua segurança. Promovemos o entretenimento responsável e apoiamos ativamente as diretrizes oficiais em Portugal.
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-red-500/30 transition-all">
                  <div className="font-black text-white/90 uppercase text-xs tracking-widest mb-2">Linha de Vida — Gratuito</div>
                  <div className="text-4xl font-black text-red-500 mb-1">1414</div>
                  <div className="text-sm text-white/40 mb-4">Ou +351 211 167 300</div>
                  <Link
                    href="https://www.jogoresponsavel.pt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 hover:text-red-500 transition-colors"
                  >
                    jogoresponsavel.pt →
                  </Link>
                </div>
                <p className="text-[11px] text-white/30 leading-relaxed">
                  Não somos operador nem regulador. O SRIJ regula os operadores licenciados em Portugal.{' '}
                  <Link
                    href="https://www.srij.turismodeportugal.pt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary/70 hover:text-primary"
                  >
                    srij.turismodeportugal.pt
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
