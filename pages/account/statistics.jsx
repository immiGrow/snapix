import React from 'react'
import AccountNav from '../../Components/UI_Interface/Account/AccountNav'
import Profile from '../../Components/UI_Interface/Account/MyProfile/Profile'
import { parseCookies } from 'nookies'
import baseUrl from '../../mongodb/baseUrl'
import Charts from '../../Components/UI_Interface/Account/Statistics/Charts'

import Head from 'next/head'
import TabularForm from '../../Components/UI_Interface/Account/Statistics/TabularForm'




export default function Statistics({profile,userId,userImgs,rank,totalLikes,totalViews,userCltns}) {
  let chartIdsArr=[
    {
      type:"views",
      chartId:"648af1fa-45fb-46fd-8218-d5ca52a2af7e"
    },
    {
      type:"likes",
      chartId:"648af0ee-ac1e-4ef3-861e-68be9ca8cc7f"
    }
    // {
    //   type:"downloads",
    //   chartId:"1691b52d-685d-4ace-bb89-0b78acfa8423"
    // },
    
    
  ]

  return (
    <>
     <Head>
        <title>Statistics || Unreveal | Creators Everywhere</title>
        <meta
          name="description"
          content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. Photography is not only a hobby but it can also be your carrier."
        />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>

      
    <Profile profile={profile} rank={rank} totalLikes={totalLikes} totalViews={totalViews}/>
    <AccountNav/>
    <div className="px-3 text-sm text-slate-700 py-3 block sm:hidden">
      </div> 
    <div className="flex justify-center xl:space-x-24">
    {
      chartIdsArr.map((chart,index)=>{
        return(

    <div key={index} className="py-4">

    <Charts userId={userId} chartId={chart.chartId}/>
    </div>
        )
      })
    }
</div>
<div className="">
  <h2 className="font-bold text-center px-4 text-base md:text-lg lg:text-xl py-3">Get Into Your Top 10 Most Popular Photos</h2>
  <TabularForm userImgs={userImgs}/>
</div>
<div className="">

  {/* <Charts userId={userId} chartId={"64087325-9162-403e-8ebc-972ab3ecec80"}/> */}
  <iframe 
      className="w-full h-[560px] bg-white"
  // width="640" height="480" 
  src={`https://charts.mongodb.com/charts-unreveal-czlte/embed/charts?id=64087325-9162-403e-8ebc-972ab3ecec80&filter={'user':ObjectId('${userId}')}&maxDataAge=3600&theme=light&autoRefresh=true`}></iframe>

</div>
<div className="">
  
</div>
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
      const req2 = await fetch(`${baseUrl}/api/account/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,
        }
               });
      const res2=await req2.json()
    //   console.log("the images",res)
    const req=await fetch(`${baseUrl}/api/user/getuser`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      }
    })
    const res=await req.json()
    const reqImgs=await fetch(`${baseUrl}/api/account/images`,{
      method:"GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      }
    })
    const resImgs=await reqImgs.json()
    const reqCltns=await fetch(`${baseUrl}/api/account/addToCltn`,{
      method:"GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      }
    })
    const resCltns=await reqCltns.json()
    console.log("checking userImgs ",resImgs)



    return {
        props:{
            // images:res.response.results,
            profile:res2.userProfile,
            rank:res2.rank,
            totalViews:res2.totalViews,
            totalLikes:res2.totalLikes,
            userId:res.userId,
            userImgs:resImgs.response.results,
            userCltns:resCltns.response.results
        }
    }
    }
    return{
      props:{
        
      }
    }
        
    }