"use client";
import { inter, cairo } from "@/app/_ui/fonts";
import { Locale } from "@/app/_lib/translations";
import "@/app/_ui/globals.css";
import Header from "@/app/_components/Header/Header";
import Footer from "@/app/_components/Footer";
import { ThemeProvider } from "./_contexts/ThemeContext";
import LanguageProvider from "./_contexts/LanguageContext";
import { ReactNode, useEffect, useState } from "react";
import { Metadata } from "next";

export default function RootLayout({ children }: { children: ReactNode }) {
  const getPreferredLocal = (): Locale => {
    if (typeof navigator === "undefined") return "en";
    return navigator.language?.startsWith("ar") ? "ar" : "en";
  };

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("lang")) {
      localStorage.setItem("lang", getPreferredLocal());
    }
  }, []);

  const [lang, setLang] = useState();

  const isArabic = lang == "ar";

  return (
    <html
      lang={lang}
      dir={isArabic ? "rtl" : "ltr"}
      style={
        {
          "--font-inter": inter.style.fontFamily,
          "--font-cairo": cairo.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <body
        className={` `}
      >
        <LanguageProvider initialLang="en">
          <ThemeProvider>
            <Header />
            <main className="max-w-6xl mx-auto p-4">{children}</main>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
