// app/ui/Hero.tsx
// This Page Display Some Info About Hero  

import Image from 'next/image'
import { useTheme } from '../_contexts/ThemeContext';
import { useLang } from '../_contexts/LanguageContext';
import { translations } from '../_lib/translations';


export default function Hero() {
  const {lang} = useLang();
  const isArabic = lang === 'ar';
  const t = translations[lang];
  const {colors} = useTheme(); 
  return (
    // Start Hero Section 
    <section className="py-8">
      {/* Start Container  */}
      <div className="container gap-8 text-center">
        <div className="max-w-5xl w-full h-[calc(100vh-10rem)] flex flex-col justify-between">
          {/* Start Name and Image and description  */}
          <div className="flex flex-col gap-4">
            {/* Start Name and Image  */}
            <div className="flex flex-col md:flex-row items-center gap-4 ">
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold'>{t.ui.siteName}</h1> {/* Name */}
              <div className="w-25 h-25 rounded-full overflow-hidden inline-block md:inline-flex items-center justify-center border-2 border-gray-200">
                <Image  
                  src="/images/hamzaPhoto.jpg"
                  alt="Personal Photo"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                /> {/* Image */}
              </div>
            </div>
            {/* End Name and Image  */}

            {/* Start Description  */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium" style={{color: colors.textSecondary}}>{t.homePage.softWereEngineer}</h2> {/*Title Jop*/}

            <h2 className= 'md:self-end text-3xl md:text-5xl lg:text-6xl font-medium' style={{color: colors.textSecondary}}>{t.homePage.webDeveloper}</h2> {/* specaliz*/}


            <p className='mt-5 text-xl md:text-2xl self-center' style={{color: colors.textSecondary}}>{t.homePage.tagLine}</p>

            {/* Start Description  */}
          </div>
          {/* End Name and Image and description  */}


          {/* Start Links  */}
          <div className="justify-self-end flex justify-center gap-4 flex-wrap mt-10 mb-10">
            {/* Start Projects Link  */}
            <a
              href={`/projects`}
              className="md:w-60 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition transform"
              style={{background: colors.buttonPrimaryBackground}}
            >
              {t.projects}
            </a>
            {/* End Projects Link  */}



            {/* Start Contact Link  */}
            <a
              href={`/contact`}
              className="md:w-md border-2 px-6 py-3 rounded-lg font-bold text-lg transition transform hover:scale-105"
              style={{color: colors.buttonSecondaryText, background: colors.buttonSecondaryBackground}}
            >
              {t.contactPage.contact}
            </a>
            {/* End Contact Link  */}

          </div>
          {/* End Links  */}
        </div>
      </div>
      {/* End Container  */}
    </section>
    // End Hero Section
  );
}
