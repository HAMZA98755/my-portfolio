"use client";
import Image from "next/image";
import { useTheme } from "@/app/contexts/ThemeContext";
import { getProjectsData } from "./getProjectsData";

type Props = {
  projects: ReturnType<typeof getProjectsData>;
  t: any;
};

// Tish Function Take Projects From Page.tsx and Desplay Them On Browser
export default function ProjectsClient({ projects, t }: Props) {
  const { colors } = useTheme();
  const th = colors;
  return (
    // Start Projects Section
    <div className="py-16">
      {/* Start Container  */}
      <div className="container">
        <h1
          className="text-5xl font-bold mb-16 text-center"
          style={{ color: th.text }}
        >
          {t.projects}
        </h1>
        {/* Start Grid That Display Projects  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            // Start Project Div
            <div
              key={index}
              className="border rounded-xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition transform duration-300"
              style={{ backgroundColor: th.background, borderColor: th.border }}
            >
              {/* Start Project Images Div  */}
              <div
                className="border rounded-lg mb-4 flex flex-wrap justify-center"
                style={{ borderColor: th.border }}
              >
                {project.images.map((img, i) => (
                 // Start One Image Div
                  <div key={i} style={{ width: `${100 / 2 - 2}%`, margin: 1 }}>
                    {/* Image  */}
                    <Image
                      src={img.imageUrl}
                      width={500}
                      height={500}
                      alt={img.imageAlt}
                    />
                  </div>
                  // End One Image Div
                ))}
              </div>
              {/* End Project Images Div  */}

              {/* Start Project Title  */}
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: th.text }}
              >
                {project.title}
              </h3>
              {/* End Project Title  */}

              {/* Start Project Description  */}
              <p
                className="mb-6 leading-relaxed"
                style={{ color: th.textSecondary }}
              >
                {project.description}
              </p>
              {/* End Project Description  */}

              {/* Start Project Technolngies  */}
              <div className="flex gap-2 flex-wrap mb-6">
                {project.tech.map((tech) => (
                //   Start Project One Technology 
                  <span
                    key={tech}
                    style={{
                      background: th.tagBackground,
                      color: th.tagText,
                    }}
                    className="px-4 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                //   End Project One Technology 
                ))}
              </div>
              {/* End Project Technolngies  */}


              {/* Start Project Buttons  */}
              <div className="flex gap-2">
                {/* Start View Project Button  */}
                <a
                  href={project.projectUrlView}
                  target="_blank"
                  style={{
                    background: th.buttonPrimaryBackground,
                    color: th.buttonPrimaryText,
                  }}
                  className="cursor-pointer w-1/2 flex justify-center items-center py-3 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition transform"
                >
                  {t.projectsPage.viewProject}
                </a>
                {/* End View Project Button  */}

                {/* Start Code Project Buttons  */}
                <a
                  href={project.projectUrlCode}
                  target="_blank"
                  style={{
                    background: th.buttonSecondaryBackground,
                    color: th.buttonSecondaryText,
                  }}
                  className="cursor-pointer w-1/2 flex justify-center items-center py-3 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition transform"
                >
                  {t.projectsPage.viewCode}
                </a>
                {/* End Code Project Buttons  */}
              </div>
              {/* End Project Buttons  */}
            </div>
            // End Project Div
          ))}
        </div>
        {/* Start Grid That Display Projects  */}
      </div>
      {/* Start Container  */}
    </div>
    // End Projects Section
  );
}
