'use client' 
import Hero from '@/app/ui/Hero';
import { ReactElement } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import type {Translation} from '@/app/translations'


type Props = {
  t: Translation
  services: {
    name: string;
    icon: ReactElement;
    desc: string;
  }[];
};
export default function HomeClinet({ t , services}: Props) {
  const {colors} = useTheme();
  
  return (
    <div>
      <Hero t={t}/> {/* Calling Hero */}
      {/* Start Wellcome Section  */}
      <section className="py-8 b"
      style={{background: colors.background}}>
        {/* Start Container  */}
        <div className="container">
          <h2 className="text-4xl font-bold mb-8 text-center" style={{color: colors.text}}>{t.homePage.welcome}</h2> {/* Wellcome */}
          {/* Start Servics  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
              services.map((serve) => ( // This Map calls all services
                <div key = {serve.name} className="relative p-8 rounded-xl shadow-md hover:scale-105 transition overflow-hidden" style={{background: colors.tagBackground}}> {/* Serve Collection*/}
                  <div className="text-4xl mb-4 " style={{color: colors.tagText}}>{serve.icon}</div> {/*Serve Icon*/}
                  <h3 className="text-xl font-bold mb-3 " style={{color: colors.text}}>{serve.name}</h3> {/* Serve Name*/ }
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
