

import { useLang } from '@/src/_contexts/LanguageContext';
import {translations} from '@/src/_lib/translations';
import type { Project } from '@/src/_types/Project';
// This Function Return All Data About Projects;
export const getProjects = () => { 
    const {lang} = useLang();
    const t = translations[lang];
    const isArabic = (lang === 'ar');
    const projects:Project[] = [
        {
            id: '1',
            title: t.projectsPage.projectsList.todoProject.title,
            description: t.projectsPage.projectsList.todoProject.description,
            tech: t.projectsPage.projectsList.todoProject.tech,
            images: [
            {imageUrl: '/images/projectsImages/todoListApp/todoListImageLight.png', imageAlt: t.projectsPage.projectsList.todoProject.imagesAlt[0]},
            {imageUrl: '/images/projectsImages/todoListApp/todoListImageDark.png', imageAlt: t.projectsPage.projectsList.todoProject.imagesAlt[1]},
            ],
            projectUrlView: 'https://todo-list-nextjs-five-orcin.vercel.src/',
            projectUrlCode: 'https://github.com/HAMZA98755/todo-list-nextjs.git'
        },
        {
            id: '2',
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
    ]
    return projects
}
