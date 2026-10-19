"use client";
import "@/src/_ui/globals.css";
import Header from "@/src/_components/Header/Header";
import Footer from "@/src/_components/Footer";

import { ReactNode } from "react";
import localFont from 'next/font/local';




const SyneFont = localFont({
  src: './fonts/SpaceGrotesk-VariableFont_wght.ttf',
  variable: '--font-heading',
  display: 'swap',
  weight: '400 800'
});
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



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={AmazingGrotesk.variable}
    >
      <body className={AmazingGrotesk.className}>

            {/* <Header /> */}
            <main className="">{children}</main>
            <Footer />

      </body>
    </html>
  );
}
