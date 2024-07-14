'use client';
import {useRouter} from 'next/navigation'
import uniqid from 'uniqid'
import { useEffect, useState } from 'react';

import useStore from "@/app/lib/useStore"

const PageComponent=()=>{
    
        
    const router=useRouter();
    const uniqidid=uniqid()
    const [selectedPrivacyType,setselectedPrivacyType]=useState<string>()
    const [guests,setGuests]=useState<number>(0);
    const [bedrooms,setBedrooms]=useState<number>(0);
    const [beds,setBeds]=useState<number>(0);
    const [bathrooms,setBathrooms]=useState<number>(0);
    const addProperty=useStore((state:any)=>state.addProperty);
    const property=useStore((state:any)=>state.property);
    useEffect(()=>{
           addProperty({
            guests
        })
    },[guests]);
    useEffect(()=>{
        
        addProperty({
            bedrooms
    })},[bedrooms]);
    useEffect(()=>{
        
        addProperty({
            beds
    })},[beds]);
    useEffect(()=>{
        
        addProperty({
            bathrooms
        })},[bathrooms]);
   

    return (

        <><div className='flex flex-col gap-6 justify-center w-1/3 m-auto'>
             <div   className='text-2xl font-bold '>Share some basic about your place</div>
            <div   className='text-slate-500'>You'll add more details later,such as bed types.</div>
        
            <div className='flex flex-col'>
              <div className='flex justify-between border-solid border-b-[1px] pt-4 pb-4'>
              <div>Guests</div>
              <div className='flex gap-4 '>
                    <div onClick={()=>setGuests(guests-1)} className=' cursor-pointer h-8 w-8 border-solid border-[1px] text-center rounded-full'>-</div>
                    <div >{guests>0?guests:0}</div>
                    <div onClick={()=>setGuests(guests+1)} className=' cursor-pointer h-8 w-8 border-solid border-[1px] text-center rounded-full'>+</div>
                    
              </div>

            </div>
            <div className='flex justify-between border-solid border-b-[1px] pt-4 pb-4'>
                <div>Bedrooms</div>
                <div className='flex gap-4'>
                    <div  onClick={()=>setBedrooms(bedrooms-1)} className='cursor-pointer h-8 w-8 border-solid border-[1px] text-center rounded-full'>-</div>
                    <div >{bedrooms>0?bedrooms:0}</div>
                    <div onClick={()=>setBedrooms(bedrooms+1)} className=' cursor-pointer h-8 w-8 border-solid border-[1px] text-center rounded-full'>+</div>
                    
                </div>

            
            </div>
            <div className='flex justify-between border-solid border-b-[1px] pt-4 pb-4'>
                <div>Beds</div>
                <div className='flex gap-4'>
                    <div onClick={()=>setBeds(beds-1)} className=' cursor-pointer h-8 w-8 border-solid border-[1px] text-center rounded-full'>-</div>
                    <div >{beds>0?beds:0}</div>
                    <div onClick={()=>setBeds(beds+1)} className=' cursor-pointer h-8 w-8 border-solid border-[1px] text-center rounded-full'>+</div>
                    
                </div>

            
            </div>
            <div className='flex justify-between border-solid border-b-[1px] pt-4 pb-4'>
                <div>Bathrooms</div>
                <div className='flex gap-4'>
                    <div onClick={()=>setBathrooms(bathrooms-1)} className='cursor-pointer h-8 w-8 border-solid border-[1px] text-center rounded-full'>-</div>
                    <div>{bathrooms>0?bathrooms:0}</div>
                    <div onClick={()=>setBathrooms(bathrooms+1)} className=' cursor-pointer marker:h-8 w-8 border-solid border-[1px] text-center rounded-full'>+</div>
                    
                </div>

            
            </div>

        
                
        

           </div>
       
    
        
        </div>
        

        
        
        
        <div className="fixed w-full border-solid border-t-4 p-6 bottom-0">
                <button onClick={()=>router.back()}> Back</button>
                <button onClick={()=>router.push(`/become-a-host/${property.PropertyID}/photos`)} className="p-3 bg-gradient-to-tr text-white  from-pink-600 via-pink-700 to-pink-800 float-right font-bold ml-auto">Next</button>
            </div>
        
        </>
        
            )
        }
        
    

export default PageComponent;