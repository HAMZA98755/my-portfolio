'use client'
import { useTheme } from "@/app/contexts/ThemeContext";
import Image from "next/image";

// Type Of Proporates
type Props = {
  t: any;
  skills: {
    name: string;
    desc: string;
  }[];
};

export default function AboutClient({ t , skills}: Props) {
    
  const {colors} = useTheme();

  return (
    // Start About Section 
    <div className="py-16">
      {/* Start Container  */}
      <div className="container">
        {/* About  */}
        <h1 className="text-5xl font-bold mb-12" style={{color: colors.text}}>
          {t.aboutPage.about}
        </h1> {/* End About Word*/}

        {/* Start Image and Description  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Start Image  */}
          <div className="overflow-hidden rounded-2xl w-full flex justify-center">
            <div className="w-full">
                <Image
                  src="/images/myPhoto.jpg"
                  width={511}
                  height={371}
                  alt="myPhoto"
                  className="w-full h-auto object-cover"
                />

            </div>
          </div>
          {/* End Image  */}

          {/* Start Description  */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{color: colors.text}}>
              {t.aboutPage.whoAmI}
            </h2>
            <p className="text-lg mb-4 leading-relaxed" style={{color: colors.textSecondary}}>
              {t.aboutPage.aboutP1} 
              {t.aboutPage.aboutP2}
            </p>
          </div>
          {/* Start Description  */}
        </div>
        {/* Start Image and Description  */}

        {/* Start Skills Section  */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-12" style={{color: colors.text}}>
            {t.aboutPage.skills}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} 
              style ={{background: colors.tagBackground}}
              className="border border-gray-900 rounded-xl p-20 hover:scale-105 shadow-md hover:shadow-xl transition text-center">
                <h3 className="text-xl font-bold mb-2" style={{color: colors.text}}>{skill.name}</h3>
                <p className="" style={{color: colors.textSecondary}}>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* End Skills Section  */}

      </div>
      {/* End Container   */}

    </div>
    // End About Section 
  );
}
