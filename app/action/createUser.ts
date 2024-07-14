'use server';
import prisma from "../lib/dbConnect";
async function createUser(userData:any){
    try{
        const userInfo=await prisma.user.create({
            
            data:userData
        })
        return {message:"successfully saved",
            data
        }

    }catch(err :any){
        return {
            message:"failed to create user",
            err
        }


}}
export default createUser;
