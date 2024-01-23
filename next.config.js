/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    deviceSizes: [320, 375, 420, 540, 600, 767, 1024, 1280, 1440, 1920],
  },
};

module.exports = nextConfig;
