export type ProjectImage = {
    imageUrl: string,
    imageAlt: string
}
export type Project = {
    id: string
    title: string,
    description: string,
    tech: readonly string [],
    images: ProjectImage[],
    projectUrlView: string,
    projectUrlCode: string
        
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