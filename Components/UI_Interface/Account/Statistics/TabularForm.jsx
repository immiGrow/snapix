import Image from 'next/image'
import React from 'react'

import {AiFillEye, AiFillHeart,AiOutlineDownload} from 'react-icons/ai'
export default function TabularForm({userImgs}) {
  return (
    <>
    <div className="flex justify-center w-full  py-4">
    <div className="md:w-3/4  mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap font-semibold">
        <thead>
          <tr>
            <th className="px-2 text-center py-3 title-font font-medium text-gray-900 text-base md:text-lg bg-gray-100 rounded-tl rounded-bl">Photos</th>
            <th className="px-2 py-3 title-font font-medium text-gray-900 text-base md:text-lg bg-gray-100">Views</th>
            <th className="px-6 min-[425px]:px-10 bg-gray-100 py-3 title-font font-medium text-gray-900 text-base md:text-lg ">Likes</th>
            <th className="px-2 py-3 title-font font-medium text-gray-900 text-base md:text-lg bg-gray-100">Downloads</th>
            <th className="px-2 py-3 title-font font-medium text-gray-900 text-base md:text-lg bg-gray-100">Category</th>
          </tr>
        </thead>
        <tbody>
            {
                userImgs.map((img,index)=>{
                    return(

          <tr key={index}>
            <td className="px-1 py-2">
              <div className="flex justify-center">
                <div className="">

                <Image src={img.url} width={200} height={300} className="w-32 h-20 md:w-48 md:h-28 min-[425px]:w-32 object-cover object-center" alt={img.title}/>
                <p className='text-xs md:text-sm text-center pt-1 font-bold' title={img._id}>Photo ID</p>
                </div>

              </div>
            </td>
            <td className="px-1 py-2">
                <div className="flex justify-center items-center space-x-2">

                <span>{img.views}</span>
                <span className='text-slate-700'><AiFillEye/></span>
                </div>
                </td>
            <td className="px-1 py-2">
                <div className="flex justify-center items-center space-x-2">
                <div className="flex -space-x-2 overflow-hidden">
                  {
                    img.likes.length>0?
                    <img className="inline-block h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 rounded-full ring-2 object-cover object-top ring-white" src={img.likes[0].profile_image} alt={"Unreveal"}/>:<span>0</span>
                  }
                  {
                    img.likes.length>1?
                    <img className="inline-block h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 rounded-full ring-2 object-cover object-top ring-white" src={img.likes[1].profile_image} alt={"Unreveal"}/>:""
                  }
                  {
                    img.likes.length>2?
                    <img className="inline-block h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 rounded-full ring-2 object-cover object-top ring-white" src={img.likes[2].profile_image} alt={"Unreveal"}/>:""
                  }
                  {
                    img.likes.length>3?
                    <img className="inline-block h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 rounded-full ring-2 object-cover object-top ring-white" src={img.likes[3].profile_image} alt={"Unreveal"}/>:""
                  }

</div>
                <span>{img.likes.length>4?img.likes.length-4:""}</span>

                </div>
                </td>
            <td className="px-1 py-2">
                <div className="flex justify-center items-center space-x-2">

                <span>{img.downloads}</span>
                <span className='text-slate-700'><AiOutlineDownload/></span>
                </div>
                </td>
            <td className='px-1 py-2'>
              {img.category}
            </td>
          </tr>
                    )
                })
            }


        </tbody>
      </table>
    </div>
    </div>
    </>
  )
}
