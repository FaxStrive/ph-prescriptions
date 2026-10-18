import type { NextConfig } from "next";

/**
 * Redirects from the old WordPress site (phprescription.com) to the new site, so every
 * bookmarked, emailed or search-indexed URL still lands somewhere useful once the domain
 * points here. Source list: the old site's own WordPress and WooCommerce APIs, read
 * 2026-10-18 (53 pages, 27 posts, 47 products, 16 product categories).
 *
 * Old product URLs go to the same product in the Shopify store (matched by SKU) when the
 * store URL is set, otherwise to /products. Next.js strips the trailing slash WordPress
 * used before these rules run, so sources are written without it.
 */
type Redirect = { source: string; destination: string; permanent: boolean };

const PAGES: [string, string][] = [
  ["/about-us/the-ph-prescription-point-of-difference", "/faq/point-of-difference"],
  ["/about-us/community-care", "/about/community"],
  ["/about-us/affiliate-program", "/affiliate"],
  ["/about-us/leo-szymborski-the-journey-of-water-doctors-recommend", "/about/leo"],
  ["/about-us", "/about"],
  ["/affiliate-area/:path*", "/affiliate"],
  ["/affiliate-area", "/affiliate"],
  ["/aquapellis-shower-systems/:path*", "/aquapellis"],
  ["/aquapellis-shower-systems", "/aquapellis"],
  ["/aquapellis-shower-systems-temp", "/aquapellis"],
  ["/dermashower", "/residential/showers"],
  ["/h2o-health-2-overcome", "/book"],
  ["/total-home-premier-filtration-info", "/residential/total-home"],
  ["/purwatair", "/technology"],
  ["/hydration-science-and-technology", "/technology"],
  ["/is-your-tap-water-safe", "/resources"],
  ["/whats-in-your-tap-water", "/resources"],
  ["/restaurant-hospitality", "/solutions/restaurant-hospitality"],
  ["/spa-resort-restaurant", "/solutions/restaurant-hospitality"],
  ["/spa-resort-restaurant-landing-page", "/solutions/restaurant-hospitality"],
  ["/medical-landing-page", "/solutions/medical"],
  ["/commercial", "/business"],
  ["/commercial-landing-page", "/business"],
  ["/residential-landing-page", "/residential"],
  ["/marine-landing-page", "/marine"],
  ["/pool-landing-page", "/pool"],
  ["/what-the-experts-say-about-ph-prescription", "/experts"],
  ["/faq/glossary", "/faq"],
  ["/contact-us", "/contact"],
  ["/privacy-policy", "/privacy"],
  ["/terms-and-conditions", "/terms"],
  ["/undergoing-maintenance", "/"],
  ["/promo-staging", "/"],
  ["/page-not-found", "/"],
];

