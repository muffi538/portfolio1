import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  /* /contact was replaced by /cool-stuff; a bookmark or an old link still
     lands rather than hitting the 404. */
  async redirects() {
    return [{ source: "/contact", destination: "/cool-stuff", permanent: true }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
