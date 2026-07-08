import { scenarios } from "@/data/home";
import SectionTitle from "@/components/common/SectionTitle";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function Scenarios() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle
          title="业务场景"
          subtitle="覆盖多场景的O2O解决方案，让线上与线下无缝衔接"
        />
        <div className="space-y-20">
          {scenarios.map((scenario, index) => (
            <ScrollReveal key={index}>
              <div
                className={`flex flex-col ${
                  scenario.reverse ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-10 md:gap-16`}
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold text-navy-800 mb-4">
                    {scenario.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-lg">
                    {scenario.description}
                  </p>
                </div>
                <div className="flex-1">
                  <img
                    src={scenario.image}
                    alt={scenario.title}
                    className="w-full rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}