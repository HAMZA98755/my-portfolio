import { translations } from '@/app/translations';
import {getProjectsData} from './getProjectsData'
import type { Props } from '@/app/lib/types';
import ProjectsClient from './Components/ProjectsClient';

export default async function Projects({ params }: Props) {
  const { lang } = await params;
  const t = translations[lang];
  const projects = getProjectsData(lang);
  return (
    <ProjectsClient lang = {lang}></ProjectsClient>
  );
}
