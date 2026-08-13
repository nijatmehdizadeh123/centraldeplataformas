import Image from 'next/image';

export default function Hero() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative pt-32 pb-24 overflow-hidden felt-texture">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[80px]" />
        <div className="absolute top-[10%] left-[20%] w-1 h-64 bg-linear-to-b from-primary/10 to-transparent rotate-45 blur-[2px]" />
        <div className="absolute top-[5%] right-[15%] w-1 h-48 bg-linear-to-b from-accent/10 to-transparent -rotate-45 blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
            Hub Premier de Análises de Casinos de Portugal • {currentYear}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight tracking-tight max-w-3xl mx-auto">
          Encontre os Melhores <span className="gold-text">Casinos Online</span> de Portugal
        </h1>

        <p className="text-base md:text-lg text-white/50 mb-12 max-w-xl mx-auto font-normal leading-relaxed">
          Análises de especialistas, bónus exclusivos e levantamentos rápidos. Compare as melhores plataformas e encontre a oferta ideal hoje.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {[
            { icon: 'licensed', title: 'Licenciado', desc: 'Regulado SRIJ' },
            { icon: 'expert', title: 'Aprovado por Especialistas', desc: 'Análises Certificadas' },
            { icon: 'withdraw', title: 'Levantamentos Rápidos', desc: 'Pagamentos em 24h' },
          ].map((item, i) => (
            <div key={i} className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-4">
                <div className="w-12 h-12 relative flex-shrink-0 grayscale group-hover:grayscale-0 transition-all">
                  <Image src={`/icons/${item.icon}.svg`} alt={item.title} fill className="object-contain" />
                </div>
                <div className="text-left">
                  <div className="font-black uppercase text-xs tracking-widest text-white/90">{item.title}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">{item.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
