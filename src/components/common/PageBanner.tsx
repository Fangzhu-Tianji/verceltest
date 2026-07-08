interface PageBannerProps {
  title: string;
  subtitle?: string;
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <div className="relative bg-navy-800 pt-32 pb-20 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-800" />
      <div className="relative container mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/60 text-lg max-w-xl mx-auto">{subtitle}</p>
        )}
      </div>
    </div>
  );
}