import React from "react";
import Hire from "./Hire";
import ImageFlow from "./ImageFlow";

import WorkWithUs from "./WorkWithUs";
// Add liked and viewed images in this page
// Rectify all the pages ---> 28/02/2023

export default function Join({ images,totalUsers,totalPhotos }) {
  return (
    <>
      <Hire />
      <div className="OurStory space-y-4 md:py-8 md:px-36 lg:px-48 xl:py-16 xl:px-80 py-4 px-4">
        <h1 className="text-4xl font-bold">Our Story</h1>
        <p className="font-semibold">
          In 2023, Unreveal launched with 10 resolution photos that can be used
          in any work. Fortunately, the people got to know about the unending
          experience of downloading the photos and contributing to Unreveal. Our
          creators proved that there millions of skilled persons can be found
          around the world.
        </p>
        <p className="font-semibold">
          We’re building a community where the principle is of sharing the
          glimpse and open feelings. Sharp your skills, there a single effort of
          your contribution to Unreveal can make a big impact on this huge
          world. Instead of throwing the photo in the sense of assemblence of
          simple colors, Unreveal gives you the fuel of creativity.
        </p>
      </div>
      {/* <ImagesDesign dsImgs={dsImgs} /> */}
      {images.length>8 && <ImageFlow images={images}/>}
      

      <p className="md:px-36 md:py-20 px-4 py-12 lg:px-48 xl:px-80 md:text-lg font-semibold">
        Our aim is to build the most useful visual library ever created.
        Unreveal photography has led to more than 3 million creative acts
        enabling people from everywhere to create. You don’t need to know
        someone, or have an agent, or have a name to be great on Unreveal. We’re
        a place where creators meet their audience, where individuals become a
        community, and a source for creativity.
      </p>

      <WorkWithUs totalUsers={totalUsers} totalPhotos={totalPhotos}/>
      
    </>
  );
}
