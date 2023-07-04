import Image from 'next/image'
import Link from 'next/link'
import React,{useEffect} from 'react'
import {MdNotificationsActive,MdDelete} from  'react-icons/md'
import { parseCookies } from 'nookies'
import baseUrl from '../../../mongodb/baseUrl'
export default function AllNotifications({showNots,setShowNots,notifications,setNotifications}) {
    console.log("the component nots",notifications)
    const {token}=parseCookies()
    const updateNotification=async(id)=>{
        const req=await fetch(`${baseUrl}/api/account/notifications`,{
            method:"PUT",
            headers:{
              "Authorization":token
            },
            body:JSON.stringify({
                notifyId:id
            })
          })
          const res=await req.json()
          // console.log("The response from updateNotifications is ",res)
    }
    useEffect(() => {
      if(showNots){
        updateNotification()
      }
    })
    
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
    <div className="relative">
  <button type="button" className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false">
  <div onClick={()=>setShowNots(!showNots)} className="relative">
                <span className="hidden md:block relative text-2xl text-slate-700 hover:text-black">
                  <MdNotificationsActive />
                </span>
               {
                notifications.map((notfn,i)=>{
                    if(notfn.status==="unread"){
                        return(
                            <div key={i} className="bg-red-700 text-xs h-2 w-2 text-white rounded-full absolute -top-1 -right-1">
                 
                 </div>
                        )
                    }
                  
                })
               }
               
  </div>

   
  </button>

  {showNots && <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
      <div className="p-4">
      {notifications.length>0? 
      <>
          <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
             <Image width={80} height={80} src={notifications[0].notifyBy.profile_image} className="w-12 h-12 rounded-full object-cover object-top" alt={notifications[0].notifyBy.username}/>


            </div>
            <Link href={`/userphotos/${notifications[0].notifyBy._id}`}><div>
              <div className=" flex space-x-4 items-center font-semibold text-gray-900 w-full">
               {notifications[0].notifyBy.username}
                
                <span className="absolute inset-0"></span>
              <p className='text-xs block'>{showDate(notifications[0].notifiedAt)}</p>
              </div>
              <p className="mt-1 text-gray-600">{notifications[0].message}</p>
            </div></Link>
          </div>
          {notifications.length>1 &&  <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
             <Image width={80} height={80} src={notifications[1].notifyBy.profile_image} className="w-12 h-12 rounded-full object-cover object-top" alt={notifications[1].notifyBy.username}/>


            </div>
            <Link href={`/userphotos/${notifications[1].notifyBy._id}`}><div>
              <div className=" flex space-x-4 items-center font-semibold text-gray-900 w-full">
               {notifications[1].notifyBy.username}
                
                <span className="absolute inset-0"></span>
              <p className='text-xs block'>{showDate(notifications[1].notifiedAt)}</p>
              </div>
              <p className="mt-1 text-gray-600">{notifications[1].message}</p>
            </div></Link>
          </div>}
          <Link href={"/notifications/notification"}><div onClick={()=>setShowNots(false)} className="w-full flex justify-center">

          <button className='px-4 hover:border-black hover:text-black py-2 w-full border-2 border-slate-600 text-slate-600 rounded-sm font-semibold'>Read All Notifications</button>
          </div></Link>
          </>
        :<main className=" min-h-full place-items-center bg-white ">
      <div className="text-center">
    
        <h1 className="mt-2 text-lg font-bold tracking-tight text-gray-900">Nothing Found</h1>
        <p className="mt-2 text-base leading-7 text-gray-600">We have found no notifications .</p>
       
      </div>
    </main>}

      </div>
      
    </div>
  </div>}
</div>

    </>
  )
}
