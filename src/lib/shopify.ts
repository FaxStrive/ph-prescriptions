/**
 * Phase 1 Shopify integration: an env driven link out to the store product page.
 *
 * Set NEXT_PUBLIC_SHOPIFY_STORE_URL (for example https://shop.phprescription.com) to
 * turn the "Buy Now" links on. While the variable is unset, productShopUrl returns
 * null and every page renders exactly as it did before, with the consultation CTAs
 * only.
 *
 * Phase 2 (future): the Shopify Storefront API for live pricing, inventory, and a
 * real cart. Nothing here reads product data from Shopify yet.
 */
export const SHOPIFY_STORE_URL =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL?.replace(/\/$/, "") ?? "";

/**
 * Builds the Shopify product page URL for a product handle (the product slug).
 * Returns null when the store URL env var is unset, so callers can fall back to
 * the existing consultation CTA.
 */
export function productShopUrl(handle: string): string | null {
  if (!SHOPIFY_STORE_URL || !handle) return null;
  return `${SHOPIFY_STORE_URL}/products/${handle}`;
}
