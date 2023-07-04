import Image from 'next/image'
import React from 'react'

export default function UploadingGuidelines() {
  return (
    <>
    
    <div className="bg-white">
  <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-12 px-4 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uploading Photos to Unreveal</h2>
      <p className="mt-4 text-gray-500">The photos that are submitted to Unreveal must follow these guidelines.</p>

      <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Original</dt>
          <dd className="mt-2 text-sm text-gray-500">Content that you owns.</dd>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Violence</dt>
          <dd className="mt-2 text-sm text-gray-500">Photos must not contain any violence or hate</dd>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">High Quality Photos</dt>
          <dd className="mt-2 text-sm text-gray-500">Photos should not have blur experience on zooming.</dd>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Portable Photos</dt>
          <dd className="mt-2 text-sm text-gray-500">We make your Photos portable on any device.</dd>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Photos Size</dt>
          <dd className="mt-2 text-sm text-gray-500">Photo&apos;s size should not be greater than <span className='font-semibold'>10 MB</span>. </dd>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Freely Useable Photos</dt>
          <dd className="mt-2 text-sm text-gray-500">Your Photos can be used by thousands of people in their work or projects.</dd>
        </div>
      </dl>
    </div>
    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
      <Image width={500} height={600} src="https://images.unsplash.com/photo-1570628431481-cc85959e662f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b3JpZ2luYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="rounded-lg bg-gray-100"/>
      <Image width={500} height={600} src="https://images.unsplash.com/photo-1590962677235-26b1195bb96e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmlvbGVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Top down view of walnut card tray with embedded magnets and card groove." className="rounded-lg bg-gray-100"/>
      <Image width={500} height={600} src="https://res.cloudinary.com/unreveal/image/upload/v1679028208/pexels-photo-886051_llx7ig.jpg" alt='Unreveal'/>
      <Image width={500} height={600} src="https://res.cloudinary.com/unreveal/image/upload/v1678877656/Birds_wgcojc.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." className="rounded-lg bg-gray-100"/>
    </div>
  </div>
</div>


    </>
  )
}
