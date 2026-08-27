"use client";

/**
 * FootageScrubber
 *
 * Renders a stack of 64 WebP frames for one breakdown step.
 * Only the frame at `activeFrame` (0-based) is visible; all others are
 * opacity:0. Opacity is set inline (no CSS transition) for instant switching.
 *
 * Frame files live at: /breakdown/ro1100/{stepId}/f-001.webp ... f-064.webp
 */

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
  return (
    <div
      className="absolute inset-0"
      style={{ opacity: hidden ? 0 : 1 }}
      aria-hidden="true"
    >
      {Array.from({ length: frameCount }, (_, i) => {
        const num = String(i + 1).padStart(3, "0");
        return (
          <img
            key={i}
            src={`/breakdown/ro1100/${stepId}/f-${num}.webp`}
            alt=""
            aria-hidden="true"
            style={{ opacity: i === activeFrame ? 1 : 0 }}
            className="absolute inset-0 w-full h-full object-contain"
            /* First two frames load eagerly so the step starts without a blank
               flash; the rest defer until the browser is idle. */
            loading={i <= 1 ? "eager" : "lazy"}
            decoding="async"
          />
        );
      })}
    </div>
  );
}
