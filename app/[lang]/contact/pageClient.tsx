'use client' 
import ContactForm from '@/app/ui/Form/ContactForm';
import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa';
import { useTheme } from '@/app/contexts/ThemeContext';


type Props = {
  t: any
}
export default function ContactClient({ t }: Props) {
    const {colors} = useTheme();
    const th = colors;
  return (
    // Start Content Section 
    <div className="py-16">
      {/* Start Container  */}
      <div className="container max-w-4xl">
        {/*Start Contact Word   */}
        <h1 className="text-5xl font-bold mb-4 text-center" style={{color: th.text}}>
          {t.contactPage.contact}
        </h1>
        {/*End Contact Word   */}

        {/* Start Contact Paragraph  */}
        <p className="text-center text-lg mb-12" style={{color: th.textSecondary}}>
          {t.contactPage.letMeHear}
        </p>
         {/* End Contact Paragraph  */}


        {/* Start Grid That Display Information Contact And Form To Contact  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Start Information Contact  */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold" style={{color: th.text}}>
              {t.contactPage.getInTouch}
            </h2>
            
            <div className="space-y-6">

              {/* Start Email  */}
              <div className="flex items-start gap-4">
                <div className="text-2xl">✉️</div>
                <div>
                  <h3 className="font-bold mb-1" style={{color: th.text}}>
                    {t.contactPage.email}
                  </h3>
                  <p className="" style={{color: th.textSecondary}}>elhosni99@gmail.com</p>
                </div>
              </div>
              {/* End Email  */}
              
              {/* Start Phone  */}
              <div className="flex items-start gap-4">
                <div className="text-2xl">📱</div>
                <div>
                  <h3 className="font-bold mb-1" style={{color: th.text}}>
                    {t.contactPage.phone}
                  </h3>
                  <p className = '' style={{color: th.textSecondary}} dir='ltr'>+963 996 567 957</p>
                </div>
              </div>
              {/* End Phone  */}
              
              {/* Start Social Media  */}
              <div className="flex items-start gap-4">
                <div className="text-2xl">🌐</div>
                <div>
                  <h3 className="font-bold mb-3" style={{color: th.text}}>
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
          <ContactForm t={t} th = {th} />
          {/* End Contact Form  */}
        </div>
        {/* End Grid That Display Information Contact And Form To Contact  */}
      </div>
      {/* End Container  */}
    </div>
    // End Content Section 
  );
}

