import { useEffect, useState } from "react";
import { Avatar, Card, Menu, Tag, Typography } from "antd";

const topics = [
  { label: "A股行情", accent: true },
  { label: "黄金行情", accent: true },
  { label: "港美股行情" },
  { label: "汇率" },
  { label: "热点事件" },
  { label: "大V持仓" },
  { label: "打新日历" },
  { label: "财报日历" },
  { label: "AI 日报", accent: true },
  { label: "二手房价格推送" }
];

const baseKnowledge = [
  { icon: "⌁", title: "房产拐点知识库", detail: "周期观察 · 城市数据 · 决策框架" },
  { icon: "✦", title: "AI 每日日报", detail: "产品动态 · 行业趋势 · 实用工具" }
];

const communityGroups = [
  {
    title: "每日交流",
    subtitle: "一起聊市场，也聊变化",
    links: ["A股交流", "港美股交流", "AI 交流"]
  },
  {
    title: "金融工具",
    subtitle: "理解工具，理性做选择",
    links: ["银行咨询", "融资服务", "节税专区", "香港港险"]
  },
  {
    title: "工作生活",
    subtitle: "让校友关系产生真实价值",
    links: ["校友租房", "招聘内推", "香港身份 DIY", "别墅轰趴"]
  }
];

const navigation = [
  { href: "#home", label: "Slogan" },
  { href: "#insight", label: "内容观点" },
  { href: "#community", label: "社群服务" },
  { href: "#mutual-aid", label: "资源互助" }
];

function SiteHeader({ isAliPage, activeSection, onNavigate }: {
  isAliPage: boolean;
  activeSection: string;
  onNavigate: (key: string) => void;
}) {
  return (
    <header className="site-header" data-header>
      <div className="shell header-inner">
        <a
          className="nav-brand"
          href={isAliPage ? "../index.html" : "#home"}
          aria-label={`一起提前退休 大厂社区，${isAliPage ? "回到主页" : "回到页面顶部"}`}
        >
          <span className="brand-badge" aria-hidden="true">
            <span className="badge-core"><span className="badge-text">GO<br />RETIRE</span></span>
          </span>
          <strong>一起提前退休</strong><span>大厂社区</span>
        </a>
        <Menu
          className="top-nav"
          aria-label="主要导航"
          mode="horizontal"
          selectedKeys={[activeSection]}
          items={navigation.map((item) => ({ key: item.href, label: <a href={item.href}>{item.label}</a> }))}
          onClick={({ key }) => onNavigate(key)}
        />
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero section" id="home" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="shell hero-grid">
        <div className="hero-copy reveal">
          <Typography.Title id="hero-title" level={1}>
            <span className="headline-line"><span className="headline-prefix">致力于</span><b>拉平信息差、</b><b>提升认知、</b></span>
            <span className="headline-line"><b>互助避坑、</b><b>善用金融工具，</b></span>
            <em>探索更自由人生</em>
          </Typography.Title>
        </div>
        <div className="hero-visual reveal" aria-label="信息、认知、互助与工具共同通向提前退休">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <span className="orbit-label label-info">INFO <b>信息</b></span>
          <span className="orbit-label label-insight">INSIGHT <b>认知</b></span>
          <span className="orbit-label label-mutual">MUTUAL <b>互助</b></span>
          <span className="orbit-label label-tools">TOOLS <b>工具</b></span>
          <div className="visual-core"><strong>GO<br />RETIRE</strong></div>
        </div>
      </div>
    </section>
  );
}

