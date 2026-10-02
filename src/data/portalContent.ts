export const topics = [
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

export const baseKnowledge = [
  { icon: "⌁", title: "房产拐点知识库", detail: "周期观察 · 城市数据 · 决策框架" },
  { icon: "✦", title: "AI 每日日报", detail: "产品动态 · 行业趋势 · 实用工具" }
];

export const aliKnowledge = {
  icon: "⊟",
  title: "离职员工 SOP",
  detail: "离职准备 · 交接清单 · 离职后衔接"
};

export const communityGroups = [
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

export const navigation = [
  { href: "#home", label: "Slogan" },
  { href: "#insight", label: "内容观点" },
  { href: "#community", label: "社群服务" },
  { href: "#mutual-aid", label: "资源互助" }
];

export type PortalVariant = "home" | "ali";
