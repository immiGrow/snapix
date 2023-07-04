import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
export default function AccountNav() {
    const router=useRouter()
    // const [active, setActive] = useState(false)
  return (
    <>
    
    <header className=" body-font bg-white shadow-md w-full px-2 ">
  <div className=" py-2 w-full ">
    
    <nav className=" flex items-center justify-center text-sm md:text-lg space-x-2 md:space-x-8 font-semibold list-none">
      <Link href={"/account/myImages"}><li className={router.pathname!=="/account/myImages"?"px-4 md:px-6 py-2 rounded-3xl text-slate-700 hover:text-black cursor-pointer ":"px-4 md:px-6 py-2 rounded-3xl bg-black text-white cursor-pointer "}>Gallery</li></Link>
      <Link href={"/account/myCltns"}><li className={router.pathname!=="/account/myCltns"?"px-4 md:px-6 py-2 rounded-3xl text-slate-700 hover:text-black cursor-pointer ":"px-4 md:px-6 py-2 rounded-3xl bg-black text-white cursor-pointer "}>Collections </li></Link>
      <Link href={"/account/statistics"}><li className={router.pathname!=="/account/statistics"?"px-4 md:px-6 py-2 rounded-3xl text-slate-700 hover:text-black cursor-pointer ":"px-4 md:px-6 py-2 rounded-3xl bg-black text-white cursor-pointer "}>Statistics </li></Link>
      {/* <li className="mr-5 hover:text-gray-900"></li> */}
    </nav>
   
  </div>
</header>
    
    </>
  )
}
