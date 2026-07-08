import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import ScrollReveal from "@/components/common/ScrollReveal";
import { companyIntro, milestones, cultureValues } from "@/data/about";

export default function About() {
  return (
    <main>
      <PageBanner title="关于我们" subtitle="了解美点汇的故事与愿景" />

      {/* Company Intro */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <ScrollReveal className="flex-1">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-800 mb-6">
                {companyIntro.title}
              </h2>
              <p className="text-gray-500 leading-relaxed whitespace-pre-line">
                {companyIntro.description}
              </p>
            </ScrollReveal>
            <ScrollReveal className="flex-1">
              <img
                src={companyIntro.image}
                alt="美点汇总部"
                className="w-full rounded-2xl shadow-lg"
                loading="lazy"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle title="发展历程" subtitle="一步一个脚印，见证美点汇的成长" />
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gold-500/30" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={index}>
                  <div
                    className={`relative flex flex-col md:flex-row gap-6 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold-500 border-4 border-gray-50 z-10" />
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                      <div className="pl-10 md:pl-0">
                        <span className="text-3xl font-serif font-bold text-gold-500">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg font-bold text-navy-800 mt-1 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    {/* Spacer for opposite side */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto">
          <SectionTitle title="企业文化" subtitle="我们的核心价值观，引领每一步前行" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureValues.map((item, index) => (
              <ScrollReveal key={index}>
                <div className="group p-8 rounded-2xl border border-gray-100 hover:border-gold-500/30 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 rounded-xl bg-navy-800 text-gold-500 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-500">
                    <item.icon size={22} />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-navy-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle title="团队风采" subtitle="一群充满热情与创造力的人" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <ScrollReveal key={i}>
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-gray-200">
                  <img
                    src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional+team+member+portrait+in+modern+office,+corporate+style,+clean+background,+blue+and+gold+accents,+professional+headshot+style+${i}&image_size=portrait_4_3`}
                    alt={`团队成员 ${i}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}