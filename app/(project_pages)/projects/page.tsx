"use client";
import { translations } from '@/app/_lib/translations';
import { getProjectsData } from './_lib/porjects';
import ProjectsClient from './_components/ProjectsClient';
import { useLang } from '@/app/_contexts/LanguageContext';

export default function Projects() {
  const { lang } = useLang();
  const t = translations[lang];
  const projects = getProjectsData(lang);
  return <ProjectsClient lang={lang}></ProjectsClient>;
}
