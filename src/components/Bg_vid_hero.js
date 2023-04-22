import React from 'react'

const BackgroundHero = () => {
  return (
    <div className="relative flex w-full h-screen items-center justify-center  min-[466px]:h-screen sm:h-screen md:h-screen lg:h-screen xl:h-screen overflow-hidden">
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
    </div>
  )
}

export default BackgroundHero