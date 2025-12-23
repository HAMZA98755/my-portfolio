'use client'

import type { Metadata } from 'next';
import "./globals.css"
import { ThemeProvider } from './contexts/ThemeContext';
import { ReactNode } from 'react';
import CombonentToWoarbPages from './[lang]/CobonenteToWoarbPages';

interface LayoutProps {
  children: ReactNode;
  params: {
    lang: string;
  };
}


export default function RootLayout({children, params}: LayoutProps) {
  const {lang} = params;
  


  return (
    <html lang ={lang} 
    suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
