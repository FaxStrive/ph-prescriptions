"use client";

/**
 * SystemBreakdown
 *
 * Config-driven, scroll-driven frame-scrubbing section for the pH-RO-1100.
 * Ported from District Water bottles breakdown - adapted for ro1100Config.
 *
 * Scroll architecture:
 *   section height = steps.length * 200vh
 *   sticky inner viewport = 100vh
 *   scroll fraction 0..1 maps linearly across all steps
 *   each step gets 1/N of the scroll travel
 *   within a step, fraction maps to frame 0..(frameCount-1)
 *
 * Content overlay:
 *   "contentless" steps show no card -
 *   the previous content step's card remains visible during the transition.
 *   A CSS key change on the card div re-triggers the rise animation.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import type { BreakdownConfig } from "@/lib/ro1100Config";
import { FootageScrubber } from "./FootageScrubber";

interface SystemBreakdownProps {
  config: BreakdownConfig;
}

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

/**
 * Directed camera path per chapter, interpolated across the chapter's scroll
 * travel and baked into the canvas draw. The generated clips for the middle
 * chapters barely move (static product, subtle wobble), so the player
 * supplies the cinematography: push-ins, pull-backs and lateral drifts.
 * x/y are pan offsets in [-1, 1] of the crop slack at the current zoom.
 */
type CameraPath = { z0: number; z1: number; x0: number; x1: number; y0: number; y1: number };

// Chapters with regenerated camera-move footage (membrane, remineral,
// coconut, cbc) get only a whisper of drift - their clips carry the motion.
// gac still runs the old wobble footage, so it keeps the strong player move.
const CAMERA_PATHS: Record<string, CameraPath> = {
  intro: { z0: 1.02, z1: 1.1, x0: 0, x1: 0, y0: 0, y1: 0 },
  micron: { z0: 1.12, z1: 1.26, x0: -0.55, x1: 0.45, y0: 0.1, y1: -0.1 },
  gac: { z0: 1.26, z1: 1.1, x0: 0.5, x1: -0.5, y0: -0.1, y1: 0.1 },
  cbc: { z0: 1.03, z1: 1.1, x0: -0.15, x1: 0.15, y0: 0, y1: 0.05 },
  membrane: { z0: 1.02, z1: 1.08, x0: 0.08, x1: -0.08, y0: 0, y1: 0.04 },
  remineral: { z0: 1.08, z1: 1.02, x0: -0.12, x1: 0.12, y0: 0.05, y1: 0 },
  coconut: { z0: 1.02, z1: 1.09, x0: 0.12, x1: -0.12, y0: -0.04, y1: 0.02 },
  outro: { z0: 1.1, z1: 1.02, x0: 0, x1: 0, y0: 0, y1: 0 },
};

const DEFAULT_PATH: CameraPath = { z0: 1.05, z1: 1.18, x0: -0.3, x1: 0.3, y0: 0, y1: 0 };

function easeInOut(t: number) {
  return t * t * (3 - 2 * t);
}

