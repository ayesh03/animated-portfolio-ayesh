import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

const Page1Bottom = () => {


    useGSAP(() => {
    gsap.to('#banner img', {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: 'linear'
    })
  }, [])
  return (
   <div className='absolute left-0 p-24 flex items-end justify-between bottom-0 w-full'>
  <div>
    <h2 className=' text-2xl font-[file3] text-gray-400'>
      WEB DEVELOPER | FRONTEND DEVELOPER
    </h2>
    <h3 className='text-2xl font-[file] text-gray-400'>
      BACKEND DEVELOPER | FULLSTACK DEVELOPER
    </h3>
  </div>

  <div id="banner" className="flex flex-col items-end">
    <div className="flex gap-3 mb-2">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" title="React" className="w-7 h-7" />
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" alt="Angular" title="Angular" className="w-7 h-7" />
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="Next.js" title="Next.js" className="w-7 h-7 bg-white rounded p-[2px]" />
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="Express.js" title="Express.js" className="w-7 h-7 bg-white rounded p-[2px]" />
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" title="Node.js" className="w-7 h-7" />
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" title="MongoDB" className="w-7 h-7" />
    </div>
    <div className="flex gap-3">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="MySQL" title="MySQL" className="w-7 h-7" />
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" title="PostgreSQL" className="w-7 h-7" />
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" className="w-7 h-7" />
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript" className="w-7 h-7" />
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C" title="C" className="w-7 h-7" />
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="C++" title="C++" className="w-7 h-7" />
    </div>
  </div>
</div>

  )
}

export default Page1Bottom
