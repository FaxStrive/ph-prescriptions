"use client";

/**
 * FootageScrubber
 *
 * Renders a stack of 64 WebP frames for one breakdown step.
 * The frame at `activeFrame` paints on top; the previously shown frame stays
 * visible underneath it, so a frame that has not finished decoding never
 * leaves a blank hole (frames are opaque white-ground images, so the stack
 * is seamless). Opacity is set inline (no CSS transition) for instant
 * switching.
 *
 * Frame files live at: /breakdown/ro1100/{stepId}/f-001.webp ... f-064.webp
 */

import { useRef } from "react";

interface FootageScrubberProps {
  stepId: string;
  frameCount: number;
  /** 0-based index of the frame to show. */
  activeFrame: number;
  /** When true, the whole scrubber is invisible (used for preloading). */
  hidden?: boolean;
}

export function FootageScrubber({
  stepId,
  frameCount,
  activeFrame,
  hidden = false,
}: FootageScrubberProps) {
  // The frame shown on the previous render sticks around underneath the
  // active frame, covering the decode gap when activeFrame moves fast.
  const prevFrameRef = useRef(activeFrame);
  const prevFrame = prevFrameRef.current;
  if (prevFrame !== activeFrame) {
    // Deliberately updated during render: we want the value from the last
    // committed render to survive exactly one render as the underlay.
    prevFrameRef.current = activeFrame;
  }

  return (
    <div
      className="absolute inset-0"
      style={{ opacity: hidden ? 0 : 1 }}
      aria-hidden="true"
    >
      {Array.from({ length: frameCount }, (_, i) => {
        const isActive = i === activeFrame;
        const isPrev = i === prevFrame && !isActive;
        return (
          <img
            key={i}
            src={`/breakdown/ro1100/${stepId}/f-${String(i + 1).padStart(3, "0")}.webp`}
            alt=""
            aria-hidden="true"
            style={{
              opacity: isActive || isPrev ? 1 : 0,
              zIndex: isActive ? 2 : isPrev ? 1 : 0,
            }}
            className="absolute inset-0 w-full h-full object-contain"
            /* Eager: every frame of the mounted step is needed within one
               scroll gesture; lazy-loading them is what caused blank frames
               mid-scrub. Each webp is small and the next step preloads in a
               hidden scrubber already. */
            loading="eager"
            decoding="async"
          />
        );
      })}
    </div>
  );
}
