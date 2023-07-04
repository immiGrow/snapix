import React from 'react'
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

export default function Charts({userId,chartId}) {
   console.log("The useriD from charts is ",userId)
// Show charts only large devices from tablet
  return (
    <>

    <div id='chartOfViews' className=" w-full ">
    <iframe 

    className="w-full h-[560px] bg-white"
    src={`https://charts.mongodb.com/charts-unreveal-czlte/embed/charts?id=${chartId}&filter={'user':ObjectId('${userId}')}&maxDataAge=3600&theme=light&autoRefresh=true`}></iframe>
    </div>
    </>
  )
}

