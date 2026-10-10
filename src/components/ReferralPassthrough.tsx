"use client";

import { useEffect } from "react";
import { SHOPIFY_STORE_URL } from "@/lib/shopify";

/**
 * Keeps affiliate credit when a referred visitor lands on this site first.
 *
 * UpPromote (the store's affiliate app) tracks referrals with a `sca_ref` query
 * parameter on store URLs. If a visitor arrives here with `?sca_ref=...`, the code is
 * remembered in this browser and added to any link into the store when it is clicked,
 * so the store's UpPromote script still sees it. Renders nothing.
 */
const PARAM = "sca_ref";
const STORAGE_KEY = "ph_sca_ref";

function readStoredRef(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export default function ReferralPassthrough() {
  useEffect(() => {
    if (!SHOPIFY_STORE_URL) return;

    const incoming = new URLSearchParams(window.location.search).get(PARAM);
    if (incoming) {
      try {
        window.localStorage.setItem(STORAGE_KEY, incoming);
      } catch {
        // Storage blocked (private mode): the code still rides along on this page view.
      }
    }

    const addRef = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor || !anchor.href.startsWith(SHOPIFY_STORE_URL)) return;
      const ref = incoming || readStoredRef();
      if (!ref) return;
      const url = new URL(anchor.href);
      if (url.searchParams.has(PARAM)) return;
      url.searchParams.set(PARAM, ref);
      anchor.href = url.toString();
    };

    // Capture phase, so the href is updated before the browser follows the link.
    document.addEventListener("click", addRef, true);
    document.addEventListener("auxclick", addRef, true);
    return () => {
      document.removeEventListener("click", addRef, true);
      document.removeEventListener("auxclick", addRef, true);
    };
  }, []);

  return null;
}
