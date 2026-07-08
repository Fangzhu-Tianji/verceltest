import { useState } from "react";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import ScrollReveal from "@/components/common/ScrollReveal";
import { serviceCards, serviceFeatures, solutionTabs } from "@/data/services";
import { ChevronDown } from "lucide-react";

export default function Services() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(solutionTabs[0].id);

  const activeSolution = solutionTabs.find((t) => t.id === activeTab)!;

  return (
    <main>
      <PageBanner title="产品服务" subtitle="一站式O2O解决方案，赋能商业新生态" />

      {/* Service Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto">
          <SectionTitle title="业务板块" subtitle="四大核心业务，构建完整的O2O服务体系" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceCards.map((card, index) => {
              const isExpanded = expandedCard === index;
              return (
                <ScrollReveal key={index}>
                  <div
                    className={`group rounded-2xl border border-gray-100 p-8 cursor-pointer transition-all duration-300 ${
                      isExpanded
                        ? "shadow-xl border-gold-500/30 bg-white"
                        : "hover:shadow-md hover:border-gold-500/20"
                    }`}
                    onClick={() =>
                      setExpandedCard(isExpanded ? null : index)
                    }
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-navy-800 text-gold-500 flex items-center justify-center shrink-0 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-500">
                        <card.icon size={26} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-serif font-bold text-navy-800">
                            {card.title}
                          </h3>
                          <ChevronDown
                            size={20}
                            className={`text-gray-400 transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        <p className="text-gray-500 mt-2 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isExpanded
                          ? "max-h-60 mt-6 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-wrap gap-2">
                        {card.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-navy-800/5 text-navy-800 text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle title="服务特色" subtitle="我们的差异化优势，让服务更有温度" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <ScrollReveal key={index}>
                <div className="text-center group">
                  <div className="w-14 h-14 rounded-full bg-white border border-gray-100 text-gold-500 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500 group-hover:text-white group-hover:border-gold-500 transition-all duration-300">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-navy-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Tabs */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto">
          <SectionTitle title="行业解决方案" subtitle="针对不同行业的定制化O2O方案" />
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {solutionTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-navy-800 text-white shadow-md"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Content */}
          <ScrollReveal key={activeTab}>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-bold text-navy-800 mb-4">
                  {activeSolution.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-lg">
                  {activeSolution.description}
                </p>
              </div>
              <div className="flex-1">
                <img
                  src={activeSolution.image}
                  alt={activeSolution.title}
                  className="w-full rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}