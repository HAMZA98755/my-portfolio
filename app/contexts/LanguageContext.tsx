import { useState, useContext, createContext, ReactNode } from "react";


type LanguageType = 'ar' | 'en';

interface LanguageContextProps {
    lang: LanguageType,
    toggoleLang: () => void,
    setLang: (lang: LanguageType) => void
};

const getPreferredLocal = () => {
    return (typeof navigator !== undefined && (navigator.language.startsWith('ar') ? 'ar' : 'en')) as LanguageType
} 


const LanguageContext = createContext<LanguageContextProps | undefined> (undefined)

export default function LanguageProvider({children}: {children: ReactNode}) {

    const defaultLang = ( ( window !== undefined && localStorage.getItem('lang')) || getPreferredLocal() ) as LanguageType

    const [lang, setLang] = useState<LanguageType>(defaultLang );

    const toggoleLang = () => {
        setLang(prev => prev === 'ar' ? 'en' : 'ar');
        if (window !== undefined) {
            localStorage.setItem('lang', lang)
        }
    }

    return (
        <LanguageContext.Provider value = {{lang, toggoleLang, setLang}}>
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