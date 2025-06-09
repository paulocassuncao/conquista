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
        {/* Meta Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1384209646109917');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1384209646109917&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* UTMify Script */}
        <Script
          id="utmify-tracking"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          strategy="afterInteractive"
          async
          defer
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
