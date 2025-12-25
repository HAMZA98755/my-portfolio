"use client";
import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import ModeSwitcher from "./ModeSwitcher";
import { translations } from "@/app/translations";
import { useTheme } from "../../contexts/ThemeContext";
import NavLink from "./NavLink";
import { MdOutlineMenu } from "react-icons/md";

export default function HeaderClient({ lang }: { lang: "ar" | "en" }) {
  const [open, setOpen] = useState(false);
  const t = translations[lang];
  const { theme, colors, toggleTheme } = useTheme();
  

  return (
    <header
      className="shadow-lg z-50 border-b border-white"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container flex items-center justify-between py-5">
        {/*Start Site Name  */}
        <div className="flex items-center gap-4">
          <Link
            href={`/${lang}`}
            className="text-2xl font-extrabold"
            style={{ color: colors.text }}
          >
            {t.ui.siteName}
          </Link>
        </div>
        {/*End Site Name  */}
        {/* Start Navigation  */}
        <nav
          className="hidden md:flex items-center gap-4"
          style={{ color: colors.text }}
        >
          <NavLink href={`/${lang}/about`}>{t.aboutPage.about}</NavLink>
          <NavLink href={`/${lang}/projects`}>{t.projects}</NavLink>
          <NavLink href={`/${lang}/contact`}>{t.contactPage.contact}</NavLink>
        </nav>
        {/* End Navigation  */}

        {/* Strat LanguageSwitcher And Mode Switcher  */}
        <div
          className="hidden ml-4 md:flex gap-4 justify-center items-center"
          style={{ color: colors.text }}
        >
          <LanguageSwitcher colors={colors} />
          <ModeSwitcher />
        </div>
        {/* End LanguageSwitcher And Mode Switcher  */}

        {/* Start Navigation In Small Screen (Menu)  */}

        {/* Start Menu Icon  */}
        <div className="md:hidden">
          <MdOutlineMenu
            onClick={() => setOpen(!open)}
            className="text-3xl cursor-pointer"
            style={{ background: colors.background, color: colors.text }}
          />
        </div>
        {/* End Menu Icon  */}

        {/* Start Menu  */}
      </div>
      {open && (
        <div className="md:hidden border-t border-primary-300 bg-primary-600">
          <nav className="container py-4 gap-4">
            <NavLink href={`/${lang}/about`} onClick={() => setOpen(false)}>
              {t.aboutPage.about}
            </NavLink>
            <NavLink href={`/${lang}/projects`} onClick={() => setOpen(false)}>
              {t.projects}
            </NavLink>
            <NavLink href={`/${lang}/contact`} onClick={() => setOpen(false)}>
              {t.contactPage.contact}
            </NavLink>
            
            <div className="flex gap-5 items-center mt-5">
              <div className="md:flex">
                <LanguageSwitcher colors={colors} />
              </div>
              <div className="md:flex">
                <ModeSwitcher />
              </div>
            </div>
          </nav>
        </div>
      )}
      {/* Start Menu  */}
      {/* Start Navigation In Small Screen (Menu)  */}
    </header>
  );
}
