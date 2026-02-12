'use client' 
import ContactForm from '@/src/app/(project_pages)/contact/_components/ContactForm';
import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa';
import { useTheme } from '@/src/_contexts/ThemeContext';
import type {Locale} from '@/src/_lib/translations'
import {translations} from '@/src/_lib/translations'
import { useLang } from '@/src/_contexts/LanguageContext';
import CoustemHeader from '@/src/_components/CoustemHeader';
export default function ContactClient() {
    const {colors} = useTheme();
    const {lang} = useLang();
    const t = translations[lang]
  return (
    // Start Content Section 
    <div className="py-16">
      {/* Start Container  */}
      <div className="container max-w-4xl">
        {/*Start Contact Word   */}
        <CoustemHeader title={t.contactPage.contact}/>
        {/*End Contact Word   */}

        {/* Start Contact Paragraph  */}
        <p className="text-center text-lg mb-12 mt-5" style={{color: colors.textSecondary}}>
          {t.contactPage.letMeHear}
        </p>
         {/* End Contact Paragraph  */}


        {/* Start Grid That Display Information Contact And Form To Contact  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Start Information Contact  */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold" style={{color: colors.text}}>
              {t.contactPage.getInTouch}
            </h2>
            
            <div className="space-y-6">

              {/* Start Email  */}
              <div className="flex items-start gap-4">
                <div className="text-2xl">✉️</div>
                <div>
                  <h3 className="font-bold mb-1" style={{color: colors.text}}>
                    {t.contactPage.email}
                  </h3>
                  <p className="" style={{color: colors.textSecondary}}>elhosni99@gmail.com</p>
                </div>
              </div>
              {/* End Email  */}
              
              {/* Start Phone  */}
              <div className="flex items-start gap-4">
                <div className="text-2xl">📱</div>
                <div>
                  <h3 className="font-bold mb-1" style={{color: colors.text}}>
                    {t.contactPage.phone}
                  </h3>
                  <p className = '' style={{color: colors.textSecondary}} dir='ltr'>+963 996 567 957</p>
                </div>
              </div>
              {/* End Phone  */}
              
              {/* Start Social Media  */}
              <div className="flex items-start gap-4">
                <div className="text-2xl">🌐</div>
                <div>
                  <h3 className="font-bold mb-3" style={{color: colors.text}}>
                    {t.contactPage.socialMedia}
                  </h3>
                  <div className="flex gap-4">
                    <li className='flex items-center gap-1 cursor-pointer text-blue-600 hover:text-blue-800 font-medium'>
                      <FaLinkedin></FaLinkedin>
                      <a target='_blank' href="https://linkedin.com/in/hamza-elhosni">{t.contactPage.linkedin}</a>
                    </li>
                    <li className='flex items-center gap-1 cursor-pointer text-blue-600 hover:text-blue-800 font-medium'>
                      <FaGithub></FaGithub>
                      <a target='_blank' href="https://github.com/HAMZA98755" className="text-blue-600 hover:text-blue-800 font-medium">{t.contactPage.github}</a>
                    </li>
                    <li className='flex items-center gap-1 cursor-pointer text-blue-600 hover:text-blue-800 font-medium'>
                      <FaFacebook></FaFacebook>
                      <a target='_blank' href="https://www.facebook.com/hmza.alhosni" className="text-blue-600 hover:text-blue-800 font-medium">{t.contactPage.facebook}</a>
                    </li>
                  </div>
                </div>
              </div>
              {/* End Social Media  */}
            </div>
          </div>
          {/* End Information Contact  */}

          {/* Start Contact Form  */}
          <ContactForm lang = {lang}/>
          {/* End Contact Form  */}
        </div>
        {/* End Grid That Display Information Contact And Form To Contact  */}
      </div>
      {/* End Container  */}
    </div>
    // End Content Section 
  );
}

