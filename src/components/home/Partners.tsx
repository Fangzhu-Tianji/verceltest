import { partners } from "@/data/home";

export default function Partners() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto text-center mb-10">
        <h3 className="text-lg font-medium text-gray-400">合作伙伴</h3>
      </div>
      <div className="relative">
        <div className="flex animate-[scroll_30s_linear_infinite]">
          <div className="flex gap-16 shrink-0">
            {partners.map((partner, index) => (
              <span
                key={index}
                className="text-xl font-serif font-bold text-gray-300 hover:text-gold-500 transition-colors duration-300 cursor-default"
              >
                {partner.name}
              </span>
            ))}
          </div>
          <div className="flex gap-16 shrink-0">
            {partners.map((partner, index) => (
              <span
                key={index}
                className="text-xl font-serif font-bold text-gray-300 hover:text-gold-500 transition-colors duration-300 cursor-default"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}