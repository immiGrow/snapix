import React from 'react'
import Cards from './Cards'
import Signup from './Signup'
import StartBrowse from './StartBrowse'


import Boost from './Boost'
import WhatWeAre from '../Reach_to_us/WhatWeAre'

export default function AboutUI() {
  return (
    <>
    
    <StartBrowse/>
    <h1 className='text-center text-2xl md:text-4xl md:px-28 px-8 font-bold'>Unreveal is the internet source of freely usable images</h1>
    <Cards/>
    <Signup/>
    <div className="flex justify-center w-full">
    {/* <h1 className='text-center font-bold text-3xl '>Unreveal - Creators Everywhere</h1> */}
    <h2 className='font-semibold py-2 text-xl text-center w-3/5'>We are the team of lots of creators assembled on this Unreveal platform to provide you the fuel of creativity and non-stopping ultimate free high resolution photos.</h2>
    </div>
    <Boost/>
    <WhatWeAre/>

    </>
  )
}
