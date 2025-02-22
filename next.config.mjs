/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.bdstall.com'
            }
        ]
    }
};

export default nextConfig;
