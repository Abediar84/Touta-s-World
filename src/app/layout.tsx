import type { Metadata } from 'next';
import { Noto_Serif, Manrope, Dancing_Script, Noto_Sans_Arabic } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const notoSerif = Noto_Serif({ subsets: ['latin'], variable: '--font-serif' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans' });
const dancing = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing' });
const notoArabic = Noto_Sans_Arabic({ subsets: ['arabic'], variable: '--font-arabic' });

const haveHeart = localFont({
  src: '../../public/fonts/HaveHeartOne.otf',
  variable: '--font-have-heart',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://toutasworld.com'),
  title: "Touta's World | A Magical Learning Experience",
  description: "Discover Touta's World, a premium storytelling and educational platform where magical adventures meet beautiful learning resources.",
  openGraph: {
    title: "Touta's World | Premium Educational Narrative",
    description: "Discover a magical world of storytelling, beautifully crafted notebooks, and learning adventures.",
    url: 'https://toutasworld.com',
    siteName: "Touta's World",
    images: [
      {
        url: '/hero-pyramids.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Touta's World",
    description: "A premium storytelling and educational platform.",
    images: ['/hero-pyramids.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSerif.variable} ${manrope.variable} ${dancing.variable} ${haveHeart.variable} ${notoArabic.variable} font-sans antialiased bg-background text-foreground min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
