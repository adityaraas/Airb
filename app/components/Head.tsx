'use client';
import { useEffect } from "react";
import SvgComponent from "./AppLogo";
import {Filter, Globe,Menu,Search} from 'lucide-react'
import AvatarComponent from "./Avatat";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Login from "./Login";
import { Card,CardContent } from "@/components/ui/card";
import categoryData from "../lib/categories";
import { Item } from "@radix-ui/react-dropdown-menu";
import Link  from "next/link"
import { useRouter } from "next/navigation";





const Head=({categories}:any)=>{
   const router=useRouter();
    useEffect(()=>{
      const element=document.querySelector('.parent-container');
      function handleScroll(){
        const scrollPosition=window.scrollY;
        if(scrollPosition>3){
          element?.classList.add('show-item');

        }else{
          element?.classList.remove("show-item");
        }
        }
        window.addEventListener("scroll",handleScroll);
        return()=>{
          window.removeEventListener('scroll',handleScroll);
        }

    })
    return (
      <div >
      <div className="main-header  pl-20 pr-20  border-solid border-b-[1px]">
        <div className="flex justify-between items-center h-20 gap-9 ">
          <SvgComponent/>
          <div className="flex gap-6 primary-header">
            <div className="font-medium">Stays</div>
            <div className="text-slate-500">Experiences</div>
            <div className="text-slate-500">Online Experiences</div>
          </div>
          <div className="flex gap-4 items-center">
            <div  onClick={()=> router.push('/become-a-host')} className="font-medium cursor-pointer">Airbnb your home</div>
            <div><Globe/></div>
            <Login/>

            
          </div>
        </div>
    
        <div className="primary-header flex w-full justify-center">
          <div className=" flex w-fit justify-between border-solid border-[1px] rounded-full min-w-[60%] gap-7 pl-6 pt-2 pb-2  ">
            <div>
              <div className="font-medium">Where </div>
              <div className="text-slate-500">Search destination</div>
            </div>
            <div>
              <div className="font-medium">Check in</div>
              <div className="text-slate-500">Add dates </div>
            </div>
            <div>
              <div className="font-medium">Check out </div>
              <div className="text-slate-500">Add dates </div>
            </div>
            <div>
              <div className="font-medium">Who</div>
              <div className="text-slate-500"> Add guests </div>
            </div>
            <div>
              <div className="bg-red-500 rounded-full h-12 w-12 mr-3 flex text-white items-center justify-center color">
                <Search/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className=" secondary-header flex w-fit justify-between border-solid border-[1px] rounded-full  gap-7 pl-6 pt-2 pb-2 hover:shadow-lg ">
            <div className="hover:shadow-lg font-medium">Anywhere </div>
            <div className="font-medium">Any week </div>
            <div>Add guests</div>
            <div className= "bg-red-500 rounded-full h-9 w-9 mr-3 flex text-white items-center justify-center color">
            <Search/>
            </div>
          </div>
        </div>
        <div className='h-20 filter-header pl-20 pr-20'>
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {Array.from( categoryData.categories).map((item:any, index) => (
          <CarouselItem key={index} className="pl-1 basis-auto">
            <div className="p-1">
              <Card className="shadow-none border-0">
                <Link href={{href:"/", query:{filter:item.title}}}>
                <CardContent  className=" flex flex-col aspect-square items-center justify-center p-4">
                  <img height={15} width={30} src={item.image_url} alt="cate-image" />
                  <span className="text-sm font-semibold">
                    {item.title}
                  </span>
                </CardContent>

                </Link>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

        </div>
      </div>
      
    </div>
    

    );
}
export default Head;