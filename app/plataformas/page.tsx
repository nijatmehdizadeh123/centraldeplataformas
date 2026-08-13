import type { Metadata } from "next";
import { brands } from "@/app/data/brands";
import BrandCard from "@/components/BrandCard";
import DisclaimerBar from "@/components/DisclaimerBar";
import SubpageHero from "@/components/SubpageHero";
import { SITE } from "@/app/data/site";

export const metadata: Metadata = {
  title: `Top Plataformas — ${SITE.name}`,
  description: `Compare as melhores plataformas online recomendadas pela ${SITE.name}.`,
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function PlataformasPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const gclid = typeof params.gclid === "string" ? params.gclid : undefined;
  const displayBrands = brands.filter((b) => !b.isMobile);
  const updatedLabel = new Intl.DateTimeFormat("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <div className="felt-texture">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
        <SubpageHero
          title="Top"
          highlight="Plataformas"
          subtitle="A nossa seleção rigorosa com base em segurança, bónus e experiência do utilizador."
        />
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-10 -mt-6">
          Atualizado editorialmente — {updatedLabel}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {displayBrands.map((brand, index) => (
            <BrandCard
              key={brand.id}
              brand={brand}
              gclidValue={gclid}
              rank={index + 1}
              priority={index < 3}
            />
          ))}
        </div>
      </div>

      <DisclaimerBar />
    </div>
  );
}
