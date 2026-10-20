// components/PageTitle.tsx

import React from 'react';


const PageTitle: React.FC<{title:string}> = ({title}) => {
  return (
    <div className='p-6 md:p-8 lg:p-12'>
      {   
        title.split(" ").map((word, index) => (
          <span
            id={String(index)} 
            className="text-6xl md:text-8xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 drop-shadow-[0_0_15px_rgba(0,255,136,0.3)]"
            >{word} </span>
        ))
      }

    </div>
  );
};

export default PageTitle;