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
      // /clarity-advantage retired September 2026. Its deck duplicated the
      // homepage; its newsletter and book card now live on /thinking, which
      // is the single Process page.
      {
        source: "/clarity-advantage",
        destination: "/thinking",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
