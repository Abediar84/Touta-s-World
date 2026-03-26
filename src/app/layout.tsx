import type { Metadata } from 'next';
import { Playfair_Display, Montserrat, Dancing_Script } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const dancing = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing' });

const haveHeart = localFont({
  src: '../../public/fonts/HaveHeartOne.otf',
  variable: '--font-have-heart',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Touta's World",
  description: 'Welcome to the magical world of Touta.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} ${dancing.variable} ${haveHeart.variable} font-sans antialiased bg-background text-foreground min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