// Old blog posts lived at the site root. The six video testimonial and review posts
// have no blog page here; their videos are on /resources.
const POSTS: [string, string][] = [
  ["/watch-the-podcast-to-learn-why-a-well-known-athlete-chose-aquapellis-to-aid-in-his-health-and-recovery", "/blog/watch-the-podcast-to-learn-why-a-well-known-athlete-chose-aquapellis-to-aid-in-his-health-and-recovery"],
  ["/a-deep-dive-into-tap-water-filtering-out-toxins-and-replacing-with-positive-elements", "/blog/a-deep-dive-into-tap-water-filtering-out-toxins-and-replacing-with-positive-elements"],
  ["/clean-isnt-enough-the-science-behind-water-that-actually-heals-the-body", "/blog/clean-isnt-enough-the-science-behind-water-that-actually-heals-the-body"],
  ["/how-to-remove-harmful-toxins-in-water", "/blog/how-to-remove-harmful-toxins-in-water"],
  ["/environmental-impact-on-our-water-what-are-we-really-exposed-to", "/blog/environmental-impact-on-our-water-what-are-we-really-exposed-to"],
  ["/the-east-palestine-train-disasters-effect-on-water", "/blog/the-east-palestine-train-disasters-effect-on-water"],
  ["/molecular-weight-explained", "/blog/molecular-weight-explained"],
  ["/why-do-i-need-a-drinking-system-if-i-have-a-whole-house-water-filtration-system", "/blog/why-do-i-need-a-drinking-system-if-i-have-a-whole-house-water-filtration-system"],
  ["/the-importance-of-total-home-water-filtration", "/blog/the-importance-of-total-home-water-filtration"],
  ["/the-new-ph-prescription-quad-vortex-water-filtration-system", "/blog/the-new-ph-prescription-quad-vortex-water-filtration-system"],
  ["/ph-prescription-healthy-water-is-clean-water", "/blog/ph-prescription-healthy-water-is-clean-water"],
  ["/how-ph-prescription-was-created", "/blog/how-ph-prescription-was-created"],
  ["/alkaline-water-and-stomach-acid-by-dr-jerry-tennant-md-mdh-psc-d", "/blog/alkaline-water-and-stomach-acid-by-dr-jerry-tennant-md-mdh-psc-d"],
  ["/ph-prescription-research-links", "/blog/ph-prescription-research-links"],
  ["/dr-nathan-bryant-best-whole-house-water-filter-on-the-market-ph-prescription", "/blog/dr-nathan-bryant-best-whole-house-water-filter-on-the-market-ph-prescription"],
  ["/alkaline-water-filter-system-reviews-ph-prescription-water-filters", "/resources"],
  ["/arlo-guthrie-testimonial-alkaline-home-water-systems-by-ph-prescription", "/resources"],
  ["/alkaline-home-water-systems-ph-prescription-reviews", "/resources"],
  ["/best-alkaline-water-filter-system-reviews", "/resources"],
  ["/ph-prescription-structured-alkaline-water-filters-and-whole-house-water-filtration-systems", "/resources"],
  ["/ph-prescription-alkaline-water-testimonial-erin-sharoni", "/resources"],
  ["/alkaline-water-filter-system-reviews-josh-turner", "/resources"],
  ["/alkaline-water-filter-system-whole-home-water-filtration-system-part-1-of-4", "/blog/alkaline-water-filter-system-whole-home-water-filtration-system-part-1-of-4"],
  ["/alkaline-water-filter-system-whole-home-water-filtration-system-part-2-of-4", "/blog/alkaline-water-filter-system-whole-home-water-filtration-system-part-2-of-4"],
  ["/alkaline-water-filter-system-whole-home-water-filtration-system-part-3-of-4", "/blog/alkaline-water-filter-system-whole-home-water-filtration-system-part-3-of-4"],
  ["/alkaline-water-filter-system-whole-home-water-filtration-system-part-4-of-4", "/blog/alkaline-water-filter-system-whole-home-water-filtration-system-part-4-of-4"],
  ["/alkaline-home-water-filter-system-alkaline-water-benefits", "/blog/alkaline-home-water-filter-system-alkaline-water-benefits"],
];

const CATEGORIES: [string, string][] = [
  ["/product-category/residential", "/residential"],
  ["/product-category/business", "/business"],
  ["/product-category/coolers", "/business/coolers"],
  ["/product-category/alkaline-drinking", "/residential/drinking-systems"],
  ["/product-category/total-home", "/residential/total-home"],
  ["/product-category/shower-systems", "/residential/showers"],
  ["/product-category/nutraceuticals", "/nutraceuticals"],
  ["/product-category/medical", "/solutions/medical"],
  ["/product-category/hospitality", "/solutions/restaurant-hospitality"],
];

