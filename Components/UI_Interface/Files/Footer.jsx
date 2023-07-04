import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
  const router=useRouter()
  return (
    <>
    <footer className="text-gray-600 bg-white body-font">
  <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <Image width={60} height={40} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877605/logo_scaomd.png"} className="w-12" alt="Unreveal" />
        <span className="ml-3 text-2xl">Unreveal</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">Platform for Creators Everywhere</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        {/* <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Company</h2> */}
        <nav className="list-none mb-10">
          <h2 className=' font-semibold text-black'>Company</h2>
          <li><Link href="/Company/about"><p className="text-gray-600 hover:text-gray-800">About</p></Link>
          </li>
          <li onClick={()=>router.push("/Company/join")}>
            <p className="text-gray-600 cursor-pointer hover:text-gray-800">Join the team</p>
          </li>
          {/* <li>
            <a className="text-gray-600 hover:text-gray-800">Blogs</a>
          </li> */}
          <Link href="/Company/reach"><li>
            <p className="text-gray-600 hover:text-gray-800">Reach to us</p>
          </li></Link>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        {/* <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2> */}
        <nav className="list-none mb-10">
          <h2 className=' font-semibold text-black '>Community</h2>
          <li onClick={()=>router.push("/Community/contributor")}>
            <p className="text-gray-600 cursor-pointer hover:text-gray-800">Become a contributor</p>
          </li>
          <Link href="/Community/trends"><li>
            <p className="text-gray-600 hover:text-gray-800">Trends</p>
          </li></Link>
          <Link href="/Community/collections"><li>
            <p className="text-gray-600 hover:text-gray-800">Collections</p>
          </li></Link>
          <li onClick={()=>router.push("/Community/awards")}>
            <p className="text-gray-600 cursor-pointer hover:text-gray-800">Unreveal Awards</p>
          </li>

        </nav>
      </div>
      
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      {/* <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 Unreveal —
        <span className="text-gray-600 ml-1" target="_blank">@Creators everywhere</span>
      </p> */}
      <span className="inline-flex list-none space-x-4 text-xl sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <li className='hover:outline-slate-700 hover:outline hover:outline-offset-2 hover:outline-2 rounded-full cursor-pointer'><BsFacebook/></li>
        <li className='hover:outline-slate-700 hover:outline hover:outline-offset-2 hover:outline-2 rounded-full cursor-pointer'><AiFillInstagram/></li>
        <li className='hover:outline-slate-700 hover:outline hover:outline-offset-2 hover:outline-2 rounded-full cursor-pointer'><AiFillTwitterCircle/></li>
      </span>
    </div>
  </div>
</footer>
    

    </>
  )
}
