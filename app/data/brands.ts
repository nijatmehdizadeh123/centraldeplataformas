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
    color: string; // hex or tailwind class
  };
}

const generateId = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

export const brands: Brand[] = [
 
 
 
  
 
 
  // {
  //   id: "Atefia",
  //   name: "Atefia",
  //   logo: "/brands/atefia.webp",
  //   rating: 9.8,
  //   bonus: "100% jusqu'à 1000€ + 200FS",
  //   url: "https://go.driveaffiliates.com/visit/?bta=35516&nci=5458&utm_campaign=Atefia-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  // },
  
  // {
  //   id: "BetRiviera",
  //   name: "BetRiviera",
  //   logo: "/brands/BETRIVIERA.svg",
  //   rating: 9.8,
  //   bonus: "Jusqu’à 2000€ + 200FS",
  //   url: "https://betriviera.media/n1g6w3zghg?subid=Betriviera-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  
  // },
  // {
  //   id: "SpinHub",
  //   name: "SpinHub",
  //   logo: "/brands/spinhub.png",
  //   rating: 9.8,
  //   bonus: "300% jusqu'à 1500€ + 100FS",
  //   url: "https://on.spinhub100.com/promoRedirect?key=ej0xMzUyNTU2NCZsPTEzNTI1MDA3JnA9MzYzMA%253D%253D&var4=fr&var2=SpinHub-SL2FR9&var1=",
  //   isMobile: true,
  //   votes: 12450,
    
    
  // },
  // {
  //   id: "WinoCasino",
  //   name: "WinoCasino",
  //   logo: "/brands/wino.svg",
  //   rating: 9.7,
  //   bonus: "600% jusqu’à 10000€",
  //   url: "https://go.afftrackio.com/visit/?bta=35487&nci=5357&utm_campaign=WinoCasino-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Nouvelle Offre", color: "#a020f0" },
  // },
  // {
  //   id: "SpinFormula",
  //   name: "SpinFormula",
  //   logo: "/brands/Spinformula.svg",
  //   rating: 9.9,
  //   bonus: "550% jusqu’à 15000€ + 550FS",
  //   url: "https://corsa.cxclick.com/visit/?bta=35059&nci=5345&utm_campaign=SpinFormula-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Meilleure Offre", color: "#00f5ff" },
  // },
  // {
    
  //   id: "SlotRush",
  //   name: "SlotRush",
  //   logo: "/brands/SLOTRUSH.png",
  //   rating: 9.8,
  //   bonus: "Jusqu'à 4000€ + 200FS",
  //   url: "https://linkslotrush.com/iyhqswoke?subid=SlotRush-SL2FR9&clickid=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Retraits Rapides", color: "#22c55e" },

  // },
  // {
  //   id: "BravoPlay",
  //   name: "BravoPlay",
  //   logo: "/brands/bravoplay.svg",
  //   rating: 9.6,
  //   bonus: "Jusqu'à 5000€ + 150FS",
  //   url: "https://trk.arztrc.site/click?o=1&a=82&c=314&link_id=39&sub_id1=BravoPlay-SL2FR9&aff_click_id=",
  //   isMobile: true,
  //   votes: 12450,
  // }
  // ,
  // {
  //   id: "RivoCasino",
  //   name: "RivoCasino",
  //   logo: "/brands/Rivo_logo_light.svg",
  //   rating: 9.7,
  //   bonus: "1000% jusqu’à 10000€",
  //   url: "https://go.afftrackio.com/visit/?bta=35487&nci=5386&utm_campaign=RivoCasino-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Nouvelle Offre", color: "#a020f0" },
  // }
  // ,
  
  // {
  //   id: "BravoPlay",
  //   name: "BravoPlay",
  //   logo: "/brands/bravoplay.svg",
  //   rating: 9.8,
  //   bonus: "Jusqu'à 5000€ + 150FS",
  //   url: "https://trk.arztrc.site/click?o=1&a=82&c=314&link_id=39&sub_id1=BravoPlay-SL2FR9&aff_click_id=",
  //   isMobile: true,
  //   votes: 12450,
    
  // }
  // ,
 

 
  //  {
  //   id: "Aerobet",
  //   name: "Aerobet",
  //   logo: "/brands/AEROBET.webp",
  //   rating: 9.8,
  //   bonus: "Jusqu’à 600% + 450FS",
  //   url: "https://aerobetalive.com/tawbnds9h?subid=Aerobet-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  // },

 
  // {
  //   id: "BetNJet",
  //   name: "BetNJet",
  //   logo: "/brands/betnjet.webp",
  //   rating: 9.8,
  //   bonus: "400% jusqu'à 1000€ + 250FS",
  //   url: "https://gtrfk.com/jiasgddfx?subid=BetNJet-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Meilleure Offre", color: "#00f5ff" },
  // },
  // {
  //   id: "Zombillion",
  //   name: "Zombillion",
  //   logo: "/brands/zombillion.svg",
  //   rating: 9.8,
  //   bonus: "250% jusqu’à 4000€ + 200FS",
  //   url: "https://direct.club.partners/click?pid=19&offer_id=59&l=1779872569&sub2=Zombillion-SL2FR9&sub1=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  
  
  // {
  //   id: "WinKingdom",
  //   name: "WinKingdom",
  //   logo: "/brands/winkingdom.svg",
  //   rating: 9.8,
  //   bonus: "Jusqu’à 2000€ + 100FS",
  //   url: "https://bestcpa.online/click?o=568&a=36&sub_id1=WinKingdom-SL2FR9&aff_click_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  // },
  //  {
  //   id: "RunaCasino",
  //   name: "RunaCasino",
  //   logo: "/brands/runa.svg",
  //   rating: 9.8,
  //   bonus: "Jusqu’à 2500€ + 600FS",
  //   url: "https://bestcpa.online/click?o=581&a=36&sub_id1=RunaCasino-SL2FR9&aff_click_id=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  //  {
  //   id: "Westace",
  //   name: "Westace",
  //   logo: "/brands/westace.png",
  //   rating: 9.8,
  //   bonus: "400% jusqu’à 15000€ + 400FS",
  //   url: "https://bestcpa.online/click?o=446&a=36&link_id=716&sub_id1=Westace-SL2FR9&aff_click_id=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  //  {
  //   id: "Royalen",
  //   name: "Royalen",
  //   logo: "/brands/royalen.webp",
  //   rating: 9.8,
  //   bonus: "200% jusqu'à 2000€ + 200FS",
  //   url: "https://royalmedialinks.com/j2qyjvhin?subid=Royalen-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  // }
  // ,
  // {
  //   id: "GoloBet",
  //   name: "GoloBet",
  //   logo: "/brands/golobet.webp",
  //   rating: 9.8,
  //   bonus: "600% jusqu'à 6000€ + 450FS",
  //   url: "https://golobetlive.com/t4y2yuizy?subid=GoloBet-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  // },
  //   {
  //   id: "CaptainSlots",
  //   name: "CaptainSlots",
  //   logo: "/brands/captainSlots.svg",
  //   rating: 9.8,
  //   bonus: "100% jusqu'à 1500€",
  //   url: "https://track-otn.com/trk.php?t=2705&c=4491&subid=CaptainSlots-SL2FR9&clickid=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  // {
  //   id: "WoolBet",
  //   name: "WoolBet",
  //   logo: "/brands/WoolBet.svg",
  //   rating: 9.8,
  //   bonus: "303% jusqu'à 3003€ + 303FS",
  //   url: "https://trackingwoolbet.com/d0tzmfcvu?subid=WoolBet-SL2FR9&clickid=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  // },
 
  // {
  //   id: "daytonaspin",
  //   name: "DaytonaSpin",
  //   logo: "/brands/daytonaspin.png",
  //   rating: 9.8,
  //   bonus: "430% jusqu’à 14300€ + 430FS",
  //   url: "https://direct.reradirectbox.com/click?pid=75&offer_id=1604&l=1784641970&sub2=DaytonaSpin-SL2FR9&sub1=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  // },
  
  
   
 
  
  // {
  //   id: "Royalen",
  //   name: "Royalen",
  //   logo: "/brands/royalen.webp",
  //   rating: 9.8,
  //   bonus: "200% jusqu'à 2000€ + 200FS",
  //   url: "https://royalmedialinks.com/j2qyjvhin?subid=Royalen-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  //  {
  //   id: "spinboss",
  //   name: "SpinBoss",
  //   logo: "/brands/spinboss.webp",
  //   rating: 9.8,
  //   bonus: "400% jusqu’à 15000€ + 400FS",
  //   url: "https://spbs.lynmonkel.com/?mid=355610_2121757&subid=SpinBoss-SL2FR9&clickid=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  // {
  //   id: "Spinlynx",
  //   name: "Spinlynx",
  //   logo: "/brands/spinlynx.webp",
  //   rating: 9.8,
  //   bonus: "400% jusqu'à 2000€ and 200FS",
  //   url: "https://go.newsspinlynx.com/visit/?bta=35331&nci=5342&afp1=Spinlynx-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
 
 
 
 
  
  
 
  // {
  //   id: "SlimKing",
  //   name: "SlimKing",
  //   logo: "/brands/slimkinglogo.png",
  //   rating: 9.8,
  //   bonus: "100% jusqu’à 1000€ + 200FS",
  //   url: "https://go.gambleon.com/visit/?bta=75302&nci=5394&utm_campaign=SlimKing-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  //  {
  //   id: "bananzia",
  //   name: "Bananzia",
  //   logo: "/brands/bananzia.svg",
  //   rating: 9.8,
  //   bonus: "300% jusqu’à 3000€ + 300FS",
  //   url: "https://go.drctvoodoo.com/click?pid=6&offer_id=21&sub2=Bananzia-SL2FR9&sub1=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
 
  
  
  // {
  //   id: "HeavyBet",
  //   name: "HeavyBet",
  //   logo: "/brands/heavybet.png",
  //   rating: 9.8,
  //   bonus: "300% jusqu'à 3000€ + 300FS",
  //   url: "https://media.heavybet.partners/visit/?bta=35072&nci=5345&utm_campaign=HeavyBet-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  // },
 
  // {
  //   id: "Betory",
  //   name: "Betory",
  //   logo: "/brands/betory.png",
  //   rating: 9.8,
  //   bonus: "300% jusqu'à 3250€",
  //   url: "https://betorytrackers.com/d9c0p3tke?subid=BetNJet-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  // {
  //   id: "RxBet",
  //   name: "RxBet",
  //   logo: "/brands/rxcasino.png",
  //   rating: 9.8,
  //   bonus: "512% jusqu'à 3000€ + 256FS",
  //   url: "https://go.rx.partners/visit/?bta=35855&nci=5352&afp=RxBet-SL2FR9&utm_campaign=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },

  // {
  //   id: "Amunbet",
  //   name: "Amunbet",
  //   logo: "/brands/amunbet.webp",
  //   rating: 9.8,
  //   bonus: "450% jusqu’à 3000€ + 450FS",
  //   url: "https://amunbetplay.com/tf11k61qe?subid=Amunbet-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  // },
    
  
  
  
  // {
  //   id: "SpinFin",
  //   name: "SpinFin",
  //   logo: "/brands/SPINFIN.png",
  //   rating: 9.8,
  //   bonus: "350% jusqu’à 10000€ + 500FS",
  //   url: "https://go.driveaffiliates.com/visit/?bta=35516&nci=5358&utm_campaign=SpinFin-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  
  // {
  //   id: "BetNJet",
  //   name: "BetNJet",
  //   logo: "/brands/betnjet.webp",
  //   rating: 9.8,
  //   bonus: "400% jusqu'à 1000€ + 250FS",
  //   url: "https://gtrfk.com/jiasgddfx?subid=BetNJet-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  
  
  // {
  //   id: "BetNJet",
  //   name: "BetNJet",
  //   logo: "/brands/betnjet.webp",
  //   rating: 9.8,
  //   bonus: "400% jusqu'à 1000€ + 250FS",
  //   url: "https://gtrfk.com/jiasgddfx?subid=BetNJet-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  // {
  //   id: "X3Bet",
  //   name: "X3Bet",
  //   logo: "/brands/x3bet.svg",
  //   rating: 9.8,
  //   bonus: "100% jusqu'à 1000€ + 200FS",
  //   url: "https://go.driveaffiliates.com/visit/?bta=35516&nci=5371&utm_campaign=X3Bet-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
  
  // },
  
   
  // {
  //   id: "CleanWins",
  //   name: "CleanWins",
  //   logo: "/brands/CLEANWINS.svg",
  //   rating: 9.8,
  //   bonus: "200% jusqu'à 2000€ + 200FS",
  //   url: "https://on.cwtrk.com/promoRedirect?key=ej0xMzU4MTczMiZsPTEzNTgzODYzJnA9MTEzODU%3D&var2=CleanWins-SL2FR9&var1=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  
  
  // {
  //   id: "Spinkong",
  //   name: "Spinkong",
  //   logo: "/brands/Spinkong.webp",
  //   rating: 9.8,
  //   bonus: "400% jusqu’à 1000€ + 250FS",
  //   url: "https://gtrfspkng.com/jxcod4yvg?subid=Spinkong-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  
  
  
   
  
  // {
  //   id: "WinoCasino",
  //   name: "WinoCasino",
  //   logo: "/brands/wino.svg",
  //   rating: 9.8,
  //   bonus: "Pack machines à sous 600% jusqu’à 10000€",
  //   url: "https://go.afftrackio.com/visit/?bta=35487&nci=5357&utm_campaign=WinoCasino-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
  // },

  // {
  //   id: "SpinMillion",
  //   name: "SpinMillion",
  //   logo: "/brands/spinmillion.webp",
  //   rating: 9.8,
  //   bonus: "100% jusqu’à 750€ + 100 Tours Gratuits + 3x Roue de la Fortune",
  //   url: "https://bestcpa.online/click?o=542&a=36&sub_id1=SpinMillion-SL2FR9&aff_click_id=",
  //   isMobile: true,
  //   votes: 12450,
  // },

  {
    id: "bwin",
    name: "Bwin",
    logo: "/bwin_dark.png",
    rating: 9.6,
    bonus: "Votre mise remboursée jusqu'à 100€",
    url: "https://www.bwin.pt/pt/sports?utm_source=casinotoppt&utm_medium=referral&clickid=",
    isMobile: false,
    votes: 12450,
    displayUrl: "bwin.com"
  }
];
