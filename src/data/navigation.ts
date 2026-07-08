export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { label: "首页", path: "/" },
  { label: "关于我们", path: "/about" },
  { label: "产品服务", path: "/services" },
  { label: "联系我们", path: "/contact" },
];