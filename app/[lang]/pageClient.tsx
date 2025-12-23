'use client' 
import Hero from '@/app/ui/Hero';
import { ReactElement } from 'react';
import { useTheme } from '../contexts/ThemeContext';

type Props = {
  t: any
  services: {
    name: string;
    icon: ReactElement;
    desc: string;
  }[];
};
export default function HomeClinet({ t , services}: Props) {
  const {colors} = useTheme();
  const th = colors; 
  return (
    <div>
      <Hero t={t}/> {/* Calling Hero */}
      {/* Start Wellcome Section  */}
      <section className="py-8 b"
      style={{background: th.background}}>
        {/* Start Container  */}
        <div className="container">
          <h2 className="text-4xl font-bold mb-8 text-center" style={{color: th.text}}>{t.homePage.welcome}</h2> {/* Wellcome */}
          {/* Start Servics  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
              services.map((serve) => ( // This Map calls all services
                <div key = {serve.name} className="relative p-8 rounded-xl shadow-md hover:scale-105 transition overflow-hidden" style={{background: th.tagBackground}}> {/* Serve Collection*/}
                  <div className="text-4xl mb-4 " style={{color: th.tagText}}>{serve.icon}</div> {/*Serve Icon*/}
                  <h3 className="text-xl font-bold mb-3 " style={{color: th.text}}>{serve.name}</h3> {/* Serve Name*/ }
                  <p className="" style={{color: th.textSecondary}}>{serve.desc}</p> {/* Serve Short Description */}
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
