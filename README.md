# 一起提前退休

React + TypeScript + Ant Design + SCSS + Webpack 社区门户。页面组件位于 `src/`，原有样式迁入 `assets/site.scss`，静态内容数据保留在 `assets/content-data.js`。

## 本地开发

```sh
npm install
npm start
```

开发服务器地址为 `http://localhost:8774/`；阿里社区变体位于 `/ali/`。

## 检查与构建

```sh
npm run typecheck
npm test
```

生产文件输出到 `dist/`。静态站点托管应发布此目录；构建会生成根首页和 `ali/index.html`，并保留 404 页面、备案静态文件及所需图片。