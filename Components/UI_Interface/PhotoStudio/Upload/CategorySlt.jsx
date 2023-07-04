import React,{useState} from 'react'


export default function CategorySlt({setSelected,selected}) {
    let category=[
        
        {
          text:"Wallpapers",
          path:'wallpaper'
          
        },
        {
          text:"Fashion & Beauty",
          path:'fashion'
        },
        {
          text:"3D Renders",
          path:'renders'
        },
        {
          text:"Travel",
          path:'travel'
        },
        {
          text:"Nature",
          path:'nature'
        },
        {
          text:"Street Photography",
          path:'street-photography'
        },
        {
          text:"Experimental",
          path:'experimental'
        },
        {
          text:"Textures & Patterns",
          path:'textures'
        },
        {
          text:"Animals",
          path:'animals'
        },
        {
          text:"Architect & Interiors",
          path:'interiors'
        },
        {
          text:"Movies & Drama",
          path:'film'
        },
        {
          text:"Food & Drinks",
          path:'food'
        },
        {
          text:"People",
          path:'people'
        },
        {
          text:"Spirituality",
          path:'spirituality'
        },
        {
          text:"Business & Work",
          path:'business'
        },
        {
          text:"Athletics",
          path:'athletics'
        },
        {
          text:"Health & Wellness",
          path:'health'
        },
        {
          text:"Current Events",
          path:'events'
        },
        {
          text:"Arts & Culture",
          path:'culture'
        },
      ]
      const [ctgry, setCtgry] = useState(false)
      const sltCtgry=(catry)=>{
        setSelected(catry)
        setCtgry(false)
      }
  return (
    <>
    
    <div>
  <label id="listbox-label" className="block text-base font-medium leading-6 text-slate-500">Category</label>
  <div  className="relative mt-2">
    <button onClick={()=>setCtgry(!ctgry)} type="button" className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="listbox-label">
      <span className="flex items-center">
        {/* <img src={image.src} alt="" className="h-5 w-5 flex-shrink-0 rounded-full"/> */}
        <span className="ml-3 block truncate text-sm md:text-base">{selected===''?'Select category':selected}</span>
      </span>
      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
        <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
        </svg>
      </span>
    </button>

    {ctgry && <ul className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
      {
        category.map((ctg,index)=>{
            return(

      <li key={index} onClick={()=>sltCtgry(ctg.text)} className="text-gray-900 hover:bg-slate-100 relative cursor-default py-2 pl-3 pr-9" id="listbox-option-0">
        <div className="flex items-center">
          {/* <img src={image.src} alt="" className="h-5 w-5 flex-shrink-0 rounded-full"/> */}
      
          <span className="font-normal ml-3 block truncate">{ctg.text}</span>
        </div>

        {/* <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
        </span> */}
      </li>
            )
        })
      }

    </ul>}
  </div>
</div>

    
    </>
  )
}
