import React from 'react'
import { AiFillHeart,AiOutlineAppstoreAdd,AiFillEye } from 'react-icons/ai'
import {HiFolderDownload} from 'react-icons/hi'
export default function ImageData({photo}) {
  return (
    <>
    <div className="flex justify-end items-center space-x-8 text-slate-700 text-center px-2 md:px-6 py-4">

<div className="">
    <div className="flex items-center space-x-2">
        <span><AiFillEye/></span>
        <span>Views</span>
        </div>
   <p>{photo.views}</p>
</div>
<div className="">
    <div className="flex items-center space-x-2">
        <span><HiFolderDownload/></span>
        <span>Downloads</span>
        </div>
   <p>{photo.downloads}</p>
</div>
<div className="">
    <div className="flex items-center space-x-2">
        <span className='text-red-700'><AiFillHeart/></span>
        <span>Likes</span>
        </div>
   <p>{photo.likes.length}</p>
</div>

    </div>

    </>
  )
}
