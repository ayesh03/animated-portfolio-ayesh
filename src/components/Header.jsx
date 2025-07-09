import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {/* Header */}
      <div className='fixed w-full flex items-center justify-end z-20 py-6 px-10'>
        <button
          onClick={() => setShowModal(true)}
          className='bg-gradient-to-r from-black to-gray-800 text-white border border-white px-6 py-2 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out'
        >
          Hire me
        </button>
        <i className='ri-more-2-fill text-white text-4xl ml-4 cursor-pointer'></i>
      </div>

      {/* Modal */}
      {showModal && (
        <div className='fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50'>
          <div className='bg-white text-black rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative animate-popup'>

            <button
              onClick={() => setShowModal(false)}
              className='absolute top-3 right-4 text-gray-500 text-2xl hover:text-black transition'
            >
              &times;
            </button>

            <h2 className='text-3xl font-bold mb-6 text-center tracking-tight text-gray-900'>
              Let’s Connect 
            </h2>

            <div className='space-y-5 text-[17px] font-medium text-gray-800'>

              <p className='flex items-center gap-3'>
                <i className='ri-mail-line text-blue-600 text-xl'></i>
                <a href="mailto:ayeshbhuyan180@gmail.com" className='hover:underline'>ayeshbhuyan180@gmail.com</a>
              </p>

              <p className='flex items-center gap-3'>
                <i className='ri-phone-line text-green-600 text-xl'></i>
                <a href="tel:+917894152448" className='hover:underline'>+91 7894152448</a>
              </p>

              <p className='flex items-center gap-3'>
                <i className='ri-linkedin-box-fill text-blue-700 text-xl'></i>
                <a href="https://www.linkedin.com/in/ayesh03" target="_blank" className='hover:underline'>LinkedIn Profile</a>
              </p>

              <p className='flex items-center gap-3'>
                <i className='ri-github-fill text-gray-800 text-xl'></i>
                <a href="https://github.com/ayesh03" target="_blank" className='hover:underline'>GitHub Portfolio</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
