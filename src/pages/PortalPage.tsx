import { useEffect } from "react";
import { Avatar, Card, List, Tag, Typography } from "antd";
import SiteFooter from "../components/site/SiteFooter";
import SiteHeader from "../components/site/SiteHeader";
import { aliKnowledge, baseKnowledge, communityGroups, topics, type PortalVariant } from "../data/portalContent";

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
          <div className="visual-core"><strong>一起<br />提前退休</strong></div>
        </div>
      </div>
    </section>
  );
}

function InsightSection({ variant }: { variant: PortalVariant }) {
  const knowledge = variant === "ali"
    ? [...baseKnowledge, aliKnowledge]
    : baseKnowledge;

  return (
    <section className="insight section" id="insight" aria-labelledby="insight-title">
      <div className="shell">
        <div className="section-head reveal">
          <div><p className="section-index">内容观点</p><h2 id="insight-title">帮你筛出<br />值得关注的信息</h2></div>
          <p>从股市到房市，从职场到生活，把零散信息变成体系化的判断依据</p>
        </div>
        <Card className="feature-panel insight-panel reveal" role="article" variant="outlined">
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
              <List
                className="knowledge-list"
                split={false}
                dataSource={knowledge}
                renderItem={(item) => (
                  <List.Item className="knowledge-item" key={item.title}>
                    <Avatar className="knowledge-icon" shape="square" size={38} aria-hidden="true">{item.icon}</Avatar>
                    <div>
                      <Typography.Text strong>{item.title}</Typography.Text>
                      <Typography.Text className="knowledge-detail" type="secondary">{item.detail}</Typography.Text>
                    </div>
                    <span className="knowledge-arrow" aria-hidden="true">→</span>
                  </List.Item>
                )}
              />
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
        <div className="service-groups service-panel reveal">
          {communityGroups.map((group) => (
            <Card className="service-group" role="group" aria-label={group.title} key={group.title} variant="outlined">
              <div className="service-heading"><div><Typography.Title level={5}>{group.title}</Typography.Title><Typography.Text type="secondary">{group.subtitle}</Typography.Text></div></div>
              <div className="community-links">
                {group.links.map((link) => <Tag className="community-tag" key={link}><Typography.Text strong>{link}</Typography.Text></Tag>)}
              </div>
            </Card>
          ))}
        </div>
        <p className="risk-note reveal">市场及金融相关内容仅供信息交流与学习参考，不构成任何投资、税务或金融建议</p>
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
          <p>如果你身边有优质的资源或服务，并愿意给校友提供专属福利，我们非常乐意帮忙推广，对接相关人脉资源</p>
        </div>
        <Card className="mutual-action" variant="outlined">
          <Typography.Text className="action-label">资源合作</Typography.Text>
          <Typography.Paragraph>欢迎微信联系： <span className="contact-id">antfin2018</span></Typography.Paragraph>
          <div className="action-line" aria-hidden="true"><span /></div>
          <Typography.Text className="mutual-action-note" type="secondary">大家一起互助互利，早日实现提前退休</Typography.Text>
        </Card>
      </div>
    </section>
  );
}

export default function PortalPage({ variant }: { variant: PortalVariant }) {
  useEffect(() => {
    const reveals = [...document.querySelectorAll<HTMLElement>(".reveal")];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let revealObserver: IntersectionObserver | undefined;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      reveals.forEach((item) => item.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver((entries, activeObserver) => {
        entries.forEach((entry) => {
          if (entry.target.classList.contains("hero-visual")) {
            entry.target.classList.toggle("is-in-view", entry.isIntersecting);
            if (entry.isIntersecting) entry.target.classList.add("is-visible");
            return;
          }
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          activeObserver.unobserve(entry.target);
        });
      }, { threshold: 0.12 });
      reveals.forEach((item) => revealObserver?.observe(item));
    }

    return () => {
      revealObserver?.disconnect();
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">跳到主要内容</a>
      <SiteHeader variant={variant} />
      <main id="main">
        <HeroSection />
        <InsightSection variant={variant} />
        <CommunitySection />
        <MutualAidSection />
      </main>
      <SiteFooter />
    </>
  );
}