'use client'

import type { Metadata } from 'next';
import "./globals.css"
import { ThemeProvider } from './contexts/ThemeContext';
import { ReactNode } from 'react';
import CombonentToWoarbPages from './[lang]/component/CobonenteToWoarbPages';
import { inter, cairo, jakartaSans } from './ui/fonts';

interface LayoutProps {
  children: ReactNode;
  params: {
    lang: string;
  };
}


export default function RootLayout({children, params}: LayoutProps) {
  const {lang} = params;
  const isArabic = lang === 'ar'
  


  return (
    <html lang={lang} className={`${isArabic ? cairo.variable : inter.variable} antialiased`} suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
