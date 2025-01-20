import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

import Footer from "@/components/footer/footer";
import "./globals.css";

export const metadata = {
  title: 'Express Money - Empréstimos com Garantia de Imóvel e Veículos',
  description: 'Especialistas em crédito com garantia de imóvel, financiamento e refinanciamento de imóveis e veículos com as melhores condições.',
  keywords: [
    'empréstimo com garantia de imóvel',
    'financiamento de imóvel',
    'refinanciamento de veículos',
    'Express Money',
  ],
  authors: [{ name: 'Express Money', url: 'https://www.express-money.vercel.app' }],
  robots: 'index, follow', // Permite indexação e rastreamento
  openGraph: {
    title: 'Express Money - Empréstimos com Garantia de Imóvel e Veículos',
    description: 'Oferecemos soluções de crédito com as melhores taxas. Simule agora!',
    url: 'https://www.express-money.vercel.app',
    siteName: 'Express Money',
    images: [
      {
        url: '/images/logo/express-money.png',
        width: 1200,
        height: 630,
        alt: 'Banner da Express Money',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Express Money - Empréstimos com Garantia',
    description: 'Soluções em crédito com garantia de imóvel e veículos. Saiba mais!',
    images: ['/images/logo/express-money.png'],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-[#ccd2db]">
        {children}
        <Footer />
      </body>
    </html>
  );
}
