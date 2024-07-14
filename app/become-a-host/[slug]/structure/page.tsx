'use client'

import categoryData from "@/app/lib/categories"
import useStore from "@/app/lib/useStore"
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import React,{useState,useEffect} from 'react'
import uniqid from 'uniqid'


const page=()=> {
  const [selectedCategory,setCategory]=useState<string>()
  const router=useRouter();
  const {categories}=categoryData;
  const uniqidid=uniqid();
  const addProperty=useStore((state:any)=> state.addProperty);
  const property=useStore((state:any)=>state.property);
  useEffect(()=>{
    addProperty({category:selectedCategory})
},[selectedCategory])
  
  


  return (<><div className='flex flex-col gap-6 justify-center w-1/3 m-auto'>
  <div className='text-2xl font-bold'> Which of these best describe your Page ?</div>
  <div className='flex flex-wrap gap-3 '>
  {
    categories  &&  categories.map((item)=>{
      return (
        <div onClick={()=>setCategory(item.title)} key={Math.random()} className={`${selectedCategory===item.title &&'border-black'} flex  flex-col  p-4 text-muted-foreground  bg-white hover:border-black cursor-pointer border-solid border-[1px]  w-30 h-20 gap-2 rounded-xl`}>
          <Image width={30} height={30} src={item.image_url} alt='category-image'/>
          <span className='text-sm font-normal'>{item.title}</span>
           </div>
      )
    })
  }

</div>
</div>
<div className="fixed w-full border-solid border-t-4 p-6 bottom-0">
        <button onClick={()=>router.back()}> Back</button>
        <button onClick={()=>router.push(`/become-a-host/${property.PropertyID}/privacy-type`)} className="p-3 bg-gradient-to-tr text-white  from-pink-600 via-pink-700 to-pink-800 float-right font-bold ml-auto">Next</button>
      </div>

  </>
    
    
    
  )
}

export default page