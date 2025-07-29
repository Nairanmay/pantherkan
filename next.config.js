/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // This will force Next.js to treat this as local code and avoid the export error
    transpilePackages: ['@splinetool/react-spline'],
  },
};

export default nextConfig;
