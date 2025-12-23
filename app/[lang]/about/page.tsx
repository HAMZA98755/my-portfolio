import { translations } from '@/app/translations';
import AboutClient from './pageClient';
type Props = {
  params: Promise<{ lang: 'ar' | 'en' }>;
};
// This Function Take a Params and Store it in 'lang' to Use it in Client Page 
export default async function About({ params }: Props) {
  const { lang } = await params;
  const t = translations[lang];
  const skills = [
              { name: 'Problem Soving', desc: 'C++ and Java' },
              { name: 'HTML5, CSS3, JavaScript', desc: 'Modern frontend development' },
              { name: 'React & Next.js', desc: 'High Quality Websites' },
              { name: 'Node.js', desc: 'Backend development' },
              { name: 'Tailwind CSS', desc: 'Responsive design' },
              { name: 'Databases', desc: 'SQL Server' },
              { name: 'Git & GitHub', desc: 'Version control' },
              { name: 'Flutter', desc: 'Modern Mobile Applecations' },
            ];
  return (
    <AboutClient skills={skills} t = {t}></AboutClient>
  );
}
