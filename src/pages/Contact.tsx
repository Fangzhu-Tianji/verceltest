import { useState } from "react";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import ScrollReveal from "@/components/common/ScrollReveal";
import { contactInfo, inquiryTypes } from "@/data/contact";
import { supabase } from "@/lib/supabase";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import MapView from "@/components/common/MapView";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const { error: submitError } = await supabase
      .from("contact_messages")
      .insert({
        name: formData.name,
        phone: formData.phone,
        type: formData.type || "",
        message: formData.message,
      });

    if (submitError) {
      setError("提交失败，请稍后重试或通过电话联系我们。");
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main>
      <PageBanner title="联系我们" subtitle="期待与您的合作，随时联系我们" />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Form */}
            <div className="flex-1">
              <SectionTitle
                title="在线咨询"
                subtitle="填写以下表单，我们将尽快与您取得联系"
                centered={false}
              />
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle
                    size={48}
                    className="text-green-500 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-serif font-bold text-navy-800 mb-2">
                    提交成功
                  </h3>
                  <p className="text-gray-500">
                    感谢您的咨询，我们将在1个工作日内与您联系。
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        type: "",
                        message: "",
                      });
                    }}
                    className="btn-primary mt-6"
                  >
                    继续咨询
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-navy-800 mb-1.5"
                      >
                        姓名 *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={submitting}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors disabled:bg-gray-50"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-navy-800 mb-1.5"
                      >
                        电话 *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={submitting}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors disabled:bg-gray-50"
                        placeholder="请输入您的电话"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="type"
                      className="block text-sm font-medium text-navy-800 mb-1.5"
                    >
                      咨询类型
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      disabled={submitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors bg-white disabled:bg-gray-50"
                    >
                      <option value="">请选择咨询类型</option>
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy-800 mb-1.5"
                    >
                      留言内容 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={submitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors resize-none disabled:bg-gray-50"
                      placeholder="请输入您想咨询的内容..."
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      <AlertCircle size={18} />
                      <span className="text-sm">{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        提交中...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        提交咨询
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="lg:w-96">
              <SectionTitle
                title="联系我们"
                subtitle="也可以通过以下方式联系我们"
                centered={false}
              />
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ScrollReveal key={index}>
                    <div className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-gray-100 hover:border-gold-200 hover:shadow-md transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-full bg-gold-50 text-gold-600 flex items-center justify-center shrink-0 shadow-sm border border-gold-100 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                        <info.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">
                          {info.label}
                        </p>
                        <p className="text-base font-medium text-navy-800 leading-relaxed">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* 地图 */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-64 lg:h-72">
                <MapView
                  lat={31.2057}
                  lng={121.6026}
                  name="美点汇"
                  address="上海市浦东新区张江高科技园区"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}