import React from 'react'

export default function TextToSearch(props) {
    
  return (
    <>
   
     <p className="text-sm hover:cursor-pointer">
        {props.text.split("").map((char, index) => {
          if (char.toLowerCase() === props.searchTerm[index]) {
            return (
              <span key={index} className="font-semibold text-black">
                {char}
              </span>
            );
          } else {
            return char;
          }
        })}
      </p>
    </>
  )
}
