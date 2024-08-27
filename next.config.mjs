/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Path for uploading images from the server
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lzrigvjyzeceqljesjvc.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
};

export default nextConfig;
