import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages. Produces an `out/` folder of HTML.
  output: 'export',
  // Each route gets its own folder + index.html so URLs like /about-us/
  // resolve under GitHub Pages' directory-style serving.
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: __dirname,
  images: {
    // GitHub Pages has no Image Optimization runtime; ship originals.
    unoptimized: true,
  },
  webpack: (config) => {
    // transformers.js ships both a Node and a browser backend. Without this
    // the bundler follows the Node path and the build fails on native deps
    // that have no business in a static export.
    config.resolve.alias = {
      ...config.resolve.alias,
      sharp$: false,
      'onnxruntime-node$': false,
    };
    return config;
  },
};

export default nextConfig;
