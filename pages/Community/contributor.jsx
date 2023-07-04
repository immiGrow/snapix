import Head from 'next/head'
import React from 'react'
import Contributor from '../../Components/UI_Interface/Community/Contributor/Contributor'
import Footer from '../../Components/UI_Interface/Files/Footer'
import baseUrl from '../../mongodb/baseUrl'
export default function contributor({dsImgs,allusers}) {
  return (
    <>
        <Head>
        <title>Become a contributer - Creators Everywhere | Unreveal</title>
        <meta name="description" content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. That's is the power of Unreveal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Contributor dsImgs={dsImgs} allusers={allusers}/>
    <Footer/>
    </>
  )
}
export async function getServerSideProps(ctx){

  const request=await fetch(`${baseUrl}/api/photostudio/newPhotos`)
  const response=await request.json()
  const req=await fetch(`${baseUrl}/api/user/getallusers`)
  const res=await req.json()
  console.log("ImgaeFlow",req)
      return{
          props:{

            allusers:res.allusers,
            dsImgs:response.item
          }
      }
  }