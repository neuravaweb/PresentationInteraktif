/** @type {import('next').NextConfig} */
const repo = "PresentationInteraktif";

const nextConfig = {
  reactStrictMode: true,
  // Configure Next.js for static export suitable for GitHub Pages
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
