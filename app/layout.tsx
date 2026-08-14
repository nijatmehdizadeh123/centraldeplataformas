import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComplianceTopBar from "@/components/ComplianceTopBar";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import CookieBanner from "@/components/CookieBanner";
import AnalyticsGate from "@/components/AnalyticsGate";

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
const CONVERSION_LABEL = "AW-XXXXXXXXXX/XXXXXXXX";

export const metadata: Metadata = {
  title: "Central de Plataformas — Comparação de plataformas online em Portugal 2026",
  description:
    "Comparação informativa de marcas licenciadas em Portugal. Site gratuito. Apenas para adultos 18+.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`scroll-smooth ${cinzel.variable} ${inter.variable}`}>
      <body className={`${inter.className} antialiased selection:bg-primary selection:text-black`}>
        <Script id="gtag-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.open(url, '_blank', 'noopener,noreferrer');
                }
              };
              if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                  'send_to': '${CONVERSION_LABEL}',
                  'event_callback': callback
                });
              } else {
                callback();
              }
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
            try {
              var c = localStorage.getItem('cdp-cookie-consent');
              if (c === 'accepted' || c === 'rejected') {
                var granted = c === 'accepted' ? 'granted' : 'denied';
                gtag('consent', 'update', {
                  ad_storage: granted,
                  ad_user_data: granted,
                  ad_personalization: granted,
                  analytics_storage: granted
                });
              }
            } catch (e) {}
          `}
        </Script>
        <ComplianceTopBar />
        <AffiliateDisclosure />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <AnalyticsGate />
      </body>
    </html>
  );
}
