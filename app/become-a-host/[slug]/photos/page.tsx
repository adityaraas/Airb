'use client'
import ImageUploading from 'react-images-uploading'
import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';
import useStore from '@/app/lib/useStore';
const PageComponents=()=>{
    const [images, setImages] =useState([]);
    const router =useRouter();
    const addProperty=useStore((state:any)=>state.addProperty)
    const property=useStore((state:any)=>state.property);
    
    
    
    const maxNumber = 69;
  
    const onChange = (imageList:any, addUpdateIndex?:number[]) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
    useEffect(()=>{
        if (images){
            //console.log("images",images)
            const imageData=images.map((image:any)=>{
                return image.data_url
            })
            addProperty({
                images: imageData

        })

        }
        
    },[images])
   
  
    return ( <div className="flex justify-center m-auto max-w-md">
           <div className='flex flex-col gap-5'>
            <div className='text-2xl  font-bold'>Add some photos of your property </div>
            <div className='text-slate-500 text-lg'>You'll need to add photos of your property </div>
            <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
        >
            {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
            }) => (
           
               
                <div className='flex flex-col gap-3'>
                    {
                        imageList.length===0?(<div  onClick={onImageUpload} 
                            className=' flex bg-green-500 h-64 font-bold justify-center items-center cursor-pointer'>     
                                Click or Drop here
                            </div>):<>
                            <div><img src={imageList[0]['data_url']} alt='primaryImage'/></div>
                            <div className='grid grid-cols-2 gap-3'
                            >
                                {
                                    imageList && imageList.length>0 && imageList.slice(1).map((image,index)=>(
                                        <div key={index} className='w-full'>
                                            <img src={image['data_url']} alt='secondaryImages'/>
                                            </div>
                                    ))
                                }
                            </div>
                            
                            </>}
                            </div>)}
                            </ImageUploading>
                    </div>
                    <div className="fixed w-full border-solid border-t-4 p-6 bottom-0">
              <button onClick={()=>router.back()}> Back</button>
              <button onClick={()=>router.push(`/become-a-host/${property.PropertyID}/title`)} className="p-3 bg-gradient-to-tr text-white  from-pink-600 via-pink-700 to-pink-800 float-right font-bold ml-auto">Next</button>
            </div> 
                    </div>)} 

export default PageComponents;
