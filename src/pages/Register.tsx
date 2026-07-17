import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  UserPlus,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import PageBanner from "@/components/common/PageBanner";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const { signUp, user, initialized } = useAuth();
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

    if (!name || !email || !password) {
      setError("请填写所有必填字段");
      return;
    }
    if (password.length < 6) {
      setError("密码至少需要6个字符");
      return;
    }
    if (password !== confirmPwd) {
      setError("两次密码输入不一致");
      return;
    }

    setSubmitting(true);
    try {
      await signUp(email, password, name);
      setSuccess(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "注册失败，请稍后重试";
      if (message.includes("already registered")) {
        setError("该邮箱已被注册");
      } else {
        setError(message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="注册"
        subtitle="加入美点汇，开启智慧商业之旅"
        bgColor="bg-navy-800"
      />

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* 切换标签 */}
            <div className="flex border-b border-gray-200 mb-6">
              <Link
                to="/login"
                className="flex-1 text-center pb-3 text-gray-400 hover:text-gray-600 font-medium transition-colors"
              >
                登录
              </Link>
              <div className="flex-1 text-center pb-3 border-b-2 border-gold-500">
                <span className="text-gold-500 font-semibold">注册</span>
              </div>
            </div>

            {success ? (
              /* 注册成功提示 */
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  注册成功！
                </h3>
                <p className="text-gray-500 mb-6">
                  我们已向 {email}{" "}
                  发送了一封验证邮件，请点击邮件中的链接完成验证。
                </p>
                <Link
                  to="/login"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  前往登录 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg p-3 mb-4">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      姓名
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="请输入您的姓名"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors text-sm"
                    />
                  </div>

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
                        placeholder="至少6个字符"
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      确认密码
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="password"
                        value={confirmPwd}
                        onChange={(e) => setConfirmPwd(e.target.value)}
                        placeholder="请再次输入密码"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors text-sm"
                      />
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
                        注册中...
                      </>
                    ) : (
                      <>
                        <UserPlus className="w-5 h-5" />
                        注册
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                  已有账号？{" "}
                  <Link
                    to="/login"
                    className="text-gold-500 hover:text-gold-600 font-medium inline-flex items-center gap-1"
                  >
                    立即登录 <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
