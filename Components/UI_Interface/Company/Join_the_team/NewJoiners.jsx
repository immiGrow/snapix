import React from 'react'
import Image from 'next/image'

export default function NewJoiners({allusers}) {
    const jndArr=[]
    // allusers.forEach(elem => {
    //     let daten=elem.createdAt
    //     let ymd=daten.toDateString
    //     jndArr.push(ymd)
    // });
    allusers.forEach(elem => {
        
        const published = new Date(elem.createdAt).toLocaleDateString("en-us", {
         
            year: "numeric",
            month: "short",
            day: "numeric",
          });
          jndArr.push(published)
    });
  return (
    <>
    
    <div className="md:flex px-2 py-8 flex md:py-12 lg:px-16">
        {/*Past joined creators */}
        
        <div className="space-y-3">
            <div className="text-xs text-slate-700">
<Image width={300} height={200} src={allusers[3].profile_image} className="w-12 rounded-full bg-slate-700 bg-opacity-10 shadow-xl opacity-100 h-12 object-top object-cover" alt="image" />
<p className='text-black'>{allusers[3].firstName}</p>
<p>Joined on {jndArr[3]}</p>
            </div>
            <div className="text-xs text-slate-700">
<Image width={300} height={200} src={allusers[4].profile_image} className="w-12 rounded-full bg-slate-700 bg-opacity-10 shadow-xl opacity-100 h-12 object-top object-cover" alt={allusers[4].firstName} />
<p className='text-black'>{allusers[4].firstName}</p>
<p>Joined on {jndArr[4]}</p>
            </div>
            <div className="text-xs text-slate-700">
<Image width={300} height={200} src={allusers[5].profile_image} className="w-12 rounded-full bg-slate-700 bg-opacity-10 shadow-xl opacity-100 h-12 object-top object-cover" alt={allusers[5].firstName} />
<p className='text-black'>{allusers[5].firstName}</p>
<p>Joined on {jndArr[5]}</p>
            </div>


        </div>


<div className="stanzas md:px-4 md:space-y-8 px-2  lg:px-6 ">
    <h1 className='font-bold text-xl pb-4 uppercase md:text-3xl lg:text-4xl'>
        <div className='text-sm font-semibold text-slate-600'>Meet Our,</div>
        freshly joined new <br /> <span className='text-indigo-700'>creators
        </span> </h1>
    {/*Unreveal's logo */}
    <div className="py-2 ">
       <Image width={300} height={200} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877600/fulllogo_furhgt.png"} className="w-32" alt="Unreveal" />

    </div>
    
    {/*New joined creators */}
    <div className=" space-x-2 flex">
    <div className="text-xs text-slate-700">
<Image width={300} height={200} src={allusers[0].profile_image} className="w-28 rounded-sm bg-slate-700 bg-opacity-10 shadow-xl opacity-100 h-28 object-top object-cover" alt="image" />
<p className='text-black'>{allusers[0].firstName}</p>
<p>Joined on {jndArr[0]}</p>
            </div>
    <div className="text-xs text-slate-700">
<Image width={300} height={200} src={allusers[1].profile_image} className="w-28 rounded-sm bg-slate-700 bg-opacity-10 shadow-xl opacity-100 h-28 object-top object-cover" alt="image" />
<p className='text-black'>{allusers[1].firstName}</p>
<p>Joined on {jndArr[1]}</p>
            </div>
    <div className="text-xs text-slate-700">
<Image width={300} height={200} src={allusers[2].profile_image} className="w-28 rounded-sm bg-slate-700 bg-opacity-10 shadow-xl opacity-100 h-28 object-top object-cover" alt="image" />
<p className='text-black'>{allusers[2].firstName}</p>
<p>Joined on {jndArr[2]}</p>
            </div>

</div>

    <div className=" space-x-2 flex">
    {
    allusers.length>6 &&
    <div className="text-xs text-slate-700">
<Image width={300} height={200} src={allusers[6].profile_image} className="w-28 rounded-sm bg-slate-700 bg-opacity-10 shadow-xl opacity-100 h-36 object-top object-cover" alt="image" />
<p className='text-black'>{allusers[6].firstName}</p>
<p>Joined on {jndArr[6]}</p>
            </div>
}
{
    allusers.length>7 &&
    <div className="text-xs text-slate-700">
<Image width={300} height={200} src={allusers[7].profile_image} className="w-28 rounded-sm bg-slate-700 bg-opacity-10 shadow-xl opacity-100 h-36 object-top object-cover" alt="image" />
<p className='text-black'>{allusers[7].firstName}</p>
<p>Joined on {jndArr[7]}</p>
            </div>
}
{
    allusers.length>8 &&
    <div className="text-xs text-slate-700">
<Image width={300} height={200} src={allusers[8].profile_image} className="w-28 rounded-sm bg-slate-700 bg-opacity-10 shadow-xl opacity-100 h-36 object-top object-cover" alt="image" />
<p className='text-black'>{allusers[8].firstName}</p>
<p>Joined on {jndArr[8]}</p>
            </div>
}

</div>




</div>
<div className="hidden sm:block">
<div className="images   md:py-12 grid grid-cols-2 space-x-2 md:px-4 md:space-x-4 md:space-y-4">


<Image width={300} height={200} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877613/parrot_pdrlrm.jpg"} className="w-full rounded-sm shadow-xl  bg-slate-700 bg-opacity-10 opacity-100 md:h-32  lg:h-56 h-24 object-cover" alt="image" />
<Image width={300} height={200} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877621/rch3_rbrhha.jpg"} className="w-full  rounded-sm shadow-xl bg-slate-700 bg-opacity-10  md:h-32  lg:h-56 h-24 object-cover" alt="image" />
<Image width={300} height={200} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877634/rch1_mmy3af.jpg"} className="w-full  rounded-sm shadow-xl bg-slate-700 bg-opacity-10  md:h-32  hidden md:block lg:h-56 h-24 object-cover" alt="image" />


</div>
</div>


    </div>

    </>
  )
}
