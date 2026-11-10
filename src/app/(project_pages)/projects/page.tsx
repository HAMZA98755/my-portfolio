import PageTitle from '@/src/_components/PageTitle'
import ProjectCard from '@/src/_components/ProjectCard'
import { getCachedProjects } from '@/src/_lib/projects'

export default async function ProjectsPage() {
  const projects = await getCachedProjects()

  return (
    <main className="min-h-screen bg-[#0B0F19] pb-20 text-white">
      <PageTitle title="My Projects" />
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20" aria-labelledby="projects-heading">
        <div className="mb-10 max-w-2xl">
          <p id="projects-heading" className="text-lg leading-relaxed text-gray-400 md:text-xl">
            A collection of products and experiments built with thoughtful design, reliable engineering, and a focus on useful experiences.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-white/10 p-8 text-gray-400">
            Projects are being prepared. Check back soon.
          </p>
        )}
      </section>
    </main>
  )
}
