import { Locale, translations, type Translation } from "@/src/_lib/translations";
export function getSkillsData(lang: Locale) {
    const t:Translation = translations[lang];
    return  [
      { name: 'Frontend Development', desc: 'Modern and resposive designs development using React and Next.js' },
      { name: 'Backend Development', desc: 'Using Node.js and Express'},
      { name: 'Databases', desc: 'Using PostgreSQL and MySQL' },
      { name: 'Problem Sovling', desc: '+150 problem solved on codeforces' },
      { name: 'Version Control', desc: 'Git and GitHub' },
    ];
}

// export type SkillsType

