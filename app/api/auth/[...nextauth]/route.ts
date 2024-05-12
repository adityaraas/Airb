
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import createUser from '../../../action/createUser'


const providers = [
    GoogleProvider({
        clientId: '415394583508-i3e6bv3rh0ib09s0f2kcmoiojfdg399l.apps.googleusercontent.com',
        clientSecret: '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'
    }),

];

const handler = NextAuth({
    providers: providers,
    callbacks:{
        async signIn({user,account}:any){
            console.log("SignIn+++++",user,account);
            const {email,image,name}=user;
            const {provider,providerAccountId}=account;
            const userData={
                email :email,
                image: image,
                name:name,
                provider:provider,
                providerAccountId:providerAccountId
            }
            if (email){
                await createUser(userData);


            }
            return true
           
            },
          
        }
    });

export {handler as GET ,handler as POST} ;
