'use client'
// Component: single-project carousel with prev/next arrows
import Image from 'next/image'
import {useState} from 'react'
import {IoIosArrowForward ,IoIosArrowBack } from "react-icons/io";
import { useTheme } from '@/src/_contexts/ThemeContext';
import type { Locale } from '@/src/_lib/translations';
import { ProjectImage } from '@/src/_types/Project';
import { useLang } from '@/src/_contexts/LanguageContext';
import { Themes } from '@/src/_ui/Themes';
export default function ShowImageBasedOnIndex({ images}: {images: ProjectImage[]}) {
  const [idx, setIdx] = useState(0); // This State Store Index Of Current Image Will be Showed
  const [loading, setLoading] = useState(true);
  const {theme, colors} = useTheme(); 
  const t = Themes[theme];
  const {lang} = useLang();
  const isArabic = lang === 'ar'
  type ArrowDirection = 'left' | 'right'

  const numberOfImages = images?.length || 0; // Return Number of Images
  if (numberOfImages === 0) return null; 

  const next = () => setIdx((i) => (i + 1) % numberOfImages); // This Function Change Current Image to Next Image
  const prev = () => setIdx((i) => (i - 1 + numberOfImages) % numberOfImages);// This Function Change Current Image to Previous Image
  


  function Arrow ({dir}: {dir: ArrowDirection}) {
    
    return (
      <div className={'flex align-center justify-center '}>
        { numberOfImages > 1 && (  
          <button
            onClick={dir === 'left' ? isArabic ?  next : prev : isArabic ?  prev : next}
            style={{color: t.text}}
            >
            {dir === 'left' ? <IoIosArrowBack size={25}/> : <IoIosArrowForward size={25}/> }
          </button>
        )}
      </div>  
    )
  }


  return (
    <div style={{ borderColor: colors.border }}>
      
      {/* This div containe the left and right arrow and images   */}
      <div className={'flex align-center justify-center'}
        style={{flexDirection: isArabic ? 'row-reverse' : 'row'}}
      >


        {/* Button to Pass to Next Image */}
        <Arrow dir='left'/>  

        {/* Image Wraper  */}
        <div className='relative h-64 bg-gray-100 w-[80%] mx-auto'>
          {loading && (
            <div className="absolute top-0 left-0 place-holder w-full h-full bg-gray-400 z-100">
            </div>
          )}
          <Image
            key={images[idx].imageUrl}
            src={images[idx].imageUrl}
            alt={images[idx].imageAlt}
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>



        {/* Button to Pass to Next Image */}
        <Arrow dir='right'/>

          
      </div>
    
      { numberOfImages > 1 && (
          <div className='flex justify-center pointer-events-none my-4 w-[90%] mx-auto'>
          <div className="flex gap-2 w-[80%] max-w-xl pointer-events-auto">
            {
              Array.from({length: numberOfImages}).map((_, i) => (
                <div
                  key={i}
                  className= {` h-1 rounded-xl`}
                  style={{width: `${100 / numberOfImages}%`, backgroundColor: `${ i === idx ? '#3080ff' : colors.text}`}}
                  >
                </div>
              ))
            }
          </div>
      </div>
      )}
  </div>
  );
}