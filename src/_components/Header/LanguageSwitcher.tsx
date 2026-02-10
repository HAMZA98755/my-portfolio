'use client';
import {cairo, inter} from '@/src/_ui/fonts'
import { useLang } from '@/src/_contexts/LanguageContext';
export default function LanguageSwitcher({colors}: {colors: any}) {
  
  const {lang, toggoleLang} = useLang();

  return (
    <div className="flex gap-4">
      <button 

        onClick={toggoleLang}
        className={` ${lang === 'ar' ? 'font-bold text-blue-600' : ` ${cairo.className} `} cursor-pointer`}
      >
        العربية
      </button>
      <button 
        onClick={toggoleLang}
        className={`${lang === 'en' ? 'font-bold text-blue-600' :  ` ${inter.className} `} cursor-pointer`}
      >
        English
      </button>
    </div>
  );
}
