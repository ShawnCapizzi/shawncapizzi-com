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
      // /card is the URL printed in the QR code on the business card
      // (October 2026). It lands on /how-i-help with ?src=card so scans are
      // separable in analytics. Not permanent on purpose: a 307 is never
      // cached by browsers, so the destination can change without a reprint.
      {
        source: "/card",
        destination: "/how-i-help?src=card",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
