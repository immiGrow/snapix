import React from 'react'
import Instructions from '../../Components/UI_Interface/PhotoStudio/Upload/Instructions'

import { parseCookies } from 'nookies'
import baseUrl from '../../mongodb/baseUrl'
import PreUpload from '../../Components/UI_Interface/PhotoStudio/Upload/PreUpload'
import Head from 'next/head'
export default function PreUploading({images}) {
  const {token}=parseCookies()
  return (
    <>
     <Head>
        <title> Unreveal | Creators Everywhere</title>
        <meta
          name="description"
          content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. Photography is not only a hobby but it can also be your carrier."
        />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
    <PreUpload images={images} token={token}/>
    <Instructions/>
    
    </>
  )
}
export async function getServerSideProps(ctx){

  const request=await fetch(`${baseUrl}/api/photostudio/newPhotos`)
  const response=await request.json()

  // console.log("ImgaeFlow",req)
      return{
          props:{
            images:response.item
            
          }
      }
  }

