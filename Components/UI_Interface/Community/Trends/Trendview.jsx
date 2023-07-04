import React from 'react'

import Eachview from './Eachview'




export default function Trendview() {
    // console.log(trendsViewImages)
    let trendsViewImages = [{
        text: "Textures & Patterns",
        photo: "https://res.cloudinary.com/unreveal/image/upload/v1678877674/textures_fqbpa5.jpg",
        path:"patterns"
    },
    {
        text: "Nature",
        photo: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600",
        path:"nature"
    },
    {
        text: "Current Events",
        photo: "https://res.cloudinary.com/unreveal/image/upload/v1678877600/events_ncs4kg.jpg",
        path:"events"
    },
    {
        text: "Architect & Interiors",
        photo: "https://res.cloudinary.com/unreveal/image/upload/v1678877607/interior_hinyz8.jpg",
        path:"interior"
    },
    {
        text: "Business & Work",
        photo: "https://res.cloudinary.com/unreveal/image/upload/v1678877587/bussiness_w4zh9i.jpg",
        path:"business"
    },
    {
        text: "Animals",
        photo: "https://images.pexels.com/photos/3860030/pexels-photo-3860030.jpeg?auto=compress&cs=tinysrgb&w=600",
        path:"animals"
    },
    {
        text: "Travel",
        photo: "https://res.cloudinary.com/unreveal/image/upload/v1678877655/travel_okj22p.jpg",
        path:"travel"
    },
    {
        text: "Fashion & Beauty",
        photo: "https://res.cloudinary.com/unreveal/image/upload/v1678877591/fashion_qegceb.jpg",
        path:"fashion"
    },
]


  return (
    <>
    <div className="relative w-full px-8 py-12">

<div className="full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 relative w-full">
    {
       trendsViewImages && trendsViewImages.map((view,index)=>{
            return(

    <Eachview key={index} view={view}/>
            )
        })
    }
{/* <div className="eachview  relative w-fit h-96 group">
<div className="image relative w-full h-full ">
    <img src={img1.src} className="w-full h-full"  alt="" />
</div>
<div className="write absolute top-0 text-xl font-bold text-white bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-200 ease-in bg-black w-full h-full flex justify-center items-center "><p>Tours & Travels</p></div>
</div> */}

</div>
</div>
    </>
  )
}
