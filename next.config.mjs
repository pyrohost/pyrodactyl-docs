import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'camo.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com'
      }
    ]
  },
};

export default withMDX(config);
