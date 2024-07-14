'use client'
import { useRouter } from "next/navigation"
import uniqid from 'uniqid'
import { useState } from "react"
import useStore from "@/app/lib/useStore"
import { useEffect } from "react"

const PageComponent=()=>{
    const router=useRouter();
    const uniqidid=uniqid()
    const [title,setTitle]=useState<string>()
    const addProperty=useStore((state:any)=>state.addProperty);
    useEffect(()=>{
      if (title){
        addProperty({Title:title}
          
        )

      }
      

    },[title])

return (
    <><div className='flex flex-col gap-6 justify-center w-1/3 m-auto'>
  <div className='text-2xl font-bold'> Now! Let's give your cabin a title</div>
  <div className='text-muted-foreground'> Short titles work best. Have fun with it – you can always change it later.
  </div>
  <div className='flex'>
    <input  className='p-3 border-solid border-[1px] h-8 w-96 border-black'type="text" name="title" onChange={(event)=>setTitle(event.target.value)}>
    </input>


</div>
</div>
<div className="fixed w-full font-bold border-solid border-t-4 p-6 bottom-0">
        <button onClick={()=>router.back()}> Back</button>
        <button onClick={()=>router.push(`/become-a-host/${uniqidid}/description`)} className="p-3 bg-gradient-to-tr text-white  from-pink-600 via-pink-700 to-pink-800 float-right font-bold ml-auto">Next</button>
      </div>

  </>)
}
export default PageComponent