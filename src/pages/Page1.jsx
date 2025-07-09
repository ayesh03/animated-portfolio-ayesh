import React, { useRef } from 'react'
import { gsap } from 'gsap'
import Page1Bottom from '../components/Page1Bottom'
import TiltText from '../components/TiltText'

const Page1 = () => {
  const tiltRef = useRef(null)

  const mouseMoving = (e) => {
    const tiltElement = tiltRef.current
    if (!tiltElement) return

    const bounds = tiltElement.getBoundingClientRect()
    const x = (e.clientX - bounds.x - bounds.width / 2) / 20
    const y = -(e.clientY - bounds.y - bounds.height / 2) / 20

    gsap.to(tiltElement, {
      rotateX: y,
      rotateY: x,
      duration: 1,
      ease: 'power4.out',
      transformPerspective: 1000,
      transformOrigin: 'center',
    })
  }

  return (
    <div
      id='page1'
      onMouseMove={mouseMoving}
      className='h-screen p-5 relative bg-white'
    >
      <div
        id='page1-in'
        className='relative shadow-xl p-24 shadow-gray-700 h-full rounded-3xl bg-[url("./pages/page1.jpg")] bg-cover bg-center'
      >
        <img className='h-32 ml-10' alt='' />

        <TiltText abc={tiltRef}/>
        <Page1Bottom />
      </div>
    </div>
  )
}

export default Page1
