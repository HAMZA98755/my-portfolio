

import {translations} from '@/app/data/translations';
// This Function Return All Data About Projects;
export const getProjectsData = (lang: 'ar' | 'en') => { 
    const t = translations[lang];
    const isArabic = (lang === 'ar');
    return [
        {
            title: t.projectsPage.projectsList.todoProject.title,
            description: t.projectsPage.projectsList.todoProject.description,
            tech: t.projectsPage.projectsList.todoProject.tech,
            images: [
            {imageUrl: '/images/projectsImages/todoListApp/todoListImageLight.png', imageAlt: t.projectsPage.projectsList.todoProject.imagesAlt[0]},
            {imageUrl: '/images/projectsImages/todoListApp/todoListImageDark.png', imageAlt: t.projectsPage.projectsList.todoProject.imagesAlt[1]},
            ],
            projectUrlView: 'https://todo-list-nextjs-five-orcin.vercel.app/',
            projectUrlCode: 'https://github.com/HAMZA98755/todo-list-nextjs.git'
        },
        {
            title: t.projectsPage.projectsList.template3Project.title,
            description: t.projectsPage.projectsList.template3Project.description,
            tech: t.projectsPage.projectsList.template3Project.tech,
            images: [
                {imageUrl: '/images/projectsImages/template3/template3Image1.png', imageAlt: t.projectsPage.projectsList.template3Project.imagesAlt[0]},
                {imageUrl: '/images/projectsImages/template3/template3Image2.png', imageAlt: t.projectsPage.projectsList.template3Project.imagesAlt[1]},
                {imageUrl: '/images/projectsImages/template3/template3Image3.png', imageAlt: t.projectsPage.projectsList.template3Project.imagesAlt[2]},
                {imageUrl: '/images/projectsImages/template3/template3Image4.png', imageAlt: t.projectsPage.projectsList.template3Project.imagesAlt[3]},
            ],
            projectUrlView: 'https://hamza98755.github.io/Template-Three',
            projectUrlCode: 'https://github.com/HAMZA98755/Template-Three'

        }
    ];
}

export type ProjectsType = ReturnType <typeof getProjectsData>
export type ProjectType = ReturnType <typeof getProjectsData> [number]
export type ImagesType =  ProjectType['images'];

