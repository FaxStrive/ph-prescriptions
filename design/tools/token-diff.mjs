#!/usr/bin/env node
// STYLE-TOKEN GATE comparator: reference vs candidate. Exit 0 = PASS, 1 = FAIL.
// Usage: node token-diff.mjs <reference url|json> <candidate url|json> [-o verdict.json]
// A build MUST NOT ship while this exits 1 against its named reference.
import { readFileSync, writeFileSync } from 'fs';
import { pathToFileURL } from 'url';

function parseRgb(str) {
  const m = /rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)/.exec(str || '');
  return m ? { r: +m[1], g: +m[2], b: +m[3] } : null;
}

function toHsl({ r, g, b }) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  let h = 0, s = 0;
  if (d) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
  }
  return { h, s, l };
}

const SERIF_RX = /(playfair|georgia|garamond|times|instrument serif|dm serif|lora|merriweather|cormorant|caslon|freight|tiempos|source serif|pt serif|crimson|spectral|fraunces|literata|newsreader|domine|vollkorn|prata|marcellus|cardo|noto serif|roboto serif|ibm plex serif|young serif|baskerville|bodoni|didot|canela|ui-serif)/;

function typefaceClass(family) {
  const f = (family || '').toLowerCase();
  if (SERIF_RX.test(f)) return 'serif';
  const toks = f.split(',').map((t) => t.trim().replace(/["']/g, ''));
  if (toks.includes('serif') && !toks[0].includes('sans')) return 'serif';
  return 'sans';
}

function accentCta(ctas) {
  let best = null, bestScore = -1;
  for (const c of ctas || []) {
    const rgb = parseRgb(c.backgroundColor);
    if (!rgb) continue;
    const { s, l } = toHsl(rgb);
    const score = s * (l > 0.05 && l < 0.95 ? 1 : 0.2);
    if (score > bestScore) { bestScore = score; best = c; }
  }
  return best;
}

function radiusClass(br, height) {
  const v = parseFloat(br);
  if (isNaN(v)) return 'unknown';
  if (v >= 100) return 'pill';
  if (height && v >= height / 2 - 2) return 'pill';
  if (v >= 24) return 'pill';
  if (v >= 5) return 'rounded';
  return 'square';
}

function hueDelta(a, b) {
  const d = Math.abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
}

function diff(ref, cand) {
  const checks = [];
  const add = (name, pass, refVal, candVal, note) =>
    checks.push({ name, pass, reference: refVal, candidate: candVal, ...(note ? { note } : {}) });

  // 1. H1 typeface class (serif vs sans)
  const refClass = typefaceClass(ref.h1?.fontFamily);
  const candClass = typefaceClass(cand.h1?.fontFamily);
  add('h1-typeface-class', refClass === candClass, `${refClass} (${ref.h1?.fontFamily})`, `${candClass} (${cand.h1?.fontFamily})`);

  // 2. H1 weight within 100
  const rw = parseInt(ref.h1?.fontWeight) || 400;
  const cw = parseInt(cand.h1?.fontWeight) || 400;
  add('h1-weight', Math.abs(rw - cw) <= 100, rw, cw, 'max delta 100');

  // 3. H1 size within 25%
  const rs = parseFloat(ref.h1?.fontSize) || 0;
  const csz = parseFloat(cand.h1?.fontSize) || 0;
  const sizeOk = rs > 0 && csz > 0 && Math.abs(csz - rs) / rs <= 0.25;
  add('h1-size', sizeOk, ref.h1?.fontSize, cand.h1?.fontSize, 'max delta 25%');

  // 4. Accent hue within 30deg (lightness/sat compare for neutral accents)
  const rc = accentCta(ref.ctas);
  const cc = accentCta(cand.ctas);
  const rrgb = rc && parseRgb(rc.backgroundColor);
  const crgb = cc && parseRgb(cc.backgroundColor);
  if (rrgb && crgb) {
    const rh = toHsl(rrgb), ch = toHsl(crgb);
    let pass, note;
    if (rh.s < 0.12) {
      pass = Math.abs(rh.l - ch.l) <= 0.25 && Math.abs(rh.s - ch.s) <= 0.15;
      note = 'reference accent is neutral; compared lightness/saturation';
    } else {
      pass = hueDelta(rh.h, ch.h) <= 30;
      note = `hue delta ${hueDelta(rh.h, ch.h).toFixed(0)}deg, max 30`;
    }
    add('accent-hue', pass, `${rc.backgroundColor} (h${rh.h.toFixed(0)})`, `${cc.backgroundColor} (h${ch.h.toFixed(0)})`, note);
  } else {
    add('accent-hue', false, rc?.backgroundColor || 'none found', cc?.backgroundColor || 'none found', 'could not resolve accent CTA on one side');
  }

  // 5. CTA radius class (pill / rounded / square)
  const rrc = rc ? radiusClass(rc.borderRadius, rc.height) : 'unknown';
  const crc = cc ? radiusClass(cc.borderRadius, cc.height) : 'unknown';
  add('cta-radius-class', rrc === crc && rrc !== 'unknown', `${rrc} (${rc?.borderRadius})`, `${crc} (${cc?.borderRadius})`);

  // 6. CTA shadow presence
  const rShadow = !!(rc && rc.boxShadow && rc.boxShadow !== 'none');
  const cShadow = !!(cc && cc.boxShadow && cc.boxShadow !== 'none');
  add('cta-shadow-presence', rShadow === cShadow, rShadow ? rc.boxShadow : 'none', cShadow ? cc.boxShadow : 'none');

  return {
    pass: checks.every((c) => c.pass),
    failCount: checks.filter((c) => !c.pass).length,
    reference: { url: ref.url, h1Font: ref.h1?.fontFamily, h1Size: ref.h1?.fontSize, h1Weight: ref.h1?.fontWeight, accentBg: rc?.backgroundColor },
    candidate: { url: cand.url, h1Font: cand.h1?.fontFamily, h1Size: cand.h1?.fontSize, h1Weight: cand.h1?.fontWeight, accentBg: cc?.backgroundColor },
    checks,
    comparedAt: new Date().toISOString(),
  };
}

async function load(src) {
  if (/^https?:\/\//.test(src)) {
    const { extractTokens } = await import(new URL('./style-tokens.mjs', import.meta.url));
    return extractTokens(src);
  }
  return JSON.parse(readFileSync(src, 'utf8'));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [, , refSrc, candSrc, flag, out] = process.argv;
  if (!refSrc || !candSrc) {
    console.error('Usage: node token-diff.mjs <reference url|json> <candidate url|json> [-o verdict.json]');
    process.exit(2);
  }
  const ref = await load(refSrc);
  const cand = await load(candSrc);
  const verdict = diff(ref, cand);
  const json = JSON.stringify(verdict, null, 2);
  if (flag === '-o' && out) writeFileSync(out, json);
  console.log(json);
  process.exit(verdict.pass ? 0 : 1);
}
