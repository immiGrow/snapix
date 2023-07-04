import React from 'react'
import Trendgal from './Trendgal'
import Trendview from './Trendview'

export default function Trends() {
  return (
    <>
    <Trendgal/>
    <h1 className='text-center font-bold text-3xl px-8 md:px-24 py-4'>Unreveal is the platform for all internet visuals</h1>
    <Trendview/>
    </>
  )
}
