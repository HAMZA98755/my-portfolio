// Component: single-project carousel with prev/next arrows
import Image from 'next/image'
import {useState} from 'react'
import {IoIosArrowForward ,IoIosArrowBack } from "react-icons/io";
import { useTheme } from '@/app/contexts/ThemeContext';
import type { Locale } from '@/app/data/translations';
import type {ImagesType } from '../getProjectsData';
export default function ShowImageBasedOnIndex({ images, lang}: { images: ImagesType, lang: Locale }) {
  const [idx, setIdx] = useState(0); // This State Store Index Of Current Image Will be Showed
  const {colors} = useTheme(); 
  const isArabic = lang === 'ar'
  const numberOfImages = images?.length || 0; // Return Number of Images
  if (numberOfImages === 0) return null; 

  const next = () => setIdx((i) => (i + 1) % numberOfImages); // This Function Change Current Image to Next Image
  const prev = () => setIdx((i) => (i - 1 + numberOfImages) % numberOfImages);// This Function Change Current Image to Previous Image


  return (
    <div
    className="relative rounded-lg mb-6"
    style={{ borderColor: colors.border }}
    >
      {/* This Div Return The Current Image  */}
      <div className="relative w-full h-64 bg-gray-100">
        <Image
          src={images[idx].imageUrl}
          alt={images[idx].imageAlt}
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
          className='transitions'
        />
      </div>

      {
        numberOfImages > 1 && ( //  This Enshure That Number Of Images > 1 To Show The Arrows and The Reboon 
          <>
            {/* Button to Pass to Next Image */}
            <button
                onClick={isArabic ? next: prev}
                aria-label="previous" 
                className="absolute left-2  top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
                >
              <IoIosArrowBack/>
            </button>
            {/* Button to Pass to Previous Image  */}
            <button
              onClick={isArabic ? prev : next}
              aria-label="next"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
            > 
            <IoIosArrowForward/>
            </button>
            {/* Rebbon to Tell to User The Current Image  */}
            <div className='flex justify-center absolute left-0 right-0 -bottom-3 pointer-events-none'>
              <div className="flex gap-2 w-[80%] max-w-xl pointer-events-auto">
                {
                  Array.from({length: numberOfImages}).map((_, i) => (
                    <div
                      key={i}
                      className= {`${ i === idx ? 'bg-blue-600' : 'bg-black'} h-1 rounded-xl`}
                      style={{width: `${100 / numberOfImages}%`}}
                      >
                    </div>
                  ))
                }
              </div>
            </div>
          </>
        )
      }

    </div>

  );
}