"use client";
import { translations } from '@/app/data/translations';
import { getProjectsData } from './getProjectsData';
import ProjectsClient from './Components/ProjectsClient';
import { useLang } from '@/app/contexts/LanguageContext';

export default function Projects() {
  const { lang } = useLang();
  const t = translations[lang];
  const projects = getProjectsData(lang);
  return <ProjectsClient lang={lang}></ProjectsClient>;
}
