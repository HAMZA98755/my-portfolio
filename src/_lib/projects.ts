'use server'

import { cacheLife, cacheTag } from 'next/cache'
import type { Project, ProjectSkill } from '../_types/types'
import { supabase } from '../utils/supabase/server'

type ProjectRow = {
  id: number
  title: string
  slug: string
  description: string
  full_description: string | null
  screenshots: string[] | null
  theme: Record<string, unknown> | null
  github_url: string | null
  live_url: string | null
  featured: boolean | null
  created_at: string
  project_skills: Array<{
    skill_id: number
    skills: Array<{
      id: number
      label: string
      icon: string
      is_locked: boolean
    }> | null
  }> | null
}

async function fetchProjectsFromDB(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select(`
      id,
      title,
      slug,
      description,
      full_description,
      screenshots,
      theme,
      github_url,
      live_url,
      featured,
      created_at,
      project_skills (
        skill_id,
        skills (
          id,
          label,
          icon,
          is_locked
        )
      )
    `)
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(`Error When Fetching Projects From Database: ${error.message}`)
  }

  const projects = (data as ProjectRow[]).map((project) => ({
    id: project.id,
    title: project.title,
    slug: project.slug,
    description: project.description,
    fullDescription: project.full_description,
    screenshots: project.screenshots ?? [],
    theme: project.theme ?? {},
    githubUrl: project.github_url,
    liveUrl: project.live_url,
    featured: project.featured ?? false,
    createdAt: project.created_at,
    skills: (project.project_skills ?? [])
      .flatMap((projectSkill) => {
        const skill = projectSkill.skills?.[0]
        if (!skill) {
          return []
        }

        return [{
          projectId: project.id,
          skillId: projectSkill.skill_id,
          id: skill.id,
          name: skill.label,
          category: null,
          iconUrl: skill.icon,
        }]
      }),
  }))

  return projects
}

export async function getCachedProjects(): Promise<Project[]> {
  'use cache'
  cacheLife('days')
  cacheTag('projects-tag')
  return fetchProjectsFromDB()
}

export type { ProjectSkill }
