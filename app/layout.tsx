import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "O Segredo da Conquista - E-book para Homens",
  description: "Descubra como conquistar mulheres de forma natural, autêntica e respeitosa. O único e-book que ensina a abordagem que realmente funciona, sem truques baratos ou cantadas prontas.",
  keywords: "conquista, relacionamentos, autoconfiança, comunicação, homens, e-book",
  authors: [{ name: "O Segredo da Conquista" }],
  openGraph: {
    title: "O Segredo da Conquista - E-book para Homens",
    description: "Transforme sua vida amorosa com métodos naturais e autênticos. Mais de 1.000 homens já descobriram o segredo.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "O Segredo da Conquista - E-book para Homens",
    description: "Transforme sua vida amorosa com métodos naturais e autênticos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager Server-side */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://segredodaconquista.shop/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MJF46S9Q');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Tag Manager Server-side (noscript) */}
        <noscript>
          <iframe 
            src="https://segredodaconquista.shop/ns.html?id=GTM-MJF46S9Q"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
