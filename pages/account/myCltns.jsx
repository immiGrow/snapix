import React from 'react'
import { parseCookies } from 'nookies'
import AccountNav from '../../Components/UI_Interface/Account/AccountNav'
import Profile from '../../Components/UI_Interface/Account/MyProfile/Profile'
import baseUrl from '../../mongodb/baseUrl'
import MyCollections from '../../Components/UI_Interface/Account/MyCollection/MyCollections'
import NothingFound from '../../Components/UI_Interface/Files/NothingFound'
import Head from 'next/head'
export default function MyCltns({profile,rank,totalLikes,totalViews,cltn}) {
 
  return (
    <>
    <Head>
        <title>Your Collections || Unreveal | Creators Everywhere</title>
        <meta
          name="description"
          content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. Photography is not only a hobby but it can also be your carrier."
        />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
    <Profile profile={profile} rank={rank} totalLikes={totalLikes} totalViews={totalViews}/>
    <AccountNav/>
    {
      cltn.length>0?
      <MyCollections cltn={cltn}/>
      :
      <NothingFound text={"Collections"}/>
    }
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
    const req = await fetch(`${baseUrl}/api/account/addToCltn`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      }
             });
    const res=await req.json()
    // console.log("The collection",res)
// const {token}=parseCookies(ctx)
  const req2 = await fetch(`${baseUrl}/api/account/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      }
             });
    const res2=await req2.json()
  //   console.log("the images",res)
          
  return {
      props:{
          // images:res.response.results,
          profile:res2.userProfile,
          rank:res2.rank,
          totalViews:res2.totalViews,
          totalLikes:res2.totalLikes,
          cltn:res.response.results
      }
  }
  }
     return{
      props:{
        
      }
     }
  }
