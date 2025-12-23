import { translations } from '@/app/translations';
import ContactClient from './pageClient';
type Props = {
  params: Promise<{ lang: 'ar' | 'en' }>;
};
export default async function Contact({ params }: Props) {
  const { lang } = await params;
  const t = translations[lang];
  
   return (
    <ContactClient t = {t}></ContactClient>
  );
}
