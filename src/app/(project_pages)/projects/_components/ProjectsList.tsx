import { getProjects } from "../_lib/porjects";
import ShowImageBasedOnIndex from "./ShowImageBasedOnIndex";
import { useTheme } from "@/src/_contexts/ThemeContext";
import {translations, type Locale}  from "@/src/_lib/translations";
import { useLang } from "@/src/_contexts/LanguageContext";
import type { Project } from "@/src/_types/Project";
import ProjectCard from "./ProjectCard";
export default function ProjectsCard() {
  const {lang} = useLang();
  const t = translations[lang];
  const projects: Project[] = getProjects();
  const { colors } = useTheme();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        // Project Card
        <ProjectCard project={project} key={project.id}/>
      ))}
    </div>
  );
  /* Start Grid That Display Projects  */

  /* End Grid That Display Projects  */
}
