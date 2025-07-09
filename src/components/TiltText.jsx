import React from 'react'

const TiltText = (props) => {
  return (
    <div
          id='tiltDiv'
          ref={props.abc}
          className='transition-transform duration-75 ease-out'
        >
          <h1 className='text-[5.3vw] leading-[7vw] font-[file2] uppercase text-gray-200 font-bold'>
            I am <span>Software</span>
          </h1>
          <h1 className='text-[8vw] leading-[7.2vw] font-[file3] uppercase text-gray-200 font-bold'>
            Developer
          </h1>
        </div>
  )
}

export default TiltText
