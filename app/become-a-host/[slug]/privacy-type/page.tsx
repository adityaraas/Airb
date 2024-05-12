'use client'

import { useRouter } from "next/navigation"
import uniqid from 'uniqid'
import { useState } from "react"

const PageContent=()=>{
    const router=useRouter();
    const uniqidid=uniqid()
    const [selectedPrivacyType,setselectedPrivacyType]=useState<string>()
    return (

        <><div className='flex flex-col gap-6 justify-center w-1/3 m-auto'>
        <div   className='text-2xl font-bold '> Which of these best describe your Page ?</div>
        
        <div className='flex  gap-3 '>
            <div  onClick={()=>setselectedPrivacyType('room')} className=
            {`${selectedPrivacyType==="room" && 'border-black'}
             p-4 border-solid rounded-xl border-[1px] hover:border-black  w-full`} >
                <div className="font-bold">An entire place</div>
                <div className="text-muted-foreground">Guests have the whole place themselves.  </div>

            </div>
    
      

      </div>
      <div className='flex  gap-3 '>
            <div onClick={()=>setselectedPrivacyType('Guest')}  className={`${selectedPrivacyType==="Guest" && 'border-black'}
             p-4 border-solid rounded-xl border-[1px] hover:border-black  w-full`}>
                <div className="font-bold">A room </div>
                <div className="text-muted-foreground">Guests have their own room in a home,plus access to shred spaces  </div>

            </div>
    
      
      </div>
      <div className='flex  gap-3 '>
            <div  onClick={()=>setselectedPrivacyType('shared-room')} className={`${selectedPrivacyType==="shared room" && 'border-black'}
             p-4 border-solid rounded-xl border-[1px] hover:border-black  w-full`}>
                <div className="font-bold">A shared room</div>   
                <div className="text-muted-foreground">Guests have their own room in a home,plus access to shred spaces  </div>

            </div>

        </div>
        
    
      
      </div>
      
      <div className="fixed w-full border-solid border-t-4 p-6 bottom-0">
              <button onClick={()=>router.back()}> Back</button>
              <button onClick={()=>router.push(`/become-a-host/${uniqidid}/location`)} className="p-3 bg-gradient-to-tr text-white  from-pink-600 via-pink-700 to-pink-800 float-right font-bold ml-auto">Next</button>
            </div>
      
        </>

    )
}
export default PageContent;