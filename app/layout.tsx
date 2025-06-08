import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
