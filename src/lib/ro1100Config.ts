/**
 * Scroll-driven breakdown configuration for the pH-RO-1100.
 *
 * Eight steps: intro, six filter phases (micron, gac, cbc, membrane,
 * remineral, coconut), and outro.
 *
 * Card copy sourced verbatim from the published pH Prescriptions product page.
 * Nothing invented.
 *
 * Chain order: S0 → S1 → S2 → S3 → S4 → S5 → S6 → S7 → S0
 * Step IDs match the frame directories in public/breakdown/ro1100/<step-id>/
 */

export type BreakdownStep = {
  id: string;
  frameCount: number;
  label: string;
  description: string;
  chips: readonly string[];
  /** When true, no content card is rendered for this step. */
  contentless?: boolean;
};

export type BreakdownConfig = {
  slug: string;
  steps: readonly BreakdownStep[];
};

export const ro1100Config: BreakdownConfig = {
  slug: "pH-RO-1100",
  steps: [
    {
      id: "intro",
      frameCount: 64,
      label: "Inside the pH-RO-1100",
      description:
        "Six phases, 3-gallon tank, dedicated faucet. Every drop doctor-recommended.",
      chips: ["6-Stage RO", "3-Gal Tank", "Lead-Free Faucet"],
    },
    {
      id: "micron",
      frameCount: 64,
      label: "Micron Filtration",
      description:
        "Removes extra fine sand, dirt, silt, rust, and scale particles before they reach the membrane.",
      chips: ["Sediment", "Rust", "Scale", "Cartridge 1"],
    },
    {
      id: "gac",
      frameCount: 64,
      label: "pH GAC",
      description:
        "Reduces tastes, odors, and chlorine from drinking water.",
      chips: ["Chlorine", "Taste & Odor", "GAC", "Cartridge 2"],
    },
    {
      id: "cbc",
      frameCount: 64,
      label: "CBC-10 Carbon",
      description:
        "Reduces fine sediment, up to 99% of chlorine and protozoan cysts.",
      chips: ["99% Chlorine", "Cysts", "Carbon Block", "Cartridge 3"],
    },
    {
      id: "membrane",
      frameCount: 64,
      label: "Membrane pH-RO 75 GPD",
      description:
        "Reverse osmosis at a 1:1 waste-to-product ratio — the most efficient on the market.",
      chips: ["Reverse Osmosis", "75 GPD", "1:1 Ratio", "Cartridge 4"],
    },
    {
      id: "remineral",
      frameCount: 64,
      label: "Remineralization",
      description:
        "Alkaline enhancement, hydrogen generation, and mineral replacement with magnesium.",
      chips: ["Alkaline", "Hydrogen", "Magnesium", "Cartridge 5"],
    },
    {
      id: "coconut",
      frameCount: 64,
      label: "Coconut Carbon",
      description:
        "Polishes water and removes residual contaminants for a perfectly clean finish.",
      chips: ["Polish", "Coconut Shell", "Post-Filter", "Cartridge 6"],
    },
    {
      id: "outro",
      frameCount: 64,
      label: "Finely filtered, re-mineralized, hydrogen-infused",
      description:
        "The pH-RO-1100 — doctor-recommended water for your home.",
      chips: ["pH-RO-1100", "6-Stage", "Doctor Recommended"],
    },
  ],
};
