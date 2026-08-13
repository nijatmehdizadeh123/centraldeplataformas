export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
  displayUrl?: string;
  badge?: {
    text: string;
    color: string;
  };
}

const generateId = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

const rawBrands: Omit<Brand, 'id' | 'rating'>[] = [
  // {
  //   name: "SlotRush",
  //   logo: "/brands/SLOTRUSH.png",
  //   bonus: "Até 4000€ + 200 Rodadas Grátis",
  //   url: "https://linkslotrush.com/iyhqswoke?subid=SlotRush-PT9&clickid=",
  //   isMobile: true,
  //   votes: 11840,
  //   badge: { text: "Melhor Oferta", color: "#ff6b00" },
  // },
  // {
  //   name: "SpinFormula",
  //   logo: "/brands/Spinformula.svg",
  //   bonus: "550% até 15000€ + 550 Rodadas Grátis",
  //   url: "https://corsa.cxclick.com/visit/?bta=35059&nci=5345&utm_campaign=SpinFormula-PT9&afp=",
  //   isMobile: true,
  //   votes: 10920,
  //   badge: { text: "Levantamentos Rápidos", color: "#22c55e" },
  // },
  // {
  //   name: "BravoPlay",
  //   logo: "/brands/bravoplay.svg",
  //   bonus: "Até 5000€ + 150 Rodadas Grátis",
  //   url: "https://trk.arztrc.site/click?o=1&a=82&c=314&link_id=39&sub_id1=BravoPlay-PT9&aff_click_id=",
  //   isMobile: true,
  //   votes: 9870,
  //   badge: { text: "Nova Oferta", color: "#9d4edd" },
  // },
  // {
  //   name: "BetRiviera",
  //   logo: "/brands/BETRIVIERA.svg",
  //   bonus: "Até 2000€ + 200 Rodadas Grátis",
  //   url: "https://betriviera.media/n1g6w3zghg?subid=Betriviera-PT9&visit_id=",
  //   isMobile: false,
  //   votes: 8650,
  // },
  // {
  //   name: "CleanWins",
  //   logo: "/brands/CLEANWINS.svg",
  //   bonus: "200% até 2000€ + 200 Rodadas Grátis",
  //   url: "https://on.cwtrk.com/promoRedirect?key=ej0xMzU4MTczMiZsPTEzNTgzODYzJnA9MTEzODU%3D&var2=CleanWins-PT9&var1=",
  //   isMobile: false,
  //   votes: 7420,
  // },
  {
    name: "Bwin",
    logo: "/bwin_dark.png",
    bonus: "Aposta reembolsada até 100€",
    url: "https://mediaserver.entainpartners.com/renderBanner.do?zoneId=2159573&clickid=",
    isMobile: false,
    votes: 15200,
    displayUrl: "bwin.pt",
  },
];

export const brands: Brand[] = rawBrands.map((brand, index) => ({
  ...brand,
  id: generateId(brand.name),
  rating: Math.max(9.0, parseFloat((10.0 - index * 0.1).toFixed(1))),
}));
