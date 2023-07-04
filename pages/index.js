import React, { useState, useEffect } from "react";
import Head from "next/head";

import { AiOutlineSearch } from "react-icons/ai";
import { BsFillEyeFill, BsFillBagPlusFill,BsHeartFill } from "react-icons/bs";

import * as Realm from 'realm-web'
import Photos from "../Components/UI_Interface/Photo_Section/Photos";
import Footer from "../Components/UI_Interface/Files/Footer";
// Company(About, Join the team, Reach to us),Community(Become a contributor{Upload},Company Awards), Advertise,  Account(Collection, Images, Profile), Growth
// Today you can start working with API's :-- APPLICATION NAME IS 'UNREVEAL'
import TextToSearch from '../Components/UI_Interface/Files/TextToSearch'
import { ReactPhotoCollage } from "react-photo-collage";
import Image from "next/image";
import { useRouter } from "next/router";
import Category from "../Components/UI_Interface/Navigation_Bar/Category";
import Link from "next/link";
const baseUrl = process.env.NODE_ENV === "production" ? "https://unrevealakc.vercel.app" : "http://localhost:3000"
export default function Home({ photo,searches,cltns }) {
  const router = useRouter();
  const [term, setTerm] = useState("");
  const [imageArr, setImageArr] = useState([]);
  
  const [autoComplete, setAutoComplete] = useState([])
  const [sugg, setSugg] = useState(false)
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [totalDocs, setTotalDocs] = useState(0);
  // const [bgUdsdsl, setBgUdsdsrl] = useState('')
  const [deviceWidth, setDeviceWidth] = useState(0)
  const [deviceHeight, setDeviceHeight] = useState(0)
  

  useEffect(() => {
    async function fetchPhotosPagination() {
      const req = await fetch(
        `${baseUrl}/api/photostudio/allphotos?page=${page}`
      );
      const res = await req.json();
      console.log("the response", res);
      setPageCount(res.pagination.pageCount);
      setImageArr(res.response.results);
      let total = totalDocs + res.pagination.count;
      setTotalDocs(total);
    }
    fetchPhotosPagination();
    const width=window.innerWidth
    const height=window.innerHeight
    setDeviceHeight(height)
    setDeviceWidth(width)
    console.log("The widdth is ",width,"the height",height)
  },[page,totalDocs]);
  
useEffect(() => {
  if(term.length){
    async function realmConnector(){
      const appId="unreveal-yzpxu"
      const app=new Realm.App({id:appId})
      const credentials=Realm.Credentials.anonymous()
      try {
        const user=await app.logIn(credentials)
        const searchAutoComplete=await user.functions.searchAutoComplete(term)
        setAutoComplete(searchAutoComplete)
       console.log("The auto photos",searchAutoComplete)
      } catch (error) {
        console.error(error)
      }
      }
      realmConnector()
  }
  else{
    setAutoComplete([])
  }
 }, [term])
const searchQuery = (e) => {
  e.preventDefault()
  console.log("The search term ",term)
    if (term !== "") {
      router.push(`/search/${term}`);
      setTerm("");
    }
    else{
      router.push("/")
    }
    
};

  const handleAutoSrch=(tag)=>{

    router.push({
      pathname:`/search/${tag}`
    })
    setTerm("")
  
  }
  const cnvrtStates=(e)=>{
setTerm(e.target.value)
setSugg(false)
  }
  const incViewCltn=async(ctnId)=>{
    const req=await  fetch(`${baseUrl}/api/interaction/ctnview`,{
      method:"PUT",
      headers:{

        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        photoId:ctnId
    
    })
    }
    )
    const res=await req.json()
    console.log("The views of ctn",res)
    router.push(`/collections/${ctnId}`)
      }
const clearAllRecentSrches=async()=>{
const req=await fetch(`${baseUrl}/api/addToSrchreqPh/addToSrch`,
{
  method:"DELETE"
})
const res=await req.json()
console.log(res.message)
}
// Joining page for users to join your company
// Category Page
// Contact us
// Leadership 
// Update the <Head> Component
// Thanks modal for downloaders
// Adding blurhash
// Code cleaning Than WRAP the Application --->22/03/2023

