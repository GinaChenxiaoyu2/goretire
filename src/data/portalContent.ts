export type PortalVariant = "home" | "ali";

export const portalContent = {
  brand: {
    name: "一起提前退休",
    caption: "大厂社区",
    symbol: "退"
  },
  navigation: [
    { href: "#home", label: "Slogan" },
    { href: "#insight", label: "内容观点" },
    { href: "#community", label: "子群服务" },
    // { href: "#community-invites", label: "加入社群" },
    { href: "#mutual-aid", label: "资源互助" }
  ],
  topics: [
    { label: "A股行情", accent: false, intro: "市场复盘和 IPO 观察，帮助快速掌握近期值得关注的变化", image: "assets/bots-a-shares.jpg", imageAlt: "近期市场与 IPO 复盘" },
    { label: "黄金行情", accent: false, intro: "追踪贵金属相关的市场动态与重要数据", image: "assets/bots-gold.jpg", imageAlt: "市场数据与行情复盘" },
    { label: "港美股行情", accent: false, intro: "关注港美股市场动态与新股信息", image: "assets/bots-hk-us-share.jpg", imageAlt: "港股新股市场观察" },
    { label: "汇率", accent: false, intro: "汇率变化与跨境生活相关信息整理", image: "assets/bots-exchange-rate.jpg", imageAlt: "跨境市场信息整理" },
    { label: "热点事件", accent: false, intro: "把近期事件脉络梳理清楚，再看它可能带来的影响", image: "assets/bots-hot-event.jpg", imageAlt: "近期科技行业热点" },
    { label: "大V持仓", accent: false, intro: "汇总公开持仓变化，作为继续查证的线索", image: "assets/bots-big-v.jpg", imageAlt: "公开市场信息复盘" },
    { label: "打新日历", accent: false, intro: "整理新股申购时间与相关公开信息", image: "assets/bots-calendar.jpg", imageAlt: "港股新股日历" },
    { label: "财报日历", accent: false, intro: "提前关注财报披露安排与公司动态", image: "assets/bots-financial-report.jpg", imageAlt: "财报与市场信息复盘" },
    { label: "AI 日报", accent: false, intro: "AI 产品、行业与 Agent 权限边界的每日精选", image: "assets/bots-ai-daily.jpg", imageAlt: "AI Agent 权限边界专题" },
    { label: "二手房价格推送", accent: false, intro: "按城市和片区追踪公开房价变化", image: "assets/bots-second-hand-house-price.jpg", imageAlt: "公开市场数据参考图" }
  ],
  knowledge: {
    shared: [
      { icon: "⌁", title: "房产拐点知识库", detail: "周期观察 · 城市数据 · 决策框架", url: "https://alidocs.dingtalk.com/i/nodes/amweZ92PV6yogvAwTgXmqnk9WxEKBD6p" },
      { icon: "✦", title: "AI 每日日报", detail: "产品动态 · 行业趋势 · 实用工具", url: "https://alidocs.dingtalk.com/i/nodes/amweZ92PV6yogvAwTga3zezGWxEKBD6p" }
    ],
    ali: { icon: "⊟", title: "离职员工 SOP", detail: "离职准备 · 交接清单 · 离职后衔接", url: "https://alidocs.dingtalk.com/i/nodes/lyQod3RxJKvLO3RpI4rj0EpqVkb4Mw9r" }
  },
  communityGroups: [
    {
      title: "每日交流",
      subtitle: "一起聊市场，也聊变化",
      links: [
        { label: "A股交流", qrImage: "assets/ali-community-qr.png", qrAlt: "A股交流社群二维码" },
        { label: "港美股交流", qrImage: "assets/ali-community-qr.png", qrAlt: "港美股交流社群二维码" },
        { label: "AI 交流", qrImage: "assets/ali-community-qr.png", qrAlt: "AI 交流社群二维码" }
      ]
    },
    {
      title: "金融工具",
      subtitle: "理解工具，理性做选择",
      links: [
        { label: "银行咨询", qrImage: "assets/ali-community-qr.png", qrAlt: "银行咨询社群二维码" },
        { label: "融资服务", qrImage: "assets/ali-community-qr.png", qrAlt: "融资服务社群二维码" },
        { label: "节税专区", qrImage: "assets/ali-community-qr.png", qrAlt: "节税专区社群二维码" },
        { label: "香港港险", qrImage: "assets/ali-community-qr.png", qrAlt: "香港港险社群二维码" }
      ]
    },
    {
      title: "工作生活",
      subtitle: "让校友关系产生真实价值",
      links: [
        { label: "校友租房", qrImage: "assets/ali-community-qr.png", qrAlt: "校友租房社群二维码" },
        { label: "招聘内推", qrImage: "assets/ali-community-qr.png", qrAlt: "招聘内推社群二维码" },
        { label: "香港身份 DIY", qrImage: "assets/ali-community-qr.png", qrAlt: "香港身份 DIY 社群二维码" },
        { label: "别墅轰趴", qrImage: "assets/ali-community-qr.png", qrAlt: "别墅轰趴社群二维码" },
        { label: "育儿交流", qrImage: "assets/ali-community-qr.png", qrAlt: "育儿交流社群二维码" }
      ]
    }
  ],
  footer: {
    tagline: "提升认知 · 拉平信息差 · 互助避坑 · 善用金融工具 · 探索更自由人生",
    qrCodes: [
      {
        label: "扫码加入总群",
        image: "assets/ali-community-qr.png",
        alt: "一起提前退休总群二维码",
        notes: [
          "在职/离职校友均可钉钉申请入群，已有6000+阿里校友加入",
          "阿里钉/蚂蚁钉申请可快速审批，个人钉申请需备注阿里身份信息"
        ]
      },
      { label: "关注我们", image: "wxpic.png", alt: "提钱退休笔记微信公众号二维码" }
    ],
    // followTitle: "关注我们",
    filing: { label: "浙ICP备2026071844号-1", url: "https://beian.miit.gov.cn/" }
  }
} as const;
