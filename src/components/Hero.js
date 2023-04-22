import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-[100dvh] bg-fixed bg-center bg-cover custom-img over'>
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/70 overflow-hidden' />
        <div className='text-white z-10'>
        <h1 className='text-5xl text-center'>Site under construction</h1>
        <h2 className="flex pt-5 items-center justify-center text-center text-2xl font-bold">Watch some<a href="https://www.youtube.com/watch?v=z_s1Nb3JwDY&ab_channel=JoshuaBlackmore" className='text-yellow-300 text-4xl hover:text-5xl hover:text-pink-500 px-2'>video</a>for now</h2>
        </div>
    </div>
  )
}

export default Hero