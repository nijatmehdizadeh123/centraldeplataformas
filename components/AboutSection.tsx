import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-accent/5 to-transparent -z-10" />

      <div className="container mx-auto px-4">
        <div id="guide" className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-black mb-6 uppercase tracking-tighter">
            Como Avaliamos <span className="gold-text">Casinos Online</span>
          </h2>
          <p className="text-white/70 font-medium">
            Utilizamos um sistema de classificação rigoroso baseado em mais de 50 pontos de verificação para garantir a melhor experiência possível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-1 rounded-3xl bg-linear-to-br from-white/10 to-transparent">
            <div className="bg-[#150a25] p-10 rounded-[23px] h-full">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-4 uppercase tracking-tight text-white/90">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary text-sm">♠</span>
                Porque as Nossas Análises Destacam-se
              </h3>
              <ul className="space-y-6">
                {[
                  'Análises aprofundadas por especialistas do setor',
                  'Verificação em tempo real de bónus e promoções',
                  'Testes rigorosos dos processos de levantamento',
                  'Avaliação de conformidade SRIJ e segurança',
                  'Algoritmo de classificação exclusivo Central de Plataformas',
                ].map((text, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <span className="text-primary mt-1 group-hover:scale-125 transition-transform">✓</span>
                    <span className="text-white/60 group-hover:text-white/90 transition-colors">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-1 rounded-3xl bg-linear-to-br from-red-500/20 to-transparent">
            <div className="bg-[#150a25] p-10 rounded-[23px] h-full">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-4 uppercase tracking-tight text-red-500">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500/10 text-red-500 text-sm">♣</span>
                Jogo Responsável
              </h3>
              <p className="text-white/50 mb-8 leading-relaxed font-medium">
                A segurança dos nossos utilizadores é a nossa prioridade absoluta. Promovemos apenas plataformas que respeitam as normas de segurança e jogo responsável.
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-red-500/30 transition-all">
                  <div className="font-black text-white/90 uppercase text-xs tracking-widest mb-2">Linha de Apoio</div>
                  <div className="text-3xl font-black text-red-500 mb-3">213 123 400</div>
                  <Link
                    href="https://www.jogoresponsavel.pt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 hover:text-red-500 transition-colors"
                  >
                    Jogo Responsável →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
