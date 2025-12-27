'use client'
import { useState, useContext, createContext, ReactNode, useEffect } from "react";
import { Locale } from "../data/translations";


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

export default function LanguageProvider({children}: {children: ReactNode}) {

    const stored = (typeof window !== 'undefined') ? (localStorage.getItem('lang') as Locale | null) : null;
    const defaultLang = stored ?? getPreferredLocal();

    const [lang, setLang] = useState<Locale>(defaultLang);
    
    useEffect(()=>{
        const body = document.body;
        body.dir = `${lang === 'ar' ? 'rtl' : 'ltr'}`
    }, [lang])

    const toggoleLang = () => {
        setLang(prev => {
            const next = prev === 'ar' ? 'en' : 'ar';
            if (typeof window !== 'undefined') {
                localStorage.setItem('lang', next);
            }
            return next;
        });
    }


    return (
        <LanguageContext.Provider value={{lang, toggoleLang, setLang}}>
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