import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-[100dvh] bg-center bg-cover custom-img overflow-hidden'>
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/70 h-[100dvh] overflow-hidden' />
        <div className='text-white z-10'>
        <h1 className='text-5xl text-center'>Site under construction</h1>
          <div className='flex flex-wrap text-center items-center justify-center'>
            <h2 className="pt-5 text-2xl">Here's some<a href="#videos" className='text-yellow-300 font-bold text-3xl hover:text-pink-500 px-2'>videos</a>for now</h2>
          </div>

        </div>
    </div>
  )
}

export default Hero