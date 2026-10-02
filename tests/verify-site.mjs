import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (name) => readFile(path.join(root, name), "utf8");
const [html, aliHtml, app, styles, entry] = await Promise.all([
  read("dist/index.html"),
  read("dist/ali/index.html"),
  read("src/App.tsx"),
  read("assets/site.scss"),
  read("src/main.tsx")
]);

for (const page of [html, aliHtml]) {
  assert.match(page, /<title>一起提前退休/);
  assert.match(page, /id="root"/);
  assert.match(page, /main\.[\w-]+\.js/);
  assert.match(page, /main\.[\w-]+\.css/);
}

assert.match(html, /src="assets\/main\.[\w-]+\.js"/);
assert.match(aliHtml, /src="\.\.\/assets\/main\.[\w-]+\.js"/);
assert.match(html, /href="assets\/main\.[\w-]+\.css"/);
assert.match(aliHtml, /href="\.\.\/assets\/main\.[\w-]+\.css"/);
assert.match(entry, /site\.scss/);
for (const id of ["home", "insight", "community", "mutual-aid"]) {
  assert.ok(app.includes(`id="${id}"`), `missing section: ${id}`);
}

for (const copy of [
  "致力于", "拉平信息差、", "提升认知、", "互助避坑、", "善用金融工具，", "探索更自由人生",
  "内容观点", "A股行情", "黄金行情", "港美股行情", "二手房价格推送",
  "房产拐点知识库", "AI 每日日报", "离职员工 SOP", "社群服务", "A股交流", "港美股交流",
  "银行咨询", "融资服务", "节税专区", "香港港险", "校友租房", "招聘内推", "香港身份 DIY",
  "别墅轰趴", "资源互助", "antfin2018"
]) assert.ok(app.includes(copy), `missing copy: ${copy}`);

assert.match(app, /isAliPage\s*\?\s*\[\.\.\.baseKnowledge/);
assert.match(app, /IntersectionObserver/);
assert.match(app, /prefers-reduced-motion/);
assert.ok(app.includes('isAliPage ? "../wxpic.png" : "wxpic.png"'));
assert.match(styles, /--orange:\s*#ff6a00/);
assert.match(styles, /\.site-header\s*\{[^}]*position:\s*sticky/);
assert.match(styles, /@media \(max-width: 700px\)/);
assert.match(styles, /prefers-reduced-motion/);

console.log("React static build checks passed");
