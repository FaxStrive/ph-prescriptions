"use client";

/**
 * FootageScrubber
 *
 * Canvas-based frame scrubber. Frames decode into a module-level cache and
 * the canvas paints the best available frame:
 *   exact frame -> nearest decoded frame in the step -> last painted bitmap.
 * The canvas is NEVER cleared without something drawable, so neither fast
 * scrubbing nor a chapter change can blank the stage (the old <img>-stack
 * approach rewrote 64 srcs on every chapter swap, which blanked the visible
 * element until the new file decoded - the source of the flashing).
 *
 * Frame files live at: /breakdown/ro1100/{stepId}/f-001.webp ... f-064.webp
 */

import { useEffect, useRef } from "react";

interface FootageScrubberProps {
  stepId: string;
  frameCount: number;
  /** 0-based index of the frame to show. */
  activeFrame: number;
  /** Camera state from the parent: zoom plus pan offsets in [-1, 1]. */
  cameraRef?: React.RefObject<{ z: number; px: number; py: number }>;
  /** When true, render nothing and just warm the frame cache. */
  hidden?: boolean;
}

type CacheEntry = { img: HTMLImageElement; ready: boolean };

const frameCache = new Map<string, CacheEntry>();

function frameSrc(stepId: string, i: number) {
  return `/breakdown/ro1100/${stepId}/f-${String(i + 1).padStart(3, "0")}.webp`;
}

function ensureFrame(stepId: string, i: number, onReady?: () => void): CacheEntry {
  const key = `${stepId}/${i}`;
  let entry = frameCache.get(key);
  if (!entry) {
    const img = new Image();
    img.decoding = "async";
    entry = { img, ready: false };
    frameCache.set(key, entry);
    const done = () => {
      entry!.ready = true;
      onReady?.();
    };
    img.src = frameSrc(stepId, i);
    if (typeof img.decode === "function") {
      img.decode().then(done, done);
    } else {
      img.onload = done;
      img.onerror = done;
    }
  } else if (!entry.ready && onReady) {
    const img = entry.img;
    if (typeof img.decode === "function") {
      img.decode().then(onReady, onReady);
    }
  }
  return entry;
}

function warmStep(stepId: string, frameCount: number) {
  for (let i = 0; i < frameCount; i++) ensureFrame(stepId, i);
}

export function FootageScrubber({
  stepId,
  frameCount,
  activeFrame,
  cameraRef,
  hidden = false,
}: FootageScrubberProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastPaintedRef = useRef<HTMLImageElement | null>(null);
  // Tracks the latest requested frame so a late decode never paints a stale one.
  const wantRef = useRef({ stepId, activeFrame });

  useEffect(() => {
    wantRef.current = { stepId, activeFrame };

    if (hidden) {
      warmStep(stepId, frameCount);
      return;
    }

    const paint = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const want = wantRef.current;

      // Best available: exact frame, else nearest decoded frame in the step.
      let pick: HTMLImageElement | null = null;
      const exact = frameCache.get(`${want.stepId}/${want.activeFrame}`);
      if (exact?.ready) {
        pick = exact.img;
      } else {
        for (let d = 1; d < frameCount && !pick; d++) {
          const lo = frameCache.get(`${want.stepId}/${want.activeFrame - d}`);
          if (lo?.ready) { pick = lo.img; break; }
          const hi = frameCache.get(`${want.stepId}/${want.activeFrame + d}`);
          if (hi?.ready) { pick = hi.img; break; }
        }
      }
      if (!pick) pick = lastPaintedRef.current;
      if (!pick) return; // nothing drawable yet - leave whatever is on canvas

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth, h = canvas.clientHeight;
      if (w === 0 || h === 0) return;
      if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
      }
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      // Camera crop baked into the single draw: the parent interpolates a
      // directed pan/zoom path per chapter. One high-quality resample
      // straight to the backing store - no CSS transform on top.
      const cam = cameraRef?.current ?? { z: 1.02, px: 0, py: 0 };
      const sw = pick.naturalWidth / cam.z;
      const sh = pick.naturalHeight / cam.z;
      const slackX = (pick.naturalWidth - sw) / 2;
      const slackY = (pick.naturalHeight - sh) / 2;
      const sx = slackX * (1 + Math.max(-1, Math.min(1, cam.px)));
      const sy = slackY * (1 + Math.max(-1, Math.min(1, cam.py)));
      ctx.drawImage(pick, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
      lastPaintedRef.current = pick;
    };

    // Load the active frame (repaint when it decodes), pull neighbors ahead,
    // and warm the whole step in the background.
    ensureFrame(stepId, activeFrame, paint);
    for (let d = 1; d <= 6; d++) {
      if (activeFrame + d < frameCount) ensureFrame(stepId, activeFrame + d, undefined);
      if (activeFrame - d >= 0) ensureFrame(stepId, activeFrame - d, undefined);
    }
    warmStep(stepId, frameCount);
    paint();

    const onResize = () => paint();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [stepId, frameCount, activeFrame, hidden]);

  if (hidden) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
