import React, { useEffect, useRef } from 'react'
import page3video from '../assets/page3video.mp4'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Page3 = () => {
  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const skillsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 })

      // Initial state
      tl.set(headingRef.current, { opacity: 1 })
      tl.set(skillsRef.current, { opacity: 0 })

      // Show heading for 4s
      tl.to({}, { duration: 4 })

      // Fade out heading
      tl.to(headingRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'power3.inOut'
      })

      // Fade in skills
      tl.to(skillsRef.current, {
        opacity: 1,
        duration: 1.5,
        ease: 'power3.inOut'
      })

      // Hold skills for 20s
      tl.to({}, { duration: 20 })

      // Fade out skills
      tl.to(skillsRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'power3.inOut'
      })

      // Fade in heading again
      tl.to(headingRef.current, {
        opacity: 1,
        duration: 1.5,
        ease: 'power3.inOut'
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="h-screen p-8 bg-white">
      <div
        ref={containerRef}
        className="relative h-full w-full rounded-[50px] overflow-hidden bg-black text-white"
      >
        {/* Background Video */}
        <video
          src={page3video}
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover opacity-70"
        />

        {/* Main Text Section */}
        <div
          ref={headingRef}
          className="absolute z-20 text-white text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4"
        >
          <h1 className="text-[7vw] md:text-[6vw] font-bold whitespace-nowrap">
            Building the Future
          </h1>
          <p className="mt-6 text-2xl md:text-3xl leading-snug">
            From a blank file, to full-stack reality.
          </p>
          <p className="mt-2 text-2xl md:text-3xl leading-snug">
            Clean Code. Bold Vision. Powerful Results.
          </p>
        </div>

        {/* Skills Section */}
        <div
          ref={skillsRef}
          className="absolute z-10 inset-0 flex items-center justify-center px-8 text-left opacity-0"
        >
          <div className="max-w-4xl bg-black/70 rounded-xl p-6 text-white text-md md:text-lg leading-7 space-y-4 overflow-y-auto max-h-[80%]">
          <h1 className='4xl'>SKILLS:</h1>
            <p><span className="font-bold">Programming Languages:</span> C, C++, Python, JavaScript, Node.js, C#</p>
            <p><span className="font-bold">Frameworks & Libraries:</span> Django, React.js, Angular, Bootstrap, .NET, Express.js</p>
            <p><span className="font-bold">Web Technologies:</span> HTML, CSS, REST APIs, WebSocket</p>
            <p><span className="font-bold">Databases:</span> Firebase, MongoDB, MySQL, PostgreSQL</p>
            <p><span className="font-bold">Cloud & DevOps:</span> AWS, GCP, Docker, CI/CD Pipelines</p>
            <p><span className="font-bold">Tools:</span> Git, GitHub, VS Code, Postman, Docker Hub</p>
            <p><span className="font-bold">AI & ML:</span> Generative AI, OpenAI, LangChain, Prompt Engineering</p>
            <p><span className="font-bold">Networking:</span> TCP/IP, DNS, HTTP/HTTPS, VPNs</p>
            <p><span className="font-bold">CI/CD:</span> GitHub Actions, Version Control, Debugging</p>
            <p><span className="font-bold">Soft Skills:</span> Problem-Solving, Quick Learner, Team Collaboration, First-Principle Thinking</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page3
