import React,{useState,useEffect} from 'react'

import UploadDetail from '../../Components/UI_Interface/PhotoStudio/Upload/UploadDetail'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {TbCameraPlus} from 'react-icons/tb'
import baseUrl from '../../mongodb/baseUrl';

import { parseCookies } from 'nookies';
import Image from 'next/image'
import Loader from '../../Components/UI_Interface/Files/Loader'
import Head from 'next/head';
export default function Upload({searches}) {

  // const [btnPrev, setBtnPrev] = useState(false)
const {token}=parseCookies()

  const [go, setGo] = useState(false)
  const [loaded, setLoaded] = useState(false)
  
  // const [allPhotos, setAllPhotos] = useState([])
  // const [blurhashes, setBlurhashes] = useState([])
  const images=[]
  const [photos, setPhotos] = useState([])

 
  

  const imageUrlMaker=async(files)=>{
    console.log("started")
    setLoaded(true)
    // await setUrl(files)
    console.log("the files are these ",files)

    for (let i = 0; i < files.length; i++) {

       const appar = new FormData();
         appar.append("file", files[i]);
         appar.append("upload_preset", "unreveal");
         appar.append("cloud_name", "pixelsimage");
         
         const request=await fetch("https://api.cloudinary.com/v1_1/unreveal/image/upload",{
           method:"POST",
           body:appar
         })
       
         const resp=await request.json()
         if(resp.error){
          toast.error(resp.error.message, {
            position: "bottom-left",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

           setLoaded(false)

         }
         else{
          
           console.log("The image url from cloudinary is ",resp)
           images.push(resp.url)
          setLoaded(false)
          
         }
         
        //  console.log("The pushed array",images)
         
       }
      //  console.log("the added",photos+images)
       const allphotos=[...photos,...images]
       setPhotos(allphotos)
       setLoaded(false)
      //  setSub(true)
}
const onChangeHandler=async(files)=>{
  // await setUrl(files)
  await imageUrlMaker(files)
}
// console.log("the sltd",sltdImgArr)
  return (
    <>
    <Head>
        <title>Photo Studio || Unreveal | Creators Everywhere</title>
        <meta
          name="description"
          content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. Photography is not only a hobby but it can also be your carrier."
        />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      <ToastContainer/>
    <div className="w-full relative">
      <div className="relative">
    <div className="w-full">
{/*Left portion */}
<div className="flex justify-center w-full py-4">

<div className="text-5xl text-indigo-700  px-2 relative xl:text-6xl">
  <div className="relative rounded-full border-2 border-indigo-700 h-16 w-16 xl:h-20 xl:w-20 pl-1 pt-1 xl:pl-2 xl:pt-2">

  <span className="text-center"><TbCameraPlus/></span>
  <span></span>
  </div>
  <div className="absolute top-0 w-full">
      <input type="file" multiple className="text-transparent  w-full file:bg-transparent file:text-transparent  h-full file:border-none" title='Upload Photos' onChange={(e)=>onChangeHandler(e.target.files)}/>
  </div>


</div>
<div className="flex flex-wrap list-none justify-center space-y-2 space-x-3 items-center">
  <li></li>
  {
    photos && photos.map((image,index)=>{
      return(
        <div key={index} className="">
          <Image src={image} width={80} height={60} className="w-12 h-12 xl:h-14 xl:w-14 object-cover object-center rounded-sm" alt='Image'/>
        </div>
      )
    })
  }

</div>


</div>

{/*Right portion */}
 <div className="lg:mx-12 mx-2 space-y-4 lg:space-y-8">
  {
    photos.length !==0? photos.map((image,index)=>{
      // console.log("the data",imageset);
      return(
<div key={index} className="">

<UploadDetail token={token} loaded={loaded} setLoaded={setLoaded} setPhotos={setPhotos} photos={photos} setGo={setGo}
 //  dataOfAllImages={dataOfAllImages}
//  allphotos={allPhotos} setAllPhotos={setAllPhotos}
//  tags={tags} location={location} setLocation={setLocation} setTags={setTags} title={title} setTitle={setTitle} 
 imgindex={index}
 image={image}/>
</div>
      )
    })
    :
// Initial UI of uploading assest/media(IMAGE)
    // <div className="w-full ">
    //   <img src={nothing.src} className="w-full" alt="nothing" />
    //   <p className="text-lg font-semibold text-slate-700">Upload High Quality Photos to Unreveal</p>
    //   <p className="text-sm px-8 font-semibold text-indigo-700">Help millions of people around the world</p>
    //   {/* <UploadDetail dataOfAllImages={dataOfAllImages} tags={tags} location={location} setLocation={setLocation} setTags={setTags} title={title} setTitle={setTitle} appendToArray={appendToArray} image={image} /> */}
    // </div>
    ""
  }
  
</div> 
</div>
{/*Bottom portion */}
{
  photos.length>0?
<div className="bg-white shadow-lg py-2 font-semibold fixed bottom-0 w-full flex justify-between px-8">

<div className="text-indigo-600 text-sm md:text-lg">
  
  <div>Contents for uploading</div>
  <div>{photos.length} {photos.length>1?"Photos":"Photo"}</div>
</div>

 {/* <div className={go?"":"hidden"}>
  <button className="bg-indigo-600 px-6 font-semibold py-2 rounded-md text-white">Checkout your photos</button>
</div>  */}

</div>
:
<>
<h2 className='font-semibold px-4 py-2 '>Searches Require Photos</h2>
<div className="w-full px-4 flex flex-wrap list-none py-2  space-x-2">

{
  searches && searches.map((srch,index)=>{
    return(

    <li  key={index} className="">
      <span className="bg-slate-200 text-black rounded-sm px-2 py-1">{srch}</span>
    </li>
    )
  })
}
</div>

</>
}
</div>

{loaded?<div className="bg-slate-100 bg-opacity-25 top-0 absolute w-full h-full py-24">
 <Loader/>
</div>:""
}
</div>
    </>
  )
}
export async function getServerSideProps(ctx){
  const {token}=parseCookies(ctx)
  if(!token){
    const {res}=ctx
    res.writeHeader(302,{
      Location:"/user/login"
    })
    res.end()
  }
 {/*Getting all photo require searches */}
 const req2 = await fetch(`${baseUrl}/api/addToSrchReqPh/addToSrch`)
 const res2 = await req2.json()
 console.log("The response is ",res2)
  return{
    props:{
      searches:res2.searches
    }
  }
}