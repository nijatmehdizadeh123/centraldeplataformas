import Image from 'next/image';

export default function Hero() {
  const currentYear = new Date().getFullYear();
  const updatedLabel = new Intl.DateTimeFormat('pt-PT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());

  return (
    <section className="relative pt-24 pb-20 overflow-hidden felt-texture">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[80px]" />
        <div className="absolute top-[10%] left-[20%] w-1 h-64 bg-linear-to-b from-primary/10 to-transparent rotate-45 blur-[2px]" />
        <div className="absolute top-[5%] right-[15%] w-1 h-48 bg-linear-to-b from-accent/10 to-transparent -rotate-45 blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
            Guia Elite de Plataformas de Portugal {currentYear}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight tracking-tight max-w-3xl mx-auto uppercase">
          Top Plataformas <span className="gold-text">Online</span> em Portugal
        </h1>

        <p className="text-base md:text-lg text-white/50 mb-8 max-w-xl mx-auto font-normal leading-relaxed">
          Comparação informativa de marcas licenciadas. Site gratuito para si. Apenas 18+.
        </p>

        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mb-10">
          Ofertas atualizadas em: {updatedLabel}
        </p>

        <div className="relative w-full overflow-hidden mb-12 max-w-4xl mx-auto">
          <div className="animate-marquee gap-3">
            {[...Array(2)].map((_, listIdx) => (
              <div key={listIdx} className="flex gap-3 px-1">
                {[
                  { icon: 'licensed', text: 'Consulte o SRIJ', color: 'bg-primary/10 border-primary/20 text-primary' },
                  { icon: 'expert', text: 'Análise editorial', color: 'bg-green-500/10 border-green-500/20 text-green-400' },
                  { icon: 'withdraw', text: 'Compare prazos', color: 'bg-accent/10 border-accent/20 text-accent' },
                  { icon: '18plus', text: '18+', color: 'bg-primary/10 border-primary/20 text-primary' },
                ].map((badge, i) => (
                  <div
                    key={`${listIdx}-${i}`}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full border backdrop-blur-sm whitespace-nowrap ${badge.color}`}
                  >
                    <div className="relative w-3.5 h-3.5">
                      <Image src={badge.icon === '18plus' ? '/ptreg/18plus.png' : `/icons/${badge.icon}.svg`} alt="" fill className="object-contain" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">{badge.text}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            { icon: 'licensed', title: 'Regulação', desc: 'Consulte o SRIJ' },
            { icon: 'expert', title: 'Análise editorial', desc: 'Critérios públicos' },
            { icon: 'withdraw', title: 'Transparência', desc: 'Ofertas com termos' },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden"
            >
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