const trendingTopics=[
  {
    text:"Forest",
    image:"https://res.cloudinary.com/unreveal/image/upload/v1679028208/pexels-photo-886051_llx7ig.jpg",
    
  },
  {
    text:"Sky",
    image:"https://res.cloudinary.com/unreveal/image/upload/v1679028159/pexels-photo-4737484_cre2xv.jpg",
    
  },
  {
    text:"People",
    image:"https://res.cloudinary.com/unreveal/image/upload/v1675579610/cld-sample.jpg",
    
  },

  {
    text:"Sunset",
    image:"https://res.cloudinary.com/unreveal/image/upload/v1679028098/pexels-photo-3998365_z4sj59.jpg",
    
  },
  {
    text:"Dark",
    image:"https://res.cloudinary.com/unreveal/image/upload/v1679028031/pexels-photo-2449600_wepl3v.jpg",
    
  },
  {
    text:"Dishes",
    image:"https://res.cloudinary.com/unreveal/image/upload/v1675579610/cld-sample-4.jpg",
    
  },
  
]

  return (
    <div className="p-0 m-0">
      <Head>
        <title>Freely Download High Resolution Images & Photos or Pictures || Unreveal | Creators Everywhere</title>
        <meta
          name="description"
          content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. Photography is not only a hobby but it can also be your carrier."
        />
        <link rel="icon" href="/favicon.ico" />
        
        <meta name="google-site-verification" content="418Bu2sXq34B_lHfLStaeiCIu9jPe3qgPBbWlVo09RE" />
        <meta name="msvalidate.01" content="57F36F6E09DC46A25EC97A50FD3B3FE7" />
      </Head>


       <Category/>
      <div className="w-full  relative  ">
        <div className=" flex justify-center w-full relative  ">
          <div
            // styles={{backgroundImage:`url(${hashUrl})`}}
            className="w-full bg-darkblue relative "
          >
            <Image
              src={ photo.url}
               width={1440} height={1280}
              className="w-full relative lg:h-[36rem] h-96 md:h-[32rem] object-cover object-top"
              alt={photo.title}
            />
          </div>
        </div>
      </div>

      <div className="w-full top-24 h-2/3 md:top-32 lg:top-44 md:w-5/6 md:ml-12  px-8 lg:px-24   absolute z-10 ">
        <div className=" ">
          <div className=" text-white space-y-4   ">
            <h1 className=" text-3xl md:text-5xl font-bold py-4">Unreveal</h1>
            <div className="">
              <p className="font-semibold   ">
                Photography is not only a Hobby,
              </p>
              <p className="font-semibold   ">
                This can also be your Career
              </p>
              
            </div>
            <div className="absolute -z-10 bottom-32 md:-bottom-14 lg:-bottom-0  md:w-full w-5/6 ">
              <div className="flex justify-between items-center w-full text-sm">
                <div className="flex items-center space-x-2">
                  <span className="hidden md:block">Captured By </span>
                  <Link href={`/userphotos/${photo.user._id}`}><Image
                    width={50}
                    height={40}
                    src={
                      photo.user.profile_image ||
                       "https://res.cloudinary.com/unreveal/image/upload/v1678877614/profile_agyzhd.png"}
                    className="w-8 h-8 md:w-10 md:h-10 object-top bg-white rounded-full object-cover"
                    alt="uploader"
                  /></Link>
                  <span className="">
                      { photo.user.username}
                  </span>
                </div>
                <div className="space-x-4 flex items-center">
                  <div className="flex items-center">
                    <span className="pr-2">
                      <BsFillEyeFill />
                    </span>
                    {photo.views}
                  </div>
                  <div className="flex items-center">
                    <span className="pr-2">
                      <BsHeartFill />
                    </span>
                    {photo.likes.length} 
                  </div>
                  <div className="flex items-center">
                    <span className="pr-2">
                      <BsFillBagPlusFill />
                    </span>
                    {photo.downloads}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-full ">
              <div className="w-full flex justify-center items-center relative ">
                <form
                  onSubmit={searchQuery}
                  className="relative w-full flex justify-center items-center group"
                >
                  <input
                    type="text"
                    placeholder="Search free high resolution photos"
                    className={!sugg?"sm:w-full-width pl-10 py-1 px-2 text-sm w-full  h-10 focus:outline-none  text-slate-600 bg-white  rounded-md":"sm:w-full-width pl-10 py-1 px-2 text-sm w-full  h-10 focus:outline-none  text-slate-600 bg-white  rounded-t-md"}
                    value={term}
                    onClick={()=>setSugg(!sugg)}
                    onChange={cnvrtStates}
                  />

                  <button type="submit" className="text-xl absolute left-2 text-slate-400 group-hover:text-slate-700 w-fit ">
                    <AiOutlineSearch />
                  </button>
                </form>
              </div>
{/*Search Suggestion */}
{ sugg ?
              <div className="bg-white rounded-b-md  pb-4 text-black w-full px-1 md:px-4">

                <div className="flex justify-between py-1  px-2 md:py-2">

                 <h2 className="text-base md:text-xl  font-bold text-slate-700">Recent searches</h2>
                 <div onClick={clearAllRecentSrches} className="text-slate-500 cursor-pointer text-xs font-semibold">
                  Clear All
                 </div>
                </div>
                <div className=" w-full flex flex-wrap text-xs md:text-sm lg:text-base space-y-1 space-x-2 md:space-x-4 md:space-y-2">
                <div className=" justify-center hidden items-center font-semibold w-fit space-x-4 px-3 py-2 border-2 border-slate-200 rounded-md">
                  <p>Forest</p>
                  <span className="text-xl text-slate-700"><AiOutlineSearch/></span>
                </div>
                {
                  searches.map((srch,index)=>{
                    return(
                      <div key={index} className="">
                      <Link href={`/search/${srch}`}><div className="flex justify-center items-center font-semibold w-fit px-2 py-1 text-sm space-x-2 md:space-x-4 md:px-3 md:py-2 border md:border border-slate-300 hover:border-black rounded-md">
                  <p>{srch}</p>
                  <span className="text-xl text-slate-700"><AiOutlineSearch/></span>
                </div></Link>
                </div>
                    )
                  })
                }
               
                </div>
                
                <h2 className="text-base md:text-xl py-2 px-2 md:py-4 font-bold text-slate-700">Trending collections</h2>
               {/* <div className="flex justify-center w-full"> */}
                <div className=" grid grid-cols-2 min-[425px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-x-2 px-3 min-[375px]:px-5 min-[425px]:px-3  gap-y-3 md:gap-x-8 md:px-4 md:gap-y-4">
                  
{/*Trending Collections */}
{
    cltns.map((ctn,index)=>{
        const ctnId=String(ctn._id)
        console.log("The trending ",ctn)
        const setting = {
            width: '100px',
            height: ['70px', '25px'],
            layout: [1, 2],
            
            photos:ctn.cover_images,
            showNumOfRemainingPhotos: false
        };
    

        return(
            <div  key={index} className="w-full flex justify-center hover:cursor-pointer hover:opacity-90 ">
                <div className="">
                <div className="text-center  md:px-2">

                    <ReactPhotoCollage {...setting} className="" />
                </div>
    <div onClick={()=>incViewCltn(ctnId)} className="w-full ">

  {/* <h2 className=' text-sm font-bold text-slate-700 pt-2 pl-2 w-full'>{ctn.title}</h2> */}
  <p className=' text-xs text-start md:text-center text-slate-500 pr-2 min-[375px]:pr-4 min-[425px]:pr-0 md:px-2 font-normal w-full'>{ctn.Images.length} Photos Curated By <span className='hover:underline hover:text-black'>{ctn.curatedBy}</span></p>
    </div>
    </div>
</div>
        )
    })
}


                {/* </div> */}
                </div>
                {/*Trending topics */}
                <h2 className="text-base md:text-xl py-2 px-2 md:py-4 font-bold text-slate-700">Trending Topics</h2>
                <div className="w-full flex text-sm md:text-sm lg:text-base flex-wrap gap-x-2 gap-y-1 md:gap-x-8 md:gap-y-4">
                {
                  trendingTopics.map((tr,i)=>{
                    return(
                      <div key={i} className="">
                      <Link href={`/search/${tr.text}`}><div  className="flex w-fit justify-center items-center space-x-2 font-semibold border border-slate-200 md:px-3 px-2  py-1 rounded-md">
                  <img src={tr.image} className="w-8 h-8 rounded-full" alt={tr.text} />
                  <p>{tr.text}</p>
                </div></Link>
                </div>
                    )
                  })
                }
               


                </div>

              </div>
              :
        <div className="  w-full   "> 
        <div className={autoComplete.length>0?" bg-white text-slate-500 list-none px-4 pt-1 rounded-b-md  w-full ":""}>
{/*SearchTerm match autoComplete word then highlight */}
      {
    autoComplete.length>0 ? autoComplete.map((field,index)=>{
      
     
      return(
        <div onClick={()=>handleAutoSrch(field.title)} key={index}>
         <TextToSearch
        text={field.title}
        searchTerm={term}
       
      />
        </div>
      )
    })
    :""
  }
  </div>
      </div> 
}
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <Photos
        imageArr={imageArr}
        setImageArr={setImageArr}
        totalDocs={totalDocs}
        pageCount={pageCount}
       deviceHeight={deviceHeight}
       deviceWidth={deviceWidth}
        page={page}
        setPage={setPage}
      />
      <Footer /> 

    </div>

  );
}
export async function getServerSideProps(context) {
  {/*Recent Searches */}
  const request = await fetch(`${baseUrl}/api/photostudio/random`);
  const response = await request.json();
  console.log("The random photo", response);
{/*Getting all recent searches */}
  const req2 = await fetch(`${baseUrl}/api/addToSrchReqPh/searches`);
  const res2 = await req2.json();
  console.log(res2);
  {/*Trending collections */}
  const req = await fetch(`${baseUrl}/api/account/trendingCltn`);
  const res = await req.json();


  return {
    props: {
      photo: response.response.results,
      searches:res2.searches,
      cltns:res.response.results
    },
  };
}
