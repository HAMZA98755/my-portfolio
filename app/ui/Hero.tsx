// app/ui/Hero.tsx
// This Page Display Some Info About Hero  

import Image from 'next/image'
import { useTheme } from '../contexts/ThemeContext';


export default function Hero({ t }: any) {
  const isArabic = t.home === 'الرئيسية';
  const {colors, toggleTheme} = useTheme(); 
  const th = colors; // 'th' is the theme object that have all colors;
  return (
    // Start Hero Section 
    <section className="py-8 bg-linear-to-r" style={{background: th.background}}>
      {/* Start Container  */}
      <div className="container  gap-8 text-center">

        <div className="max-w-5xl w-full h-[calc(100vh-10rem)] flex flex-col justify-between">
          {/* Start Name and Image and description  */}
          <div className="flex flex-col gap-4">
            {/* Start Name and Image  */}
            <div className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight md:flex items-center gap-4" style={{color: th.text}}>
              <h1 >{t.ui.siteName}</h1> {/* Name */}
              <div className="w-20 h-20 md:w-22 md:h-22 rounded-full overflow-hidden inline-block text-center md:inline-flex items-center justify-center border-2 border-gray-200">
                <Image  
                  src="/images/myPhoto.jpg"
                  alt="Personal Photo"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                /> {/* Image */}
              </div>
            </div>
            {/* End Name and Image  */}

            {/* Start Description  */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight" style={{color: th.textSecondary}}>{t.homePage.softWereEngineer}</h2> {/*Title Jop*/}

            <div className={`${isArabic ? 'md:text-left': 'md:text-right'}`}>
              <h2 className= 'text-3xl md:text-5xl lg:text-6xl font-medium leading-tight' style={{color: th.textSecondary}}>{t.homePage.webDeveloper}</h2> {/* specaliz*/}
              {/*  */}
              <p className='mt-3 text-sm md:text-base ' style={{color: th.textSecondary}}>{t.homePage.tagline ?? 'Building scalable and secure architectures for modern applications.'}</p>
            </div>
            {/* Start Description  */}
          </div>
          {/* End Name and Image and description  */}


          {/* Start Links  */}
          <div className="justify-self-end flex justify-center gap-4 flex-wrap">
            {/* Start Contact Link  */}
            <a
              href={`/${isArabic ? 'ar' : 'en' }/contact`}
              className="w-60 md:w-md border-2 px-6 py-3 rounded-lg font-semibold text-lg  hover:scale-105 transition transform"
              style={{color: th.buttonSecondaryText, background: th.buttonSecondaryBackground}}
            >
              {t.contactPage.contact}
            </a>
            {/* End Contact Link  */}

            {/* Start Projects Link  */}
            <a
              href={`/${isArabic ? 'ar' : 'en' }/projects`}
              className="md:w-60 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition transform"
              style={{background: th.buttonPrimaryBackground}}
            >
              {t.projects}
            </a>
            {/* End Projects Link  */}
          </div>
          {/* End Links  */}
        </div>
      </div>
      {/* End Container  */}
    </section>
    // End Hero Section
  );
}
