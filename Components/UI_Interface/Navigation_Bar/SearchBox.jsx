import React,{useState,useEffect} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router";

import * as Realm from 'realm-web'
import TextToSearch from "../Files/TextToSearch";
export default function SearchBox() {
  const router = useRouter();
  const [term, setTerm] = useState('')
  const [autoComplete, setAutoComplete] = useState([])
  
  
{
  /*
  1. Take query from searchbox and redirect user to "/search/[query]"--- on submit
  2. Through(useRouter.query) useeffect hook take the query and display photos
  3. useeffect will run on query changes
  */
}

useEffect(() => {
      if(term.length){
        async function realmConnector(){
          const appId="unreveal-yzpxu"
          const app=new Realm.App({id:appId})
          const credentials=Realm.Credentials.anonymous()
          try {
            const user=await app.logIn(credentials)
            const searchAutoComplete=await user.functions.searchAutoComplete(term)
           await setAutoComplete(searchAutoComplete)
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
  // console.log("Hello from [query].jsx")
  
  
  
      }, [term])

const handleSubmit=(e)=>{
  e.preventDefault();
  router.push({
    pathname: `/search/${term}`
  })
  setTerm("")
}
const handleAutoSrch=(tag)=>{

  router.push({
    pathname:`/search/${tag}`
  })
  setTerm("")

}

  return (
    <>
    <div className="w-full relative  px-4">

      <form onSubmit={handleSubmit} className="">
        
          <div className={autoComplete.length>0?"relative w-full flex justify-center  items-center group border-r-2 border-t-2 border-l-2 rounded-md border-slate-300":"relative w-full flex justify-center  items-center group border-2 rounded-md border-slate-300"}>
        
            <input
              type="text"
              placeholder="Search free high resolution photos"
              className=" pl-8  py-1 text-sm  w-full  h-8
    focus:outline-none  text-black"
    value={term}
    onChange={(e)=>setTerm(e.target.value)}
            />

<div className="text-xl absolute left-2 text-slate-400 group-hover:text-slate-700 w-fit ">
            <AiOutlineSearch />
          </div>
          <div className="  w-full flex justify-center  "> 
        <div className={autoComplete.length>0?" bg-white text-slate-500 list-none absolute px-4 pb-2 shadow-md text-sm  top-8 left-0 w-full ":"hidden"}>

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
          </div>
          
        
          
        </form>
        
    </div>
    </>
  );
}
