"use client";
import { useTheme } from "@/src/_contexts/ThemeContext";
import ProjectsCard from "./_components/ProjectsList";
import { translations, type Locale } from "@/src/_lib/translations";
import CoustemHeader from "@/src/_components/CoustemHeader";
import { useLang } from "@/src/_contexts/LanguageContext";
// Tish Function Take Projects From Page.tsx and Desplay Them On Browser
export default function ProjectsClient() {
  const { colors } = useTheme();
  const {lang} = useLang();
  const t = translations[lang];
  return (
    // Start Projects Section
    <div className="py-16">
      {/* Start Container  */}
      <div className="container">
        <CoustemHeader title={t.projects}/>
        <ProjectsCard/>
      </div>
      {/* End Container  */}
    </div>
    // End Projects Section
  );
}
