import React,{useState} from 'react'
import CltnList from './CltnList'
import CreateCltnForm from './CreateCltnForm'
import {RxCross2} from 'react-icons/rx'
export default function CltnModal({setModal,image,userCltns,photo,setUserCltns}) {

    const [create, setCreate] = useState(false)
console.log("The photo modal is ",image)
  return (
    <>
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 z-10 overflow-y-auto">
    
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      
      <div className="relative transform w-96 overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
      <div onClick={()=>setModal(false)} className="absolute right-0 z-10 text-slate-700 cursor-pointer text-xl hover:text-black font-semibold pt-2 pr-2">
  <RxCross2/>
</div>

        <div className="flex w-full">

        <div className="w-full">
        <img src={image} className="w-32 min-[375px]:w-40 h-64 md:h-96 md:w-64 lg:w-72 lg:h-[26rem] xl:w-80 xl:h-[32rem] object-cover object-center" alt={photo.title} />
        </div>

        <div className="w-full flex justify-start">
        {!create?<CltnList create={create} setUserCltns={setUserCltns} userCltns={userCltns} photo={photo}  setModal={setModal} setCreate={setCreate}/>:
        <CreateCltnForm setCreate={setCreate} userCltns={userCltns} setUserCltns={setUserCltns} photo={photo}/>}
        </div>

        </div>

        {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" onClick={()=>setModal(false)} className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
        </div> */}
      </div>
    </div>
  </div>
</div>

    </>
  )
}
