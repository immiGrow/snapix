import Image from "next/image";
import React, { useState, useEffect } from "react";

import { BiMenuAltLeft, BiChevronDown } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import {IoMdContact} from 'react-icons/io'
import { SiGoogleassistant } from "react-icons/si";
import {MdNotificationsActive,MdManageAccounts} from 'react-icons/md'
import { AiFillBuild, AiOutlineInstagram,AiOutlinePoweroff } from "react-icons/ai";
import { FaImages, FaUsers, FaFacebook,FaRegHandshake,FaPowerOff } from "react-icons/fa";
import {
  // BsFillPeopleFill,
  // BsCursorFill,
  // BsFillCollectionFill,
  // BsArrowUpShort,
  BsUpload,
  BsTwitter,
} from "react-icons/bs";
import {SiAnalogue,SiAdobephotoshop} from 'react-icons/si'
import Link from "next/link";
import { useRouter } from "next/router";
import SearchBox from "../Navigation_Bar/SearchBox";

// import profile from '../../Images/profile.png'
import Cookies from "js-cookie";
import { parseCookies } from 'nookies'
import AllNotifications from "./AllNotifications";

export default function Navbar({notifications,setNotifications}) {
  // console.log("the navbar nots",notifications)
  const [navbar, setNavbar] = useState(false);
const {token}= parseCookies()
const [deviceWidth, setDeviceWidth] = useState(0)
const [showNots, setShowNots] = useState(false)
// console.log("the token navbar",token)
  const changeBackgroundColor = () => {
    if (window.scrollY >= 48) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    setDeviceWidth(window.innerWidth)
    window.addEventListener("scroll", changeBackgroundColor);
    return () => window.removeEventListener("scroll", changeBackgroundColor);
  },[]);

  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [click, setClick] = useState(deviceWidth>425?true:false);
  const [clickes, setClickes] = useState(true);
  const [clicks, setClicks] = useState(deviceWidth>425?true:false);
  const [clickss, setClickss] = useState(deviceWidth>425?true:false);
  const handleLogout=()=>{
    Cookies.remove('token')
    router.push('/')
    setMenu(false)
  }

  //  const [clicks, setClicks] = useState(false)
  // const {token}=parseCookies()
  //     const handleLogout=()=>{
  //     setMenu(false)
  //     Cookies.remove('token')
  //   router.push("/userend/login")
  // }
  return (
    <>
      <div className="sticky top-0 z-20">
        <div className=" w-full  ">
          <div className="  ">
            <nav
              className={
                !navbar
                  ? "  flex justify-between items-center text-slate-800 w-full p-3  bg-white"
                  : "  flex justify-between items-center  w-full  p-3 text-slate-800 bg-white"
              }
            >
               <div onClick={()=>router.push("/")} className="">
               
                  
                     <img className="md:hidden w-12"  src={"https://res.cloudinary.com/unreveal/image/upload/v1678877605/logo_scaomd.png"} alt="Unrveal" />
                    <img className="hidden md:block md:w-36 lg:w-44 xl:w-48 "  src={"https://res.cloudinary.com/unreveal/image/upload/v1678877600/fulllogo_furhgt.png"} alt="Unreveal" />
                   
                    {/* <Image src={fulllogo} alt=""/> */}
               
              </div>
              <SearchBox />
              {/*Profile Icon */}
              {!token ?
              <>
              <div className="flex justify-center items-center space-x-4 pr-2">
               <div className="">
              <Link href={!token?"/user/login":"/photostudio/preupload"}><div className={'md:flex hidden items-center font-semibold border text-slate-600 hover:text-black hover:border-black border-slate-500 px-2 py-1 text-sm rounded-sm'}><span className='pr-2'><BsUpload/></span>Upload</div></Link>
              </div>
               <div className="">
              <Link href={"/user/login"}><div className={'md:flex items-center font-semibold text-slate-600 hidden  text-xs md:text-sm hover:text-black hover:border-black px-2 py-1 border border-slate-600 rounded-sm  bg-white '}><span className='pr-2'><SiAnalogue/></span>Login</div></Link>
              </div>
              </div>
              </>
              :
              <>
               <div onClick={handleLogout} title="Logout" className="pr-2 text-lg cursor-pointer text-slate-600 hover:text-black" >

<FaPowerOff/>
</div>
              <div className="pr-3  space-x-4 md:space-x-4 md:text-2xl lg:text-2xl text-lg hidden md:flex md:items-center">
                {/* <img src={profile.src} className='w-8' alt="profile" /> */}
                {/*On Adding Follow/Unfollow Option then notify the user */}
               
              <div className="">

<AllNotifications showNots={showNots} setShowNots={setShowNots} notifications={notifications} setNotifications={setNotifications}/>
              </div>


                <div className="w-full text-sm hidden font-semibold  text-slate-600 lg:flex space-x-2">
                <Link href={"/Community/contributor"}><button className="flex justify-center py-1 rounded-sm space-x-2 w-44 border border-slate-500 hover:text-black hover:border-black items-center">
                  <span><FaRegHandshake/></span>
                  <span>Become a contributor</span>
                  </button></Link>
                </div>
                {/* <div className="w-full text-sm hidden font-semibold  text-slate-600 lg:flex space-x-2">
                <Link href={"/Company/join"}><button className="flex justify-center py-1 rounded-sm space-x-2 w-32 border border-slate-500 items-center">
                  <span><FaRegHandshake/></span>
                  <span>Join the team</span>
                  </button></Link>
                </div> */}
                <div className="">
                <Link href={"/photostudio/preupload"}><div className={'md:flex hidden items-center font-semibold border text-slate-600 hover:text-black hover:border-black border-slate-500 px-2 py-1 text-sm rounded-sm'}><span className='pr-2'><BsUpload/></span>Upload</div></Link>
                </div>
                </div>
                </>}

              {/* Hamburger Menu and its options */}
              <div className="hamburger">
                <div
                  onClick={() => setMenu(!menu)}
                  className="text-2xl hover:cursor-pointer "
                >
                  <FiMenu />
                </div>
              </div>
              {/* Hamburger Menu and its options */}
            </nav>
          </div>

          <div
            className={
              menu
                ? "bg-white px-8 absolute right-0 z-20 transition-all duration-200 ease-in-out"
                : "hidden transition-all px-8 duration-200 ease-in-out"
            }
          >
            <ul className="  space-y-3 pb-2 md:pb-4 lg:pb-6 static">
              {/*Account entity */}

              <>
                <li className=" transition-all duration-200 hover:cursor-pointer ">
                  <p
                    onClick={() => setClick(!click)}
                    className="flex px-4 py-1 font-semibold  justify-start items-center"
                  >
                    <span className="">
                      <SiGoogleassistant className="mr-2 " />
                    </span>{" "}
                    Company{" "}
                    <span className="ml-16 text-slate-400">
                      <BiChevronDown />
                    </span>
                  </p>

                  <ul
                    className={
                      click
                        ? "transition-all duration-200 text-slate-600 space-y-1 px-8 "
                        : "hidden transition-all duration-200"
                    }
                  >
                    <Link href={"/Company/about"}>
                      <li
                        onClick={() => setMenu(false)}
                        className="hover:text-black"
                      >
                        About
                      </li>
                    </Link>
                    <Link href={"/Company/join"}>
                      <li
                        onClick={() => setMenu(false)}
                        className="hover:text-black"
                      >
                        Join the team
                      </li>
                    </Link> 
                    <Link href={"/Company/reach"}>
                      <li
                        onClick={() => setMenu(false)}
                        className="hover:text-black"
                      >
                        Reach to us
                      </li>
                    </Link>
                     
                  </ul>
                </li>
                <li className=" transition-all duration-200  hover:cursor-pointer ">
                  <p
                    onClick={() => setClickes(!clickes)}
                    className="flex px-4 py-1 font-semibold  justify-start items-center"
                  >
                    <span className="">
                      <FaUsers className="mr-2 " />
                    </span>{" "}
                    Community{" "}
                    <span className="ml-12 text-slate-400">
                      <BiChevronDown />
                    </span>
                  </p>

                  <ul
                    className={
                      clickes
                        ? "transition-all duration-200 text-slate-600 space-y-1 px-8 "
                        : "hidden transition-all duration-200"
                    }
                  >
                     <Link href={"/Community/contributor"}>
                      <li
                        onClick={() => setMenu(false)}
                        className="hover:text-black"
                      >
                        Become a Contributor
                      </li>
                    </Link>
                    <Link href={"/Community/trends"}>
                      <li
                        onClick={() => setMenu(false)}
                        className="hover:text-black"
                      >
                        Trends
                      </li>
                    </Link>
                    <Link href={"/Community/collections"}>
                    <li
                      onClick={() => setMenu(false)}
                      className="hover:text-black"
                    >
                      Collections
                    </li>
                    </Link>
                    <Link href={"/Community/awards"}><li
                      onClick={() => setMenu(false)}
                      className="hover:text-black"
                    >
                      Unreveal Awards
                    </li></Link>
                    <li className="flex items-center space-x-4 py-2 text-lg">
                      <span className="hover:text-black">
                        <FaFacebook />
                      </span>
                      <span className="hover:text-black">
                        <BsTwitter />
                      </span>
                      <span className="hover:text-black">
                        <AiOutlineInstagram />
                      </span>
                    </li>
                  </ul>
                </li>
                {/*PhotoStudio */}
                {token &&<li className=" transition-all duration-200  hover:cursor-pointer ">
                  <p
                    onClick={() => setClicks(!clicks)}
                    className="flex px-4 py-1 font-semibold  justify-start items-center"
                  >
                    <span className="">
                      <SiAdobephotoshop className="mr-2 " />
                    </span>{" "}
                    Photo Studio{" "}
                    <span className="ml-12 text-slate-400">
                      <BiChevronDown />
                    </span>
                  </p>

                  <ul
                    className={
                      clicks
                        ? "transition-all duration-200 text-slate-600 space-y-2 px-8 "
                        : "hidden transition-all duration-200"
                    }
                  >
                     <Link href={"/photostudio/upload"}>
                      <li
                        onClick={() => setMenu(false)}
                        className="hover:text-black"
                      >
                      Upload Photos
                      </li>
                    </Link>
                    <Link href={"/photostudio/preupload"}>
                      <li
                        onClick={() => setMenu(false)}
                        className="hover:text-black"
                      >
                        Pre-Uploading Photos
                      </li>
                    </Link>
                    <Link href={"/photostudio/uploading_guidelines"}>
                    <li
                      onClick={() => setMenu(false)}
                      className="hover:text-black"
                    >
                     Uploading Guidelines
                    </li>
                    </Link>
                  
                    
                  </ul>
                </li>}
                  {/*User Studio */}
                {token && <li className=" transition-all duration-200  hover:cursor-pointer ">
                  <p
                    onClick={() => setClickss(!clickss)}
                    className="flex px-4 py-1 font-semibold  justify-start items-center"
                  >
                    <span className="">
                      <MdManageAccounts className="mr-2 " />
                    </span>{" "}
                    Your Studio{" "}
                    <span className="ml-12 text-slate-400">
                      <BiChevronDown />
                    </span>
                  </p>

                  <ul
                    className={
                      clickss
                        ? "transition-all duration-200 text-slate-600 space-y-2 px-8 "
                        : "hidden transition-all duration-200"
                    }
                  >
                     <Link href={"/account/myImages"}>
                      <li
                        onClick={() => setMenu(false)}
                        className="hover:text-black"
                      >
                      Your Photos
                      </li>
                    </Link>
                    <Link href={"/account/myCltns"}>
                      <li
                        onClick={() => setMenu(false)}
                        className="hover:text-black"
                      >
                        Your Collections
                      </li>
                    </Link>
                    <Link href={"/account/statistics"}>
                    <li
                      onClick={() => setMenu(false)}
                      className="hover:text-black"
                    >
                     Statistics
                    </li>
                    </Link>
                  
                    
                  </ul>
                </li>}
                  <div className="block md:hidden pb-2 px-10">
                  <Link href={"/photostudio/preupload"}><div className={'flex items-center font-semibold border text-slate-700 hover:text-black hover:border-black border-slate-700 px-2 w-fit py-1 text-sm rounded-sm'}><span className='pr-2'><BsUpload/></span>Upload</div></Link>
                  </div>
                {/*Account entity */}
                {/* <li  className='flex transition-all duration-200 hover:cursor-pointer  justify-start px-4 py-1 items-center '><span className=''><BsCursorFill className='mr-2'/></span>Logout</li> */}
              </>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
}
