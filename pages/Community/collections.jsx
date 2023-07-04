
import Head from 'next/head';
import React,{useState,useEffect} from 'react'
import Collections from '../../Components/UI_Interface/Community/Collections/Collections'
import baseUrl from '../../mongodb/baseUrl'


export default function CollectionsPage() {
  const [ctnArr, setCtnArr] = useState([])
// const [page, setPage] = useState(7)
    useEffect(() => {
      async function fetchCollectionsList(){
     
      const req=await fetch(`${baseUrl}/api/account/cltns`)
      const res=await req.json()
      setCtnArr(res.response.results)
        

      // console.log("the cltns are in collection",res)
      }
      fetchCollectionsList()
    }, [])
  return (
    <>
    <Head>
        <title>Collections - Creators Everywhere | Unreveal</title>
        <meta name="description" content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. That's is the power of Unreveal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Collections ctnArr={ctnArr} 
    // setCtnArr={setCtnArr} page={page} setPage={setPage} unsplash={unsplash}
    />
    </>
  )
}
