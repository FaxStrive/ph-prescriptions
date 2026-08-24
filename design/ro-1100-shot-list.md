# pH Prescription pH-RO-1100: scroll-driven breakdown, Flow generation pack

Purpose: a scroll-driven tour of the Ultimate Purified Drinking System, the same
format shipped on myaquaotter.com. This product is an excellent fit: its six phases
are published verbatim on the product page, so every card quotes a real claim.

Machinery: SystemBreakdown + FootageScrubber, scroll-scrubbed WebP frame sequences.
See `../aqua-otter/design/systems-flow-shot-lists.md` for the pipeline and the
final extraction recipe. The Aqua Otter reverse-osmosis chain (6 chapters, shipped
2026-08-24) is the closest precedent and its camera language should be reused.

## Product (pH-RO-1100, $1,747)

Six filter cartridges in a compact block, 18" tall x 12" long x 6" deep, plus a
separate 3-gallon holding tank (18" tall x 10.5" wide) and a dedicated lead-free
faucet (chrome, brushed nickel or bronze upgrades available).

Reference photos to upload into Flow (fetch before generating):
- https://phprescription.com/wp-content/uploads/2022/05/pH-RO-1100-close-up-v1.jpg
- https://phprescription.com/wp-content/uploads/2025/02/pH-RO-1100-thumb-v2.png
- https://phprescription.com/wp-content/uploads/2022/04/ph-RO-1100-installed-300x300.jpg

## Global rules

Identical to the Aqua Otter white chain: PURE WHITE seamless studio ground with a
soft contact shadow; one continuous camera move per clip, no cuts; chapters chain
so the last frame of each clip IS the first frame of the next; each clip is a Veo
3.1 Lite FIRST/LAST-frame interpolation, 8s, holds at both ends; no text or labels
in the video. Extraction recipe unchanged:

    ffmpeg -vf "select='not(mod(n\,3))',crop=iw-8:ih-8:4:4,colorlevels=rimax=0.94:gimax=0.94:bimax=0.94,scale=-2:864" -vsync vfr -q:v 2
    then cwebp -q 82 -m 6

Frames land in `public/breakdown/ro1100/<step-id>/f-001.webp .. f-064.webp`.

Do NOT invent internals. Where a phase's physical medium is not shown in the
reference photo, render the cartridge shell translucent and show only what the
published phase name states.

## Stills (Nano Banana 2, free - approve each)

- S0 assembled: the six-cartridge block with the holding tank and faucet, three-quarter, white sweep
- S1 exploded: the six cartridges separated in phase order left to right, caps floating, tank and faucet still
- S2 micron macro: cartridge 1, translucent shell, dense white spun sediment core
- S3 GAC macro: cartridge 2, loose black granular activated carbon
- S4 CBC macro: cartridge 3, solid black carbon block, face-on texture
- S5 membrane macro: cartridge 4, cream spiral-wound membrane element
- S6 remineral macro: cartridge 5, pale mineral media with fine hydrogen bubbles rising
- S7 coconut macro: cartridge 6, coarse coconut shell carbon granules

## Clips (8 chapters, 80 credits)

- C1 intro:      S0 -> S1
- C2 micron:     S1 -> S2
- C3 gac:        S2 -> S3
- C4 cbc:        S3 -> S4
- C5 membrane:   S4 -> S5
- C6 remineral:  S5 -> S6
- C7 coconut:    S6 -> S7
- C8 outro:      S7 -> S0 (reassembly pull-back)

## Card copy (quoted from the published product page)

- intro:     "Inside the pH-RO-1100" / six phases, 3-gallon tank, dedicated faucet
- micron:    "Micron Filtration" / "removes extra fine sand, dirt, silt, rust, and scale particles"
- gac:       "pH GAC" / reduces tastes, odors, and chlorine from drinking water
- cbc:       "CBC-10 Carbon" / "reduces fine sediment, up to 99% of chlorine and protozoan cysts"
- membrane:  "Membrane pH-RO 75 GPD" / reverse osmosis at a 1:1 waste-to-product ratio
- remineral: "Remineralization" / alkaline enhancement, hydrogen generation, mineral replacement with magnesium
- coconut:   "Coconut Carbon" / polishes water and removes residual contaminants
- outro:     "Finely filtered, re-mineralized, hydrogen-infused"

The technology page's four stages (Finely Filtered / Alkaline Restructured /
Re-Mineralized / Hydrogen Infused) are the brand-level story and may be used for
section intro copy, but the chapter cards should use the six phases above, which
are the physical cartridges the footage actually shows.
