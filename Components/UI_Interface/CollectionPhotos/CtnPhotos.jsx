import React,{useState} from "react";
// import Photo from "./Photo";
import CtnPhoto from "./CtnPhoto";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Files/Loader";
// ,term,setImageArr,unsplash,page,setPage
export default function CtnPhotos({imageArr}) {
//   const [images, setImages] = useState([])
  // console.log("from photo each",imageArr)
// console.log("the 2nd query",term,page)
//   const fetchMoreImages=async()=>{
//     await setPage(page+1)
//     // imagesRequest()
//  let req=await unsplash.collections.getPhotos({
//   collectionId:term  ,
//   page:page,
//   perPage:18

//  })
// //  console.log("The 2nd request",req)
// //  await setImages(req.response.results)
// //  console.log("the images",images)
//  await setImageArr(imageArr.concat(req.response.results))
// //  console.log("the new imageArr",imageArr)

//   }

  return (
    <>
    
      <div className="Full ">
        {/* <InfiniteScroll
        dataLength={imageArr.length}
        next={fetchMoreImages}
        hasMore={true}
        loader={<Loader/>}
        > */}
        <div
        //  className="render-div my-3 px-4 space-y-4"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-8 gap-x-6 px-4 py-8"
         >
          {
             imageArr.map((image,index)=>{
              // console.log("inside map function",image)
              return(
<div key={index} className="">
            <CtnPhoto image={image}/>
          </div>
              )
            })
          }
          
        </div>
        {/* </InfiniteScroll> */}
        {/* <div className="">img1</div>
        <div className="">img1</div>
        <div className="">img1</div> */}
      </div>
    </>
  );
}
