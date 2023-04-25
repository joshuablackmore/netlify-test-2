import React from 'react'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='flex w-full bg-yellow-300 items-center justify-center text-center'>
        <a href='#/'><BsFillArrowUpSquareFill className='text-5xl m-2'/></a>
    </div>
  )
}

export default Footer