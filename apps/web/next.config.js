// https://github.com/contentlayerdev/contentlayer/issues/140.
// import { withContentlayer } from "next-contentlayer";
// To load an ES module, set "type": "module" in the package.json or use the .mjs extension. Otherwise use require() instead. Mind you, this is Lee Rob's, which uses require() instead of import: https://github.com/leerob/leerob.io/blob/main/next.config.js
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.callumflack.design",
        port: "",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/blog/:slug",
        destination: "/:slug",
        permanent: true,
      },
      {
        source: "/get-cleared",
        destination: "/cleared",
        permanent: true,
      },
      {
        source: "/the-first-principle-website",
        destination: "/the-first-principle",
        permanent: true,
      },
      {
        source: "/archive",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/shelf",
        destination: "/about",
        permanent: false,
      },
    ];
  },
  // Turn off webpack noise: https://github.com/vercel/next.js/discussions/30870#discussioncomment-1862620
  webpack: (config) => {
    config.infrastructureLogging = {
      level: "error",
    };
    // Important: return the modified config
    // https://nextjs.org/docs/messages/undefined-webpack-config
    return config;
  },
};

module.exports = withContentlayer(nextConfig);
