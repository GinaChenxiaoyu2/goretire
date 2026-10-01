import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (name) => readFile(path.join(root, name), "utf8");
const [html, css, js] = await Promise.all([read("index.html"), read("assets/site.css"), read("assets/site.js")]);

assert.match(html, /<title>一起提前退休/);
const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] || "";
assert.equal((main.match(/<section\b[^>]*class="[^"]*section[^"]*"[^>]*id=/g) || []).length, 4, "page should contain four top-level modules");
for (const id of ["home", "insight", "community", "mutual-aid"]) assert.match(html, new RegExp(`id="${id}"`));
assert.doesNotMatch(html, /10000<sup>|40<sup>|20<sup>/);
assert.doesNotMatch(html, /我们聚合真实信息、可靠观点与校友资源/);
assert.match(html, /class="site-header"[\s\S]*class="top-nav"/);
for (const navCopy of [
  'href="#home">Slogan',
  'href="#insight">内容观点',
  'href="#community">社群服务',
  'href="#mutual-aid">资源互助'
]) assert.ok(html.includes(navCopy), `missing navigation item: ${navCopy}`);
assert.match(html, /一起提前退休<\/strong><span>大厂社区<\/span>/);
assert.doesNotMatch(html, /·大厂社区/);
assert.doesNotMatch(html, /class="hero-hub"|class="hero-destinations"|class="brand-wordmark"/);
assert.doesNotMatch(html, /class="brand-mark"/);
assert.doesNotMatch(html, /互联网从业者的长期主义社区/);
assert.doesNotMatch(html, /RETIRE TOGETHER/);
assert.doesNotMatch(html, /<small>大厂服务<\/small>/);
assert.doesNotMatch(html, /社群内容/);
assert.match(html, /社群服务/);
assert.doesNotMatch(html, /href="#insight"><small>01|href="#community"><small>02|href="#mutual-aid"><small>03/);
assert.match(html, /href="https:\/\/beian\.miit\.gov\.cn\/"[\s\S]*浙ICP备2026071844号-1/);
assert.doesNotMatch(html, /href="#home">首页/);
for (const copy of [
  "致力于", "拉平信息差", "提升认知", "互助避坑", "善用金融工具", "一起提前退休", "探索更自由人生",
  "内容观点", "A股行情", "黄金行情", "港美股行情", "二手房价格推送",
  "房产拐点知识库", "AI 每日日报", "社群服务", "A股交流", "港美股交流",
  "银行咨询", "融资服务", "节税专区", "香港港险", "校友租房", "招聘内推",
  "香港身份 DIY", "别墅轰趴", "资源互助", "wx联系 <span class=\"contact-id\">antfin2018</span>"
]) assert.ok(html.includes(copy), `missing copy: ${copy}`);

assert.doesNotMatch(html, /登录|注册|验证码|password/i);
assert.doesNotMatch(html, /了解社群内容|了解社区|提供资源与合作|看看社群|FREE<br \/>LIFE|FIRE LIFE/);
assert.match(html, /GO<br \/>RETIRE/);
assert.match(html, /提升认知、<\/b>/);
assert.match(html, /headline-prefix">致力于<\/span><b>拉平信息差、<\/b><b>提升认知、<\/b>/);
assert.match(html, /<em>探索更自由人生<\/em>/);
assert.doesNotMatch(html, /提升认知，<\/b>|探索更自由人生。<\/em>/);
assert.match(html, /<div class="visual-core">\s*<strong>GO<br \/>RETIRE<\/strong>\s*<\/div>/);
assert.doesNotMatch(html, /CONTENT &amp; INSIGHT|COMMUNITY &amp; SERVICE|DAILY BRIEF|KNOWLEDGE BASE|RESOURCE COOPERATION|Connect · Share · Grow/);
assert.doesNotMatch(html, /阿里巴巴|腾讯|字节跳动|美团|京东|百度/);
assert.match(css, /--orange:\s*#ff6a00/);
assert.match(css, /\.site-header\s*\{[^}]*position:\s*sticky/);
assert.match(css, /@media \(max-width: 700px\)/);
assert.match(css, /prefers-reduced-motion/);
assert.match(js, /IntersectionObserver/);

console.log("community portal static checks passed");
