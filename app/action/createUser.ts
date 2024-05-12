'use server';
import prisma from "../lib/dbConnect";
async function createUser(userData:any){
    try{
        const userInfo=await prisma.User.create({
            
            data:userData
        })
        return {messahe:"successfully saved",
            data
        }

    }catch(err :any){
        return {
            message:"failed to create user",
            err
        }


}}
export default createUser;
