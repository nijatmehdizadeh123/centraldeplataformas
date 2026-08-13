import { brands } from "@/app/data/brands";
import Hero from "@/components/Hero";
import BrandCard from "@/components/BrandCard";
import DisclaimerBar from "@/components/DisclaimerBar";
import AboutSection from "@/components/AboutSection";
import MobileModal from "@/components/MobileModal";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { Suspense } from "react";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const gclid = typeof params.gclid === "string" ? params.gclid : undefined;

  const displayBrands = brands.filter((b) => !b.isMobile);

  return (
    <div className="flex flex-col min-h-screen">
      <AffiliateDisclosure />
      <Hero />

      <section id="brands" className="py-20 felt-texture">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">
              Top <span className="text-primary">Casinos</span> Recomendados
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A nossa seleção rigorosa dos melhores sites com base em segurança, bónus e experiência do utilizador.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
      </section>

      <DisclaimerBar />

      <AboutSection />

      <Suspense fallback={null}>
        <MobileModal gclid={gclid} />
      </Suspense>
    </div>
  );
}
