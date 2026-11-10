import type { Project } from '@/src/_types/types'

type ProjectCardProps = {
  project: Project
}

function getAccentColor(project: Project) {
  const accentColor = project.theme.accentColor
  return typeof accentColor === 'string' ? accentColor : '#22c55e'
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const accentColor = getAccentColor(project)
  const preview = project.screenshots[0]

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/25">
      <div
        className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-zinc-900"
        style={{ backgroundColor: `${accentColor}12` }}
      >
        {preview ? (
          <img
            src={preview}
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-500">
            Preview coming soon
          </div>
        )}
    
      </div>

      <div className="space-y-5 h-[] p-6 md:p-7 flex flex-col justify-between content-between">
        <div>
          {
            project.slug && (
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em]" style={{ color: accentColor }}>
                {project.slug}
              </p>
            )
          }
          <h2 className="text-2xl font-bold text-white md:text-3xl">{project.title}</h2>
          <p className="mt-3 leading-relaxed text-gray-400">{project.description}</p>
        </div>

        {project.skills.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Tech stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={`${project.id}-${skill.id}`}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-4 py-2.5 text-black transition hover:brightness-110"
              style={{ backgroundColor: accentColor }}
            >
              View live site ↗
            </a>
          )}
          
            <a
              href={project.githubUrl || "#"}
              target="_blank"
              rel="noreferrer"
              className={`rounded-xl border border-white/15 px-4 py-2.5  transition hover:border-white/40 hover:text-white ${!project.githubUrl ? "bg-gray-700 text-black pointer-events-none" : ""}`}
            >
              Source code
            </a>
        </div>
      </div>
    </article>
  )
}
