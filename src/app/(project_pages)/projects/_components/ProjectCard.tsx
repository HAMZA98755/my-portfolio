import { useTheme } from "@/src/_contexts/ThemeContext"
import ShowImageBasedOnIndex from "./ShowImageBasedOnIndex"
import { useLang } from "@/src/_contexts/LanguageContext";
import { translations } from "@/src/_lib/translations";
import type { Project } from "@/src/_types/Project";
export default function ProjectCard ({project}: {project: Project}) {

    const {colors} = useTheme();
    const {lang} = useLang();
    const t = translations[lang];
    return (
        <div
          key={project.id}
          className="flex flex-col border rounded-xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition transform duration-300"
          style={{ backgroundColor: colors.background, borderColor: colors.border }}
        >
          {/* Images */}
          <ShowImageBasedOnIndex images = {project.images}/>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-3" style={{ color: colors.text }}>
            {project.title}
          </h3>

          {/* Description */}
          <p
            className="mb-6 leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex gap-2 flex-wrap mb-6">
            {project.tech.map((tech) => (
                <span
                key={tech}
                style={{ background: colors.tagBackground, color: colors.tagText }}
                className="px-4 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <a
              href={project.projectUrlView}
              target="_blank"
              rel="noreferrer"
              style={{
                background: colors.buttonPrimaryBackground,
                color: colors.buttonPrimaryText,
              }}
              className="cursor-pointer w-1/2 flex justify-center items-center py-3 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition transform"
            >
              {t.projectsPage.viewProject}
            </a>

            <a
              href={project.projectUrlCode}
              target="_blank"
              rel="noreferrer"
              style={{
                background: colors.buttonSecondaryBackground,
                color: colors.buttonSecondaryText,
              }}
              className="cursor-pointer w-1/2 flex justify-center items-center py-3 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition transform"
            >
              {t.projectsPage.viewCode}
            </a>
          </div>
        </div>
    )
}