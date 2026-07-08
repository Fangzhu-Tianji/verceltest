import { Target, Eye, Heart, Shield, Leaf, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface CultureValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const companyIntro = {
  title: "关于美点汇",
  subtitle: "让每一次消费都成为美好体验",
  description:
    "美点汇成立于2018年，是一家专注于 O2O 领域的综合服务平台。我们致力于通过技术创新，连接线上便捷购物与线下真实体验，为消费者打造一站式品质生活解决方案。\n\n经过多年的发展，美点汇已在全国300多个城市建立服务网络，与超过5000家优质商家达成合作，日订单量突破200万，累计服务用户超过1000万。",
  image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern+corporate+office+headquarters+building+exterior,+glass+facade,+blue+sky+reflection,+professional+architecture,+clean+minimal+design&image_size=landscape_16_9",
};

export const milestones: Milestone[] = [
  {
    year: "2018",
    title: "公司成立",
    description: "美点汇在上海正式成立，确立O2O综合服务平台定位，获得天使轮融资",
  },
  {
    year: "2019",
    title: "业务拓展",
    description: "完成A轮融资，业务覆盖全国50个城市，合作商家突破500家",
  },
  {
    year: "2020",
    title: "快速成长",
    description: "上线智能物流调度系统，实现同城2小时极速达，日订单量突破50万",
  },
  {
    year: "2021",
    title: "生态布局",
    description: "完成B轮融资，线下体验门店突破100家，构建线上线下一体化生态",
  },
  {
    year: "2022",
    title: "技术升级",
    description: "推出AI智能推荐引擎，上线会员成长体系，用户满意度大幅提升",
  },
  {
    year: "2024",
    title: "行业领先",
    description: "覆盖全国300+城市，合作商家5000+，日订单量突破200万，服务用户超1000万",
  },
];

export const cultureValues: CultureValue[] = [
  {
    icon: Target,
    title: "用户至上",
    description: "一切以用户需求为核心，持续优化产品与服务体验",
  },
  {
    icon: Eye,
    title: "创新驱动",
    description: "以技术创新引领行业发展，不断探索O2O新模式",
  },
  {
    icon: Heart,
    title: "品质为本",
    description: "严格把控商品与服务品质，让用户买得放心、用得安心",
  },
  {
    icon: Shield,
    title: "诚信经营",
    description: "坚守商业道德，与合作伙伴共建透明、公平的生态系统",
  },
  {
    icon: Leaf,
    title: "绿色发展",
    description: "践行绿色环保理念，推动可持续消费与低碳物流",
  },
  {
    icon: Zap,
    title: "高效执行",
    description: "快速响应市场变化，以敏捷高效的执行力保持竞争优势",
  },
];