function InsightSection({ isAliPage }: { isAliPage: boolean }) {
  const knowledge = isAliPage
    ? [...baseKnowledge, { icon: "⊟", title: "离职员工 SOP", detail: "离职准备 · 交接清单 · 离职后衔接" }]
    : baseKnowledge;

  return (
    <section className="insight section" id="insight" aria-labelledby="insight-title">
      <div className="shell">
        <div className="section-head reveal">
          <div><p className="section-index">内容观点</p><h2 id="insight-title">帮你筛出<br />值得关注的信息</h2></div>
          <p>从股市到房市，从职场到生活，把零散信息变成体系化的判断依据</p>
        </div>
        <Card className="feature-panel insight-panel reveal" role="article" bordered>
          <div className="insight-body">
            <div className="panel-block">
              <div className="block-title"><Typography.Text strong>每日推送</Typography.Text></div>
              <div className="topic-cloud">
                {topics.map((topic) => (
                  <Tag className={`topic${topic.accent ? " topic-accent" : ""}`} key={topic.label}>
                    {topic.label}
                  </Tag>
                ))}
              </div>
            </div>
            <div className="panel-block knowledge-block">
              <div className="block-title"><Typography.Text strong>知识库</Typography.Text></div>
              <div className="knowledge-list" role="list">
                {knowledge.map((item) => (
                  <Card className="knowledge-item" key={item.title} size="small" role="listitem">
                    <Avatar className="knowledge-icon" shape="square" size={38} aria-hidden="true">{item.icon}</Avatar>
                    <div>
                      <Typography.Text strong>{item.title}</Typography.Text>
                      <Typography.Text className="knowledge-detail" type="secondary">{item.detail}</Typography.Text>
                    </div>
                    <span className="knowledge-arrow" aria-hidden="true">→</span>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className="community section" id="community" aria-labelledby="community-title">
      <div className="shell">
        <div className="section-head reveal">
          <div><p className="section-index">社群服务</p><Typography.Title id="community-title" level={2}>找到同频的人<br />找到能帮上忙的人</Typography.Title></div>
          <Typography.Paragraph>在投资、金融工具、工作生活的细分圈子里，让信息交流都变成真实的连接</Typography.Paragraph>
        </div>
        <Card className="feature-panel service-panel reveal" role="article" bordered>
          <div className="service-groups">
            {communityGroups.map((group) => (
              <Card className="service-group" role="group" aria-label={group.title} key={group.title} bordered={false}>
                <div className="service-heading"><div><Typography.Title level={5}>{group.title}</Typography.Title><Typography.Text type="secondary">{group.subtitle}</Typography.Text></div></div>
                <div className="community-links">
                  {group.links.map((link) => <Tag className="community-tag" key={link}><Typography.Text strong>{link}</Typography.Text></Tag>)}
                </div>
              </Card>
            ))}
          </div>
        </Card>
        <p className="risk-note reveal">市场及金融相关内容仅供信息交流与学习参考，不构成任何投资、税务或金融建议。</p>
      </div>
    </section>
  );
}

function MutualAidSection() {
  return (
    <section className="mutual-aid section" id="mutual-aid" aria-labelledby="mutual-title">
      <div className="shell mutual-card reveal">
        <div className="mutual-copy">
          <p className="section-index section-index-light">资源互助</p>
          <h2 id="mutual-title">把好资源<br />带给更多校友</h2>
          <p>如果你身边有优质的资源或服务，并愿意给校友提供专属福利，我们非常乐意帮忙推广，对接相关人脉资源。</p>
        </div>
        <Card className="mutual-action" bordered>
          <Typography.Text className="action-label">资源合作</Typography.Text>
          <Typography.Paragraph>欢迎wx联系 <span className="contact-id">antfin2018</span></Typography.Paragraph>
          <div className="action-line" aria-hidden="true"><span /></div>
          <Typography.Text className="mutual-action-note" type="secondary">大家一起互助互利，早日实现提前退休。</Typography.Text>
        </Card>
      </div>
    </section>
  );
}

function SiteFooter({ isAliPage }: { isAliPage: boolean }) {
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
          <img src={isAliPage ? "../wxpic.png" : "wxpic.png"} alt="提钱退休笔记 微信公众号二维码" />
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const isAliPage = /(?:^|\/)ali\/?$/.test(window.location.pathname);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const reveals = [...document.querySelectorAll<HTMLElement>(".reveal")];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let revealObserver: IntersectionObserver | undefined;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      reveals.forEach((item) => item.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver((entries, activeObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          activeObserver.unobserve(entry.target);
        });
      }, { threshold: 0.12 });
      reveals.forEach((item) => revealObserver?.observe(item));
    }

    const links = [...document.querySelectorAll<HTMLAnchorElement>(".top-nav a")];
    const sections = links.map((link) => document.querySelector<HTMLElement>(link.getAttribute("href") || "")).filter((section): section is HTMLElement => Boolean(section));
    let ticking = false;

    const updateActiveNav = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      let activeIndex = 0;
      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top + scrollY;
        const sectionBottom = sectionTop + section.getBoundingClientRect().height;
        if (scrollY + viewportHeight * 0.3 >= sectionTop && scrollY < sectionBottom) activeIndex = index;
      });
      setActiveSection(links[activeIndex]?.getAttribute("href") || "#home");
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(updateActiveNav);
      ticking = true;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateActiveNav();

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver?.disconnect();
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">跳到主要内容</a>
      <SiteHeader isAliPage={isAliPage} activeSection={activeSection} onNavigate={setActiveSection} />
      <main id="main">
        <HeroSection />
        <InsightSection isAliPage={isAliPage} />
        <CommunitySection />
        <MutualAidSection />
      </main>
      <SiteFooter isAliPage={isAliPage} />
    </>
  );
}