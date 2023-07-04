import React,{useState} from "react";
import Photo from "../Photo_Section/Photo";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from '../Files/Loader'
import baseUrl from "../../../mongodb/baseUrl";
import { useRouter } from "next/router";


export default function CtgPhotos({imageArr,setImageArr,page,setPage,totalDocs,pageCount,term}) {
 const router=useRouter()
  const fetchMoreImages=async()=>{
   
    await setPage(page+1)
    console.log("The",page," page")
    
const req=await fetch(`${baseUrl}/api/photostudio/ctgphotos?page=${page}`,{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        ctg:term
    })
})
const res=await req.json()
 const addedArr= imageArr.concat(res.response.results)
let uniqueArr =await addedArr.filter( (ele, ind) => ind === addedArr.findIndex( elem => elem._id === ele._id))
console.log("the addedArr",addedArr,"the imageArr",imageArr,"uniqueArr",uniqueArr)
await setImageArr(uniqueArr)


  }

  return (
    <>
    
      <div className="Full ">
        
    
        <InfiniteScroll
        dataLength={totalDocs}
        next={router.pathname===`/category/${term}`?fetchMoreImages:null}
        hasMore={true}
        loader={page>=pageCount?"":<Loader/>}
        >
         <div
      
        className="render-div my-3 space-y-4 px-4 py-2"
         >
          {
            imageArr && imageArr.map((image,index)=>{
            
              return(
<div key={index} className="">
            <Photo image={image}/>
          </div>
              )
            })
          }
          
        </div> 
        </InfiniteScroll> 

      </div>
    </>
  );
}
