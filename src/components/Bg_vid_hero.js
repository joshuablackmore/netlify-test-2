import React from 'react'

const BackgroundHero = () => {
  return (
    <div className="relative flex w-full h-[100dvh] items-center justify-center  min-[466px]:h-[100dvh] sm:h-[100dvh] md:h-[100dvh] lg:h-[100dvh] xl:h-[100dvh] overflow-hidden">
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