import Link from 'next/link'
import React from 'react'

export default function NothingFound({text}) {
  return (
    <>
    <main className="grid min-h-full place-items-center bg-white py-6 px-6 sm:py-8 lg:px-8">
  <div className="text-center">

    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">No {text} Found</h1>
    {text!=="Images"?<p className="mt-6 text-base leading-7 text-gray-600">Create your first collection with high resolution photos.</p>:
    <p className="mt-6 text-base leading-7 text-gray-600">Upload your first 10 high resolution photos.</p>}
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <Link href={text==="Images"?"/photostudio/preupload":"/"}><button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{text==="Images"?"Upload Now":"Let's create"} &rarr;</button></Link>
    </div>
  </div>
</main>
    </>
  )
}
