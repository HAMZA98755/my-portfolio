import { Locale, translations, type Translation } from "@/app/data/translations";
export function getSkillsData(lang: Locale) {
    const t:Translation = translations[lang];
    return  [
      { name: 'Problem Soving', desc: 'C++ and Java' },
      { name: 'HTML5, CSS3, JavaScript', desc: 'Modern frontend development' },
      { name: 'React & Next.js', desc: 'High Quality Websites' },
      { name: 'Node.js', desc: 'Backend development' },
      { name: 'Tailwind CSS', desc: 'Responsive design' },
      { name: 'Databases', desc: 'SQL Server' },
      { name: 'Git & GitHub', desc: 'Version control' },
      { name: 'Flutter', desc: 'Modern Mobile Applecations' },
    ];
}

// export type SkillsType

