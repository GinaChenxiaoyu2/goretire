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
            <Typography.Title id="community-invites-title" level={2}>加入社群</Typography.Title>
          </div>
          <Typography.Title className="invite-follow-title" level={3}>{portalContent.footer.followTitle}</Typography.Title>
          {/* <Typography.Paragraph>选择适合你的入口，扫码加入一起提前退休社区</Typography.Paragraph> */}
        </div>
        <div className="community-invites-grid">
          {portalContent.footer.qrCodes.map((qr) => (
            <article className="community-invite-card" key={qr.label}>
              <img src={assetUrl(qr.image)} alt={qr.alt} />
              <div className="invite-copy">
                <Typography.Text strong>{qr.label}</Typography.Text>
                {"notes" in qr && qr.notes ? (
                  <ul className="invite-notes">
                    {qr.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
