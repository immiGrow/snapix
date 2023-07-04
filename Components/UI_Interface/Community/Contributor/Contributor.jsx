import React from 'react'
import CardCon from './CardCon'
import Contribute from './Contribute'
import { BsArrowRightShort } from 'react-icons/bs'

import Link from 'next/link'
import Image from 'next/image'
import ImagesDesign from '../../Company/Join_the_team/ImagesDesign'
import NewJoiners from '../../Company/Join_the_team/NewJoiners'
export default function Contributor({dsImgs,allusers}) {
  return (
    <>
    
    <Contribute/>
    <h1 className='text-3xl font-bold md:px-32 md:py-8 px-8 text-center'>Unreveal is unlike any other plateforms</h1>
    <CardCon/>
    <NewJoiners allusers={allusers} />
    <div className="text-center pb-20">
          <h2 className="text-3xl text-black font-bold ">
            Add yourself also to the list of Unreveal’s creators
          </h2>
          <div className="w-full flex justify-center ">

          <p className="text-slate-600 py-2 text-center font-semibold w-full md:w-3/5">

            It is much easier to become a creator, just open your camera and
            move your finger towards your world. Start with small beginings.
          </p>
          </div>
        
          <div className="buttons flex justify-center pt-2 space-x-4 group">
            <Link href={"/photostudio/preupload"}><button className="flex justify-center items-center space-x-2 bg-black rounded-md py-2 px-3 font-semibold border-2 border-black text-white">
              <span>See Opportunities</span>
              <span className="group-hover:translate-x-2 transition-all duration-200 ease-out">
                <BsArrowRightShort />
              </span>{" "}
            </button></Link> 
          </div>
        </div>
    <ImagesDesign dsImgs={dsImgs} />
    
    <div className="text-center   space-y-4">
        
        <h1 className="text-3xl font-bold">Don’t know how to contribute?</h1>
        <p className="px-4 md:px-24 font-semibold">We’ve got plenty of ideas to get you started! Find out what kind of photos our community is looking to help your images stand out and get seen fast.

</p>
        <div className="flex justify-center py-4">
            <Link href={"/Community/trends"}><button className='group text-center flex justify-center items-center space-x-2 bg-black rounded-md py-2 px-3 font-semibold border-2 border-black text-white'><span>See what’s trending</span><span className='group-hover:translate-x-2 transition-all duration-200 ease-out'><BsArrowRightShort/></span>  </button></Link>
            </div>
        
    </div>
    <div className="py-12">
        <Image width={1000} height={800} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877594/fours_n8lfcn.webp"} className="w-full" alt="Fours" />
    </div>
    
    </>
  )
}
