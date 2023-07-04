import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

export default function Category() {
  const router=useRouter()
  console.log(router.pathname)
  let category=[
    {
      text:"",
      path:""
    },
    {
      text:"Wallpapers",
      path:'wallpaper'
    },
    {
      text:"Fashion & Beauty",
      path:'fashion'
    },
    {
      text:"3D Renders",
      path:'renders'
    },
    {
      text:"Travel",
      path:'travel'
    },
    {
      text:"Nature",
      path:'nature'
    },
    {
      text:"Street Photography",
      path:'street-photography'
    },
    {
      text:"Experimental",
      path:'experimental'
    },
    {
      text:"Textures & Patterns",
      path:'textures'
    },
    {
      text:"Animals",
      path:'animals'
    },
    {
      text:"Architect & Interiors",
      path:'interiors'
    },
    {
      text:"Movies & Drama",
      path:'film'
    },
    {
      text:"Food & Drinks",
      path:'food'
    },
    {
      text:"People",
      path:'people'
    },
    {
      text:"Spirituality",
      path:'spirituality'
    },
    {
      text:"Business & Work",
      path:'business'
    },
    {
      text:"Athletics",
      path:'athletics'
    },
    {
      text:"Health & Wellness",
      path:'health'
    },
    {
      text:"Current Events",
      path:'events'
    },
    {
      text:"Arts & Culture",
      path:'culture'
    },
  ]
  return (
    <>
    <div className='bg-white  py-1 md:py-2 lg:py-3'>
      
      
       
   
      <Swiper navigation={true}
      // slidesPerView={'auto'}
      breakpoints={{
        // when window width is >= 640px
        320: {
          width: 320,
          slidesPerView: 2,
        },
        425: {
          width: 425,
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 5,
        },
        1024: {
          width: 1024,
          slidesPerView: 7,
        },
        // when window width is >= 768px
        1440: {
          width: 1440,
          slidesPerView: 8,
        },
      }}
      spaceBetween={4}
      modules={[Navigation]} className="text-center">
        <div className="">
        {
          category && category.map((ctg,index)=>{
            return(
              <SwiperSlide className='' key={index}>
                <Link href={`/category/${ctg.text}`}><div className="text-slate-700">{ctg.text}</div></Link>
              </SwiperSlide>
            )
          })
        }
      </div>
      </Swiper>

    </div>
    </>
  )
}
