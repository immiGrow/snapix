import React from 'react'
import Join from '../../Components/UI_Interface/Company/Join_the_team/Join'

import baseUrl from '../../mongodb/baseUrl'
import Head from 'next/head';
import Footer from '../../Components/UI_Interface/Files/Footer';


export default function join({images,totalUsers,totalPhotos}) {
  return (
    <>
    <Head>
        <title>Join the team - Creators Everywhere | Unreveal</title>
        <meta name="description" content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. That's is the power of Unreveal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Join images={images} totalUsers={totalUsers} totalPhotos={totalPhotos}/>
    <Footer/>
    </>
  )
}
export async function getServerSideProps(ctx){

  const request=await fetch(`${baseUrl}/api/photostudio/newPhotos`)
  const response=await request.json()
  const req=await fetch(`${baseUrl}/api/user/getallusers`)
  const res=await req.json()
  // console.log("ImgaeFlow",req)
      return{
          props:{
            images:response.item,
            totalUsers:res.totalUsers,
            totalPhotos:response.totalPhotos
            
          }
      }
  }
