'use client'
import { useState, useContext, createContext, ReactNode, useEffect, useMemo } from "react";
import { Locale } from "../_lib/translations";
import { cairo, inter } from "../_ui/fonts";


interface LanguageContextProps {
    lang: Locale,
    toggoleLang: () => void,
    setLang: (lang: Locale) => void
};


const getPreferredLocal = (): Locale => {
    if (typeof navigator === 'undefined') return 'en';
    return navigator.language?.startsWith('ar') ? 'ar' : 'en';
}


const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export default function LanguageProvider({children, initialLang='en'}: {children: ReactNode, initialLang: Locale}) {

    const stored = (typeof window !== 'undefined') ? (localStorage.getItem('lang') as Locale | null) : null;
    const prefered = getPreferredLocal();

    const defaultLang = stored ?? prefered;

    const [lang, setLang] = useState<Locale>(defaultLang || initialLang);
    
    useEffect(()=> {
        const body = document.body;
        body.dir = `${lang === 'ar' ? 'rtl' : 'ltr'}`
        body.classList.add(lang == 'ar' ? cairo.className : inter.className);
    }, [lang]);



    const toggoleLang = () => {
        setLang(prev => {
            const next = prev === 'ar' ? 'en' : 'ar';
            if (typeof window !== 'undefined') {
                localStorage.setItem('lang', next);
            }
            return next;
        });
    }

    const value = useMemo(
        () => ({lang, toggoleLang, setLang})
    ,[lang])

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLang = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('LanguageContext Must Used in LanguageProvider');
    }
    return context
}