function assetUrl(path: string) {
  return `${__APP_BASE_PATH__}${path.replace(/^\/+/, "")}`;
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="footer-left"><a className="footer-wordmark" href="#home">一起提前退休</a></div>
        <div className="footer-center">
          <p>提升认知 · 拉平信息差 · 互助避坑 · 善用金融工具 · 探索更自由人生</p>
          <span className="filing-number">
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">浙ICP备2026071844号-1</a>
          </span>
        </div>
        <div className="footer-qrcode">
          <img src={assetUrl("wxpic.png")} alt="提钱退休笔记 微信公众号二维码" />
        </div>
      </div>
    </footer>
  );
}