// Old WooCommerce product slug to Shopify product handle (null: not sold in the store).
const PRODUCTS: [string, string | null][] = [
  ["premium-hydration-station", "premium-hydration-station"],
  ["total-home-charger-uv-water-disinfection-system", "total-home-charger-uv-water-disinfection-system"],
  ["total-home-premier", "total-home-premier-plus"],
  ["n-o-beetz-nitric-oxide-infusion-sticks", "no-beetz-nitric-oxide-infusion-sticks"],
  ["n101-nitric-oxide-lozenges", "n101-nitric-oxide-lozenges"],
  ["pneuma-genesis-hdo-warm-cold-soaking-tub", null],
  ["pneuma-genesis-hdo-warm-recovery-soaking-tub", null],
  ["total-home-uv-waterdisinfection-systemtransformer-replacement", "total-home-uv-viqua-transformer-replacement"],
  ["total-home-uv-water-disinfection-system-quartz-sleeve-replacement", "total-home-uv-viqua-quartz-sleeve-replacement"],
  ["total-home-uv-water-disinfection-systemlamp-replacement", "total-home-uv-viqua-lamp-replacement"],
  ["polaris-uv-transformer-replacement", "drinking-system-polaris-uv-transformer-replacement"],
  ["polaris-uv-lamp-replacement", "drinking-system-polaris-uv-lamp-replacement"],
  ["new-hydro-clean-shower-filter", "hydro-clean-shower-filter"],
  ["new-hydro-clean-handheld-shower", "hydro-clean-handheld-shower"],
  ["polaris-uv-quartz-sleeve-replacement", "drinking-system-polaris-uv-quartz-sleeve-replacement"],
  ["total-home-premier-with-quad-vortex", "best-whole-house-water-filtration-system"],
  ["compact-dual-filtration-system", "compact-dual-filtration-system"],
  ["premium-alkaline-water-filtration-system-lead-free-faucet", "alkaline-water-filtration"],
  ["total-home-toxin-and-water-hardness-reduction-system", "total-home-toxin-and-water-hardness-reduction-system"],
  ["total-home-chelating-water-filtration-system", "total-home-toxin-reducer-filters-vocs"],
  ["water-cooler", null],
  ["lead-free-countertop-faucet-specialty", "lead-free-countertop-faucet-contemporary-copper"],
  ["lead-free-countertop-faucet-contemporary", "lead-free-countertop-faucet-contemporary"],
  ["lead-free-countertop-faucet-elegant", "lead-free-countertop-faucet-elegant"],
  ["taste-and-odor-filter-replacement-6", "taste-and-odor-filter-replacement-6"],
  ["lead-free-countertop-faucet", null],
  ["alkaline-filter-triple", "alkaline-triple-filter-replacement-5"],
  ["ph-water-testing-portable-meter", "ph-water-testing-portable-meter"],
  ["flojet-bottled-water-pump", "flojet-bottled-water-pump"],
  ["water-filtration-with-uv-sterilization", "anti-microbial-filtration-with-uv-sterilization"],
  ["orp-water-test-orp-meter", "orp-water-test-meter"],
  ["ultimate-pure-water-replacement-membrane", "ultimate-water-purification-membrane-replacement"],
  ["6-phase-ultimate-finely-filtered-water-system-taste-and-odor-filter-replacement", "ultimate-purified-restructured-drinking-system-filter"],
  ["6-phase-ultimate-finely-filtered-water-system-replacement-filter", "ultimate-purified-multi-phase-drinking-system-filter"],
  ["6-phase-ultimate-finely-filtered-water-system", "ultimate-purified-drinking-system"],
  ["polaris-disinfection-system", "polaris-disinfection-system"],
  ["5-phase-clean-water-system", "compact-drinking-system"],
  ["total-home-chelating-plus-water-filter-system", "total-home-toxin-reducer-plus"],
  ["total-home-water-treatment-system", "total-home-water-treatment-system"],
  ["total-home-wms-vortex-plus", "total-home-wms-quadvortex-plus"],
  ["total-home-wms-vortex", "total-home-wms-quadvortex-system"],
  ["total-home-supreme-restructured-water-system", "total-home-grande"],
  ["total-home-enhanced-restructured-water-system", "total-home-premier"],
  ["total-home-essential-restructured-water-system", "total-home-optimum-restructured-water-system"],
];

const PRODUCT_PAGES: [string, string][] = [
  ["/product/marine", "/marine"],
  ["/product/pool", "/pool"],
  ["/product/md-drinking-water", "/solutions/medical"],
];

function legacyRedirects(storeUrl: string): Redirect[] {
  const store = storeUrl.replace(/\/$/, "");
  const toStore = (path: string, fallback: string) => (store ? `${store}${path}` : fallback);
  const pairs: [string, string][] = [
    ...PAGES,
    ...POSTS,
    ...CATEGORIES,
    ["/product-category/:path*", "/products"],
    ...PRODUCT_PAGES,
    ...PRODUCTS.map(([slug, handle]): [string, string] => [
      `/product/${slug}`,
      handle ? toStore(`/products/${handle}`, "/products") : "/products",
    ]),
    ["/product/:path*", "/products"],
    ["/shop", toStore("", "/products")],
    ["/cart", toStore("/cart", "/products")],
    ["/checkout", toStore("/cart", "/products")],
    ["/my-account", toStore("/account", "/contact")],
    ["/store-account", toStore("/account", "/contact")],
    ["/feed", "/blog"],
  ];
  return pairs.map(([source, destination]) => ({ source, destination, permanent: true }));
}

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
