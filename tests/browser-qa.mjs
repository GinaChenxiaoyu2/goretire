import { chromium } from "/Users/zhuanz/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "tests", "screenshots");
await mkdir(output, { recursive: true });

const browser = await chromium.launch({ headless: true, executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const errors = [];
page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
page.on("pageerror", (error) => errors.push(error.message));

await page.goto("http://127.0.0.1:8774/", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.screenshot({ path: path.join(output, "desktop.png"), fullPage: true });
const desktop = await page.evaluate(() => ({
  title: document.title,
  width: document.documentElement.scrollWidth,
  viewport: window.innerWidth,
  topLevelSections: [...document.querySelectorAll("main > section")].map((section) => section.id),
  hasLoginCopy: /登录|注册|验证码/.test(document.body.innerText)
}));

await page.evaluate(() => window.scrollTo(0, document.querySelector("#community").offsetTop));
await page.waitForTimeout(250);
const stickyHeaderTop = await page.locator(".site-header").evaluate((header) => header.getBoundingClientRect().top);

await page.setViewportSize({ width: 390, height: 844 });
await page.reload({ waitUntil: "networkidle" });
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(800);
await page.screenshot({ path: path.join(output, "mobile.png"), fullPage: true });
const mobile = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, viewport: window.innerWidth, heroVisible: document.querySelector("#home").getBoundingClientRect().height > 0 }));

if (desktop.width > desktop.viewport) throw new Error("desktop horizontal overflow");
if (Math.abs(stickyHeaderTop) > 1) throw new Error("header should remain fixed while scrolling");
if (mobile.width > mobile.viewport) throw new Error("mobile horizontal overflow");
if (desktop.topLevelSections.join(",") !== "home,insight,community,mutual-aid") throw new Error("page should have exactly four top-level modules");
if (desktop.hasLoginCopy) throw new Error("login copy should not appear");
if (errors.length) throw new Error("browser errors: " + errors.join(" | "));

console.log(JSON.stringify({ desktop, mobile, stickyHeaderTop, errors }, null, 2));
await browser.close();
