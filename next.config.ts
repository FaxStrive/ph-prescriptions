import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/h2o-health",
        destination: "/book",
        permanent: true,
      },
      {
        source: "/about/doctors",
        destination: "/experts",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
