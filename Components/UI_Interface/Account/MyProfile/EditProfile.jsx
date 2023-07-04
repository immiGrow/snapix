import React,{useState} from 'react'

import baseUrl from '../../../../mongodb/baseUrl'
import { parseCookies } from 'nookies'
import { useRouter } from 'next/router'

export default function EditProfileComponent({user}) {
  const router=useRouter()
const [file, setFile] = useState()
const [img, setImg] = useState(user.profile_image|| "https://res.cloudinary.com/unreveal/image/upload/v1678877614/profile_agyzhd.png")
// const [pr, setPr] = useState([])
const {token}=parseCookies()
const [cred, setCred] = useState({
    firstName:user.firstName ,
    lastName:user.lastName,
    website:user.website ,
    about:user.about,
    // profile_image:user.profile_image,
    email:user.email,
    country:user.country,
    city:user.city,
    instagram:user.instagram,
    facebook:user.facebook,
    youtube:user.youtube,
    twitter:user.twitter,
})

const onChange=(e)=>{
    setCred({...cred,[e.target.name]:e.target.value})
    
  }

  const filteredObj=()=>{

    let asArray=Object.entries(cred)
    let filtered=asArray.filter(([key,value])=>value.length>0)
    let filteredvalues=Object.fromEntries(filtered)
    return filteredvalues
    
}

    const imageUrlMaker=async()=>{
        console.log("started")
    
           const appar = new FormData();
             appar.append("file", file);
             appar.append("upload_preset", "unreveal");
             appar.append("cloud_name", "pixelsimage");
             
             const request=await fetch("https://api.cloudinary.com/v1_1/unreveal/image/upload",{
               method:"POST",
               body:appar
             })
           
             const resp=await request.json()
             console.log(resp)
             setImg(resp.url)
         
             
           
         
    }

    const submitProfile = async (e) => {
        e.preventDefault();
        // setLoad(true)
        const filData=await filteredObj()
        console.log("the data",cred)
         const userReq = await fetch(`${baseUrl}/api/account/profile`, {
           method: "POST",
           headers: {
            "Authorization":token,
             "Content-Type": "application/json"
           },
           body: JSON.stringify({
            firstName:filData.firstName,
            lastName:filData.lastName,
            country:filData.country,
            website:filData.website,
            youtube:filData.youtube,
            facebook:filData.facebook,
            instagram:filData.instagram,
            twitter:filData.twitter,
            about:filData.about,
            email:filData.email,
            city:filData.city,
            profile_image:img
        
           })
         });
        
         const response = await userReq.json();
         if(response.success) {
          router.push("/account/myImages")
         }
         console.log(response)
         
       
       };

  return (
    <>
<form onSubmit={submitProfile} className="">

<div>
  <div className="md:grid md:grid-cols-3 md:gap-6 px-2 md:px-4 lg:px-8 py-2 md:py-4">
    <div className="md:col-span-1">
      <div className="px-4 sm:px-0">
        <h3 className="text-2xl font-bold leading-6 text-gray-900">Profile</h3>
        <p className="mt-1 text-sm  text-gray-600">This information will be displayed publicly so be careful what you share.</p>
      </div>
    </div>
    <div className="mt-5 md:col-span-2 md:mt-0">
      <div>
        <div className="shadow sm:overflow-hidden sm:rounded-md">
          <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">Website</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">http://</span>
                  <input onChange={onChange} type="text" value={cred.website} name="website" id="company-website"
                //    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-none  sm:text-sm" 
                className='relative block w-full appearance-none rounded-none rounded-r-md border-r border-t border-b
                 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm'
                  placeholder="www.example.com"/>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="about" className="block text-sm font-medium text-gray-700">About</label>
              <div className="mt-1">
                <textarea id="about" name="about" rows="3" onChange={onChange} value={cred.about} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-slate-500 p-1 sm:text-sm border" placeholder="you@example.com"></textarea>
              </div>
              <p className="mt-2 text-sm text-gray-500">Brief description for your profile.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Photo</label>
              <div className="mt-1 flex items-center">
                <span className="inline-block h-16 w-16 overflow-hidden rounded-full bg-gray-100 relative">
                  <span className="relative">

                  <img src={img} className="" alt="profile" />
                  </span>
                <span className="absolute top-0">
                    <input  type="file" onChange={(e)=>setFile(e.target.files[0])} className="file:bg-transparent file:border-none file:text-transparent" />
                </span>
                </span>
                <button type="button" onClick={imageUrlMaker} disabled={!file?true:false} className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Change</button>
              </div>
              <div className="flex flex-wrap space-x-4 pt-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Facebook</label>
                <input onChange={onChange} value={cred.facebook} type="text"  name="facebook" id="facebook" autoComplete="given-name" className="relative block w-full  rounded-md border
                 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"/>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Instagram</label>
                <input onChange={onChange} type="text" value={cred.instagram} name="instagram" id="instagram" autoComplete="given-name" className="relative block w-full  rounded-md border
                 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"/>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Twitter</label>
                <input onChange={onChange} type="text" value={cred.twitter} name="twitter" id="twitter" autoComplete="given-name" className="relative block w-full  rounded-md border
                 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"/>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Youtube</label>
                <input onChange={onChange} type="text" value={cred.youtube} name="youtube" id="youtube" autoComplete="given-name" className="relative block w-full  rounded-md border
                 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"/>
              </div>
              </div>
              
            </div>

           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="hidden sm:block" aria-hidden="true">
  <div className="py-5">
    <div className="border-t border-gray-200"></div>
  </div>
</div>

<div className="mt-10 sm:mt-0">
  <div className="md:grid md:grid-cols-3 md:gap-6">
    <div className="md:col-span-1">
      <div className="px-4 sm:px-0">
        <h3 className="text-2xl font-bold leading-6 pl-4 text-gray-900">Personal Information</h3>
        <p className="mt-1 text-sm pl-4 text-gray-600">Use a permanent address where you can receive mail.</p>
      </div>
    </div>
    <div className="mt-5 md:col-span-2 md:mt-0">
      <div>
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                <input onChange={onChange} type="text" value={cred.firstName} name="firstName" id="first-name" autoComplete="given-name" className="relative block w-full  rounded-md border
                 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                <input onChange={onChange} type="text" value={cred.lastName} name="lastName" id="last-name" autoComplete="family-name" className="relative block w-full  rounded-md border
                 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                <input onChange={onChange} type="text" value={cred.email} name="email" id="email-address" autoComplete="email" className="relative block w-full  rounded-md border
                 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"/>
              </div>
              {/*Password */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Password</label>
                <input onChange={onChange} type="text" name="password" id="password" disabled={true} autoComplete="given-name" className="relative block w-full  rounded-md border
                 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <input id="country" name="country" placeholder='Country' onChange={onChange} value={cred.country} autoComplete="country-name" className="relative block w-full  rounded-md border
                 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"/>
                 
              </div>

             

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input onChange={onChange} type="text" value={cred.city} name="city" id="city" autoComplete="address-level2" className="relative block w-full  rounded-md border
                 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"/>
              </div>

              

              
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</form>
<div className="hidden sm:block" aria-hidden="true">
  <div className="py-5">
    <div className="border-t border-gray-200"></div>
  </div>
</div>



    </>
  )
}
