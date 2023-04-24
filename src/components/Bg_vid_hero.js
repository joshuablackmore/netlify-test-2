import React from 'react'

const BackgroundHero = () => {
  return (
    <div>
    <div className="flex w-full h-[100dvh] items-center justify-center  min-[466px]:h-[100dvh] sm:h-[100dvh] md:h-[100dvh] lg:h-[100dvh] xl:h-[100dvh] overflow-hidden">
        <video
          autoPlay
          playsInline
          muted
          loop
          className="absolute w-auto min-w-full min-h-full max-w-none object-contain brightness-75"
        >
          <source src='/Stikki-hero-noaudio.mp4' />
          Your browser does not support the video tag.
        </video>
        <div className='text-white z-10'>
    <h1 className='text-5xl text-center leading-normal'>joshuablackmore.com</h1>
    <h1 className='text-4xl text-center leading-normal'>under construction</h1>
    <h2 className="flex pt-5 items-center justify-center text-center text-2xl font-bold">You can watch some<a href="https://www.youtube.com/watch?v=z_s1Nb3JwDY&ab_channel=JoshuaBlackmore" className='text-yellow-300 text-4xl hover:text-5xl hover:text-pink-500 px-2 transition-all'>video</a>for now</h2>
    </div>
    </div>
    </div>
  )
}

export default BackgroundHero