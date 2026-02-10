'use client' 
import Hero from '@/app/_components/Hero';
import { ReactElement, useCallback } from 'react';
import { useTheme } from './_contexts/ThemeContext';
import {translations, type Translation} from '@/app/_lib/translations'
import { useLang } from './_contexts/LanguageContext';
import { getServicesData } from './_lib/services';


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
