import type { NextConfig } from "next";
import { legacyRedirects } from "./src/lib/legacy-redirects";

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
      ...legacyRedirects(process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL ?? ""),
    ];
  },
};

export default nextConfig;
