import React, { useState } from "react";

import { MdCancel } from "react-icons/md";
import baseUrl from "../../../../mongodb/baseUrl";
import { useRouter } from "next/router";
import CategorySlt from "./CategorySlt";
import {ToastContainer,toast} from 'react-toastify'

export default function UploadDetail({
  image,
  token,
  photos,
  setPhotos,
  imgindex,
  setGo,
  loaded,
  setLoaded
}) {
  const router = useRouter();
  // console.log("the image",image)
  // Algorithm
  // 1. accept user-input values
  // 2. Send a post request to server to add photo in allPhotos collection with user details.
  // const{token}=parseCookies()
  // const dataOfAllImages=[];
  const [title, setTitle] = useState("");

  const [selected, setSelected] = useState('')
  const [tags, setTags] = useState([]);

  const addTags = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };
  const removetag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const publishPhoto = async (imgindex) => {
    // e.preventDefault();
    // setLoad(true)
    setLoaded(true)
    const req = await fetch(`${baseUrl}/api/photostudio/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
      body: JSON.stringify({
        title: title,
        tags,
        location,
        url: image,
        category:selected
      }),
    });

    const response = await req.json();
    console.log(response);
    if (response.success) {
      setPhotos(photos.filter((_, index) => index !== imgindex));
      setGo(true)
      toast.success("Photo has been published", {
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
    } else {
      toast.error("Failed to publish photo", {
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
  };

  return (
    <>
      {/* <div className="  w-11/12"> */}
      <ToastContainer/>
      <div className="block lg:flex  bg-slate-500 rounded-md bg-opacity-10 lg:py-24 py-20 px-0 lg:px-16">
        {/*Inside Right portion */}
        {/*Inside Right portion -> Left portion */}
        <div className="lg:w-2/3 w-full flex justify-center lg:items-center ">
          <img
            src={image}
            className="rounded-md lg:w-full w-10/12"
            alt={image}
          />
        </div>
        {/*Inside Right portion -> Right portion */}
        <div className="w-full lg:px-12 px-4 text-slate-500 font-semibold text-lg">
          <div className="   flex flex-col md:ml-auto w-full mt-8">
            <div className="relative mb-4">
              <label htmlFor="name" className="">
                Title
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-white focus:border-none  text-base outline-none py-2 px-3"
                placeholder="Enter title"
              />
            </div>
            {/* <div className="individualinputs relative ">
<label htmlFor="">Tags</label>
<input type="text" onKeyUp={addTags} className='block  bg-white w-full rounded-md focus:border-2' name=""  />
</div> */}
            <div className="relative mb-4">
              <label htmlFor="name" className="">
                Tags
              </label>
              <input
                type="text"
                id="name"
                onKeyUp={addTags}
                name="tags"
                className="w-full bg-white focus:border-none  text-base outline-none py-2 px-3"
                placeholder="Enter tags"
              />
            </div>

            <div
              className={
                tags.length !== 0 ? "tags-container w-full " : "hidden"
              }
            >
              <ul className="flex flex-wrap mb-2  h-auto space-y-2 text-sm space-x-2 ">
                <li></li>
                {tags && tags.map((tag, index) => {
                  return (
                    <>
                      <li
                        key={index}
                        className="bg-slate-700 font-normal rounded-lg text-white py-1 px-2 flex space-x-1"
                      >
                        <span>{tag}</span>
                        <MdCancel
                          className="hover:cursor-pointer"
                          onClick={() => removetag(index)}
                        />
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            {/*Now category */}
            <div className="relative mb-4">
              {/* <label htmlFor="name" className="">
                Category 
              </label>
              <input
                type="text"
                id="location"
                name="location"
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-white focus:border-none  text-base outline-none py-2 px-3"
                placeholder="Enter location"
              /> */}
              <CategorySlt selected={selected} setSelected={setSelected}/>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => publishPhoto(imgindex)}
                className="text-white bg-indigo-600 w-fit border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base"
              >
                Publish Photo
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
