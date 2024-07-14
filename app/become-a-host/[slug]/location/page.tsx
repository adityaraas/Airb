'use client'

import { useRouter } from "next/navigation";
import MapComponent from "@/app/components/Map";
import uniqid from 'uniqid'
import dynamic from "next/dynamic";
import React from 'react'
import useStore from "@/app/lib/useStore";

const PageComponent=()=>{
    const router=useRouter();
    const uniqidid=uniqid();
    const property=useStore((state:any)=>state.property);
   // const MapComponent=React.lazy(()=>import('@/app/components/Map'))
    const MapComponent = dynamic(() => import('@/app/components/Map'), { ssr: false })
    return (
        <><div className='flex flex-col gap-6 justify-center w-1/3 m-auto'>
        <div   className='text-2xl font-bold '> Is the pin at the right spot?</div>
        <div   className='text-xl '> your address is only shared with guest they ve</div>
        <div>
         <MapComponent/>
        </div>
    
      </div>
      
      <div className="fixed w-full border-solid border-t-4 p-6 bottom-0">
              <button onClick={()=>router.back()}> Back</button>
              <button onClick={()=>router.push(`/become-a-host/${property.PropertyID}/floor-plan`)} className="p-3 bg-gradient-to-tr text-white  from-pink-600 via-pink-700 to-pink-800 float-right font-bold ml-auto">Next</button>
            </div>
      
        </>

    )
}
export default PageComponent;