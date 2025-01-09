import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    domains: ['i.scdn.co', 'image-cdn-ak.spotifycdn.com', 'mosaic.scdn.co','image-cdn-fa.spotifycdn.com'], 
  },
};

export default nextConfig;