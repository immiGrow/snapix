import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function Signup() {
  return (
    <>
    <div className="w-full bg-white flex justify-center items-center lg:px-16 py-12">
    <div className="md:flex md:py-12 w-full px-4 ">

<div className="stanzas  w-full bg-darkblue md:pl-12 lg:pl-16 rounded-t-md md:pt-8 md:rounded-tl-md 
md:rounded-t-none md:rounded-l-md px-4 pt-2 text-white">
    <h1 className='font-bold text-3xl py-4 md:text-4xl'>Powering the internet’s visuals</h1>
    <p className='font-semibold lg:w-5/6  xl:w-3/6'>How we started? The concept was simple. Unreveal was born from the pain we had in finding great, usable imagery. Today, Unreveal is a platform fuelled by a community who give their work for free in support of the creatives everywhere. Without them, none of this would be possible.

</p>
    <div className="buttons  w-fit py-8">
      <Link href="/photostudio/preupload"><button className='px-3 py-2  text-sm md:text-base bg-white font-semibold rounded-sm text-darkblue'>
      {/* Sign up for free */}
      Get Started
        </button></Link> 
        </div>
</div>
<div className="images   ">

<Image width={600} height={400} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877635/signup_yps8di.webp"} className="w-full rounded-b-md md:rounded-b-none md:rounded-r-md md:rounded-br-md
 h-96 object-cover" alt="signup" />



</div>


    </div>
    </div>

    </>
  )
}
