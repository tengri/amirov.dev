/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'https://pub-dc1c1c24dc684523bd492c2269dd2a0e.r2.dev',
            port: '',
            pathname: '/**',
          },
        ],
      },
};


export default nextConfig;
