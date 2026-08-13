export const SITE = {
  name: "Central de Plataformas",
  domain: "centraldeplataformas.com",
  email: "contacto@centraldeplataformas.com",
  phone: "+351 211 167 300",
  linhaVida: "1414",
  srijUrl: "https://www.srij.turismodeportugal.pt/",
  responsibleUrl: "https://www.jogoresponsavel.pt/",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/plataformas", label: "Plataformas" },
  { href: "/guia", label: "Guia" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/contacto", label: "Contacto" },
] as const;
