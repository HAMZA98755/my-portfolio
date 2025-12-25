import { translations } from '@/app/translations';
import ContactClient from './pageClient';
import type { Props } from '@/app/lib/types';

export default async function Contact({ params }: Props) {
  const { lang } = await params;
  const t = translations[lang];
  
   return (
    <ContactClient lang = {lang}></ContactClient>
  );
}
