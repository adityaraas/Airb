/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'a0.muscache.com',
                port:'',
            },
            {
                protocol:'https',
                hostname:'lh3.googleusercontent.com',
                port:'',
            }
        ],
    },
};

module.exports = nextConfig;
