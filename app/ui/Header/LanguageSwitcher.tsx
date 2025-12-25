'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {cairo, inter} from '@/app/ui/fonts'
export default function LanguageSwitcher({colors}: {colors: any}) {
  const pathname = usePathname();
  
  const currentLang = pathname.split('/')[1] || 'ar';
  
  const switchLanguage = (lang: string) => {
    const newPathname = pathname.replace(/^\/(ar|en)/, `/${lang}`);
    return newPathname || `/${lang}`;
  };

  return (
    <div className="flex gap-4">
      <Link 
        href={switchLanguage('ar')}
        className={`${currentLang === 'ar' ? 'font-bold text-blue-600' : ` ${cairo.className}`}`} style={{color: colors.textSecondary}}
      >
        العربية
      </Link>
      <Link 
        href={switchLanguage('en')}
        className={`${currentLang === 'en' ? 'font-bold text-blue-600' : ` ${inter.className}`}`}style={{color: colors.textSecondary}}
      >
        English
      </Link>
    </div>
  );
}
