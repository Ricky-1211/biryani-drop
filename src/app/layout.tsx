import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { WhatsAppOrderModal } from '@/components/WhatsAppOrderModal';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { restaurantInfo } from '@/data/restaurant';

export const metadata: Metadata = {
  metadataBase: new URL('https://thebiryanidrop.in'),
  title: 'The Biryani Drop | Eat • Relish • Repeat | Bhubaneswar QSR',
  description:
    'The Biryani Drop — Quick Service Restaurant in Maitri Vihar, Chandrasekharpur, Bhubaneswar. Serving freshly prepared chicken dum biryanis, rolls, chowmein, crispy starters and refreshing beverages.',
  keywords: [
    'The Biryani Drop',
    'Biryani in Bhubaneswar',
    'Chicken Dum Biryani Chandrasekharpur',
    'RCM College Food',
    'Maitri Vihar restaurant',
    'Rolls',
    'Chilli Chicken',
    'American Crispy Corn',
    'QSR Bhubaneswar',
  ],
  authors: [{ name: 'The Biryani Drop' }],
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: 'The Biryani Drop — Good Food, Good Mood!',
    description:
      'Craving something delicious? Drop into a world of flavour with freshly prepared biryanis, rolls, crispy starters and refreshing beverages in Bhubaneswar.',
    url: 'https://thebiryanidrop.in',
    siteName: 'The Biryani Drop',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 800,
        alt: 'The Biryani Drop Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#0B0908] text-[#FFF2D5] antialiased chalkboard-bg">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppOrderModal />
          <FloatingWhatsApp />
        </CartProvider>
      </body>
    </html>
  );
}
