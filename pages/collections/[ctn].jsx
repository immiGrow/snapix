import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import baseUrl from '../../mongodb/baseUrl'
import CtnPhotos from '../../Components/UI_Interface/CollectionPhotos/CtnPhotos';
import CtnView from '../../Components/UI_Interface/CollectionPhotos/CtnView';
import Head from 'next/head';

//   Images,query
export default function CollectionsDynamic({ctn}) {
    const router=useRouter()
    
 
    const [imageArr, setImageArr] = useState([])

    let id=router.query.ctn
    // const [page, setPage] = useState(1)

    
    useEffect(() => {
      
// console.log("Hello from [ctg].jsx")

//   let request=await unsplash.collections.getPhotos({
//     collectionId:id,
//     page:page,
//     perPage:18
// })


      // console.log(request.response.results)
      // console.log("the imageArr",imageArr)
      setImageArr(ctn.Images)
      
    



    
    },[ctn.Images])
    
    // console.log("hello",imageArr[8])

  return (
    <>

<Head>
        <title>{ctn.title} - {ctn.curatedBy} | Unreveal</title>
        <meta name="description" content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. That's is the power of Unreveal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

 <CtnView ctn={ctn}/>
 <CtnPhotos
  // term={id}
   imageArr={imageArr} 
  //  setImageArr={setImageArr} unsplash={unsplash} page={page} setPage={setPage}
   />



    </>
  )
}
export async function getServerSideProps(ctx){
    let id=ctx.query.ctn
    const req=await fetch(`${baseUrl}/api/account/cltnPhotos`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        ctnId:id
      })
    })
    const res=await req.json()
    
    return{
        props:{
          ctn:res.response.results
        }
    }
}