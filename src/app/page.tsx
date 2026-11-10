import Hero from '@/src/_components/Hero';
import Skills from './(project_pages)/skills/page';
import ProjectsPage from './(project_pages)/projects/page';
import ContactPage from './(project_pages)/contact/page';
export default async function HomeClient() {
  return (
    <div className="scroll-smooth bg-[#0B0F19]">
      <section id="home" className="scroll-mt-24">
        <Hero/>
      </section>
      <section id="about" className="scroll-mt-24">
        <Skills />
      </section>
      <section id="about" className="scroll-mt-24">
        <ProjectsPage />
      </section>
      <section id="about" className="scroll-mt-24">
        <ContactPage />
      </section>
    </div>
  );
}
