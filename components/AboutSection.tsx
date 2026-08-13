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
            Como escolhemos as melhores plataformas online: verificamos licenças SRIJ, termos de bónus e apoio ao cliente para avaliações justas e comparáveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {[
            {
              title: 'Regulação em Portugal',
              text: 'Confirmamos licenças SRIJ e conformidade com a legislação portuguesa para que apenas operadores legítimos apareçam nas nossas listas.',
            },
            {
              title: 'Bónus e Termos',
              text: 'Analisamos termos de bónus, requisitos de volume e políticas de levantamento para que saiba exatamente o que esperar antes de se registar.',
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
                Processo de Avaliação Elite
              </h3>
              <ul className="space-y-6">
                {[
                  { title: 'Auditoria de Licença', desc: 'Verificação em tempo real com o SRIJ.' },
                  { title: 'Teste de Liquidez', desc: 'Depósitos e levantamentos reais para testar a velocidade.' },
                  { title: 'Análise de Segurança', desc: 'Verificação de encriptação e proteção de dados.' },
                  { title: 'Suporte VIP', desc: 'Avaliação da qualidade e tempo de resposta 24/7.' },
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
                  Regulado pelo SRIJ — Serviço de Regulação e Inspeção de Jogos.{' '}
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
