import React from 'react'
import AccountNav from '../../Components/UI_Interface/Account/AccountNav'
import Profile from '../../Components/UI_Interface/Account/MyProfile/Profile'
import { parseCookies } from 'nookies'
import baseUrl from '../../mongodb/baseUrl'
import Image from 'next/image'
import Link from 'next/link'
import NothingFound from '../../Components/UI_Interface/Files/NothingFound'
import Head from 'next/head'
export default function MyImages({images,rank,totalLikes,totalViews,profile}) {
    const {token}=parseCookies()
  return (
    <>
     <Head>
        <title>Your Images || Unreveal | Creators Everywhere</title>
        <meta
          name="description"
          content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. Photography is not only a hobby but it can also be your carrier."
        />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
    <Profile profile={profile} rank={rank} totalLikes={totalLikes} totalViews={totalViews}/>
    <AccountNav/> 
    {/*Show all User's Images */}
   {images.length>0? <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 w-full px-2 py-4">

{
    images && images.map((img)=>{
        return(
            <>
            <Link href={`/photo/${img._id}`}><div key={img._id} className="w-full group">
                <Image width={800} height={500} src={img.url} className="w-full h-44 md:h-72 lg:h-96 object-cover group-hover:opacity-90 object-center" alt={img.title} />
            </div></Link>
            </>
        )
    })
}


    </div>
  :
  <NothingFound text={"Images"}/>  
  }
    </>
  )
}
export async function getServerSideProps(ctx){
const {token}=parseCookies(ctx)
// console.log("The token",token)
if(!token){
  const {res}=ctx
  res.writeHeader(302,{
    Location:"/user/login"
  })
  res.end()
}
if(token){
  const req = await fetch(`${baseUrl}/api/account/images`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
    }
           });
  const res=await req.json()
  const req2 = await fetch(`${baseUrl}/api/account/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
    }
           });
  const res2=await req2.json()
  console.log("the images",res)
        
return {
    props:{
        images:res.response.results,
        profile:res2.userProfile,
        rank:res2.rank,
        totalViews:res2.totalViews,
        totalLikes:res2.totalLikes
    }
}
}
return{
  props:{

  }
}
  
}