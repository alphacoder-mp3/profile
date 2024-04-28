/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-atl3-2.cdninstagram.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

//https://scontent-atl3-2.cdninstagram.com/v/t51.2885-19/123098526_386615876036978_1838387674801656270_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=102&_nc_ohc=CCLL0KQgDOYAb7E3Cgs&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDl76Tc5E1g_bjblKGTa4PTriJLzKZULmyzVYwA-Q4tjQ&oe=66329CFA&_nc_sid=10d13b
