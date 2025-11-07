/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: "C:\\Users\\Moi\\GIP-team2", // Use absolute path with escaped backslashes
  },
};

export default nextConfig;
