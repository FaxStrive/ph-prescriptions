# pH Prescription launch checklist

Last checked: 2026-10-18. Two things launch together:

- **The store**: Shopify store `tycebh-9q.myshopify.com` (store name "pH Prescription", owned by Leo).
  The finished design is the unpublished theme "ph-prescriptions-shopify/main", which syncs from
  the `main` branch of FaxStrive/ph-prescriptions-shopify. 40 products are loaded. The store
  is password protected until launch.
- **The website**: this repo, live on its preview address https://ph-prescriptions.vercel.app
  (Vercel project fax-strive/ph-prescriptions). phprescription.com still shows the old
  WordPress site until the domain is pointed here.

Order matters: the store must be able to take payment before its password comes off, and the
affiliate program must be moved before phprescription.com leaves WordPress (the affiliates'
login area, AffiliateWP, lives inside the WordPress site).

## Already done on our side

| Item | State |
|---|---|
| Store design | Finished, theme check 0 errors, the theme on the store matches `main` |
| Products | 40 products with prices, photos, SKUs and descriptions, handles equal to the website's product slugs |
| Website | 56 pages, every page, link and image returns 200, every page fits a 375 px phone screen |
| Buy Now | 40 Buy Now buttons on the website open the matching store product |
| Affiliate links | A visitor who lands with `?sca_ref=<code>` keeps that code on every Buy Now click into the store |
| Affiliate app | UpPromote is installed on the store |
| Old URLs | Redirects for every old WordPress page, blog post, product and product category are built into this site (`next.config.ts`), so old links keep working after the domain moves |
| Claims | Invented customer quotes removed, every claim checked against pH Prescription's own published material |

## 1. Leo (owner): only the owner can do these

| # | Step | Where | Time |
|---|---|---|---|
| L1 | Choose a Shopify plan (Basic is enough to start). The store pauses again if a trial ends with no plan. | Shopify admin, Settings, Plan | 5 min |
| L2 | Turn on payments: activate Shopify Payments with the business details, tax ID and the bank account payouts should go to. Shopify can take 1 to 2 business days to verify. | Settings, Payments | 15 to 20 min |
| L3 | Add Alison and LeAnn as staff so each has her own login (no shared passwords). | Settings, Users, Add staff | 5 min |
| L4 | Send the up-to-date affiliate list (names, emails, status, commission rate) so the affiliates can be moved into UpPromote. | Email to Tobias | 15 min |

## 2. LeAnn (shipping and taxes)

