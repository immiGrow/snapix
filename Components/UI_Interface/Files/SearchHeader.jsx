import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
export default function SearchHeader() {
  return (
    <>
      <div className="w-full ">
        <div className="w-full flex justify-center items-center relative ">
          <div className="relative w-full flex justify-center items-center group">
        
            <input
              type="text"
              placeholder="Search free high resolution photos"
              className="sm:w-full-width pl-10 py-1 px-2 text-sm w-full  h-10
    focus:outline-none  text-slate-600 bg-slate-100  rounded-md"
            />

<div className="text-xl absolute left-2 text-slate-400 group-hover:text-slate-700 w-fit ">
            <AiOutlineSearch />
          </div>
          </div>
          
          </div>
        </div>
      
    </>
  );
}
