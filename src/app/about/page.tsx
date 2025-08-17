import OurMissionSection from "@/app/about/_components/our-mission-section";
import Navbar from "@/components/shared/navbar";
import WhyWeExistSection from "./_components/why-we-exist-section";
import OurFoodPhilosophySection from "./_components/our-food-section";
import BeyondThePlateSection from "./_components/beyond-the-plate";
import CtaSection from "@/components/shared/cta-section";
import Footer from "@/components/shared/footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <main>
        <OurMissionSection />
        <WhyWeExistSection />
        <OurFoodPhilosophySection />
        <BeyondThePlateSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
