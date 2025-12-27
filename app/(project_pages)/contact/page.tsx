"use client";
import { translations } from '@/app/data/translations';
import ContactClient from './pageClient';
import { useLang } from '@/app/contexts/LanguageContext';

export default function Contact() {
  const { lang } = useLang();
  const t = translations[lang];
  return <ContactClient lang={lang}></ContactClient>;
}
