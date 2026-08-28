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
      {
        source: "/medical",
        destination: "/solutions/medical",
        permanent: true,
      },
      {
        source: "/solutions/pool-marine",
        destination: "/pool",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
