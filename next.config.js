/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images:{
        remotePatterns:[
            {
            protocol:'https',
            hostname:"ordainit.com"
        },
     
    ]
},
compiler: {
    styledComponents: true,
  },
    eslint:{
        ignoreDuringBuilds:true
    }
  }

  module.exports = nextConfig