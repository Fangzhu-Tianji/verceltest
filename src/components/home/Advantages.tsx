import { advantages } from "@/data/home";
import SectionTitle from "@/components/common/SectionTitle";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function Advantages() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto">
        <SectionTitle
          title="核心优势"
          subtitle="以技术驱动，构建完整的O2O服务生态"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <ScrollReveal key={index}>
              <div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-gold-500/30 hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-navy-800 text-gold-500 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-500">
                  <item.icon size={26} />
                </div>
                <h3 className="text-xl font-serif font-bold text-navy-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}