import CtaSection from "@/components/home/cta-section";
import FeatureSection from "@/components/home/feature-section";
import Footer from "@/components/home/footer";
import HeroSection from "@/components/home/hero-section";
import RealLifeSection from "@/components/home/real-life-section";
import Navbar from "@/components/shared/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <RealLifeSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
