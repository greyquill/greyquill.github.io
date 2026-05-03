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
};

export default nextConfig;
