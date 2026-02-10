'use client' 
import Hero from '@/src/_components/Hero';
import { ReactElement, useCallback } from 'react';
import { useTheme } from '@/src/_contexts/ThemeContext';
import {translations, type Translation} from '@/src/_lib/translations'
import { useLang } from '@/src/_contexts/LanguageContext';
import { getServicesData } from '@/src/_lib/services';


export default function HomeClinet() {
  const {colors} = useTheme();
  const {lang} = useLang();
  const t = translations[lang];
  const services = getServicesData(lang)
  return (
    <div>
      <Hero/> 
    </div>
  );
}
