import CtaSection from "@/components/shared/cta-section";
import FeatureSection from "@/app/_components/feature-section";
import Footer from "@/components/shared/footer";
import HeroSection from "@/app/_components/hero-section";
import RealLifeSection from "@/app/_components/real-life-section";
import Navbar from "@/components/shared/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="relative">
        {/* Path background */}
        <Image
          src={"/patterns/pattern-squiggle-1.svg"}
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
