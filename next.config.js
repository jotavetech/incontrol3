/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

const nextConfig = {
  ...withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
  }),
};

module.exports = nextConfig;
