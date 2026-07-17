import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  LogIn,
  ArrowRight,
  Shield,
  Sparkles,
  Headphones,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import PageBanner from "@/components/common/PageBanner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const { signIn, user, initialized } = useAuth();
  const navigate = useNavigate();

  // 已登录直接跳转
  useEffect(() => {
    if (initialized && user) {
      navigate("/profile", { replace: true });
    }
  }, [user, initialized, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("请填写邮箱和密码");
      return;
    }

    setSubmitting(true);
    try {
      await signIn(email, password);
      navigate("/profile", { replace: true });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "登录失败，请稍后重试";
      // 翻译常见英文错误
      if (message.includes("Invalid login credentials")) {
        setError("邮箱或密码错误");
      } else if (message.includes("Email not confirmed")) {
        setError("邮箱尚未验证，请查收验证邮件");
      } else {
        setError(message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[28rem] h-[28rem] bg-gold-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-navy-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-gold-200/15 rounded-full blur-3xl" />
      </div>

      <PageBanner
        title="登录"
        subtitle="欢迎回到美点汇平台"
      />

      <div className="container mx-auto px-4 -mt-16 relative z-10 pb-20">
        <div className="max-w-md mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100">
            {/* 切换标签 */}
            <div className="flex border-b border-gray-200 mb-6">
              <div className="flex-1 text-center pb-3 border-b-2 border-gold-500">
                <span className="text-gold-500 font-semibold">登录</span>
              </div>
              <Link
                to="/register"
                className="flex-1 text-center pb-3 text-gray-400 hover:text-gray-600 font-medium transition-colors"
              >
                注册
              </Link>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg p-3 mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  邮箱地址
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="请输入邮箱"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  密码
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPwd ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="请输入密码"
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd(!showPwd)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPwd ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full btn-primary flex items-center justify-center gap-2 !py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    登录中...
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    登录
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              还没有账号？{" "}
              <Link
                to="/register"
                className="text-gold-500 hover:text-gold-600 font-medium inline-flex items-center gap-1"
              >
                立即注册 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 底部特性 */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-100 shadow-sm">
              <div className="w-10 h-10 mx-auto rounded-full bg-gold-50 flex items-center justify-center text-gold-600 mb-2">
                <Shield className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-gray-700">安全可靠</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-100 shadow-sm">
              <div className="w-10 h-10 mx-auto rounded-full bg-gold-50 flex items-center justify-center text-gold-600 mb-2">
                <Sparkles className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-gray-700">专业服务</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-100 shadow-sm">
              <div className="w-10 h-10 mx-auto rounded-full bg-gold-50 flex items-center justify-center text-gold-600 mb-2">
                <Headphones className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-gray-700">即时响应</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
