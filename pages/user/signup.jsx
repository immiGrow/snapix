import Link from 'next/link'
import React,{useState} from 'react'

import Cookies from 'js-cookie'
import {parseCookies} from "nookies"
import { useRouter } from 'next/router'
import baseUrl from '../../mongodb/baseUrl'
import Loader from '../../Components/UI_Interface/Files/Loader'
import Head from 'next/head'

export default function Signup() {
const router=useRouter()
  const [load, setLoad] = useState(false)
  const [cred, setCred] = useState({
    username:"",
    email:"",
    password:"",
    cpassword:"",
   
 })
 const [rememberMe,setRememberMe] = useState(false)
 const onChange=(e)=>{
  setCred({...cred,[e.target.name]:e.target.value})
  
}
const handleSubmitAllCred=async(e)=>{
  e.preventDefault()
  console.log(cred)
  if (cred.password !==cred.cpassword){
    alert("Your password does not match your current password")
  }
  setLoad(true)
 
const userReq=await fetch(`${baseUrl}/api/user/createuser`,
{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        username:cred.username,
        email:cred.email,
        password:cred.password,
        rememberMe:rememberMe

    })
    
})
const response=await userReq.json()

console.log(response)
if (response.success){
  setLoad(false)
Cookies.set('token',response.authtoken)
router.push("/")
}
else{
alert(response.message)
}

}
  return (
    <>
     <Head>
        <title>Create an account || Unreveal | Creators Everywhere</title>
        <meta
          name="description"
          content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. Photography is not only a hobby but it can also be your carrier."
        />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src={"https://res.cloudinary.com/unreveal/image/upload/v1678877600/fulllogo_furhgt.png"} alt="Your Company"/>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create your account</h2>
      <p className="mt-2 text-center  text-gray-600">
        Or{" "}
        <Link href="/user/login" className="font-medium text-slate-700 hover:text-slate-800">Already have an account?</Link>
      </p>
    </div>
    <form onSubmit={handleSubmitAllCred} className="my-8 space-y-6">
      <input type="hidden"  name="remember" value="true"/>
      <div className="space-y-8 rounded-md shadow-sm">
        <div>
          <label htmlFor="username" className="sr-only">Username</label>
          <input id="username" name="username" type="text" onChange={onChange} autoComplete="text" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Username"/>
        </div>
        <div>
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" onChange={onChange} autoComplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" onChange={onChange} autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"/>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Confirm Password</label>
          <input id="cpassword" name="cpassword" type="password" onChange={onChange} autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Confirm Password"/>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember" onClick={()=>setRememberMe(!rememberMe)}  type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        {/* <div className="text-sm">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
        </div> */}
      </div>

      <div>
        <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
           
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
          </span>
          Sign up
        </button>
        {
          load && <Loader/>
        }
      </div>
    </form>
  </div>
</div>

    </>
  )
}
export async function getServerSideProps(ctx){
  const {token}=parseCookies(ctx)
  if(token){
    const {res}=ctx
    res.writeHeader(302,{
      Location:"/"
    })
    res.end()
  }
  
    return {
      props:{
  
      }
    }
  
    
  }