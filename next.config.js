/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    deviceSizes: [320, 375, 420, 540, 600, 767, 1024, 1280, 1440, 1920],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
  api: {
    bodyParser: {
      sizeLimit: "50mb",
    },
  },
};

module.exports = nextConfig;
