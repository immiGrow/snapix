import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {RxCross2} from 'react-icons/rx'

export default function FollowersModal({followers,setShowModal}) {
  return (
    <>
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
 
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
    
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div onClick={()=>setShowModal(false)} className="flex justify-end pr-3 hover:cursor-pointer">
        <RxCross2/>
      </div>
        <div className=" w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Profile Photo</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Name</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Followers</th>
            
           </tr>
        </thead>
        <tbody>
        {
              followers && followers.map((user,i)=>{
                return(
                  
          <tr key={i}>
           
            <td className="px-4 py-3">
              <div className="">
                <Link href={`/userphotos/${user._id}`}><Image src={user.profile_image===""? "https://res.cloudinary.com/unreveal/image/upload/v1678877614/profile_agyzhd.png":user.profile_image} width={80} height={60} className="w-12 h-12 rounded-full object-cover" alt={user.firtName}/></Link>
              </div>
             
              </td>
            <td className="px-4 py-3">{user.username}</td>
            <td className="px-4 py-3">{user.followers.length || "NO"}</td>
          
           
          </tr>
                )
              })
            }
         
        </tbody>
      </table>
    </div>
        </div>
       
      </div>
    </div>
  </div>
</div>
    </>
  )
}
