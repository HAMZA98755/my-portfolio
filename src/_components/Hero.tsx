// app/ui/Hero.tsx
// This Page Displays Info About Hero  

'use client'; // Required For Context And UseEffect

import Image from 'next/image'
import Video from 'next-video'
import myVideo from '@videos/myVideo.mp4'
import myImage from '@/public/images/myImage.png'
import { useRef, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
      videoRef.current.muted = true;
      videoRef.current.play().catch(err => console.log("Playback failed:", err));
    }
  }, []);
  return (
    // Start Hero Container
    <div className="bg-[#0B0F19] bg-gradient-to-t from-black to-[#0B0F19] relative min-h-screen w-full flex items-center py-12 md:py-0 overflow-hidden mb-30">
      
      {/* Start Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Video 
          ref={videoRef}
          src={myVideo}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          aria-hidden="true"
          preload="auto"
          className="object-cover w-full h-full opacity-30"
        />
        <div className='absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b  to-[#0B0F19]'></div>
      </div>
      {/* End Background Video */}

      {/* Start Main Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-white flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        <div className="flex justify-center md:justify-end order-1 md:order-2 w-full">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
            <Image
              src={myImage}
              alt="Hamza Alhosni"
              fill
              priority
              className="object-contain [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)]"
            />
            {/* Start Gradient Overlay Mask */}
            {/* <div className="gradient-border absolute inset-0 border-30 border-gradient border-from-black border-to-[#0B0F19] bg-gradient-to-t from-black to-[#0B0F19] via-transparent to-transparent pointer-events-none" /> */}
            {/* End Gradient Overlay Mask */}
          </div>
        </div>
        {/* End Right Section Image */}

        {/* Start Left Section Info */}
        <div className="flex flex-col space-y-4 md:space-y-6 text-left order-2 md:order-1 w-full">
          
          {/* Start Name Section */}
          <div className="flex gap-2 md:gap-4 items-baseline whitespace-nowrap">
            <span className="text-lg md:text-2xl lg:text-3xl font-normal text-gray-400">I am</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">Hamza Alhosni</h1>
          </div>
          {/* End Name Section */}

          {/* Start Title Section */}
          <div className="space-y-1">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-medium text-[#A6A6A6]">
              Software Engineer &
            </h2>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-green-500">
              Full-Stack Developer
            </h2>
          </div>
          {/* End Title Section */}

          {/* Start Paragraph Description */}
          <div className="max-w-xl space-y-2">
            <h3 className="text-lg md:text-2xl font-semibold text-gray-100">Welcome to My Portfolio</h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed">
              Explore my work, skills, and experience as a software engineer dedicated to building reliable web applications and software solutions.
            </p>
          </div>
          {/* End Paragraph Description */}

          {/* Start Action Links */}
          <div className="flex flex-row sm:flex-row gap-4 pt-2 md:pt-4 w-full sm:w-auto">
            <a 
              href="#" 
              className="bg-zinc-800 hover:bg-zinc-700 transition px-4 md:px-6 py-3 rounded-xl font-medium text-center text-sm md:text-base flex-1 sm:flex-none sm:min-w-[150px]"
            >
              Download CV
            </a>
            <a 
              href="#" 
              className="bg-blue-600 hover:bg-blue-500 transition px-4 md:px-6 py-3 rounded-xl font-medium text-center text-sm md:text-base flex-1 sm:flex-none sm:min-w-[150px]"
            >
              GitHub Profile
            </a>
          </div>
          {/* End Action Links */}

        </div>
        {/* End Left Section Info */}

      </div>
      {/* End Main Content Grid */}

    </div>
    // End Hero Container
  );
}
