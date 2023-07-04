import React from 'react'
import circles from '../../Images/blocks.gif'
import Image from 'next/image'
export default function Loader() {
  return (
    <div className='flex justify-center items-center w-full py-2'>
        <Image width={200} height={200} src={circles.src} alt="Loading..." />

    </div>
  )
}
