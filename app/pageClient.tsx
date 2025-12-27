'use client' 
import Hero from '@/app/component/Hero';
import { ReactElement, useCallback } from 'react';
import { useTheme } from './contexts/ThemeContext';
import {translations, type Translation} from '@/app/data/translations'
import { useLang } from './contexts/LanguageContext';
import { getServicesData } from './data/getServicesData';


export default function HomeClinet() {
  const {colors} = useTheme();
  const {lang} = useLang();
  const t = translations[lang];
  const services = getServicesData(lang)
  return (
    <div>
      <Hero/> {/* Calling Hero */}
      {/* Start Wellcome Section  */}
      <section className="py-8">
        {/* Start Container  */}
        <div className="container">
          <h2 className="text-4xl font-bold mb-8 text-center">{t.homePage.welcome}</h2> {/* Wellcome */}
          {/* Start Servics  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
              services.map((serve) => ( // This Map calls all services
                <div key = {serve.name} className="relative p-8 rounded-xl shadow-md hover:scale-105 transition overflow-hidden" style={{background: colors.tagBackground}}> {/* Serve Collection*/}
                  <div className="text-4xl mb-4 ">{serve.icon}</div> {/*Serve Icon*/}
                  <h3 className="text-xl font-bold mb-3 " >{serve.name}</h3> {/* Serve Name*/ }
                  <p className="" style={{color: colors.textSecondary}}>{serve.desc}</p> {/* Serve Short Description */}
                </div>
              )) 
            }
          </div>
          {/* End Servics  */}
        </div>
        {/* Start Container  */}
      </section>
      {/* End Wellcome Section  */}
    </div>
  );
}
