'use client' 
import Hero from '@/src/_components/Hero';

import Skills from './(project_pages)/skills/page';
export default async function HomeClient() {
  return (
    <div className="scroll-smooth bg-[#0B0F19]">
      <section id="home" className="scroll-mt-24">
        <Hero/>
      </section>
      <section id="about" className="scroll-mt-24">
        <Skills />
      </section>
    </div>
  );
}
