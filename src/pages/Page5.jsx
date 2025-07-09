import React, { useState } from 'react'
import page5video from '../assets/page5vidieo.mp4'

const Page5 = () => {
  const [showOptions, setShowOptions] = useState(false)

  const handleAboutClick = () => {
    setShowOptions(true)
  }

  const handleChoice = (platform) => {
    if (platform === 'github') {
      window.open('https://github.com/ayesh03', '_blank')
    } else if (platform === 'linkedin') {
      window.open('https://www.linkedin.com/in/ayesh03', '_blank')
    }
    setShowOptions(false)
  }

  // Close modal when clicking outside the buttons
  const handleBackdropClick = (e) => {
    if (e.target.id === 'overlay') {
      setShowOptions(false)
    }
  }

  return (
    <div className='h-screen p-8 relative bg-white'>
      <div className='relative h-full w-full bg-black rounded-[30px] overflow-hidden'>
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className='h-full w-full object-cover opacity-70'
          src={page5video}
        />

        {/* Developer Intro */}
        <div className='absolute bottom-40 right-10 max-w-xl bg-black/60 p-6 rounded-2xl text-white z-20'>
          <h2 className='text-3xl font-bold mb-2'>Hi, I’m Ayesh 👋</h2>
          <p className='text-lg leading-relaxed'>
            I’m a passionate <strong>Full Stack Software Developer</strong> skilled in building fast, scalable, and user-friendly digital products. From frontend UIs to backend APIs, cloud deployments, DevOps, and AI integrations — I do it all.
          </p>
        </div>

        {/* Big "About" Button */}
        <h1
          onClick={handleAboutClick}
          className='absolute left-10 text-white text-[25vw] uppercase -bottom-32 font-[ayesh] z-10 cursor-pointer hover:text-gray-300 transition-all duration-300'
        >
          About
        </h1>

        {/* GitHub / LinkedIn Modal */}
        {showOptions && (
          <div
            id="overlay"
            onClick={handleBackdropClick}
            className='absolute inset-0 flex flex-col items-center justify-center bg-black/70 z-30'
          >
            <h2 className='text-white text-3xl mb-6 font-semibold'>Where would you like to go?</h2>
            <div className='flex gap-10'>
              <button
                onClick={() => handleChoice('github')}
                className='bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition'
              >
                GitHub
              </button>
              <button
                onClick={() => handleChoice('linkedin')}
                className='bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition'
              >
                LinkedIn
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Page5
