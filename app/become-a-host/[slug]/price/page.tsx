'use client'
import { useRouter } from "next/navigation"
import uniqid from 'uniqid'
import { useEffect, useState } from "react"
import {getCountryData,getEmojiFlag,getCountryCode,getCountryDataList} from "countries-list"
import getSymbolFromCurrence from 'currency-symbol-map'
import useStore from "@/app/lib/useStore"
import saveYourAirbnb from '@/app/action/action'
const PageComponent=()=>{
    const router=useRouter();
    const uniqidid=uniqid()
    const [price,setPrice]=useState<Number>(0)
    const countrycode=getCountryCode("India")
    const countryData= getCountryData(countrycode as any)
    const currencySymbol=getSymbolFromCurrence(countryData.currency[0])
    const addProperty=useStore((state:any)=>state.addProperty);
    const property=useStore((state:any)=>state.property);
    useEffect(()=>{console.log("property",property)

    },[price]

    )
    
    useEffect(()=>{
      if (price){
        addProperty({priceInfo:{price,currencySymbol}}
          
        )

      }
      

    },[price])
    const plainProperty = JSON.parse(JSON.stringify({ ...property, priceInfo: { price, currencySymbol } }));
    
    const saveYourHome = async () => {
      
      await saveYourAirbnb(plainProperty);
      console.log("data", plainProperty);
      router.push('/');
  };
    
   

return (
    <><div className='flex flex-col gap-3 justify-center w-1/3 m-auto'>
  <div className='text-xl font-bold'>Now,set your price</div>
  <div className='text-slate-600'>you change it anytime
     
  </div>
  <div className='flex gap-2 items-baseline'>
    <div className="text-4xl font-bold">{currencySymbol}</div>
    <input 
     className='mt-3 text-4xl font-bold focus-visible-outline-0' placeholder="Please set the price" type="number" name="title" onChange={(event)=>setPrice(Number(event.target.value))}>
    </input>


</div>   
</div>
<div className="fixed w-full border-solid border-t-4 p-6 bottom-0">
        <button onClick={()=>router.back()}> Back</button>
        <button onClick={saveYourHome} className="p-3 bg-gradient-to-tr text-white  from-pink-600 via-pink-700 to-pink-800 float-right font-bold ml-auto">Save and Exit</button>
      </div>

  </>)
}
export default PageComponent