interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-800 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-500 max-w-2xl ${centered ? "mx-auto" : ""}`}>{subtitle}</p>
      )}
      <div className={`mt-4 h-0.5 w-16 bg-gold-500 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
