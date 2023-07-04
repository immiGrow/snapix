import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
export default function Notification({notifications,setNotifications}) {
    const showDate=(notified)=>{
        const published = new Date(notified).toLocaleDateString("en-us", {
             
        year:"numeric",
          month: "short",
          day: "numeric",
        });
        return published;
      }
  return (
    <>
   <Head>
        <title>Notifications || Unreveal | Creators Everywhere</title>
        <meta
          name="description"
          content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. Photography is not only a hobby but it can also be your carrier."
        />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
    <h2 className='p-4 font-bold text-2xl'>Notifications</h2>
    <div className="flex justify-center">
     <div className="p-4">
      {notifications.length>0?notifications.map((notfn,i)=>{
        return(
          <div key={i} className="group relative flex gap-x-6 rounded-lg p-4 border-b border-black ">
            <div className="mt-1 flex h-11 w-11 flex-none items-center  bg-slate-200 justify-center rounded-lg ">
             <Image width={80} height={80} src={notfn.notifyBy.profile_image} className="w-12 h-12 rounded-full object-cover object-top" alt={notfn.notifyBy.username}/>


            </div>
            <Link href={`/userphotos/${notfn.notifyBy._id}`}><div>
              <div className=" flex space-x-4 items-center font-semibold text-gray-900 w-full">
               {notfn.notifyBy.username}
                
                <span className="absolute inset-0"></span>
              <p className='text-xs block'>{showDate(notfn.notifiedAt)}</p>
              </div>
              <p className="mt-1 text-gray-600">{notfn.message}</p>
            </div></Link>
          </div>

        )
      }) 
    
        
          
        :<main className=" min-h-full place-items-center bg-white ">
      <div className="text-center">
    
        <h1 className="mt-2 text-lg font-bold tracking-tight text-gray-900">Nothing Found</h1>
        <p className="mt-2 text-base leading-7 text-gray-600">We have found no notifications .</p>
       
      </div>
    </main>}

      </div>
      </div>
    </>
  )
}
