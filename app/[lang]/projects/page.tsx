import { translations } from '@/app/translations';
import {getProjectsData} from './getProjectsData'
import type { Props } from '@/app/lib/types';
import ProjectsClient from './ProjectsClient';

export default async function Projects({ params }: Props) {
  const { lang } = await params;
  const t = translations[lang];
  const projects = getProjectsData(lang);
  return (
    <ProjectsClient projects = {projects} t = {t}></ProjectsClient>
  );
}
