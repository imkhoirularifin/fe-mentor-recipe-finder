import CtaSection from "@/components/home/cta-section";
import FeatureSection from "@/components/home/feature-section";
import Footer from "@/components/home/footer";
import HeroSection from "@/components/home/hero-section";
import RealLifeSection from "@/components/home/real-life-section";
import Navbar from "@/components/shared/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="relative">
        {/* Path background */}
        <Image
          src={"/images/pattern-squiggle-1.svg"}
          alt={"background pattern"}
          width={1546}
          height={1264}
          className="pointer-events-none absolute top-[350px] left-1/2 -z-10 -translate-x-1/2 rotate-[11.92%] opacity-40 select-none md:top-[200px]"
        />
        <HeroSection />
        <FeatureSection />
        <RealLifeSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
