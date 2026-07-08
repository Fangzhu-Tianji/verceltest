import HeroSection from "@/components/home/HeroSection";
import Advantages from "@/components/home/Advantages";
import Stats from "@/components/home/Stats";
import Scenarios from "@/components/home/Scenarios";
import Partners from "@/components/home/Partners";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Advantages />
      <Stats />
      <Scenarios />
      <Partners />
    </main>
  );
}