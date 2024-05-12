'use client'
import ImageUploading from 'react-images-uploading'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
const PageComponents=()=>{
    const [images, setImages] =useState([]);
    const router =useRouter();
    
    
    const maxNumber = 69;
  
    const onChange = (imageList:any, addUpdateIndex:number) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
   
  
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
                            className=' flex bg-green-500 h-64 font-bold justify-center items-center'>     
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
                    </div>)} 

export default PageComponents;
