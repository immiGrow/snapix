import React from 'react'
import { Blurhash } from "react-blurhash";

export default function BlurHash({image}) {
  return (
    <>
     <Blurhash
  hash={image.blur_hash}
  width={500}
  height={400}
  resolutionX={32}
  resolutionY={32}
  className="relative gap-x-6 gap-y-4 h-96 "
  punch={1}
/>
    </>
  )
}
