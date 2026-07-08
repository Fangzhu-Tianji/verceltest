import type { LucideIcon } from "lucide-react";
import { Globe, Store, Truck, Users } from "lucide-react";

export interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Scenario {
  title: string;
  description: string;
  image: string;
  reverse: boolean;
}

export interface Partner {
  name: string;
}

export const heroData = {
  title: "连接线上与线下",
  subtitle: "美点汇 O2O 综合服务平台，让每一次消费都成为美好体验",
  ctaText: "了解我们的服务",
  ctaLink: "/services",
  secondaryText: "联系我们",
  secondaryLink: "/contact",
};

export const advantages: Advantage[] = [
  {
    icon: Globe,
    title: "线上流量",
    description: "覆盖全渠道的线上流量入口，精准触达目标用户，助力商家快速获客与品牌曝光",
  },
  {
    icon: Store,
    title: "线下体验",
    description: "全国布局线下体验门店，让消费者亲身感受产品品质，打通消费最后一公里",
  },
  {
    icon: Truck,
    title: "高效配送",
    description: "智能物流调度系统，实现同城极速达，为消费者提供便捷高效的配送服务",
  },
];

export const stats: Stat[] = [
  { value: 5000, suffix: "+", label: "合作商家" },
  { value: 200, suffix: "万+", label: "日订单量" },
  { value: 300, suffix: "+", label: "覆盖城市" },
  { value: 1000, suffix: "万+", label: "服务用户" },
];

export const scenarios: Scenario[] = [
  {
    title: "线上商城 · 随时随地选购",
    description: "汇聚海量优质商品，涵盖美食、美妆、数码、服饰等品类，支持在线下单、实时追踪，让购物变得简单高效。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern+ecommerce+online+shopping+website+interface+on+laptop+and+phone+screen,+clean+minimal+design,+blue+and+gold+accents,+professional+corporate+style&image_size=landscape_16_9",
    reverse: false,
  },
  {
    title: "线下门店 · 真实体验更放心",
    description: "全国数百家线下体验门店，专业导购一对一服务，所见即所得，线上预约到店体验，打造无缝消费闭环。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern+retail+store+interior+with+clean+design,+warm+lighting,+customers+browsing+products,+professional+atmosphere,+blue+and+gold+color+scheme&image_size=landscape_16_9",
    reverse: true,
  },
  {
    title: "会员体系 · 专属权益享不停",
    description: "完善的会员成长体系，积分通兑、专属折扣、生日礼遇，让每一位用户都能享受到超值的消费体验。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=elegant+membership+loyalty+program+concept,+gold+card+on+dark+blue+background,+premium+and+exclusive+feeling,+luxury+style&image_size=landscape_16_9",
    reverse: false,
  },
];

export const partners: Partner[] = [
  { name: "星巴克" },
  { name: "海底捞" },
  { name: "华为" },
  { name: "小米" },
  { name: "兰蔻" },
  { name: "耐克" },
  { name: "京东" },
  { name: "美团" },
];