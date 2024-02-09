/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    appDir: true,
  },
  images: {
    domains: ["cdn.dummyjson.com"],
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/carts",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
