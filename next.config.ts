import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The old site used /project/<slug>. Google still holds at least one
      // of those URLs, and it has been returning 404. Send the known one to
      // its closest current case study and everything else under /project/
      // to the work index.
      {
        source: "/project/healthcare-brands",
        destination: "/work/pharma-design-systems",
        permanent: true,
      },
      {
        source: "/project/:path*",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
