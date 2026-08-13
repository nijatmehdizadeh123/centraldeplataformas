import Link from "next/link";

interface SubpageHeroProps {
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function SubpageHero({ title, highlight, subtitle }: SubpageHeroProps) {
  return (
    <div className="mb-12">
      <nav className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
        <Link href="/" className="hover:text-primary transition-colors">Início</Link>
        <span className="mx-2">/</span>
        <span className="text-primary/80">{highlight || title}</span>
      </nav>
      <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">
        {title}{highlight ? <> <span className="gold-text">{highlight}</span></> : null}
      </h1>
      {subtitle ? (
        <p className="text-white/50 text-base md:text-lg max-w-2xl leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}