| # | Step | Where | Time |
|---|---|---|---|
| S1 | Shipping zones and rates. The store currently sells to the United States only. Products have no weights loaded, so flat rates (per order, or by product type, for example systems versus filters and parts) are simplest; whole home tanks may need freight or "call for shipping". | Settings, Shipping and delivery | 30 to 45 min |
| S2 | Sales tax: turn on collection for Florida and any other state where pH Prescription is registered to collect. All products are set as taxable. | Settings, Taxes and duties | 15 min |
| S3 | Confirm the store contact email (currently LeAnn's) and the order notification emails go to the right people. | Settings, Store details and Notifications | 5 min |

We can do S1 and S2 with LeAnn on a 30 minute screen share if she prefers.

## 3. Alison (content)

| # | Step | Where | Time |
|---|---|---|---|
| A1 | Review the website and the store and send one list of corrections: page, what is wrong, what it should say (or the right image). We apply it within 3 business days. | https://ph-prescriptions.vercel.app | 1 to 2 hours |
| A2 | UpPromote program details she and Leo decide: rates, coupon discount, payout methods, welcome text. | Email | 15 min |

## 4. Our side before launch day (Tobias, needs his Shopify login)

| # | Step | Who | Time |
|---|---|---|---|
| P1 | Correct three products in the store admin to match the website (see "Store product corrections" below). | Tobias | 10 min |
| P2 | Finish the UpPromote setup (welcome survey, cookie length, manual approval, payout methods, sign-up form) and import the affiliates from L4. | Tobias | 45 min |
| P3 | Place one real test order once payments and shipping are on, then refund it. | Tobias with LeAnn | 15 min |
| P4 | Optional: delete the leftover unpublished theme "pH design v5" (#163151151209). | Tobias | 1 min |

### Store product corrections (P1)

The website was corrected on 2026-10-18; the store still has the old values. Handles do not change,
so the Buy Now links keep working.

| Store handle | Field | Store now | Correct value (from pH Prescription's own listing) |
|---|---|---|---|
| best-whole-house-water-filtration-system | Price | $2,084.50 | **$8,003.60** |
| best-whole-house-water-filtration-system | Title | Best Whole House Water Filtration System | Total Home Premier with FREE WMS QuadVortex |
| alkaline-water-filtration | Title | Alkaline Water Filtration | Ultimate Purified Drinking System with Lead-Free Faucet |
| ultimate-purified-restructured-drinking-system-filter | Title | Ultimate PurifiedRestructured Drinking System Filter | Ultimate Purified Restructured Drinking System Filter |

The $2,084.50 price is a blocker: it is the value of the free QuadVortex add-on, not the price of
the system. Do not remove the store password until it is fixed.

## 5. Launch day

Do these in order. Total about 1 hour of work, plus DNS propagation (usually under an hour,
up to 48 hours).

| # | Step | Who | How | Time |
|---|---|---|---|---|
| D1 | Publish the theme | Tobias | Online Store, Themes, "ph-prescriptions-shopify/main", Publish | 2 min |
| D2 | Remove the store password | Tobias (or Leo) | Online Store, Preferences, Password protection off. Needs a paid plan (L1). | 1 min |
| D3 | Shop subdomain DNS | Whoever holds the GoDaddy login (Leo or his IT), or Tobias with delegate access | GoDaddy DNS for phprescription.com: add `CNAME shop -> shops.myshopify.com`. Change nothing else. Do NOT use GoDaddy's one-click "Connect to Shopify", it repoints the main domain. | 5 min |
| D4 | Connect the subdomain in Shopify | Tobias | Settings, Domains, Connect existing domain, `shop.phprescription.com`, then set it as primary. Shopify issues SSL automatically. | 10 min |
| D5 | Point the website's store links at the subdomain | Tobias | Vercel project fax-strive/ph-prescriptions, Environment Variables: `NEXT_PUBLIC_SHOPIFY_STORE_URL=https://shop.phprescription.com` (Production), then redeploy. This also updates the old product URL redirects. | 5 min |
| D6 | Add the main domain to the website | Tobias | Vercel project, Domains: add `phprescription.com` (primary) and `www.phprescription.com` (redirect to the apex). | 5 min |
| D7 | Point phprescription.com at the new site | GoDaddy login holder | GoDaddy DNS: apex `A @` to the address Vercel shows in D6 (normally 76.76.21.21), `www` CNAME to `cname.vercel-dns.com`. Leave MX, TXT and every email record untouched. **Only after the affiliates are moved (L4, P2).** | 10 min |
| D8 | Verify | Tobias | Site loads on phprescription.com with SSL; spot check old URLs (for example `/contact-us/`, `/product/6-phase-ultimate-finely-filtered-water-system/`, `/about-us/affiliate-program/`) land on the right new page or store product; Buy Now opens shop.phprescription.com; a referral link `?sca_ref=` reaches the store. | 15 min |
| D9 | Search | Tobias | Google Search Console: verify phprescription.com, submit `https://phprescription.com/sitemap.xml`. | 10 min |

## Decisions still open

- **Affiliate timing.** Moving phprescription.com off WordPress turns off the AffiliateWP area. Either
  the affiliates are moved into UpPromote first (L4, P2), or the old WordPress site stays reachable on
  a subdomain for a transition period (needs whoever hosts WordPress).
- **Selling outside the US.** The store sells to the US only today. Leo decides with shipping.
- **Old WooCommerce customer accounts** do not move automatically. Customers can be imported into
  Shopify by CSV if Leo wants them.
