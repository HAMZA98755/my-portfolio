import Link from 'next/link';
import { translations } from '@/app/data/translations';
import { useLang } from '../contexts/LanguageContext';
import type {Translation} from '../data/translations'

export default function Footer() {
  const {lang} = useLang();
  const isArabic = lang === 'ar';
  const t:Translation = translations[lang];
  
  return (
    <footer className="bg-gray-900 text-white mt-1 py-4 border-t border-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
          <div>
            <h3 className="text-xl font-bold mb-1">{t.ui.siteName}</h3>
            <p className="text-gray-400">{t.ui.footer.siteDesc}</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-1">{t.ui.footer.quickLinks}</h4>
            <ul className="space-y-2 flex gap-3">
              <li><Link href={`/${lang}`} className="text-gray-400 hover:text-white transition">{t.home}</Link></li>
              <li><Link href={`/${lang}/about`} className="text-gray-400 hover:text-white transition">{t.ui.nav.about}</Link></li>
              <li><Link href={`/${lang}/projects`} className="text-gray-400 hover:text-white transition">{t.ui.nav.projects}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-1">{t.ui.footer.getInTouch}</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">{t.contactPage.linkedin}</a>
              <a href="#" className="text-gray-400 hover:text-white transition">{t.contactPage.github}</a>
              <a href="#" className="text-gray-400 hover:text-white transition">{t.contactPage.facebook}</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-2 text-center text-gray-400">
          <p>{t.ui.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
