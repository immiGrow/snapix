import Link from 'next/link'
import React,{useState} from 'react'

import { useRouter } from 'next/router'
import Loader from '../../Components/UI_Interface/Files/Loader'
import baseUrl from '../../mongodb/baseUrl'
import Cookies from 'js-cookie'
import { parseCookies } from 'nookies'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head'
export default function Login() {

  const router=useRouter()
 
const [load, setLoad] = useState(false)
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });


  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };
  const handleSubmitAllCredentials = async (e) => {
   e.preventDefault();
   setLoad(true)
    const userReq = await fetch(`${baseUrl}/api/user/loginuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: cred.email,
        password: cred.password
        
      })
    });
   
    const response = await userReq.json();
    
    console.log(response)
    if(response.success){
      setLoad(false)
        Cookies.set('token',response.authtoken)
        router.push("/")
        
    }
   else{
    toast.error("Login with correct credentials", {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    setLoad(false)
   }
  
  };

  return (
    <>
     <Head>
        <title>Login || Unreveal | Creators Everywhere</title>
        <meta
          name="description"
          content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. Photography is not only a hobby but it can also be your carrier."
        />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      <ToastContainer/>
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src={"https://res.cloudinary.com/unreveal/image/upload/v1678877600/fulllogo_furhgt.png"} alt="Your Company"/>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Login to your account</h2>
      <p className="mt-2 text-center  text-gray-600">
        Or{" "}
        <Link href="/user/signup" className="font-medium text-slate-700 hover:text-slate-800">Create an account</Link>
      </p>
    </div>
    <form onSubmit={handleSubmitAllCredentials} className="my-8 space-y-6">
      <input type="hidden" name="remember" value="true"/>
      <div className="space-y-8 rounded-md shadow-sm">
        <div>
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" onChange={onChange} autoComplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" onChange={onChange} autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"/>
        </div>
      </div>

      <div className="flex items-center justify-end">
        {/* <div className=" items-center hidden">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label for="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
        </div> */}

        <Link href="/user/forgetpassword"><div className="text-sm">
          <span className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</span>
        </div></Link>
      </div>

      <div>
        <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
           
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
          </span>
          Login
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