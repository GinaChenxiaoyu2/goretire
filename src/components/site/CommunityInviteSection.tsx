import { Image, Typography } from "antd";
import { portalContent } from "../../data/portalContent";
import assetUrl from "../../utils/assetUrl";

export default function CommunityInviteSection() {
  return (
    <section className="community-invites section" id="community-invites" aria-labelledby="community-invites-title">
      <div className="shell">
        <div className="community-invites-heading">
          <div>
            {/* <p className="section-index">加入社群</p> */}
            <Typography.Title id="community-invites-title" level={2}>从交流开始，找到同频的人</Typography.Title>
          </div>
          {/* <Typography.Paragraph>选择适合你的入口，扫码加入一起提前退休社区</Typography.Paragraph> */}
        </div>
        <div className="community-invites-grid">
          {portalContent.footer.qrCodes.map((qr) => (
            <article className="community-invite-card" key={qr.label}>
              <img src={assetUrl(qr.image)} alt={qr.alt} />
              <Typography.Text strong>{qr.label}</Typography.Text>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
