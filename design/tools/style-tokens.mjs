#!/usr/bin/env node
// STYLE-TOKEN GATE extractor: pulls computed style tokens from a live page.
// Usage: node style-tokens.mjs <url> [-o out.json]
import { createRequire } from 'module';
import { existsSync, readdirSync, writeFileSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';
import { pathToFileURL } from 'url';

const require = createRequire(import.meta.url);
const { chromium } = require('/Users/nowbookedmini/.local/lib/node_modules/@playwright/mcp/node_modules/playwright');

const BROWSERS_CACHE = join(homedir(), 'Library', 'Caches', 'ms-playwright');

// Prefer full Chrome for Testing over the headless shell (matches _lib/playwright-stealth.mjs).
function findInstalledChromium() {
  if (!existsSync(BROWSERS_CACHE)) return undefined;
  const fullDirs = readdirSync(BROWSERS_CACHE)
    .filter((d) => /^chromium-\d+$/.test(d))
    .sort()
    .reverse();
  for (const dir of fullDirs) {
    const appDir = join(BROWSERS_CACHE, dir, 'chrome-mac-arm64');
    if (!existsSync(appDir)) continue;
    for (const app of readdirSync(appDir).filter((a) => a.endsWith('.app'))) {
      const bin = join(appDir, app, 'Contents', 'MacOS', app.replace(/\.app$/, ''));
      if (existsSync(bin)) return bin;
    }
  }
  const shellDirs = readdirSync(BROWSERS_CACHE)
    .filter((d) => d.startsWith('chromium_headless_shell-'))
    .sort()
    .reverse();
  for (const dir of shellDirs) {
    const bin = join(BROWSERS_CACHE, dir, 'chrome-mac-arm64', 'headless_shell');
    if (existsSync(bin)) return bin;
  }
  return undefined;
}

export async function extractTokens(url) {
  const browser = await chromium.launch({
    headless: true,
    executablePath: findInstalledChromium(),
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
  await page.waitForTimeout(3000);
  const t = await page.evaluate(() => {
    const cs = (el) => (el ? getComputedStyle(el) : null);
    const pick = (s, keys) => {
      if (!s) return null;
      const o = {};
      for (const k of keys) o[k] = s[k];
      return o;
    };
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const body = document.body;
    const ctas = [...document.querySelectorAll('a,button')]
      .filter((e) => {
        const s = getComputedStyle(e);
        const r = e.getBoundingClientRect();
        return (
          r.width > 80 &&
          r.height > 34 &&
          s.backgroundColor !== 'rgba(0, 0, 0, 0)' &&
          e.innerText.trim().length > 2 &&
          e.innerText.trim().length < 40
        );
      })
      .slice(0, 6)
      .map((e) => ({
        text: e.innerText.trim().slice(0, 30),
        height: Math.round(e.getBoundingClientRect().height),
        ...pick(getComputedStyle(e), [
          'backgroundColor',
          'color',
          'borderRadius',
          'fontFamily',
          'fontSize',
          'fontWeight',
          'textTransform',
          'letterSpacing',
          'paddingLeft',
          'paddingTop',
          'boxShadow',
        ]),
      }));
    const sections = [...document.querySelectorAll('section, [class*=section], main > div')]
      .filter((e) => e.getBoundingClientRect().height > 250)
      .slice(0, 12)
      .map((e) => {
        const s = getComputedStyle(e);
        return { h: Math.round(e.getBoundingClientRect().height), bg: s.backgroundColor, pt: s.paddingTop };
      });
    return {
      url: location.href,
      bodyFont: cs(body).fontFamily,
      bodyColor: cs(body).color,
      bodyBg: cs(body).backgroundColor,
      h1: h1
        ? {
            text: h1.innerText.slice(0, 60),
            ...pick(cs(h1), ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing', 'color', 'textTransform']),
          }
        : null,
      h2: h2
        ? {
            text: h2.innerText.slice(0, 60),
            ...pick(cs(h2), ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing', 'color']),
          }
        : null,
      ctas,
      sections,
      linkCount: document.querySelectorAll('a').length,
      imgCount: document.querySelectorAll('img').length,
      extractedAt: new Date().toISOString(),
    };
  });
  await browser.close();
  return t;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [, , url, flag, out] = process.argv;
  if (!url) {
    console.error('Usage: node style-tokens.mjs <url> [-o out.json]');
    process.exit(2);
  }
  const t = await extractTokens(url);
  const json = JSON.stringify(t, null, 2);
  if (flag === '-o' && out) {
    writeFileSync(out, json);
    console.log('written ' + out);
  } else {
    console.log(json);
  }
}
