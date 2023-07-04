import React,{useState,useEffect,useLayoutEffect} from 'react'

import { useRouter } from 'next/router'


import EachCtPhoto from '../../Components/UI_Interface/Files/EachCtPhoto';
import Head from 'next/head';
import CtgPhotos from '../../Components/UI_Interface/Category/CtgPhotos';
import baseUrl from '../../mongodb/baseUrl';
import Category from '../../Components/UI_Interface/Navigation_Bar/Category';

//   Images,query
export default function CategoryDynamic({image}) {
    const router=useRouter()
    
 
    const [imageArr, setImageArr] = useState([])

    let query=router.query.ctg
    console.log("The query is",query)
    const [page, setPage] = useState(1)
    const [totalDocs, setTotalDocs] = useState(0)
    const [pageCount, setPageCount] = useState(0)


useEffect(() => {
  
  console.log("useeffect is from [ctg.jsx] ")
  async function fetchCtgData(){
    const req=await fetch(`${baseUrl}/api/photostudio/ctgphotos?page=${page}`,{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          ctg:query
      })
  })
  const res=await req.json()
  console.log("The category ",res)
  setImageArr(res.response.results)
  setTotalDocs(res.pagination.count)
  setPageCount(res.pagination.pageCount)
  }
  fetchCtgData()
}, [query,page])


    
   

  return (
    <>

<Head>
        <title>{query} - {totalDocs} | Unreveal</title>
        <meta name="description" content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. That's is the power of Unreveal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
    <Category/>
  <EachCtPhoto 
image={image}
heading={query}
 />  
  
<CtgPhotos term={query} imageArr={imageArr} setImageArr={setImageArr} pageCount={pageCount} totalDocs={totalDocs} page={page} setPage={setPage}/>



    </>
  )
}
export async function getServerSideProps(ctx){
  let query=ctx.query.ctg
  const req=await fetch(`${baseUrl}/api/photostudio/ctgphotos?page=1`,{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        ctg:query
    })
})
const res=await req.json()
  return {
    props: {
      image:res.response.results
    }
  }
}
