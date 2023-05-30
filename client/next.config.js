/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      }
    ],
    domains: [
        "localhost"
    ]
  },
};

module.exports = nextConfig;
