import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'

import Loader from '../../Components/UI_Interface/Files/Loader'

import Head from 'next/head';
import * as Realm from 'realm-web'
import SrchPhotos from '../../Components/UI_Interface/Photo_Section/SrchPhotos';

import baseUrl from '../../mongodb/baseUrl';
import Link from 'next/link';

export default function SearchImagesPage({}) {
    const router=useRouter()
    const [imageArr, setImageArr] = useState([])
    const [loader, setLoader] = useState(true)
    // let query=router.query.
    const [added, setAdded] = useState(false)
    const {query}=useRouter()
    const [page, setPage] = useState(1)

    
    useEffect(() => {
      
// console.log("Hello from [query].jsx")
async function realmConnectorSearcher(){
  setLoader(true)

  const appId="unreveal-yzpxu"
  const app=new Realm.App({id:appId})
  const credentials=Realm.Credentials.anonymous()
  try {
  
  const user=await app.logIn(credentials)
  const searchPhotos=await user.functions.searchPhotos(query.term)
  setImageArr(searchPhotos)
  console.log("The searched photos",searchPhotos)
 if(searchPhotos.length>0){
  setLoader(false)
 }
 else{
  setLoader(false)
 }
 
} catch (error) {
  console.error(error)
}
}
realmConnectorSearcher()


    }, [query.term])
const addToSrchReqPh=async()=>{
 const req=await fetch(`${baseUrl}/api/addToSrchReqPh/addToSrch`,{
  method:"POST",
  headers:{
    "Content-Type":"application/json",

  },
  body:JSON.stringify({
    term:query.term
  })
 })
 const res=await req.json()
 console.log("The serach has been added ",res)
 setAdded(true)
}
    // console.log("hello",query)

  return (
    <>
    <Head>
        <title>Searched For -{query.term} || Unreveal | Creators Everywhere</title>
        <meta name="description" content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. That's is the power of Unreveal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
    {/*Searched Photos */}
<div className="">
  {
    loader?<Loader/>:imageArr.length>0?<SrchPhotos term={query.term} imageArr={imageArr} setImageArr={setImageArr} 
    // unsplash={unsplash} 
    page={page} setPage={setPage}/> :<main className="grid min-h-full place-items-center bg-white py-6 px-6 sm:py-8 lg:px-8">
    <div className="text-center">
  
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">No Photos Found for {query.term} </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">Click on the button to get your Search later on.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
      {!added?<button onClick={addToSrchReqPh} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send to Unreveal &rarr;</button>:
      <Link href={"/"}><button className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Done, Search has been added &rarr;</button></Link>
      } 
       
      </div>
    </div>
  </main>
  }
</div>


    </>
  )
}
export async function getServerSideProps(ctx){
const {term}=ctx.query
console.log("query ",term)
 const req=await fetch(`${baseUrl}/api/addToSrchReqPh/searches`,{
  method:"POST",
  headers:{
    "Content-Type": "application/json"
  },
  body:JSON.stringify({
    term
  })
 })
const res=await req.json()
console.log(res)
  return{
    props:{

    }
  }
}
//Add infinite scroll to all category pages