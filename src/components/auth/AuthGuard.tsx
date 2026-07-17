import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { Loader2 } from "lucide-react";

interface Props {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: Props) {
  const { user, loading, initialized } = useAuthStore();

  // 正在检查登录状态
  if (!initialized || loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 text-gold-500 animate-spin" />
      </div>
    );
  }

  // 未登录，重定向到登录页
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
