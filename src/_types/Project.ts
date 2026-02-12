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