"use client";
import Image from "next/image";
import { useTheme } from "@/app/_contexts/ThemeContext";
import ProjectsCard from "./ProjectsCard";
import { translations, type Locale } from "@/app/_lib/translations";

// Tish Function Take Projects From Page.tsx and Desplay Them On Browser
export default function ProjectsClient({lang}: {lang: Locale}) {
  const { colors } = useTheme();
  const t = translations[lang];
  return (
    // Start Projects Section
    <div className="py-16">
      {/* Start Container  */}
      <div className="container">
        <h1
          className="text-5xl font-bold mb-16 text-center"
          style={{ color: colors.text }}
        >
          {t.projects}
        </h1>
        <ProjectsCard lang = {lang}/>
      </div>
      {/* End Container  */}
    </div>
    // End Projects Section
  );
}
