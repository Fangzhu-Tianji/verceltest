import { Link } from "react-router-dom";
import { navItems } from "@/data/navigation";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/70">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="text-2xl font-serif font-bold text-gold-500">
              美点汇
            </span>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              连接线上与线下，让每一次消费都成为美好体验。美点汇致力于打造领先的O2O综合服务平台。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">快速链接</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm hover:text-gold-500 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">联系方式</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold-500 shrink-0" />
                <span>400-888-6666</span>
              </li>
              <li>
                <span className="text-white/50">邮箱：</span>
                business@meidianhui.com
              </li>
              <li>
                <span className="text-white/50">地址：</span>
                上海市浦东新区张江高科技园区碧波路888号
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} 美点汇 All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}