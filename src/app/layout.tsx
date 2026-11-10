"use client";
import "@/src/_ui/globals.css";

import { ReactNode } from "react";
import localFont from 'next/font/local';


const AmazingGrotesk = localFont({
  src:[
    {
      path: './fonts/Amazing Grotesk Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/Amazing Grotesk Book.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Amazing Grotesk Demi.otf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/Amazing Grotesk Ultra.otf',
      weight: '900',
      style: 'normal'
    },
  ],
  variable: '--font-heading',
});

const Syne = localFont({
  src: './fonts/Syne-VariableFont_wght.ttf',
  variable: '--font-syne',
});



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${AmazingGrotesk.variable} ${Syne.variable}`}
    >
      <body className={AmazingGrotesk.className}>

            <main>{children}</main>
            <footer className="border-t border-white/10 bg-[#0B0F19] px-6 py-6 text-center text-sm text-gray-400">
              <p>© 2026 Hamza Alhosni. All rights reserved.</p>
            </footer>

      </body>
    </html>
  );
}
