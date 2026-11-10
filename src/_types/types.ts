export type Project = {
  id: number
  title: string
  slug: string
  description: string
  fullDescription: string | null
  screenshots: string[]
  theme: Record<string, unknown>
  githubUrl: string | null
  liveUrl: string | null
  featured: boolean
  createdAt: string
  skills: ProjectSkill[]
}

export type ProjectSkill = {
  projectId: number
  skillId: number
  id: number
  name: string
  category: string | null
  iconUrl: string | null
}

// theme.ts

export type ThemeColors = {
    light: {
        background: string,
        border: string,
        text: string,
        textSecondary: string,
        tagBackground: string,   
        tagText: string,         
        buttonPrimaryBackground: string,
        buttonPrimaryText: string,
        buttonSecondaryBackground: string,
        buttonSecondaryText: string,
    }
    dark: {
        background: string,
        border: string,
        text: string,
        textSecondary: string,
        tagBackground: string,   
        tagText: string,         
        buttonPrimaryBackground: string, 
        buttonPrimaryText: string,
        buttonSecondaryBackground: string,
        buttonSecondaryText: string,
    }
};


export type ThemeMode = keyof ThemeColors; // light or dark
export type Skill = {
  id: number;
  label: string;
  icon: string;
  isLocked: boolean;
};
export type SkillEdge = {
  from_node_id: number;
  to_node_id: number;
};