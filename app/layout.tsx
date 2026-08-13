import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "Central de Plataformas — Melhores Plataformas Online em Portugal 2026",
  description:
    "Compare as melhores plataformas online em Portugal. Análises de especialistas, bónus exclusivos e levantamentos rápidos para 2026.",
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.open(url, '_blank', 'noopener,noreferrer');
                }
              };
              gtag('event', 'conversion', {
                'send_to': '${CONVERSION_LABEL}',
                'event_callback': callback
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
