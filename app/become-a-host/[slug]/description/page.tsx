'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import useStore from "@/app/lib/useStore"

const PageComponent=()=>{
    const router=useRouter();
    const [desc,setDescription]=useState<string>();
    const addProperty=useStore((state:any)=>state.addProperty);
    const property=useStore((state:any)=>state.property);
    
    useEffect(()=>{
      if (desc){
        addProperty({description:desc}
          
        )

      }
      

    },[desc])

return (
    <><div className='flex flex-col gap-6 justify-center w-1/3 m-auto'>
  <div className='text-2xl font-bold'>Create your description</div>
  <div className='text-muted-foreground'>
     Share what makes your place special..
  </div>
  <div className='flex'>
    <input 
     className='p-3 border-solid border-[1px] w-96 h-8  border-black'type="text" name="title" onChange={(event)=>setDescription(event.target.value)}>
    </input>


</div>
</div>
<div className="fixed w-full border-solid border-t-4 p-6 bottom-0">
        <button onClick={()=>router.back()}> Back</button>
        <button onClick={()=>router.push(`/become-a-host/${property.PropertyID}/price`)} className="p-3 bg-gradient-to-tr text-white  from-pink-600 via-pink-700 to-pink-800 float-right font-bold ml-auto">Next</button>
      </div>

  </>)
}
export default PageComponent