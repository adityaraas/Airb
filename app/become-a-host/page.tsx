'use client';
import { useRouter } from "next/navigation";
import uniqid from 'uniqid';
import SvgComponent from "../components/AppLogo";

const PageComponent=()=>{
  const router=useRouter();
  const uniqidid= uniqid();
    return(
        <><div className="flex max-w-screen-2xl justify-between items-center h-screen m-auto  mt-[-80px]">
        <div className="flex max-w-md text-5xl font-bold pl-11">It's easy to get started on Airbnb</div>
      
        <div className="flex flex-col">
          <div className="flex max-w-screen-md gap-6 h-32 mb-4">
            <div className="text-2xl font-bold">1</div>
            <div className="flex flex-col gap-3">
              <div className="text-2xl font-bold">Tell us about yourself</div>
              <div className="text-2xl text-muted-foreground">Share some basic info, such as where it is and how many guests can stay</div>
            </div>
          </div>
          <div className="flex max-w-screen-md gap-6 h-32 mb-4">
            <div className="text-2xl font-bold">2</div>
            <div className="flex flex-col gap-3">
              <div className="text-2xl font-bold">Another step</div>
              <div className="text-2xl text-muted-foreground">Describe the next action needed</div>
            </div>
          </div>
          <div className="flex max-w-screen-md gap-6 h-32 mb-4">
            <div className="text-2xl font-bold">3</div>
            <div className="flex flex-col gap-3">
              <div className="text-2xl font-bold">Final step</div>
              <div className="text-2xl text-muted-foreground">Last instructions before completion</div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed w-full border-solid border-t-4 p-6 bottom-0">
        <button onClick={()=>router.push(`/become-a-host/${uniqidid}/structure`)} className="p-3 bg-gradient-to-tr text-white font-bold from-pink-600 via-pink-700 to-pink-800 float-right">Get started</button>
      </div>
      
            
            
            </>
    )
}
export default PageComponent;