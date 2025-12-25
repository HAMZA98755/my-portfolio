import {inter, cairo, jakartaSans} from '@/app/ui/fonts';
import type { Metadata } from 'next';
import { translations } from '@/app/translations';
import '@/app/globals.css';
import Header from '@/app/ui/Header/Header';
import Footer from '@/app/ui/Footer';
import type { Props } from '../lib/types';
import { ThemeProvider } from '../contexts/ThemeContext';
import CombonentToWoarbPages from './component/CobonenteToWoarbPages';
export async function generateStaticParams() {
  return [
    { lang: 'ar' },
    { lang: 'en' },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang];
  
  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: 'ar' | 'en' }>;
}) {
  const { lang } = await params;
  const isArabic = lang === 'ar';


  
  return (
    <html lang={lang} dir={isArabic ? 'rtl' : 'ltr'} style={{
      '--font-inter': inter.style.fontFamily,
      '--font-cairo': cairo.style.fontFamily,
      '--font-jakarta': jakartaSans.style.fontFamily,
    } as React.CSSProperties}>
      
        <body className={`${isArabic ? cairo.className : inter.className} antialiased `}>
          <ThemeProvider>
            <CombonentToWoarbPages>
              <Header lang={lang} />
              <main className="max-w-6xl mx-auto p-4">
                {children}
              </main>
              <Footer lang={lang} />
            </CombonentToWoarbPages>
          </ThemeProvider>
        </body>
    </html>
  );
}
