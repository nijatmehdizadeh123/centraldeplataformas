export default function AffiliateDisclosure() {
  return (
    <div className="bg-black border-b border-[#d4af37]/10 py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/30 font-black">
          <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
            <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span>
            Divulgação de publicidade: site gratuito. Comissão paga pelas marcas licenciadas parceiras.
          </span>
        </div>
      </div>
    </div>
  );
}
