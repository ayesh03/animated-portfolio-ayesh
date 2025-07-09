import React, { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Page2 = () => {
  const canvasRef = useRef(null)

  useGSAP(() => {
    gsap.utils.toArray('.rotateText').forEach((el) => {
      gsap.from(el, {
        rotateX: -80,
        opacity: 0,
        duration: 3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          toggleActions: 'play none none reverse',
          scrub: false,
        },
      })
    })
  }, [])

  const animation = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')

    // Set canvas size
    canvas.width = window.innerWidth * 0.8
    canvas.height = window.innerHeight * 0.5

    const frameCount = 410
    const imagePaths = Array.from({ length: frameCount }, (_, idx) => {
      const paddedIndex = String(idx + 1).padStart(5, '0') // 00001, 00002, ...
      return `/aframe/${paddedIndex}.png`
    })

    const images = []
    let loadedImages = 0
    let currentFrame = 0
    let lastFrame = 0

    const loopAnimation = (timestamp) => {
      if (timestamp - lastFrame >= 1000 / 30) {
        context.clearRect(0, 0, canvas.width, canvas.height)
        if (images[currentFrame]) {
          context.drawImage(images[currentFrame], 0, 0, canvas.width, canvas.height)
        }
        currentFrame = (currentFrame + 1) % frameCount
        lastFrame = timestamp
      }
      requestAnimationFrame(loopAnimation)
    }

    // Load images
    imagePaths.forEach((path, idx) => {
      const img = new Image()
      img.src = path
      img.onload = () => {
        images[idx] = img
        loadedImages++
        if (loadedImages === frameCount) {
          requestAnimationFrame(loopAnimation)
        }
      }
      img.onerror = () => {
        console.error(`Image failed to load: ${path}`)
      }
    })
  } // ✅ THIS was missing

  useEffect(() => {
    animation()
  }, [])

  return (
    <div id='section2' className='bg-white text-center p-20 text-black'>
      <h3 className='p-10 text-gray-500 text-xl font-[file]'>
        @ designed and developed by Ayesh
      </h3>

      {['CODE', 'IS MY', 'CRAFT.', 'SOLUTIONS', 'ARE MY'].map((text, i) => (
        <div key={i} className='rotateText'>
          <h1 className='text-[35vw] font-[ayesh] leading-[35vw]'>{text}</h1>
        </div>
      ))}

      <div className='rotateText relative h-[400px]'>
  
  <h1 className='text-[35vw] font-[ayesh] leading-[35vw] relative z-10'>
    PRODUCT!
  </h1>
</div>



      <div className='flex flex-col items-center justify-center mt-16'>
        <div className='grid grid-cols-6 gap-x-16 gap-y-12'>
          {[
            ['github', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'],
            ['firebase', 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'],
            ['docker', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'],
            ['postman', 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'],
            ['redis', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'],
            ['supabase', 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg'],
            ['webpack', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg'],
            ['vscode', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'],
            ['sass', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'],
            ['bootstrap', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'],
            ['yarn', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg'],
            ['linux', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'],
          ].map(([alt, src]) => (
            <img key={alt} src={src} alt={alt} title={alt} className='w-[90px] h-[90px]' />
          ))}
        </div>
        <div className='mt-10 h-[2px] w-1/2 bg-black'></div>
      </div>
    </div>
  )
}

export default Page2
