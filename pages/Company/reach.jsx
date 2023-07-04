import Head from 'next/head'
import React from 'react'
import Reach from '../../Components/UI_Interface/Company/Reach_to_us/Reach'
import Footer from '../../Components/UI_Interface/Files/Footer'

export default function reach() {
  return (
    <>
    <Head>
        <title>Reach to Us - Creators Everywhere | Unreveal</title>
        <meta name="description" content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. That's is the power of Unreveal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Reach/>   
     <Footer/>
   
    </>
  )
}
