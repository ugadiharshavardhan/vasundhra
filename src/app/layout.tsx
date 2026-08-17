import type { Metadata } from 'next';
import './globals.css';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';

export const metadata: Metadata = {
  title: 'Vasundhara Diamond Roof | Luxury Jewellery Architecture',
  description:
    'Explore Vasundhara Diamond Roof — Royal Indian high jewellery, bridal trousseaus, solitaires, and bespoke creations. Boutiques in Hyderabad, Vijayawada, and Visakhapatnam.',
  keywords: [
    'Vasundhara Diamond Roof',
    'Luxury Jewellery Hyderabad',
    'Bridal Jewellery',
    'Diamond Solitaire Rings',
    'Jubilee Hills Jewellery Boutique',
    'Occasion Jewellery',
    'Daily Jewellery',
    'Cocktail Jewellery',
    'Baby Jewellery',
  ],
  authors: [{ name: 'Vasundhara Diamond Roof' }],
  openGraph: {
    title: 'Vasundhara Diamond Roof | Luxury Jewellery',
    description: 'Jewellery that carries a story. Royal Indian heritage, solitaires, and bridal high jewellery.',
    url: 'https://www.vasundharadiamondroof.com/',
    siteName: 'Vasundhara Diamond Roof',
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
    <html lang="en" className="dark h-full bg-[#0A0A0A] text-[#F7F3EC] antialiased">
      <body className="min-h-screen bg-[#0A0A0A] font-helvetica selection:bg-[#B89B5E] selection:text-[#0A0A0A] bg-noise">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