export function SystemBreakdown({ config }: SystemBreakdownProps) {
  const { steps } = config;
  const N = steps.length;

  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef({ z: 1.02, px: 0, py: 0 });
  const reduceMotionRef = useRef(false);
  const rafRef = useRef<number>(0);

  // Refs track current values without triggering renders
  const stepIdxRef = useRef(0);
  const frameIdxRef = useRef(0);
  const contentStepIdxRef = useRef(0);

  // State drives the render
  const [stepIdx, setStepIdx] = useState(0);
  const [frameIdx, setFrameIdx] = useState(0);
  const [contentStepIdx, setContentStepIdx] = useState(0);

  const onScroll = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = section.offsetHeight;
      const vh = window.innerHeight;

      const raw = (window.scrollY - sectionTop) / (sectionHeight - vh);
      const fraction = clamp(raw, 0, 1);

      const stepProgress = fraction * N;
      const newStepIdx = clamp(Math.floor(stepProgress), 0, N - 1);
      const frameProgress = stepProgress - newStepIdx;
      const step = steps[newStepIdx];
      if (!step) return;
      const frameCount = step.frameCount;
      const newFrameIdx = clamp(
        Math.round(frameProgress * (frameCount - 1)),
        0,
        frameCount - 1,
      );

      // Interpolate this chapter's camera path across its scroll travel.
      if (reduceMotionRef.current) {
        cameraRef.current = { z: 1.02, px: 0, py: 0 };
      } else {
        const path = CAMERA_PATHS[step.id] ?? DEFAULT_PATH;
        const t = easeInOut(clamp(frameProgress, 0, 1));
        cameraRef.current = {
          z: path.z0 + (path.z1 - path.z0) * t,
          px: path.x0 + (path.x1 - path.x0) * t,
          py: path.y0 + (path.y1 - path.y0) * t,
        };
      }

      let newContentStepIdx = contentStepIdxRef.current;
      if (!step.contentless) {
        newContentStepIdx = newStepIdx;
      }

      if (
        newStepIdx !== stepIdxRef.current ||
        newFrameIdx !== frameIdxRef.current
      ) {
        stepIdxRef.current = newStepIdx;
        frameIdxRef.current = newFrameIdx;
        setStepIdx(newStepIdx);
        setFrameIdx(newFrameIdx);
      }

      if (newContentStepIdx !== contentStepIdxRef.current) {
        contentStepIdxRef.current = newContentStepIdx;
        setContentStepIdx(newContentStepIdx);
      }
    });
  }, [N, steps]);

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [onScroll]);

  const currentStep = steps[stepIdx]!;
  const contentStep = steps[contentStepIdx]!;

  const nextStepIdx = Math.min(stepIdx + 1, N - 1);
  const nextStep = steps[nextStepIdx]!;
  const shouldPreload = nextStepIdx !== stepIdx;

  const dotSteps = steps.filter((s) => !s.contentless);

  return (
    <section
      ref={sectionRef}
      style={{ height: `${N * 200}vh` }}
      className="relative"
      aria-label="pH-RO-1100 filtration system breakdown"
    >
      <div
        className="sticky top-0 overflow-hidden"
        style={{ height: "100vh", background: "#fff" }}
      >
        {/* ── Frame canvas ── */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            ref={stageRef}
            className="relative mx-auto"
            style={{
              // Stage matches the footage ratio exactly (frames are 1544x864),
              // so the edge feather below always lands on the frame's own
              // borders regardless of viewport shape. Width is capped so the
              // box never exceeds the 100vh sticky viewport.
              aspectRatio: "1544 / 864",
              width: "min(100%, 175vh, 100rem)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 9%, black 78%, transparent 96%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 9%, black 78%, transparent 96%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          >
            <FootageScrubber
              stepId={currentStep.id}
              frameCount={currentStep.frameCount}
              activeFrame={frameIdx}
              cameraRef={cameraRef}
            />
            {shouldPreload && (
              <FootageScrubber
                key={`preload-${nextStep.id}`}
                stepId={nextStep.id}
                frameCount={nextStep.frameCount}
                activeFrame={0}
                hidden
              />
            )}
          </div>
        </div>

        {/* ── Edge gradient scrim ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_40%,black_100%)]"
          style={{ background: "#fff" }}
        />

        {/* ── Content overlay ── */}
        {!contentStep.contentless && (
          <div
            key={`content-${contentStepIdx}`}
            className="absolute inset-x-0 bottom-0 pointer-events-none px-6 pb-10 md:pb-16 max-w-2xl"
            style={{ left: "clamp(1.5rem, 5vw, 4rem)" }}
          >
            <div
              style={{
                animation: "phrise 0.5s cubic-bezier(0.16,1,0.3,1) both",
              }}
            >
              {/* Eyebrow */}
              <p
                style={{
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-teal)",
                  marginBottom: "0.5rem",
                }}
              >
                pH-RO-1100
              </p>
              {/* Heading */}
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  marginBottom: "0.5rem",
                  lineHeight: 1.1,
                }}
                aria-live="polite"
              >
                {contentStep.label}
              </h2>
              {/* Description */}
              {contentStep.description && (
                <p
                  style={{
                    color: "var(--color-ink-soft)",
                    fontSize: "0.9375rem",
                    marginBottom: "1.25rem",
                    maxWidth: "28rem",
                    lineHeight: 1.6,
                  }}
                >
                  {contentStep.description}
                </p>
              )}
              {/* Chips */}
              {contentStep.chips.length > 0 && (
                <ul
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                  role="list"
                >
                  {contentStep.chips.map((chip) => (
                    <li
                      key={chip}
                      style={{
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "var(--color-ink)",
                        border: "1px solid var(--color-border-strong)",
                        background: "rgba(255,255,255,0.85)",
                      }}
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {/* ── Step dots (right rail) ── */}
        <div
          className="absolute right-[3vw] top-1/2 -translate-y-1/2 flex flex-col gap-3 pointer-events-none"
          aria-hidden="true"
        >
          {dotSteps.map((step) => {
            const isActive =
              !contentStep.contentless && contentStep.id === step.id;
            return (
              <div
                key={step.id}
                className="rounded-full transition-all duration-300"
                style={{
                  width: isActive ? 8 : 5,
                  height: isActive ? 8 : 5,
                  background: isActive
                    ? "var(--color-navy)"
                    : "var(--color-border-strong)",
                }}
              />
            );
          })}
        </div>

        {/* ── Scroll hint ── */}
        <p
          className="absolute bottom-[2vh] left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none select-none"
          style={{
            fontSize: "0.625rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-ink-mute)",
          }}
          aria-hidden="true"
        >
          {stepIdx < N - 1 ? "Scroll to explore" : "Scroll to continue"}
        </p>
      </div>

      <style>{`
        @keyframes phrise {
          from { opacity: 0; transform: translateY(1.5rem); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
