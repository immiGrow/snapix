import React from 'react'
import EditProfileComponent from '../../Components/UI_Interface/Account/MyProfile/EditProfile'
import { parseCookies } from 'nookies'
import baseUrl from '../../mongodb/baseUrl'
import Head from 'next/head'

export default function EditProfile({user}) {
  return (
    <>
    <Head>
        <title>Edit Profile || Unreveal | Creators Everywhere</title>
        <meta
          name="description"
          content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. Photography is not only a hobby but it can also be your carrier."
        />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
    <EditProfileComponent user={user}/>
    </>
  )
}
export async function getServerSideProps(ctx){

  const {token}=parseCookies(ctx)
  if(!token){
    const {res}=ctx
    res.writeHeader(302,{
      Location:"/user/login"
    })
    res.end()
  }
  if(token){
    const req=await fetch(`${baseUrl}/api/account/profile`,{
      method:"GET",
      headers:{
        "Authorization":token
      }
    })
    const res=await req.json()
    console.log("the profile",res)
  
    return{
      props:{
        user:res.userProfile
      }
    }
  }
  return{
    props:{
      
    }
  }
}
