import { useNavigate } from "react-router-dom";
import { User, Mail, LogOut, Shield } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import PageBanner from "@/components/common/PageBanner";

export default function Profile() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/", { replace: true });
  };

  if (!user) return null;

  const displayName =
    user.user_metadata?.display_name || user.email?.split("@")[0] || "用户";
  const memberSince = new Date(user.created_at).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="个人中心"
        subtitle="管理您的账户信息"
      />

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* 用户信息卡片 */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center">
                <span className="text-white text-2xl font-serif font-bold">
                  {displayName.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {displayName}
                </h2>
                <p className="text-gray-500 text-sm">美点汇会员</p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400">邮箱</p>
                  <p className="text-sm text-gray-700">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Shield className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400">账号状态</p>
                  <p className="text-sm text-green-600">
                    {user.email_confirmed_at ? "已验证" : "待验证"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400">注册时间</p>
                  <p className="text-sm text-gray-700">{memberSince}</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleSignOut}
              className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 border border-red-200 text-red-500 rounded-lg hover:bg-red-50 transition-colors font-medium"
            >
              <LogOut className="w-5 h-5" />
              退出登录
            </button>
          </div>

          {/* 功能占位卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "📋", title: "我的订单", desc: "查看订单记录" },
              { icon: "⭐", title: "我的收藏", desc: "收藏的服务" },
              { icon: "⚙️", title: "账号设置", desc: "修改个人信息" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-3 font-medium text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
