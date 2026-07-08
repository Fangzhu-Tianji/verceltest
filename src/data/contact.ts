import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    label: "公司地址",
    value: "上海市浦东新区张江高科技园区碧波路888号美点汇大厦",
  },
  {
    icon: Phone,
    label: "客服电话",
    value: "400-888-6666",
  },
  {
    icon: Mail,
    label: "商务合作",
    value: "business@meidianhui.com",
  },
  {
    icon: Clock,
    label: "工作时间",
    value: "周一至周日 9:00 - 21:00",
  },
];

export const inquiryTypes = [
  "商务合作",
  "媒体采访",
  "加入我们",
  "产品咨询",
  "投诉建议",
  "其他",
];