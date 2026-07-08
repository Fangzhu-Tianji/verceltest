import { ShoppingCart, MapPin, Truck, Crown, Gift, Shield, Clock, Headphones } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SolutionTab {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
}

export const serviceCards: ServiceCard[] = [
  {
    icon: ShoppingCart,
    title: "线上商城",
    description: "多品类综合电商平台，覆盖美食、美妆、数码、服饰、母婴等热门品类，支持个性化推荐与智能搜索",
    features: ["海量商品库", "智能推荐引擎", "一键下单", "实时订单追踪"],
  },
  {
    icon: MapPin,
    title: "线下门店",
    description: "全国布局体验门店网络，提供真实商品展示与试用，专业导购一对一服务，线上预约到店体验",
    features: ["全国门店覆盖", "线上预约到店", "专业导购服务", "沉浸式体验"],
  },
  {
    icon: Truck,
    title: "配送物流",
    description: "自建智能物流体系，支持同城极速达、预约配送、冷链运输等多种配送方式，保障商品安全送达",
    features: ["同城极速达", "智能路径规划", "冷链配送", "实时物流追踪"],
  },
  {
    icon: Crown,
    title: "会员体系",
    description: "完善的会员成长体系与积分商城，提供专属折扣、优先配送、生日礼遇等尊享权益",
    features: ["积分通兑", "专属折扣", "优先配送", "生日礼遇"],
  },
];

export const serviceFeatures: ServiceFeature[] = [
  {
    icon: Gift,
    title: "全品类覆盖",
    description: "从美食到数码，从美妆到服饰，满足消费者多元化需求",
  },
  {
    icon: Shield,
    title: "品质保障",
    description: "严格供应商审核机制，正品保障，假一赔十",
  },
  {
    icon: Clock,
    title: "高效响应",
    description: "7×24小时客服支持，2小时极速配送，售后无忧",
  },
  {
    icon: Headphones,
    title: "专属服务",
    description: "VIP客户专属顾问一对一服务，个性化需求定制",
  },
];

export const solutionTabs: SolutionTab[] = [
  {
    id: "food",
    label: "餐饮美食",
    title: "餐饮O2O解决方案",
    description: "为餐饮商家提供线上开店、外卖配送、到店核销等一站式解决方案。通过智能推荐算法将优质餐厅精准推送给目标用户，配合高效的配送网络，实现从下单到送达的极速体验。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern+restaurant+food+delivery+o2o+concept,+online+ordering+on+smartphone+with+food+packages,+clean+professional+style,+blue+and+gold+accents&image_size=landscape_16_9",
  },
  {
    id: "beauty",
    label: "美妆护肤",
    title: "美妆O2O解决方案",
    description: "为美妆品牌提供线上线下融合的全渠道零售方案。线上商城展示商品详情与用户评价，线下门店提供试用体验与专业咨询，打通会员数据实现全域营销。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern+beauty+cosmetics+store+with+elegant+display,+skincare+products,+professional+lighting,+clean+minimal+design&image_size=landscape_16_9",
  },
  {
    id: "digital",
    label: "数码电子",
    title: "数码O2O解决方案",
    description: "为数码品牌提供线上展示、线下体验、即时配送的完整服务链路。支持新品首发预订、以旧换新、延保服务等增值业务，提升用户全生命周期价值。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern+electronics+digital+store+with+smartphones+and+gadgets+display,+clean+tech+style,+professional+lighting,+blue+and+silver+accents&image_size=landscape_16_9",
  },
  {
    id: "fashion",
    label: "服饰穿搭",
    title: "服饰O2O解决方案",
    description: "为服饰品牌提供线上选购、线下试穿、门店自提的灵活购物体验。支持虚拟试衣、搭配推荐等智能功能，结合会员体系实现精准营销与复购提升。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern+fashion+clothing+retail+store+interior,+elegant+display+racks,+warm+lighting,+professional+style&image_size=landscape_16_9",
  },
];