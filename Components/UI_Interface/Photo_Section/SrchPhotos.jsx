import React,{useState} from "react";
import Photo from "./Photo";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from '../Files/Loader'
import baseUrl from "../../../mongodb/baseUrl";
export default function SrchPhotos({imageArr,setImageArr,page,setPage}) {
  
//   const fetchMoreImages=async()=>{
//     await setPage(page+1)
//  await setImageArr(imageArr.concat(res.response.results))
// //  console.log("the new imageArr",imageArr)

//   }

  return (
    <>
    
      <div className="Full ">
        {/*For thousands of docs I'll use INFINITE SCROLL WITH BACKEND SEARCHING */}
        {/* <InfiniteScroll
        dataLength={imageArr.length}
        next={fetchMoreImages}
        hasMore={true}
        loader={<Loader/>}
        > */}
         <div
        //  className="render-div my-3 px-4 space-y-4"
        className="render-div my-3 space-y-4 px-4 py-2"
         >
          {
             imageArr.map((image)=>{
              // console.log("inside map function",image)
              return(
<div key={image._id} className="">
            <Photo image={image}/>
          </div>
              )
            })
          }
          
        </div> 
        {/* </InfiniteScroll>  */}

      </div>
    </>
  );
}
