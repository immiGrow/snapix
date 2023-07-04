import React,{useState,useEffect} from 'react';
import baseUrl from '../mongodb/baseUrl'
import Navbar from '../Components/UI_Interface/Files/Navbar'
import '../styles/globals.css'
import { parseCookies } from 'nookies';
import LoadingBar from 'react-top-loading-bar'
import {useRouter} from 'next/router';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  const {token}=parseCookies()
  const router=useRouter()
  const [progress, setProgress] = useState(0)
  const [notifications, setNotifications] = useState([])
useEffect(() => {
  router.events.on('routeChangeStart',()=>{
setProgress(40)
  })
  router.events.on('routeChangeComplete',()=>{
setProgress(100)
  })
 
}, [router.events])

useEffect(() => {
 async function getAllNotifications(){
  const req=await fetch(`${baseUrl}/api/account/notifications`,{
    method:"GET",
    headers:{
      "AUthorization":token
    }
  })
  const res=await req.json()
  console.log("The notifications are ",res)
  setNotifications(res.notifications)
 }
 if(token){
  getAllNotifications()
 }
}, [token])


  return <>
  <Head>
        <title>Unreveal | Creators Everywhere</title>
        <meta
          name="description"
          content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos & images for free. It cost you no money. Photography is not only a hobby but it can also be your carrier."
        />
        <link rel="icon" href="/favicon.ico" />
  </Head>
   <LoadingBar
        color='#26425d'
        progress={progress}
        waitingTime={600}
        onLoaderFinished={() => setProgress(0)}
      />

  <Navbar notifications={notifications} setNotifications={setNotifications}/> 
 
  <Component {...pageProps} notifications={notifications} setNotifications={setNotifications} />

  </>
}

export default MyApp
